import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github, Trophy } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  role?: string;
  outcome?: string;
  isAward?: boolean;
  awardTitle?: string;
  githubUrl?: string;
  liveUrl?: string;
  tags: string[];
}

export const ProjectCard = ({
  title,
  description,
  techStack,
  role,
  outcome,
  isAward,
  awardTitle,
  githubUrl,
  liveUrl,
  tags
}: ProjectCardProps) => {
  return (
    <Card className="project-card group">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
              {title}
            </CardTitle>
            {isAward && awardTitle && (
              <div className="flex items-center gap-2 mt-2">
                <Trophy className="h-4 w-4 text-yellow-500" />
                <span className="text-sm font-medium text-yellow-600 dark:text-yellow-400">
                  {awardTitle}
                </span>
              </div>
            )}
          </div>
          <div className="flex gap-2">
            {githubUrl && (
              <Button variant="ghost" size="sm" asChild>
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
            )}
            {liveUrl && (
              <Button variant="ghost" size="sm" asChild>
                <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            )}
          </div>
        </div>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-4">
          {role && (
            <div>
              <span className="text-sm font-medium text-primary">Role: </span>
              <span className="text-sm text-muted-foreground">{role}</span>
            </div>
          )}
          
          {outcome && (
            <div>
              <span className="text-sm font-medium text-primary">Outcome: </span>
              <span className="text-sm text-muted-foreground">{outcome}</span>
            </div>
          )}
          
          <div>
            <span className="text-sm font-medium text-primary mb-2 block">Tech Stack:</span>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};