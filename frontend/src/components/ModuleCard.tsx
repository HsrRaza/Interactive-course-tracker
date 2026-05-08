import { useState } from "react"

import {
  FiChevronDown
} from "react-icons/fi"

import Lessons from "./Lessons"

const ModuleCard = ({
  module,
  completed,
  toggleLesson
}) => {

  const [open, setOpen] = useState(true)

  const done =
    module.lessons.filter((lesson) =>
      completed.includes(lesson.id)
    ).length

  return (
    <div
      className="
        rounded-3xl
        border
        border-neutral-800
        bg-neutral-950
        overflow-hidden
      "
    >

      {/* HEADER */}
      <div
        onClick={() => setOpen(!open)}

        className="
          p-6
          cursor-pointer
          flex
          items-center
          justify-between
          hover:bg-neutral-900
          transition-all
        "
      >

        <div>

          <h1 className="text-2xl font-bold mb-2">
            {module.title}
          </h1>

          <p className="text-sm text-neutral-400">
            {done}/{module.lessons.length} completed
          </p>

        </div>

        <div
          className={`
            text-2xl
            transition-transform
            duration-300
            ${open ? "rotate-180" : ""}
          `}
        >
          <FiChevronDown />
        </div>

      </div>

      {/* LESSONS */}
      {open && (

        <div className="px-6 pb-6 space-y-3">

          {module.lessons.map((lesson) => (

            <Lessons
              key={lesson.id}
              lesson={lesson}
              completed={completed.includes(lesson.id)}
              toggleLesson={toggleLesson}
            />

          ))}

        </div>

      )}

    </div>
  )
}

export default ModuleCard