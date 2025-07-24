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
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {icon}
          <span className="text-sm font-medium text-foreground">{skill}</span>
        </div>
        <span className="text-sm text-muted-foreground">{percentage}%</span>
      </div>
      <div className="skill-bar">
        <div 
          className="skill-progress" 
          style={{ width: `${animatedPercentage}%` }}
        />
      </div>
    </div>
  );
};