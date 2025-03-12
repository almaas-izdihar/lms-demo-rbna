export interface Course {
  id: number
  title: string
  description: string
  materials: string[]
  price: number
  image: string
}

export const courses: Course[] = [
  {
    id: 1,
    title: "Introduction to Web Development",
    description: "Learn the fundamentals of web development including HTML, CSS, and JavaScript.",
    materials: ["12 Video Lessons", "5 Coding Exercises", "Project Templates"],
    price: 499000,
    image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 2,
    title: "React.js Masterclass",
    description: "Master React.js and build modern web applications with advanced concepts.",
    materials: ["18 Video Lessons", "8 Real Projects", "State Management Guide"],
    price: 799000,
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 3,
    title: "UI/UX Design Principles",
    description: "Learn the fundamentals of UI/UX design and create beautiful user interfaces.",
    materials: ["15 Video Lessons", "Design Resources Kit", "Figma Tutorials"],
    price: 599000,
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
  }
];