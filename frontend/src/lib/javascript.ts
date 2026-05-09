export type Lesson = {
  id: string;
  title: string;
  duration: number;
};

export type Module = {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
};

export const javascriptCourse = {
  title: "Advanced JavaScript",
  subtitle: "Master the language behind the web",
  description: "Deep dive into JavaScript internals and modern patterns",
  tags: ["Closures", "Async", "DOM", "V8"],

  modules: [
    {
      id: "jsm1",

      title: "JavaScript Fundamentals",

      description:
        "Build a strong foundation of core JavaScript concepts.",

      lessons: [
        {
          id: "jsm1l1",
          title: "Variables & Data Types",
          duration: 15
        },

        {
          id: "jsm1l2",
          title: "Functions & Scope",
          duration: 22
        },

        {
          id: "jsm1l3",
          title: "Arrays & Objects",
          duration: 18
        },

        {
          id: "jsm1l4",
          title: "Loops & Iteration",
          duration: 14
        }
      ]
    },

    {
      id: "jsm2",

      title: "Advanced JavaScript Concepts",

      description:
        "Understand how JavaScript works under the hood.",

      lessons: [
        {
          id: "jsm2l1",
          title: "Closures Explained",
          duration: 28
        },

        {
          id: "jsm2l2",
          title: "Execution Context & Call Stack",
          duration: 30
        },

        {
          id: "jsm2l3",
          title: "Hoisting & Temporal Dead Zone",
          duration: 20
        },

        {
          id: "jsm2l4",
          title: "this Keyword Deep Dive",
          duration: 24
        },

        {
          id: "jsm2l5",
          title: "Prototypes & Inheritance",
          duration: 32
        }
      ]
    },

    {
      id: "jsm3",

      title: "Async JavaScript",

      description:
        "Learn how asynchronous programming works in JavaScript.",

      lessons: [
        {
          id: "jsm3l1",
          title: "Callbacks & Callback Hell",
          duration: 16
        },

        {
          id: "jsm3l2",
          title: "Promises",
          duration: 25
        },

        {
          id: "jsm3l3",
          title: "Async/Await",
          duration: 18
        },

        {
          id: "jsm3l4",
          title: "Event Loop Explained",
          duration: 35
        },

        {
          id: "jsm3l5",
          title: "Fetch API & API Calls",
          duration: 20
        }
      ]
    },

    {
      id: "jsm4",

      title: "Browser & Performance",

      description:
        "Optimize applications and understand browser internals.",

      lessons: [
        {
          id: "jsm4l1",
          title: "DOM Manipulation",
          duration: 22
        },

        {
          id: "jsm4l2",
          title: "Debouncing vs Throttling",
          duration: 18
        },

        {
          id: "jsm4l3",
          title: "Memory Leaks",
          duration: 20
        },

        {
          id: "jsm4l4",
          title: "V8 Engine Basics",
          duration: 26
        }
      ]
    }
  ] satisfies Module[]
};

export const allJavascriptLessons =
  javascriptCourse.modules.flatMap(
    (m) => m.lessons
  );