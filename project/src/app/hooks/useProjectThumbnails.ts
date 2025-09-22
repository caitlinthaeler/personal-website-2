import { useState, useEffect } from "react"

export interface Thumbnail {
  title: string
  image: string
  link?: string
}

export default function useProjectThumbnails() {
  const [thumbnails, setThumbnails] = useState<Thumbnail[]>([])

  useEffect(() => {
    setThumbnails([
      {
        title: "Kessler Syndrome",
        image: "/kessler-syndrome/easy-mode.png",
        link: "/kesslerSyndrome"
      },
      {
        title: "Rogue Cat",
        image: "/rogue-cat/Screen Shot 2024-07-13 at 2.39.46 PM.png",
      },
      {
        title: "Sk8 Run",
        image: "/sk8-run/thumbnail.png",
      },
      {
        title: "Stirred from Stone",
        image: "/stirred-from-stone/stirred-from-stone-img-2.png",
      },
      {
        title: "Subsea Data Visualiser",
        image: "/subsea-data-visualiser/subsea-data-visualiser-img-1.png",
      },
    ])
  }, []) // ✅ only runs once after mount

  return { thumbnails }
}
