import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { 
  Code, 
  Brain, 
  Search, 
  Globe, 
  BarChart3, 
  Wrench, 
  Users
} from "lucide-react";

const skillGroups = [
  {
    title: "💻 Programming Languages",
    icon: <Code className="h-8 w-8" />,
    skills: [
      { name: "Python", description: "Deep Learning, NLP, automation", level: "Expert", icon: "🐍" },
      { name: "Java", description: "Object-Oriented apps, algorithms", level: "Advanced", icon: "☕" },
      { name: "C", description: "Core computing, memory management", level: "Advanced", icon: "🧠" }
    ]
  },
  {
    title: "🧠 AI/ML & Deep Learning",
    icon: <Brain className="h-8 w-8" />,
    skills: [
      { name: "PyTorch, TensorFlow", description: "Model training, fine-tuning", level: "Expert", icon: "🔥" },
      { name: "LSTM/BiLSTM", description: "Financial sentiment classification", level: "Advanced", icon: "📈" },
      { name: "LangChain, Pinecone, Weaviate", description: "LLM-based RAG apps", level: "Expert", icon: "🔗" }
    ]
  },
  {
    title: "🔍 NLP & Generative AI",
    icon: <Search className="h-8 w-8" />,
    skills: [
      { name: "Prompt Engineering", description: "Custom LLM outputs", level: "Expert", icon: "💬" },
      { name: "Retrieval-Augmented Generation", description: "RAG systems", level: "Advanced", icon: "🔍" },
      { name: "HuggingFace, OpenAI APIs", description: "Model integration", level: "Expert", icon: "🤗" }
    ]
  },
  {
    title: "🌐 Web Development",
    icon: <Globe className="h-8 w-8" />,
    skills: [
      { name: "ReactJS, HTML, CSS, TypeScript", description: "Frontend development", level: "Advanced", icon: "⚛️" },
      { name: "Flask/FastAPI", description: "Backend projects", level: "Advanced", icon: "🐍" },
      { name: "REST APIs, JWT Auth", description: "API development", level: "Advanced", icon: "🔐" }
    ]
  },
  {
    title: "📊 Data & Visualization",
    icon: <BarChart3 className="h-8 w-8" />,
    skills: [
      { name: "NumPy, Pandas", description: "Preprocessing + analytics", level: "Expert", icon: "📊" },
      { name: "Matplotlib", description: "Custom charting", level: "Advanced", icon: "📈" },
      { name: "Power BI", description: "Interactive business dashboards", level: "Advanced", icon: "📋" }
    ]
  },
  {
    title: "🛠️ Dev Tools & Collaboration",
    icon: <Wrench className="h-8 w-8" />,
    skills: [
      { name: "Git, GitHub", description: "Version control + open-source work", level: "Expert", icon: "🔀" },
      { name: "VS Code", description: "Project development", level: "Expert", icon: "💻" },
      { name: "Figma", description: "UI design prototypes", level: "Intermediate", icon: "🎨" }
    ]
  },
  {
    title: "🌍 Soft Skills & Leadership",
    icon: <Users className="h-8 w-8" />,
    skills: [
      { name: "Team Leadership", description: "Led 80+ as NSS Head", level: "Expert", icon: "👥" },
      { name: "Hackathons", description: "Finalist / Winner at 3+ major events", level: "Expert", icon: "🏆" },
      { name: "Communication", description: "Blogging, demos, public speaking", level: "Advanced", icon: "📢" }
    ]
  }
];

const getLevelColor = (level: string) => {
  switch (level) {
    case 'Expert': return 'bg-green-500/20 text-green-300 border-green-500/30';
    case 'Advanced': return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
    case 'Intermediate': return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
    default: return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
  }
};

export const SkillsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % skillGroups.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto">
      <Carousel 
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {skillGroups.map((group, index) => (
            <CarouselItem key={index} className="basis-full">
              <Card className="shadow-neural border-primary/20 hover:border-primary/40 transition-all duration-300 bg-card/50 backdrop-blur-sm">
                <CardHeader className="text-center pb-4">
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary">
                      {group.icon}
                    </div>
                    <CardTitle className="text-2xl font-bold gradient-neural bg-clip-text text-transparent">
                      {group.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-3">
                    {group.skills.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex}
                        className="group relative overflow-hidden rounded-lg border border-primary/20 bg-muted/30 p-4 hover:border-primary/40 transition-all duration-300 hover:shadow-cyber"
                      >
                        <div className="flex items-start gap-3">
                          <span className="text-2xl flex-shrink-0">{skill.icon}</span>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-foreground text-sm mb-1 line-clamp-1">
                              {skill.name}
                            </h4>
                            <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                              {skill.description}
                            </p>
                            <Badge 
                              variant="outline" 
                              className={`text-xs ${getLevelColor(skill.level)}`}
                            >
                              {skill.level}
                            </Badge>
                          </div>
                        </div>
                        
                        {/* Hover glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <CarouselPrevious className="hidden md:flex -left-12 border-primary/30 bg-background/80 hover:bg-primary/20 hover:border-primary/50" />
        <CarouselNext className="hidden md:flex -right-12 border-primary/30 bg-background/80 hover:bg-primary/20 hover:border-primary/50" />
      </Carousel>
      
      {/* Indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {skillGroups.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-primary w-8' 
                : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
            }`}
          />
        ))}
      </div>
      
      {/* Progress bar */}
      <div className="mt-4 w-full bg-muted/30 rounded-full h-1 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300 ease-linear"
          style={{ 
            width: `${((currentIndex + 1) / skillGroups.length) * 100}%` 
          }}
        />
      </div>
    </div>
  );
};