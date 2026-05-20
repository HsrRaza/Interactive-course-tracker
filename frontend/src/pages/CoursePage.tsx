import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ModuleCard from "../components/ModuleCard"


type Lesson = {
    id: string,
    title: string,
    duration: number
}

type Module = {
    id: string,
    title: string,
    description: string,
    lessons: Lesson[]
}

type Course = {
    id: string,
    title: string,
    subtitle: string,
    tags: string[],
    modules: Module[]
}

const CoursePage = () => {

    const { slug } = useParams()

    const [course, setCourse] = useState<Course | null>(null)

    const [completed, setCompleted] = useState<string[]>(() => {
        const saved = localStorage.getItem(STORAGE_KEY)
        return saved ? JSON.parse(saved) : []
    })

    const [loading, setLoading] = useState<boolean>(true)

    const STORAGE_KEY = `course-progress-${slug ?? "unknown"}`

    useEffect(() => {
        async function fetchCourse() {
            try {
                setLoading(true)

                const response = await fetch(`http://localhost:5000/api/courses/${slug}`)
                const data = await response.json()


                setCourse(data);


            } catch (error) {
                console.error("Error fetching course:", error)
            } finally {
                setLoading(false)
            }
        }
        fetchCourse()
    }, [slug])




    function toggleLessons(id: string) {

        if (completed.includes(id)) {

            setCompleted(
                completed.filter((item) => item !== id)
            )

        } else {

            setCompleted([...completed, id])

        }
    }

    useEffect(() => {
        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(completed)
        )
    }, [completed, STORAGE_KEY])


    if (loading) {
        return <h1>loading ..</h1>
    }

    if (!course) {
        return <h1>Course not found</h1>
    }

    const allLessons = course.modules.flatMap(module => module.lessons)

    const totalLessons = allLessons.length

    const complete = completed.length


    const progress = totalLessons === 0 ? 0 : (complete / totalLessons) * 100


    return (
        <div>
        <h1>{course.title}</h1>
      <p>{course.subtitle}</p>

      <p>
        {complete}/{totalLessons} lessons completed
      </p>

      <p>{Math.round(progress)}% completed</p>

      {
        course.modules.map((module) => (
            <ModuleCard
                key={module.id}
                module={module}
                completed={completed}
                toggleLesson={toggleLessons}
            />
        ))
    }
    </div >
  )
}

export default CoursePage