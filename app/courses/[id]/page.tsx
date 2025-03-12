import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface Course {
  id: number
  title: string
  description: string
  materials: string[]
  price: number
  image_url: string
}

interface CourseDetailPageProps {
  params: {
    id: string
  }
}

async function getCourse(id: string): Promise<Course> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/course/${id}`)
  if (!res.ok) {
    throw new Error('Failed to fetch course')
  }
  return res.json()
}

export default async function CourseDetailPage({ params }: CourseDetailPageProps) {
  const course = await getCourse(params.id)

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
        <div className="container px-4 py-8 md:px-6">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Course Content - Left Column */}
            <div className="lg:col-span-2 space-y-6">
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <Image
                  src={course.image_url}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4">
                <h1 className="text-3xl font-bold">{course.title}</h1>
                <p className="text-lg text-muted-foreground">{course.description}</p>
                <div className="space-y-3">
                  <h2 className="text-xl font-semibold">Course Materials</h2>
                  <ul className="list-disc pl-5 space-y-2">
                    {course.materials.map((material, index) => (
                      <li key={index} className="text-muted-foreground">
                        {material}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Checkout Section - Right Column */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardContent className="p-6 space-y-6">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-muted-foreground">Course Price</p>
                    <p className="text-3xl font-bold text-primary">{formatPrice(course.price)}</p>
                  </div>
                  <Link href={`/checkout/${course.id}`} className="w-full">
                    <Button className="w-full" size="lg">
                      Checkout Now
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}