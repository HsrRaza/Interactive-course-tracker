import { motion } from "framer-motion"
import { courses } from "../lib/courseCardData"
import CourseCard from "../components/CourseCards"


const HomePage = () => {

  return (
    <div className="min-h-screen  text-white px-6 py-10 overflow-hidden bg-linear-to-b from-black via-neutral-950 to-black" >

      {/* HERO SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mb-12"
      >

        <p className="text-sm uppercase tracking-[0.2em] text-neutral-500 mb-3">
          Learning Dashboard
        </p>

        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Explore <span className="text-purple-400">Courses</span>
        </h1>

        <p className="text-neutral-400 mt-5 text-lg max-w-2xl leading-relaxed">
          Track your progress and master modern technologies with interactive learning paths.
        </p>

      </motion.div>

      {/* COURSE GRID */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15
            }
          }
        }}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
      >

        {courses.map((course) => (
          <motion.div
            key={course.id}
            variants={{
              hidden: {
                opacity: 0,
                y: 30
              },

              visible: {
                opacity: 1,
                y: 0
              }
            }}

            transition={{
              duration: 0.5
            }}
          >
            <CourseCard course={course} />
          </motion.div>
        ))}

      </motion.div>

    </div>
  )
}

export default HomePage