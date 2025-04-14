"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"

interface Course {
  id: number
  title: string
  description: string
  materials: string[]
  price: number
  image_url: string
}

export default function CheckoutPage() {
  // Menggunakan useParams hook untuk mendapatkan params
  const params = useParams()
  const courseId = params.id as string
  
  const [course, setCourse] = useState<Course | null>(null)
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: ""
  })
  
  const router = useRouter()

  // Fetch course data
  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await fetch(`/api/course/${courseId}`)
        if (!res.ok) {
          throw new Error('Failed to fetch course')
        }
        const data = await res.json()
        setCourse(data)
      } catch (error) {
        console.error('Error fetching course:', error)
        toast({
          title: "Error",
          description: "Failed to load course information",
          variant: "destructive"
        })
      } finally {
        setLoading(false)
      }
    }
    
    if (courseId) {
      fetchCourse()
    }
  }, [courseId])

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({
      ...prev,
      [id]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!course) return
    
    // Validate form
    if (!formData.firstName || !formData.email || !formData.phone) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields",
        variant: "destructive"
      })
      return
    }
    
    setSubmitting(true)
    
    try {
      // Create invoice
      const response = await fetch('/api/payment/create-invoice', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          courseData: course,
          customerData: formData
        }),
      })
      
      const data = await response.json()
      
      if (!data.success) {
        throw new Error(data.error || 'Failed to create payment')
      }
      
      // Redirect to Xendit invoice URL
      window.location.href = data.invoiceUrl
    } catch (error) {
      console.error('Payment error:', error)
      toast({
        title: "Payment Error",
        description: "There was a problem setting up your payment. Please try again.",
        variant: "destructive"
      })
    } finally {
      setSubmitting(false)
    }
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p>Loading checkout information...</p>
      </div>
    )
  }

  if (!course) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p>Course not found</p>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <div className="container px-4 py-8 md:px-6">
          <h1 className="text-2xl font-bold mb-6">Checkout</h1>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-8 lg:grid-cols-3">
              {/* Checkout Form - Left Column */}
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input 
                          id="firstName" 
                          placeholder="Enter your first name" 
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input 
                          id="lastName" 
                          placeholder="Enter your last name" 
                          value={formData.lastName}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="Enter your email" 
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input 
                        id="phone" 
                        placeholder="Enter your phone number" 
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </CardContent>
                </Card>
                
                <Button 
                  className="w-full" 
                  size="lg" 
                  type="submit"
                  disabled={submitting}
                >
                  {submitting ? "Processing..." : "Proceed to Payment"}
                </Button>
              </div>

              {/* Order Summary - Right Column */}
              <div className="lg:col-span-1">
                <Card className="sticky top-24">
                  <CardHeader>
                    <CardTitle>Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="relative h-20 w-20 overflow-hidden rounded-md">
                        <Image
                          src={course.image_url}
                          alt={course.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium">{course.title}</h3>
                        <p className="text-sm text-muted-foreground">Online Course</p>
                      </div>
                    </div>
                    
                    <div className="border-t pt-4">
                      <div className="flex justify-between py-2">
                        <span>Subtotal</span>
                        <span>{formatPrice(course.price)}</span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span>Tax</span>
                        <span>{formatPrice(course.price * 0.1)}</span>
                      </div>
                      <div className="flex justify-between py-2 font-bold">
                        <span>Total</span>
                        <span>{formatPrice(course.price * 1.1)}</span>
                      </div>
                    </div>
                    
                    <div className="text-sm text-muted-foreground">
                      <p>By completing your purchase you agree to our <Link href="#" className="text-primary underline">Terms of Service</Link>.</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}