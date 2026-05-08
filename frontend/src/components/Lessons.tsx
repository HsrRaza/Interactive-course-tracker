import {
  FiCheck
} from "react-icons/fi"
import type { LessonType } from "../types/types"

type Props = {
  lesson :LessonType
  completed: boolean
  toggleLesson :(id:string) =>void
}

const Lessons = ({ lesson,completed, toggleLesson } :Props) => {

  return (
    <label
      className="
        flex
        items-center
        justify-between
        gap-4
        p-4
        rounded-2xl
        border
        border-neutral-800
        bg-neutral-900
        hover:border-neutral-700
        transition-all
        cursor-pointer
      "
    >

      <div className="flex items-center gap-4">

        <div
          onClick={() => toggleLesson(lesson.id)}

          className={`
            h-6
            w-6
            rounded-full
            border
            flex
            items-center
            justify-center
            transition-all

            ${
              completed
                ? "bg-linear-to-r from-purple-500 to-cyan-500 border-transparent"
                : "border-neutral-600"
            }
          `}
        >

          {completed && (
            <FiCheck className="text-white text-sm" />
          )}

        </div>

        <div>

          <h2
            className={`
              text-md
              transition-all

              ${
                completed
                  ? "line-through text-neutral-500"
                  : "text-white"
              }
            `}
          >
            {lesson.title}
          </h2>

        </div>

      </div>

      <span className="text-xs text-neutral-500">
        Lesson
      </span>

    </label>
  )
}

export default Lessons