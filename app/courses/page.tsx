import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen } from "lucide-react"

import { Course, getCourses } from '@/app/api/courses'

export default async function CoursesPage() {
  const courses = await getCourses()
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Courses</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore our wide range of courses designed to help you achieve your learning goals.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-7xl items-start gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {courses.map((course) => (
                <Card key={course.id} className="overflow-hidden">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={course.image_url}
                      alt={course.title}
                      fill
                      className="object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{course.title}</CardTitle>
                    <CardDescription>{course.description}</CardDescription>
                    <div className="mt-4 space-y-2">
                      <h4 className="text-sm font-medium">Course Materials:</h4>
                      <ul className="list-disc pl-4 text-sm text-muted-foreground">
                        {course.materials.map((material, index) => (
                          <li key={index}>{material}</li>
                        ))}
                      </ul>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <p className="text-2xl font-bold text-primary">{formatPrice(course.price)}</p>
                      <Link href={`/courses/${course.id}`}>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}