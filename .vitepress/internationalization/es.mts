import { defaultThemeConfig } from "./default.mts";

const sidebar = [
    {
        text: "Guías",
        items: [
            { text: "Contribuir", link: "/es/guides/contribute" },
            { text: "Traducciones", link: "/es/guides/translations" }
        ]
    },
    {
        text: "Inteligencia artificial",
        collapsed: true,
        items: [
            {
                text: "Conceptos",
                collapsed: true,
                items: [
                    {
                        text: "Desde cero",
                        items: [
                            { text: "Cómo Empezar", link: "/es/learn/artificial-intelligence/concepts/scratch/get-started" },
                            { text: "Regresión Logística", link: "/es/learn/artificial-intelligence/concepts/scratch/logistic-regression" },
                            { text: "Procesamiento del Lenguaje Natural (PLN)", link: "/es/learn/artificial-intelligence/concepts/scratch/natural-language-processing" }
                        ]
                    }
                ]
            }
        ]
    },
    {
        text: "Machine Learning",
        collapsed: true,
        items: [
            {
                text: "Conceptos",
                collapsed: true,
                items: [
                    {
                        text: "Desde cero",
                        items: [
                            { text: "Cómo Empezar", link: "/es/learn/machine-learning/concepts/scratch/get-started" },
                        ]
                    }
                ]
            }
        ]
    },
    {
        text: "Deep Learning",
        collapsed: true,
        items: [
            {
                text: "Conceptos",
                collapsed: true,
                items: [
                    {
                        text: "Desde cero",
                        items: [
                            { text: "Cómo Empezar", link: "/es/learn/deep-learning/concepts/scratch/get-started" },
                        ]
                    }
                ]
            },
            {
                text: "Ingeniería de Prompt",
                collapsed: true,
                items: [
                    {
                        text: "Cómo Empezar",
                        link: "/es/learn/deep-learning/prompt-engineering/get-started"
                    }
                ]
            }
        ]
    },
    {
        text: "Ciencia de Datos",
        collapsed: true,
        items: [
            {
                text: "Conceptos",
                collapsed: true,
                items: [
                    {
                        text: "Desde cero",
                        items: [
                            { text: "Cómo Empezar", link: "/es/learn/data-science/concepts/scratch/get-started" },
                            { text: "Tabla Hash", link: "/es/learn/data-science/concepts/scratch/hash-table" }
                        ]
                    }
                ]
            }
        ]
    },
    {
        text: "Bases de Datos",
        collapsed: true,
        items: [
            {
                text: "Redis",
                collapsed: true,
                items: [
                    {
                        text: "NodeJS",
                        items: [
                            { text: "Redis en NodeJS", link: "/es/learn/databases/redis/nodejs" }
                        ]
                    }
                ]
            }
        ]
    },
    {
        text: "Programación",
        collapsed: true,
        items: [
            {
                text: "Conceptos",
                collapsed: true,
                items: [
                    {
                        text: "Desde cero",
                        items: [
                            { text: "Cómo Empezar", link: "/es/learn/development/concepts/scratch/get-started" },
                            { text: "Tipos de Lenguajes de Programación", link: "/es/learn/development/concepts/scratch/programming-language-types" }
                        ]
                    }
                ]
            },
            {
                text: "Git",
                collapsed: true,
                items: [
                    { text: "Cómo Empezar", link: "/es/learn/development/git/get-started" },
                    { text: "Primeros Pasos", link: "/es/learn/development/git/first-steps" },
                    { text: "Personalizando Git", link: "/es/learn/development/git/customizing-git" },
                    { text: "Logging", link: "/es/learn/development/git/logging" }
                ]
            }
        ]
    },
    {
        text: "Lenguajes",
        collapsed: true,
        items: [
            {
                text: "Python",
                collapsed: true,
                items: [
                    { text: "Cómo Empezar", link: "/es/learn/languages/python/get-started" }
                ]
            }
        ]
    },
    {
        text: "Tecnologías",
        collapsed: true,
        items: [
            {
                text: "React",
                collapsed: true,
                items: [
                    { text: "Cómo Empezar", link: "/es/learn/technologies/react/get-started" }
                ]
            }
        ]
    },
    {
        text: "Frameworks",
        collapsed: true,
        items: [
            {
                text: "React Native",
                collapsed: true,
                items: [
                    { text: "Cómo Empezar", link: "/es/learn/frameworks/react-native/get-started" }
                ]
            }
        ]
    }
];

export const themeConfig = {
    nav: [
        { text: "Home", link: "/" },
        { text: "Examples", link: "/markdown-examples" }
    ],
    sidebar,
    outlineTitle: "En esta página",
    editLink: {
        pattern: defaultThemeConfig.editLink.pattern,
        text: "Editar esta página"
    },
    lastUpdated: {
        text: "Actualizado en"
    },
    docFooter: {
        prev: "Página anterior",
        next: "Próxima página"
    }
    // Default by Vitepress.
};