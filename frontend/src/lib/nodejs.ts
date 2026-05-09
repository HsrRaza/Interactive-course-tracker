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

export const nodeCourse = {
  title: "Node.js Backend Engineering",

  subtitle:
    "Build scalable APIs and production backend systems",

  description:
    "Learn backend development using Node.js, Express, databases, and authentication.",

  tags: [
    "Express",
    "MongoDB",
    "JWT",
    "REST API"
  ],

  modules: [

    {
      id: "nm1",

      title: "Node.js Fundamentals",

      description:
        "Understand the runtime and backend fundamentals.",

      lessons: [

        {
          id: "nm1l1",
          title: "What is Node.js?",
          duration: 14
        },

        {
          id: "nm1l2",
          title: "Node.js Runtime & Event Loop",
          duration: 24
        },

        {
          id: "nm1l3",
          title: "Modules & File System",
          duration: 20
        },

        {
          id: "nm1l4",
          title: "NPM & Package Management",
          duration: 16
        }

      ]
    },

    {
      id: "nm2",

      title: "Express.js & APIs",

      description:
        "Build REST APIs using Express.js.",

      lessons: [

        {
          id: "nm2l1",
          title: "Introduction to Express",
          duration: 18
        },

        {
          id: "nm2l2",
          title: "Routing & Middleware",
          duration: 28
        },

        {
          id: "nm2l3",
          title: "Request & Response Handling",
          duration: 22
        },

        {
          id: "nm2l4",
          title: "Building REST APIs",
          duration: 35
        },

        {
          id: "nm2l5",
          title: "Error Handling",
          duration: 17
        }

      ]
    },

    {
      id: "nm3",

      title: "Databases & Authentication",

      description:
        "Persist data securely and manage users.",

      lessons: [

        {
          id: "nm3l1",
          title: "MongoDB Basics",
          duration: 30
        },

        {
          id: "nm3l2",
          title: "Mongoose ODM",
          duration: 25
        },

        {
          id: "nm3l3",
          title: "Authentication with JWT",
          duration: 32
        },

        {
          id: "nm3l4",
          title: "Password Hashing with bcrypt",
          duration: 18
        },

        {
          id: "nm3l5",
          title: "Protected Routes",
          duration: 20
        }

      ]
    },

    {
      id: "nm4",

      title: "Production & Scaling",

      description:
        "Prepare backend applications for production.",

      lessons: [

        {
          id: "nm4l1",
          title: "Environment Variables",
          duration: 15
        },

        {
          id: "nm4l2",
          title: "Caching with Redis",
          duration: 26
        },

        {
          id: "nm4l3",
          title: "Rate Limiting & Security",
          duration: 22
        },

        {
          id: "nm4l4",
          title: "Deployment with Docker",
          duration: 28
        },

        {
          id: "nm4l5",
          title: "Monitoring & Logging",
          duration: 20
        }

      ]
    }

  ] satisfies Module[]
};

export const allNodeLessons =
  nodeCourse.modules.flatMap(
    (m) => m.lessons
  );