import { useEffect, useState } from "react"
import { motion } from "framer-motion"

import ModuleCard from "../components/ModuleCard"
import {nodeCourse , allNodeLessons} from "../lib/nodejs"

const NodePage = () => {

    const STORAGE_KEY = "node-progress"

  const [completed, setCompleted] = useState<string[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : []
  })

  const totalLessons = allNodeLessons.length
  const complete = completed.length

  const progress =
    (complete / totalLessons) * 100

  function toggleLessons(id :string) {

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
  }, [completed])

  return (
    <div className="min-h-screen bg-black text-white px-4 py-12">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}

        className="
          w-full
          lg:w-[70%]
          mx-auto
        "
      >

        {/* HEADER */}
        <div
          className="rounded-3xl border border-neutral-800 bg-neutral-950 p-8 mb-8 "
        >

          <p className="uppercase tracking-[0.2em] text-sm text-neutral-500 mb-3">
            Course Progress
          </p>

          <h1 className="text-5xl font-bold mb-4">
            Node.js Backend Engineering
          </h1>

          <p className="text-neutral-400 text-lg leading-relaxed">
            Build scalable APIs and production backend systems
          </p>

          {/* PROGRESS */}
          <div className="mt-8">

            <div className="flex items-center justify-between mb-3">

              <h2 className="text-lg font-semibold">
                Progress
              </h2>

              <span className="text-neutral-400">
                {complete}/{totalLessons} lessons
              </span>

            </div>

            <div className="w-full h-3 bg-neutral-900 rounded-full overflow-hidden">

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}

                transition={{
                  duration: 0.8
                }}

                className=" h-full rounded-full bg-linear-to-r  from-purple-500 to-cyan-500  "
              />

            </div>

            <p className="mt-3 text-neutral-300 text-sm">
              {Math.round(progress)}% completed
            </p>

          </div>

        </div>

        {/* MODULES */}
        <div className="space-y-5">

          {nodeCourse.modules.map((module, index) => (

            <motion.div
              key={module.id}

              initial={{
                opacity: 0,
                y: 20
              }}

              animate={{
                opacity: 1,
                y: 0
              }}

              transition={{
                delay: index * 0.1
              }}
            >

              <ModuleCard
                module={module}
                completed={completed}
                toggleLesson={toggleLessons}
              />

            </motion.div>

          ))}

        </div>

      </motion.div>

    </div>
  )
}

export default NodePage