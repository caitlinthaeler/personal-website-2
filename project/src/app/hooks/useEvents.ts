import { useState, useEffect } from "react"
import { Event } from "@/types/event"

export default function useEvents() {
  const [events, setEvents] = useState<Event[]>([])

  useEffect(() => {
    setEvents([
        {
        type: "job",
        title: "UI/UX Design Volunteer",
        period: {
            startDate: {year: 2025, month: 7},
        },
        description: "developed visually appealing interactive Figma prototypes for a web comics web app and implemented them using nextjs",
        company: "Pearl Media",
        companyLogo: {
            image: "/pearl/Artboard1.svg",
            link: "https://readpearl.com"
        },
        points: [
            "Conducted market research on competitor websites like webtoons and tapas to identify best practices and user preferences",
            "Designed wireframes and interactive prototypes for web comics platform using Figma",
            "Created user-friendly interfaces that enhance reader engagement and experience",
            "Collaborated with development team to ensure design feasibility and implementation",
            "Applied modern UI/UX principles to create visually appealing and accessible designs",
            "Implemented react components from figma designs",
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
        description: "Outlined client requirements, created wireframes, and implemented frontend for a circular credit reward based educational web platform that connects university students with local businesses.",
        thumbnail: "/aberdeen/idtWE2g2FR_1758495781249.jpeg",
        company: "Aberdeen Software Factory",
        companyLogo: {
            image: "/aberdeen/ASF_Logo_cmyk90mm_rdax_450x450.jpeg",
            link: "https://www.abdn.ac.uk/ncs/departments/computing-science/aberdeen-software-factory/"
        },
        points: [
            "Collaborated with client to gather and analyze requirements for educational platform development",
            "Created wireframes using Figma to visualize page layouts",
            "Designed and implemented user-friendly interfaces using React and Next.js",
            "Wrote scalable and maintainable code following best practices",
            "Participated in weekly team meetings and code reviews to ensure high-quality deliverables"
        ],
        tags: ["figma", "react", "nextjs", "github", "tailwind", "github", "typescript"],
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
        },
        points: [
            "Led weekly programming practicals for first-year computing science students",
            "Assisted students with understanding programming concepts and debugging code",
            "Provided one-on-one support to help students overcome challenges",
            "Facilitated a positive learning environment to encourage student engagement",
            "Developed strong communication skills explaining complex programming concepts clearly"
        ],
        tags: ["github", "typescript", "react"],
      },
      {
        type: "job",
        title: "Search Quality Rater",
        period: {
            startDate: {year: 2023, month: 10},
            endDate: {year: 2023, month: 11},
            duration: "3 months"
        },
        description: "Reviewed and graded internet search queries to help improve search engine performance by evaluating how well results matched user intent and expectations.",
        thumbnail: "/welocalize/WeLocalize-logo.png",
        company: "Welocalize",
        companyLogo: { 
            image: "/welocalize/WeLocalize-logo.png",
        },
        points: [
            "Reviewed and graded internet search queries to improve search engine performance and accuracy",
            "Evaluated search results quality by determining how well they matched user intent from keywords",
            "Applied critical thinking skills to assess relevance and usefulness of search engine results",
            "Conducted online research to understand user expectations and search behaviors",
            "Contributed to one of the world's largest Search Rating Programs at award-winning localization company"
        ]
      },
      {
        type: "job",
        title: "Nightshift Supermarket Assitant",
        period: {
            startDate: {year: 2023, month: 10},
            endDate: {year: 2023, month: 11},
            duration: "1 month"
        },
        description: "Performed nightly warehouse and store tasks, moving inventory, operating equipment, and safely handling waste.",
        thumbnail: "/waitrose/idJ0kwZ0BR_1758495515590.jpeg",
        company: "Waitrose",
        companyLogo: {
            image: "/waitrose/idJ0kwZ0BR_1758495515590.jpeg",
        },
        points: [
            "Efficiently managed and organized large volumes of mixed stock inventory",
            "Operated specialized equipment and machinery following strict safety protocols",
            "Coordinated with team members to optimize workflow during night shift operations",
            "Handled waste disposal processes using appropriate safety equipment and procedures",
            "Demonstrated reliability and strong work ethic in fast-paced retail environment"
        ],},
      {
        type: "education",
        title: "BSc Computing Science Undergraduate",
        description: "Pursuing a BSc in Computing Science with a strong focus on software development. Currently in my 4th year, predicted 1:1.",
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
        degree: "BSc Computing Science",
        field: "computing science",
      },
      {
        type: "education",
        title: "A Levels",
        description: "Completed 4 A Levels at Portsmouth High School, achieving grades AAB in Computer Science, Mathematics, and Physics, along with an A* in EPQ.",
        thumbnail: "/phs/Portsmouth_High_School_GDST.png",
        period: {
            startDate: {year: 2020, month: 9},
            endDate: {year: 2022, month: 6},
        },
        points: [
            "Computer Science - A",
            "Mathematics - A",
            "Physics - C",
            "EPQ - A*"
        ],
        institution: "Portsmouth High School",
        degree: "A Levels",
        field: "A Levels",
      },
      {
        type: "project",
        title: "Kessler Syndrome",
        description: "A space debris simulation game made in Unity using C#",
        thumbnail: "/kessler-syndrome/easy-mode.png",
        points: [
            "Developed educational space simulation for NASA hackathon within 48-hour timeframe",
            "Created dynamic object generation system with sophisticated collision avoidance algorithms",
            "Implemented progessive difficulty modes to provide challenge and demonstrate environmental impact of space pollution",
            "Designed engaging gameplay mechanics that effectively communicate serious environmental message",
            "Conducted thorough testing and debugging to ensure stable performance with complex object interactions"
        ],
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
        points: [
            "Created comprehensive 2D RPG inspired by Warriors book series using Unity and C#",
            "Designed and animated original pixel art spritesheets using Aseprite",
            "Programmed complex character interaction system with branching behaviors using colliders and blend trees",
            "Implemented rewarding progression system including leveling, inventory management, and crafting",
            "Earned A* grade in Extended Project Qualification, demonstrating exceptional independent learning and project management"
        ],
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
         points: [
            "Developed immersive 3D thriller game combining historical accuracy with folklore elements",
            "Programmed complex player movement and interaction systems for exploration gameplay",
            "Created atmospheric game environments based on real Aberdeen cathedral architecture",
            "Implemented dynamic storytelling system with multiple unique events and encounters",
        ],
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
        points: [
            "Runner up in RGU Hack 2024 competition for Elementz challenge",
            "Collaborated in a 24-hour hackathon to develop innovative subsea data visualization solution",
            "Contributed to frontend development using HTML and CSS for user interface components",
            "Worked with team to integrate complex 3D visualization features for maritime industry application",
            "Helped design and implement web-based platform for visualizing vessels, pipelines, and points of interest",
            "Worked effectively in fast-paced team environment under tight deadlines"
        ],
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

