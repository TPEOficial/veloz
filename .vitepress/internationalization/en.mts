const sidebar = [
    {
        text: "Guides",
        items: [
            { text: "Contribute", link: "/en/guides/contribute" },
            { text: "Translations", link: "/en/guides/translations" }
        ]
    },
    {
        text: "Artificial Intelligence",
        collapsed: true,
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
        text: "Machine Learning",
        collapsed: true,
        items: [
            {
                text: "Concepts",
                collapsed: true,
                items: [
                    {
                        text: "From Scratch",
                        items: [
                            { text: "Get Started", link: "/en/learn/machine-learning/concepts/scratch/get-started" },
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
                text: "Concepts",
                collapsed: true,
                items: [
                    {
                        text: "From Scratch",
                        items: [
                            { text: "Get Started", link: "/en/learn/deep-learning/concepts/scratch/get-started" },
                        ]
                    }
                ]
            }
        ]
    },
    {
        text: "Data Science",
        collapsed: true,
        items: [
            {
                text: "Concepts",
                collapsed: true,
                items: [
                    {
                        text: "From Scratch",
                        items: [
                            { text: "Get Started", link: "/en/learn/data-science/concepts/scratch/get-started" },
                            { text: "Hash Table", link: "/en/learn/data-science/concepts/scratch/hash-table" },
                        ]
                    }
                ]
            }
        ]
    },
    {
        text: "Databases",
        collapsed: true,
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
        collapsed: true,
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
                    { text: "First Steps", link: "/en/learn/development/git/first-steps" },
                    { text: "Customizing Git", link: "/en/learn/development/git/customizing-git" }
                ]
            }
        ]
    },
    {
        text: "Languages",
        collapsed: true,
        items: [
            {
                text: "Python",
                collapsed: true,
                items: [
                    { text: "Get Started", link: "/en/learn/languages/python/get-started" }
                ]
            }
        ]
    },
    {
        text: "Technologies",
        collapsed: true,
        items: [
            {
                text: "React",
                collapsed: true,
                items: [
                    { text: "Get Started", link: "/en/learn/technologies/react/get-started" }
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
                    { text: "Get Started", link: "/en/learn/frameworks/react-native/get-started" }
                ]
            }
        ]
    }
];

export const themeConfig = {
    nav: [
        { text: "Home", link: "/en/" },
        { text: "Examples", link: "/markdown-examples" }
    ],
    sidebar
    // Default by Vitepress.
};