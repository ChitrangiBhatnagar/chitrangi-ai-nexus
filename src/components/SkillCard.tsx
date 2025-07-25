
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from 'react';

interface SkillCardProps {
  skill: string;
  percentage: number;
  icon?: React.ReactNode;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  delay?: number;
}

export const SkillCard = ({ skill, percentage, icon, category, level, delay = 0 }: SkillCardProps) => {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedPercentage(percentage);
    }, delay);

    return () => clearTimeout(timer);
  }, [percentage, delay]);

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Expert': return 'bg-green-500';
      case 'Advanced': return 'bg-blue-500';
      case 'Intermediate': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <Card className="group hover:shadow-neural transition-all duration-300 border-primary/20 hover:border-primary/40">
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
            {icon}
          </div>
          <div>
            <h3 className="font-semibold text-foreground">{skill}</h3>
            <p className="text-sm text-muted-foreground">{category}</p>
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Badge variant="secondary" className={`${getLevelColor(level)} text-white`}>
              {level}
            </Badge>
            <span className="text-sm font-mono text-muted-foreground">{percentage}%</span>
          </div>
          
          <div className="relative h-2 bg-muted rounded-full overflow-hidden">
            <div 
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${animatedPercentage}%` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
