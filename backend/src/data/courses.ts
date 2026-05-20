export const courses = [
  {
    id: "javascript",
    title: "Advanced JavaScript",
    slug:"javascript",
    subtitle: "Master the language behind the web",
    description: "Deep dive into JavaScript internals and modern patterns",
    tags: ["Closures", "Async", "DOM", "V8"],
    modules: [
      {
        id: "jsm1",
        title: "JavaScript Fundamentals",
        description: "Build a strong foundation of core JavaScript concepts.",
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
        description: "Understand how JavaScript works under the hood.",
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
        description: "Learn how asynchronous programming works in JavaScript.",
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
        description: "Optimize applications and understand browser internals.",
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
    ]
  },
  {
    id: "nodejs",
    slug:"node",
    title: "Node.js Backend Engineering",
    subtitle: "Build scalable APIs and production backend systems",
    description: "Learn backend development using Node.js, Express, databases, and authentication.",
    tags: ["Express", "MongoDB", "JWT", "REST API"],
    modules: [
      {
        id: "nm1",
        title: "Node.js Fundamentals",
        description: "Understand the runtime and backend fundamentals.",
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
        description: "Build REST APIs using Express.js.",
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
        description: "Persist data securely and manage users.",
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
        description: "Prepare backend applications for production.",
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
    ]
  }
];