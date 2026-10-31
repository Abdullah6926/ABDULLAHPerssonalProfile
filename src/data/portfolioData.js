
export const PROFILE = {
    name: "Abdullah",
    tagline: "Aerospace Engineering Researcher",
    bio: "An aspiring aerospace researcher with a strong interest in engineering, scientific exploration, and the physics behind flight and space technology. Passionate about understanding complex systems and exploring ideas that push the boundaries of aerospace innovation.",
};

// SKILLS
export const SKILLS_DATA = [
    {
        title: "Python",
        description: "Programming Languages",
        imageUrl: "https://img.icons8.com/?size=96&id=13441&format=png&color=ffffff",
    },
    {
        title: "C / C++",
        description: "Programming Languages",
        imageUrl: "https://img.icons8.com/?size=96&id=40670&format=png&color=ffffff",
    },
    {
        title: "Programming",
        description: "Software Development & Problem Solving",
        imageUrl: "https://img.icons8.com/?size=96&id=108784&format=png&color=ffffff",
    },
    {
        title: "Aerospace Engineering",
        description: "Engineering & Space Technology",
        imageUrl: "",
    },
    {
        title: "Orbital Mechanics",
        description: "Spaceflight & Orbital Dynamics",
        imageUrl: "",
    },
    {
        title: "Scientific Research",
        description: "Research & Investigation",
        imageUrl: "",
    },
    {
        title: "Numerical Simulation",
        description: "Scientific Computing",
        imageUrl: "",
    },
    {
        title: "Technical Writing",
        description: "Research Documentation",
        imageUrl: "",
    },
];

// PROJECTS
export const PROJECTS_DATA = [
    {
        title: "Orbital Decay Simulation",
        description:
            "A collaborative research project by Ahon and Abdullah investigating orbital decay in Low Earth Orbit under varying space-weather conditions.",
        liveUrl: "https://github.com/Atiqxyz/Orbital-Decay-Simulation-code-v1",
        imageUrl: "",
    },
    {
        title: "LLM Stack Report Bundle",
        description:
            "An independent technical project exploring large language models, Ollama, MCP, AI agents, validation systems, and computational tools.",
        liveUrl: "https://github.com/Abdullah6926/LLM-Stack-Report-Bundle-.",
        imageUrl: "",
    },
];

// TIMELINE
export const TIMELINE_EVENTS = [
    {
        category: "Education",
        title: "High School Student",
        text: "Currently pursuing high school education while developing interests in programming, aerospace engineering, physics, and scientific research.",
        timetext: "Present",
    },
    {
        category: "Research",
        title: "Independent Research & Exploration",
        text: "Developing research skills through scientific exploration, technical documentation, engineering concepts, and independent technical projects.",
        timetext: "Ongoing",
    },
    {
        category: "Research",
        title: "Orbital Decay Simulation",
        text: "Collaborated with Ahon on a simulation exploring orbital decay in Low Earth Orbit under varying space-weather conditions.",
        timetext: "Research Project",
    },
    {
        category: "Technical Project",
        title: "LLM Stack Report Bundle",
        text: "Explored large language models, Ollama, MCP, AI agents, validation systems, and computational tools through an independent technical project.",
        timetext: "Project",
    },
];

// SOCIAL LINKS
export const SOCIAL_LINKS = [
    {
        label: "GitHub",
        href: "https://github.com/Abdullah6926",
    },
    {
        label: "Email",
        href: "mailto:hallo6926@gmail.com",
    },
    {
        label: "ORCID",
        href: "https://orcid.org/0009-0009-8726-0019",
    },
];

// ALL LINKS
export const ALL_LINKS = [
    ...SOCIAL_LINKS,
    ...PROJECTS_DATA.map((project) => ({
        label: project.title,
        href: project.liveUrl,
    })),
].filter(
    (entry, index, all) =>
        all.findIndex((item) => item.href === entry.href) === index
);
