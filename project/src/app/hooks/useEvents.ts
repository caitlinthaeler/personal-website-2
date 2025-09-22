import { useState, useEffect } from "react"
import { Event } from "@/types/event"

export default function useEvents() {
  const [events, setEvents] = useState<Event[]>([])

  useEffect(() => {
    setEvents([
        {
        type: "job",
        title: "UI Designer",
        period: {
            startDate: {year: 2025, month: 7},
        },
        description: "developed user experiences and implemented them using nextjs",
        company: "Pearl Media",
        companyLogo: {
            image: "/pearl/Artboard1.svg",
            link: "https://readpearl.com"
        },
        points: [
            "worked on user experiences",
            "implemented react components from figma designs",
            "conducted market research on competitor websites",
            "organized wireframes into figma prototype"
        ],
        tags: ["figma", "react", "nextjs", "jira", "github", "tailwind", "github", "tailwind", "github", "tailwind"],
        thumbnail: "/pearl/pearl-landing-page.png",
        links: [
            {
                name: "github",
                url: "https://github.com/Pearl-Comics/pearl-platform",
                variant: "github"
            },
            {
                name: "readpearl.com",
                url: "/readpearl.com",
                variant: "website"
            }
        ]
      },
      {
        type: "job",
        title: "Software Developer",
        period: {
            startDate: {year: 2025, month: 8},
        },
        description: "created wireframes in figma and ",
        thumbnail: "/aberdeen/idtWE2g2FR_1758495781249.jpeg",
        company: "Aberdeen Software Factory",
        companyLogo: {
            image: "/aberdeen/ASF_Logo_cmyk90mm_rdax_450x450.jpeg",
            link: "https://www.abdn.ac.uk/ncs/departments/computing-science/aberdeen-software-factory/"
        },
        points: [
            "blah blah blah"
        ],
        tags: ["figma", "react", "nextjs", "github", "tailwind", "github"],
        links: [
            {
                name: "github",
                url: "https://github.com/Pearl-Comics/pearl-platform",
                variant: "github"
            },
            {
                name: "readpearl.com",
                url: "readpearl.com",
                variant: "website"
            }
        ]
      },
      {
        type: "job",
        title: "Programming Demonstrator",
        period: {
            startDate: {year: 2023, month: 10},
            endDate: {year: 2023, month: 11},
            duration: "1 month"
        },
        description: "led weekly programming practicals answering students' questions",
        thumbnail: "/aberdeen/idtWE2g2FR_1758495781249.jpeg",
        company: "University of Aberdeen",
        companyLogo: {
            image: "/aberdeen/idtWE2g2FR_1758495781249.jpeg",
            link: "https://www.abdn.ac.uk"
        }
      },
      {
        type: "job",
        title: "Search Quality Rater",
        period: {
            startDate: {year: 2023, month: 10},
            endDate: {year: 2023, month: 11},
            duration: "3 months"
        },
        description: "...",
        thumbnail: "/welocalize/WeLocalize-logo.png",
        company: "Welocalize",
        companyLogo: { 
            image: "/welocalize/WeLocalize-logo.png",
        }
      },
      {
        type: "job",
        title: "Nightshift Supermarket Assitant",
        period: {
            startDate: {year: 2023, month: 10},
            endDate: {year: 2023, month: 11},
            duration: "1 month"
        },
        description: "...",
        thumbnail: "/waitrose/idJ0kwZ0BR_1758495515590.jpeg",
        company: "Waitrose",
        companyLogo: {
            image: "/waitrose/idJ0kwZ0BR_1758495515590.jpeg",
        }
      },
      {
        type: "education",
        title: "Student",
        description: "Pursuing a BSc in Computing Science. Currently in my 4th year.",
        thumbnail: "/aberdeen/idtWE2g2FR_1758495781249.jpeg",
        period: {
            startDate: {year: 2022, month: 8},
        },
        points: [
            "Languages & Computability",
            "Algorithms & Data Structures",
            "Human Computer Interaction",
            "Object Oriented Programming",
            "Combinatorics",
            "Software Engineering",
            "Artificial Intelligence",
            "Robotics",
            "Operating Systems",
            "Web Development",
            "Databases & Data Management",
            "Distributed Systems & Security",
            "Software Programming",
            "Modelling & Problem Solving for Computing"
        ],
        institution: "University of Aberdeen",
        degree: "",
        field: "computing science",
      },
      {
        type: "project",
        title: "Kessler Syndrome",
        description: "A space debris simulation game made in Unity using C#",
        thumbnail: "/kessler-syndrome/easy-mode.png",
        links: [
            {
                name: "project details",
                url: "https://www.spaceappschallenge.org/nasa-space-apps-2024/find-a-team/kessler-syndrome/?tab=details",
                variant: "website"
            },
            {
                name: "github",
                url: "https://github.com/caitlinthaeler/nyskooo",
                variant: "github"
            }
        ],
        period: {
            startDate: {year: 2024, month: 4},
            endDate: {year: 2024, month: 5},
            duration: "2 days",
        },
        tags: ["github", "csharp"],
        points: ["created a game in unity"],
      },
      {
        type: "project",
        title: "Rogue Cat",
        description: "A 2D platformer game made in Unity using C#",
        thumbnail: "/rogue-cat/rogue-cat-thumbnail.png",
        period: {
            startDate: {year: 2019, month: 9},
            endDate: {year: 2021, month: 11},
            duration: "2 years",
        },
        tags: ["csharp", "unity", "aseprite"],
        points: ["created a game in unity"],
      },
      {
        type: "project",
        title: "Stirred from Stone",
        description: "A 3D adventure game made in Unity using C#",
        thumbnail: "/stirred-from-stone/stirred-from-stone-img-2.png",
        period: {
            startDate: {year: 2025, month: 3},
            endDate: {year: 2025, month: 3},
            duration: "1 week",
        },
        tags: ["csharp", "unity"],
        points: ["created a game in unity"],
        links: [
            {
                name: "github",
                url: "https://github.com/caitlinthaeler/RCR-game-jam-2025.git",
                variant: "github"
            }
        ]
      },
      {
        type: "project",
        title: "Subsea Data Visualiser",
        description: "A web app to visualise subsea vessels, pipelines, and points of interest using three.js",
        thumbnail: "/subsea-data-visualiser/subsea-data-visualiser-img-1.png",
        period: {
            startDate: {year: 2024, month: 2},
            endDate: {year: 2024, month: 2},
            duration: "24 hours"
      },
        tags: ["threejs", "html", "css", "github"],
        points: ["created a web app using three.js to visualise subsea data"],
        links: [
            {
                name: "github",
                url: "https://github.com/Ben-Greenidge/RGU_Hack.git",
                variant: "github"
            }
        ]
      }
    ])
  }, []) // ✅ only runs once after mount

   const getEventsByType = (eventType: string) =>
    events.filter((e) => e.type === eventType)

  return { events, getEventsByType }
}

