export const sidebar = [
    {
        text: "Guides",
        items: [
          { text: "Contribute", link: "/en/guides/contribute" },
          { text: "Translations", link: "/en/guides/translations" }
        ]
    },
    {
        text: "Artificial Intelligence",
        items: [
            {
                text: "Concepts",
                collapsed: true,
                items: [
                    {
                        text: "From Scratch",
                        items: [
                            { text: "Get Started", link: "/en/learn/artificial-intelligence/concepts/scratch/get-started" },
                            { text: "Logistic Regression", link: "/en/learn/artificial-intelligence/concepts/scratch/logistic-regression" },
                            { text: "Natural Language Processing (NLP)", link: "/en/learn/artificial-intelligence/concepts/scratch/natural-language-processing" }
                        ]
                    }
                ]
            }
        ]

    },
    {
        text: "Databases",
        items: [
            {
                text: "Redis",
                collapsed: true,
                items: [
                    {
                        text: "NodeJS",
                        items: [
                            { text: "Redis in NodeJS", link: "/en/learn/databases/redis/nodejs" }
                        ]
                    }
                ]
            }
        ]

    },
    {
        text: "Development",
        items: [
            {
                text: "Concepts",
                collapsed: true,
                items: [
                    {
                        text: "From Scratch",
                        items: [
                            { text: "Get Started", link: "/en/learn/development/concepts/scratch/get-started" },
                            { text: "Programming Language Types", link: "/en/learn/development/concepts/scratch/programming-language-types" }
                        ]
                    }
                ]
            },
            {
                text: "Git",
                collapsed: true,
                items: [
                    { text: "Get Started", link: "/en/learn/development/git/get-started" },
                    { text: "First Steps", link: "/en/learn/development/git/first-steps" }
                ]
            }
        ]

    }
]