export type Lesson = {
  id: string;
  title: string;
  duration: number; // minutes
};

export type Module = {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
};

export const course = {
  title: "Modern Web Development",
  subtitle: "From fundamentals to production-ready apps",
  description: "Build dynamic UIs",
  tags: ["Hooks", "Redux", "Next"],
  modules: [
    {
      id: "m1",
      title: "Foundations",
      description: "Core concepts every developer should know.",
      lessons: [
        { id: "m1l1", title: "How the web works", duration: 12 },
        { id: "m1l2", title: "HTML semantics & accessibility", duration: 18 },
        { id: "m1l3", title: "CSS layout fundamentals", duration: 25 },
        { id: "m1l4", title: "JavaScript essentials", duration: 30 },
      ],
    },
    {
      id: "m2",
      title: "React & TypeScript",
      description: "Build typed, componentized UIs.",
      lessons: [
        { id: "m2l1", title: "Thinking in components", duration: 15 },
        { id: "m2l2", title: "Hooks deep dive", duration: 35 },
        { id: "m2l3", title: "TypeScript with React", duration: 28 },
        { id: "m2l4", title: "State management patterns", duration: 22 },
        { id: "m2l5", title: "Routing & data loading", duration: 20 },
      ],
    },
    {
      id: "m3",
      title: "Backend & APIs",
      description: "Persist data and expose secure endpoints.",
      lessons: [
        { id: "m3l1", title: "REST vs RPC vs GraphQL", duration: 18 },
        { id: "m3l2", title: "Databases & schema design", duration: 32 },
        { id: "m3l3", title: "Authentication & sessions", duration: 26 },
        { id: "m3l4", title: "Caching strategies", duration: 20 },
      ],
    },
    {
      id: "m4",
      title: "Ship It",
      description: "Deploy, observe, and iterate.",
      lessons: [
        { id: "m4l1", title: "CI/CD pipelines", duration: 22 },
        { id: "m4l2", title: "Monitoring & logs", duration: 16 },
        { id: "m4l3", title: "Performance budgets", duration: 24 },
      ],
    },
  ] satisfies Module[],
};

export const allLessons = course.modules.flatMap((m) => m.lessons);