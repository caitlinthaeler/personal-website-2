import { 
    ReactIcon, 
    NextJsIcon, 
    TailwindIcon, 
    GitHubIcon, 
    JiraIcon,
    FigmaIcon
} from "@/components/ui/icons"


// Define all tags + their metadata
export const tags = {
  react: {
    label: "React",
    icon: ReactIcon
  },
  nextjs: {
    label: "Next.js",
    icon: NextJsIcon
  },
  figma: {
    label: "Figma",
    icon: FigmaIcon
  },
  tailwind: {
    label: "Tailwind CSS",
    icon: TailwindIcon
  },
  github: {
    label: "GitHub",
    icon: GitHubIcon
  },
  jira: {
    label: "Jira",
    icon: JiraIcon
  },
} as const

// ✅ Derive a strict type from keys
export type Tag = keyof typeof tags