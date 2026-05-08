export type LessonType = {
  id: string
  title: string
}

export type ModuleType = {
  id: string
  title: string
  lessons: LessonType[]
}

export type CourseType = {
  id: number
  title: string
  description: string
  tags: string[]
  lessons: number
  icon: string
  path: string
  modules?: ModuleType[]
}