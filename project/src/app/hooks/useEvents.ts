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
        tags: ["figma", "react", "nextjs", "jira", "github", "tailwind"],
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
        tags: ["figma", "react", "nextjs", "jira", "github", "tailwind"],
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
        tags: ["figma", "react", "nextjs", "jira", "github", "tailwind"],
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
    ])
  }, []) // ✅ only runs once after mount

  return { events }
}

