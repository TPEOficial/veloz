export const sidebar = [
    {
        text: "Guías",
        items: [
          { text: "Contribuir", link: "/es/guides/contribute" },
          { text: "Traducciones", link: "/es/guides/translations" }
        ]
    },
    {
        text: "Inteligencia artificial",
        items: [
            {
                text: "Conceptos",
                collapsed: true,
                items: [
                    {
                        text: "From Scratch",
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
        text: "Bases de Datos",
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
        items: [
            {
                text: "Conceptos",
                collapsed: true,
                items: [
                    {
                        text: "From Scratch",
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
                    { text: "Primeros Pasos", link: "/es/learn/development/git/first-steps" }
                ]
            }
        ]

    }
]