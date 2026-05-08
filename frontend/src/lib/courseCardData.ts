import type { CourseType } from "../types/types"



export const courses:CourseType[] = [
  {
    id: 1,
    title: "React.js Mastery",
    description: "Build scalable frontend apps using React and Next.js.",
    tags: ["Hooks", "Redux", "Next.js"],
    lessons: 48,
    icon: "react",
    path:"/react"
  },

  {
    id: 2,
    title: "Advanced JavaScript",
    description: "Master closures, async JS, browser internals and V8.",
    tags: ["Closures", "DOM", "Async"],
    lessons: 36,
    icon: "javascript",
    path:"/javascript"
  },

  {
    id: 3,
    title: "Node.js Backend",
    description: "Build APIs, auth systems and scalable backend services.",
    tags: ["Express", "MongoDB", "JWT"],
    lessons: 52,
    icon: "node",
    path:"/node"
  }
]