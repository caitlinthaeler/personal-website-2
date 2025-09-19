import { useState, useEffect } from "react"

import { EventPeriod, EventLink, Event } from "@/types/event"
import { Tag, tags } from "@/types/tag"

export default function useEvents() {
  const [events, setEvents] = useState<Event[]>([])

  const setDuration = (startDate: Date, endDate?: Date) => {
    return ""
  }

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
        company: "University of Aberdeen",
      },
      {
        type: "education",
        title: "Student",
        period: {
            startDate: {year: 2025, month: 7},
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
        period: {
            startDate: { year: 2024, month: 10}
        },
        duration: "2 days",
        tags: ["github", "csharp"],
        points: ["created a game in unity"],
      },
    ])
  }, []) // ✅ only runs once after mount

  return { events }
}

