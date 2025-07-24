import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface TimelineItemProps {
  title: string;
  company: string;
  duration: string;
  description: string[];
  technologies: string[];
  isLeft?: boolean;
}

export const TimelineItem = ({
  title,
  company,
  duration,
  description,
  technologies,
  isLeft = false
}: TimelineItemProps) => {
  return (
    <div className={`flex items-center ${isLeft ? 'flex-row-reverse' : 'flex-row'} mb-8`}>
      {/* Timeline dot */}
      <div className="flex flex-col items-center">
        <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-glow"></div>
        <div className="w-0.5 h-16 bg-border mt-2"></div>
      </div>
      
      {/* Content */}
      <Card className={`max-w-md shadow-card ${isLeft ? 'mr-8' : 'ml-8'} animate-fade-in-up`}>
        <CardHeader>
          <div className="flex items-start justify-between">
            <div>
              <CardTitle className="text-lg font-semibold">{title}</CardTitle>
              <CardDescription className="text-primary font-medium">{company}</CardDescription>
              <p className="text-sm text-muted-foreground mt-1">{duration}</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <ul className="space-y-1">
              {description.map((item, index) => (
                <li key={index} className="text-sm text-muted-foreground flex items-start">
                  <span className="text-primary mr-2">•</span>
                  {item}
                </li>
              ))}
            </ul>
            
            <div className="flex flex-wrap gap-1">
              {technologies.map((tech, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};