import { useState, useEffect } from "react"

interface Thumbnail {
  title: string
  imageUrl: string
  linkUrl?: string
}

export default function useProjectThumbnails() {
  const [thumbnails, setThumbnails] = useState<Thumbnail[]>([])

  useEffect(() => {
    setThumbnails([
      {
        title: "Kessler Syndrome",
        imageUrl: "/kessler-syndrome/easy-mode.png",
      },
      {
        title: "Rogue Cat",
        imageUrl: "/rogue-cat/Screen Shot 2024-07-13 at 2.39.46 PM.png",
      },
      {
        title: "Sk8 Run",
        imageUrl: "/sk8-run/thumbnail.png",
      },
      {
        title: "Stirred from Stone",
        imageUrl: "/stirred-from-stone/stirred-from-stone-img-2.png",
      },
      {
        title: "Subsea Data Visualiser",
        imageUrl: "/subsea-data-visualiser/subsea-data-visualiser-img-1.png",
      },
    ])
  }, []) // ✅ only runs once after mount

  return { thumbnails }
}
