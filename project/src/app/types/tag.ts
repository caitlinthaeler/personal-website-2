import { 
    ReactIcon, 
    NextJsIcon, 
    TailwindIcon, 
    GitHubIcon, 
    JiraIcon,
    FigmaIcon,
    UnityIcon,
    CSharpIcon,
    AsepriteIcon,
    ThreeJsIcon,
    CssIcon,
    Html5Icon,
    TypeScriptIcon,
    AngularIcon,
    PlaywrightIcon,
    JestIcon,
    ConfluenceIcon,
    NxIcon
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
  unity: {
    label: "Unity",
    icon: UnityIcon
  },
  csharp: {
    label: "C#",
    icon: CSharpIcon
  },
  aseprite: {
    label: "Aseprite",
    icon: AsepriteIcon
  },
  threejs: {
    label: "Three.js",
    icon: ThreeJsIcon
  },
  css: {
    label: "CSS",
    icon: CssIcon
  },
  html: {
    label: "HTML",
    icon: Html5Icon
  },
  typescript: {
    label: "TypeScript",
    icon: TypeScriptIcon
  },
  angular: {
    label: "Angular",
    icon: AngularIcon
  },
  playwright: {
    label: "Playwright",
    icon: PlaywrightIcon
  },
  jest: {
    label: "Jest",
    icon: JestIcon
  },
  confluence: {
    label: "Confluence",
    icon: ConfluenceIcon
  },
  nx: {
    label: "Nx",
    icon: NxIcon
  },
  // typescript is using react icon temporarily
  // add more tags as needed. 
  // if icon not created already, see /components/ui/icons/iconMap & /components/ui/icons/specificIcons
} as const

// ✅ Derive a strict type from keys
export type Tag = keyof typeof tags