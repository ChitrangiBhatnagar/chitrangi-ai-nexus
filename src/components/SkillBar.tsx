
import { useEffect, useState } from 'react';

interface SkillBarProps {
  skill: string;
  percentage: number;
  icon?: React.ReactNode;
  delay?: number;
}

export const SkillBar = ({ skill, percentage, icon, delay = 0 }: SkillBarProps) => {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedPercentage(percentage);
    }, delay);

    return () => clearTimeout(timer);
  }, [percentage, delay]);

  return (
    <div className="group relative">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
            {icon}
          </div>
          <span className="text-sm font-medium text-foreground">{skill}</span>
        </div>
        <span className="text-xs text-muted-foreground font-mono">{percentage}%</span>
      </div>
      
      <div className="relative h-2 bg-muted rounded-full overflow-hidden">
        <div 
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${animatedPercentage}%` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
      </div>
      
      <div className="mt-2 flex justify-between text-xs text-muted-foreground">
        <span>Beginner</span>
        <span>Expert</span>
      </div>
    </div>
  );
};
