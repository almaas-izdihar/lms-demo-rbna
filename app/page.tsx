import { Input } from "@/components/ui/input"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Users, BarChart, Award, CheckCircle, Laptop, MessageSquare } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Transformasi Pengalaman Belajar Anda
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Our comprehensive learning management system helps you create, deliver, and manage engaging online
                    courses.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="px-8">
                    Start Free Trial
                  </Button>
                  <Button size="lg" variant="outline" className="px-8">
                    View Demo
                  </Button>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>No credit card required</span>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                  width={550}
                  height={550}
                  alt="Elephant in natural habitat"
                  className="rounded-lg object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Everything You Need in One Platform</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our LMS provides all the tools you need to create, deliver, and track online learning.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="p-2 rounded-lg bg-primary/10 w-fit">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="mt-4">Course Creation</CardTitle>
                  <CardDescription>Easily create engaging courses with our intuitive course builder.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Drag-and-drop course builder</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Rich multimedia support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Interactive quizzes and assessments</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="p-2 rounded-lg bg-primary/10 w-fit">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="mt-4">Student Management</CardTitle>
                  <CardDescription>Manage your students and their progress with ease.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Student enrollment and tracking</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Progress monitoring</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Automated notifications</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="p-2 rounded-lg bg-primary/10 w-fit">
                    <BarChart className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="mt-4">Analytics & Reporting</CardTitle>
                  <CardDescription>Get insights into student performance and course effectiveness.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Detailed analytics dashboard</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Custom report generation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Performance tracking</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="p-2 rounded-lg bg-primary/10 w-fit">
                    <Laptop className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="mt-4">Mobile Learning</CardTitle>
                  <CardDescription>Access courses from anywhere, on any device.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Responsive design for all devices</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Offline access to course materials</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Native mobile apps</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="p-2 rounded-lg bg-primary/10 w-fit">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="mt-4">Communication Tools</CardTitle>
                  <CardDescription>
                    Foster collaboration and engagement with built-in communication tools.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Discussion forums</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Live chat and messaging</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Announcement system</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="p-2 rounded-lg bg-primary/10 w-fit">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="mt-4">Certification</CardTitle>
                  <CardDescription>Create and issue certificates upon course completion.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Custom certificate templates</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Automatic certificate generation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Verification system</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            <Image
              src="https://images.unsplash.com/photo-1559253664-ca249d4608c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
              width={550}
              height={310}
              alt="Baby elephant with mother"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            />
          </div>
        </section>

        {/* How It Works */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How EduLearn Works</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get started with our platform in just a few simple steps.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-3xl font-bold text-primary-foreground">
                  1
                </div>
                <h3 className="text-xl font-bold">Create Your Account</h3>
                <p className="text-muted-foreground">Sign up for a free trial and set up your organization profile.</p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-3xl font-bold text-primary-foreground">
                  2
                </div>
                <h3 className="text-xl font-bold">Build Your Courses</h3>
                <p className="text-muted-foreground">
                  Use our intuitive course builder to create engaging learning content.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-3xl font-bold text-primary-foreground">
                  3
                </div>
                <h3 className="text-xl font-bold">Invite Your Learners</h3>
                <p className="text-muted-foreground">
                  Enroll students and start tracking their progress and performance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Trusted by Educators Worldwide</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  See what our customers have to say about EduLearn.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full overflow-hidden h-12 w-12 border">
                      <Image
                        src="https://images.unsplash.com/photo-1581852017103-68ac65514cf7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
                        width={50}
                        height={50}
                        alt="Elephant avatar"
                        className="aspect-square h-full w-full object-cover"
                      />
                    </div>
                    <div className="grid gap-1">
                      <h3 className="font-semibold">Sarah Johnson</h3>
                      <p className="text-sm text-muted-foreground">Director of Training, TechCorp</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-muted-foreground">
                      "EduLearn has transformed how we deliver training to our employees. The platform is intuitive,
                      feature-rich, and our team loves using it. The analytics have helped us improve our course content
                      and delivery methods."
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full overflow-hidden h-12 w-12 border">
                      <Image
                        src="https://images.unsplash.com/photo-1575286368486-a9bd023a3d1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
                        width={50}
                        height={50}
                        alt="Elephant avatar"
                        className="aspect-square h-full w-full object-cover"
                      />
                    </div>
                    <div className="grid gap-1">
                      <h3 className="font-semibold">Michael Chen</h3>
                      <p className="text-sm text-muted-foreground">Professor, University of Innovation</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-muted-foreground">
                      "As an educator, I've tried many LMS platforms, but EduLearn stands out for its ease of use and
                      comprehensive features. My students are more engaged, and I can easily track their progress and
                      provide timely feedback."
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full overflow-hidden h-12 w-12 border">
                      <Image
                        src="https://images.unsplash.com/photo-1564760055775-d63b17a55c44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
                        width={50}
                        height={50}
                        alt="Elephant avatar"
                        className="aspect-square h-full w-full object-cover"
                      />
                    </div>
                    <div className="grid gap-1">
                      <h3 className="font-semibold">Emily Rodriguez</h3>
                      <p className="text-sm text-muted-foreground">Training Manager, Global Solutions</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-muted-foreground">
                      "The customer support at EduLearn is exceptional. Whenever we've had questions or needed
                      assistance, the team has been responsive and helpful. The platform has helped us scale our
                      training programs globally."
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full overflow-hidden h-12 w-12 border">
                      <Image
                        src="https://images.unsplash.com/photo-1534692499281-57d0f101789b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
                        width={50}
                        height={50}
                        alt="Elephant avatar"
                        className="aspect-square h-full w-full object-cover"
                      />
                    </div>
                    <div className="grid gap-1">
                      <h3 className="font-semibold">David Patel</h3>
                      <p className="text-sm text-muted-foreground">CEO, EdTech Innovations</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-muted-foreground">
                      "We've seen a 40% increase in course completion rates since switching to EduLearn. The platform's
                      engagement features and mobile accessibility have made a significant difference in how our clients
                      interact with our training materials."
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Pricing
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Choose the Right Plan for You</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Flexible pricing options to meet your needs. All plans include a 14-day free trial.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>Starter</CardTitle>
                  <CardDescription>Perfect for small teams and individuals</CardDescription>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-4xl font-bold">$29</span>
                    <span className="ml-1 text-muted-foreground">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Up to 100 active users</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>10 courses</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Basic analytics</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Email support</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Start Free Trial</Button>
                </CardFooter>
              </Card>
              <Card className="flex flex-col border-primary">
                <CardHeader>
                  <div className="px-4 py-1 text-xs font-bold bg-primary text-primary-foreground rounded-full w-fit mx-auto mb-2">
                    MOST POPULAR
                  </div>
                  <CardTitle>Professional</CardTitle>
                  <CardDescription>Ideal for growing organizations</CardDescription>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-4xl font-bold">$79</span>
                    <span className="ml-1 text-muted-foreground">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Up to 500 active users</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Unlimited courses</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Advanced analytics</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Priority support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Custom branding</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Start Free Trial</Button>
                </CardFooter>
              </Card>
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>Enterprise</CardTitle>
                  <CardDescription>For large organizations with advanced needs</CardDescription>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-4xl font-bold">$199</span>
                    <span className="ml-1 text-muted-foreground">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Unlimited active users</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Unlimited courses</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Advanced analytics & reporting</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>24/7 dedicated support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Custom integrations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Single sign-on (SSO)</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Contact Sales</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Frequently Asked Questions</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Find answers to common questions about our platform.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl space-y-4 py-12">
              <Tabs defaultValue="general" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="general">General</TabsTrigger>
                  <TabsTrigger value="pricing">Pricing</TabsTrigger>
                  <TabsTrigger value="technical">Technical</TabsTrigger>
                </TabsList>
                <TabsContent value="general" className="space-y-4 mt-4">
                  <div className="rounded-lg border p-4">
                    <h3 className="text-lg font-semibold">What is EduLearn?</h3>
                    <p className="text-muted-foreground mt-1">
                      EduLearn is a comprehensive learning management system that helps organizations create, deliver,
                      and manage online courses and training programs.
                    </p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h3 className="text-lg font-semibold">How easy is it to get started?</h3>
                    <p className="text-muted-foreground mt-1">
                      Getting started with EduLearn is simple. Sign up for a free trial, set up your organization
                      profile, and start creating courses. Our intuitive interface makes it easy to get up and running
                      quickly.
                    </p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h3 className="text-lg font-semibold">Do you offer onboarding support?</h3>
                    <p className="text-muted-foreground mt-1">
                      Yes, all plans include onboarding support to help you get started. Enterprise plans include
                      dedicated onboarding specialists to ensure a smooth transition.
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="pricing" className="space-y-4 mt-4">
                  <div className="rounded-lg border p-4">
                    <h3 className="text-lg font-semibold">Do you offer a free trial?</h3>
                    <p className="text-muted-foreground mt-1">
                      Yes, we offer a 14-day free trial on all our plans. No credit card is required to start your
                      trial, and you'll have full access to all features included in your selected plan.
                    </p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h3 className="text-lg font-semibold">Can I change plans later?</h3>
                    <p className="text-muted-foreground mt-1">
                      You can upgrade or downgrade your plan at any time. When upgrading, the new features will be
                      immediately available. If you downgrade, changes will take effect at the start of your next
                      billing cycle.
                    </p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h3 className="text-lg font-semibold">Do you offer discounts for educational institutions?</h3>
                    <p className="text-muted-foreground mt-1">
                      Yes, we offer special pricing for educational institutions. Please contact our sales team for more
                      information about our education discounts.
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="technical" className="space-y-4 mt-4">
                  <div className="rounded-lg border p-4">
                    <h3 className="text-lg font-semibold">Is EduLearn cloud-based?</h3>
                    <p className="text-muted-foreground mt-1">
                      Yes, EduLearn is a cloud-based solution, which means you can access it from anywhere with an
                      internet connection. There's no need to install any software.
                    </p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h3 className="text-lg font-semibold">What integrations do you support?</h3>
                    <p className="text-muted-foreground mt-1">
                      EduLearn integrates with a wide range of tools including Zoom, Microsoft Teams, Google Workspace,
                      Slack, and many more. Enterprise plans include custom integrations.
                    </p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h3 className="text-lg font-semibold">How secure is my data?</h3>
                    <p className="text-muted-foreground mt-1">
                      Security is our top priority. We use industry-standard encryption, regular security audits, and
                      comply with major data protection regulations including GDPR and CCPA.
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Ready to Transform Your Learning Experience?
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Start your 14-day free trial today. No credit card required.
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <form className="flex flex-col gap-2 sm:flex-row">
                  <Input type="email" placeholder="Enter your email" className="max-w-lg flex-1" />
                  <Button type="submit">Get Started</Button>
                </form>
                <p className="text-xs text-muted-foreground">
                  By signing up, you agree to our{" "}
                  <Link href="#" className="underline underline-offset-2">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="#" className="underline underline-offset-2">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t bg-background py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6">
          <div className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold">EduLearn</span>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="#" className="text-sm hover:underline underline-offset-4">
              Terms
            </Link>
            <Link href="#" className="text-sm hover:underline underline-offset-4">
              Privacy
            </Link>
            <Link href="#" className="text-sm hover:underline underline-offset-4">
              Cookies
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm hover:underline underline-offset-4">
              Contact
            </Link>
            <Link href="#" className="text-sm hover:underline underline-offset-4">
              Support
            </Link>
          </div>
        </div>
        <div className="container mt-4 text-center text-sm text-muted-foreground px-4 md:px-6">
          &copy; {new Date().getFullYear()} EduLearn. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

