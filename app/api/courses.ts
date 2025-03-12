import { supabase } from '@/lib/supabase'

export interface Course {
  id: number
  title: string
  description: string
  materials: string[]
  price: number
  image_url: string
  created_at: string
  updated_at: string
}

export async function getCourses(): Promise<Course[]> {
  try {
    const { data, error } = await supabase
      .from('courses')
      .select('*')

    if (error) {
      throw error
    }

    return data || []
  } catch (error) {
    console.error('Error fetching courses:', error)
    return []
  }
}