import {
    FaReact,
    FaNodeJs
} from "react-icons/fa"

import {
    SiJavascript
} from "react-icons/si"

import { Link } from "react-router-dom"
import type { CourseType } from "../types/types"

type Props = {
    course:CourseType
}

const CourseCard = ({ course } : Props) => {

    const icons = {
        react: <FaReact />,
        javascript: <SiJavascript />,
        node: <FaNodeJs />
    }

    return (
        <div
            className=" h-full min-h-80 rounded-3xl border border-neutral-800 bg-neutral-950 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-neutral-700 hover:shadow-2xl hover:shadow-purple-500/10 "
        >

            {/* TOP */}
            <div>

                <div className="flex items-start justify-between mb-6">

                    <div className="flex-1">

                        <h1 className="text-2xl font-bold mb-2 leading-tight">
                            {course.title}
                        </h1>

                        <p className="text-neutral-400 text-sm leading-relaxed">
                            {course.description}
                        </p>

                    </div>

                    <div
                        className=" h-14 w-14 min-w-14 rounded-2xl bg-linear-to-br from-purple-500  to-cyan-500 flex items-center justify-center text-2xl shadow-lg "
                    >
                        {icons[course.icon]}
                    </div>

                </div>

                {/* TAGS */}
                <div className="flex flex-wrap gap-2">

                    {course.tags.map((tag, index) => (
                        <span
                            key={index}
                            className=" px-3 py-1 rounded-full bg-neutral-900 border border-neutral-700 text-sm text-neutral-300  "
                        >
                            {tag}
                        </span>
                    ))}

                </div>

            </div>

            {/* BOTTOM */}
            <div className="flex items-center justify-between border-t border-neutral-800 pt-5 mt-8">

                <div>
                    <p className="text-sm text-neutral-500">
                        Lessons
                    </p>

                    <h2 className="text-2xl font-bold">
                        {course.lessons}
                    </h2>
                </div>



                <Link
                    to={course.path}
                    className=" bg-white  text-black px-5 py-2 rounded-2xl font-semibold hover:scale-105 transition-all "
                >
                    Start →
                </Link>

            </div>

        </div>
    )
}

export default CourseCard