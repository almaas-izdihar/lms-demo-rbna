'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { supabase } from '@/lib/supabase'
import { Course } from '@/app/api/courses'

export default function AdminCoursesPage() {
  const [courses, setCourses] = useState<Course[]>([])
  const [loading, setLoading] = useState(true)
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    materials: '',
    price: '',
    image_url: ''
  })
  const router = useRouter()

  useEffect(() => {
    checkAuth()
    fetchCourses()
  }, [])

  const checkAuth = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      router.push('/login')
    }
  }

  const fetchCourses = async () => {
    try {
      const { data, error } = await supabase
        .from('courses')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error
      setCourses(data || [])
    } catch (error) {
      console.error('Error fetching courses:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleAddCourse = async () => {
    try {
      const materialsArray = formData.materials.split('\n').filter(Boolean)
      const { error } = await supabase
        .from('courses')
        .insert([{
          title: formData.title,
          description: formData.description,
          materials: materialsArray,
          price: parseInt(formData.price),
          image_url: formData.image_url
        }])

      if (error) throw error
      
      setIsAddDialogOpen(false)
      setFormData({
        title: '',
        description: '',
        materials: '',
        price: '',
        image_url: ''
      })
      fetchCourses()
    } catch (error) {
      console.error('Error adding course:', error)
    }
  }

  const handleEditCourse = async () => {
    if (!selectedCourse) return

    try {
      const materialsArray = formData.materials.split('\n').filter(Boolean)
      const { error } = await supabase
        .from('courses')
        .update({
          title: formData.title,
          description: formData.description,
          materials: materialsArray,
          price: parseInt(formData.price),
          image_url: formData.image_url
        })
        .eq('id', selectedCourse.id)

      if (error) throw error

      setIsEditDialogOpen(false)
      setSelectedCourse(null)
      fetchCourses()
    } catch (error) {
      console.error('Error updating course:', error)
    }
  }

  const handleDeleteCourse = async (id: number) => {
    if (!confirm('Are you sure you want to delete this course?')) return

    try {
      const { error } = await supabase
        .from('courses')
        .delete()
        .eq('id', id)

      if (error) throw error
      fetchCourses()
    } catch (error) {
      console.error('Error deleting course:', error)
    }
  }

  const openEditDialog = (course: Course) => {
    setSelectedCourse(course)
    setFormData({
      title: course.title,
      description: course.description,
      materials: course.materials.join('\n'),
      price: course.price.toString(),
      image_url: course.image_url
    })
    setIsEditDialogOpen(true)
  }

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>
  }

  return (
    <div className="container py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Manage Courses</h1>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>Add New Course</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Course</DialogTitle>
              <DialogDescription>
                Fill in the details for the new course.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <Input
                placeholder="Course Title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              />
              <Textarea
                placeholder="Course Description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
              <Textarea
                placeholder="Course Materials (one per line)"
                value={formData.materials}
                onChange={(e) => setFormData({ ...formData, materials: e.target.value })}
              />
              <Input
                type="number"
                placeholder="Price"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              />
              <Input
                placeholder="Image URL"
                value={formData.image_url}
                onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
              />
            </div>
            <DialogFooter>
              <Button onClick={handleAddCourse}>Add Course</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Image</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {courses.map((course) => (
            <TableRow key={course.id}>
              <TableCell>
                <div className="relative w-20 h-20">
                  <Image
                    src={course.image_url}
                    alt={course.title}
                    fill
                    className="object-cover rounded"
                  />
                </div>
              </TableCell>
              <TableCell>{course.title}</TableCell>
              <TableCell className="max-w-xs truncate">{course.description}</TableCell>
              <TableCell>
                {new Intl.NumberFormat('id-ID', {
                  style: 'currency',
                  currency: 'IDR',
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0
                }).format(course.price)}
              </TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => openEditDialog(course)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDeleteCourse(course.id)}
                  >
                    Delete
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Course</DialogTitle>
            <DialogDescription>
              Update the course details.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <Input
              placeholder="Course Title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            />
            <Textarea
              placeholder="Course Description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />
            <Textarea
              placeholder="Course Materials (one per line)"
              value={formData.materials}
              onChange={(e) => setFormData({ ...formData, materials: e.target.value })}
            />
            <Input
              type="number"
              placeholder="Price"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
            />
            <Input
              placeholder="Image URL"
              value={formData.image_url}
              onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
            />
          </div>
          <DialogFooter>
            <Button onClick={handleEditCourse}>Update Course</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}