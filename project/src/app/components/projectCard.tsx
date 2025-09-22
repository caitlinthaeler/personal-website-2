import { Tag } from "@/types/tag";
import { TagList2 } from "./tagList";
import { EventLink, EventPeriod } from "@/types/event";
import { Card, CardContent, CardHeader } from "./ui/card";

export interface ProjectCardProps {
  title: string;
  description: string;
  period: EventPeriod;
  thumbnailUrl?: string;
  projectUrl?: string;
  tags?: Tag[];
  links?: EventLink[];
}

export default function ProjectCard({
  title,
  description,
  thumbnailUrl,
  projectUrl,
  tags,
}: ProjectCardProps) {
  return (
    <Card className="border border-none rounded-none overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
        <CardHeader>
            <p className="text-primary text-4xl front-semibold text-center">{title}</p>
        </CardHeader>
        <CardContent>
            {thumbnailUrl && (
                <img src={thumbnailUrl} alt={title} className="w-full h-48 object-cover" />
            )}
            <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-sm text-card-foreground mb-4">{description}</p>
                {tags && (
                <div className="flex flex-wrap gap-2 mb-4">
                    {tags && <TagList2 tags={tags} />}
                    
                </div>
                )}
                </div>

        </CardContent>
       
       
    </Card>
  );
}