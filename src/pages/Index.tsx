import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Brain, 
  Code, 
  Database, 
  Download, 
  Github, 
  Linkedin, 
  Mail, 
  Moon, 
  Sun, 
  Award,
  Users,
  ExternalLink,
  MessageSquare,
  MapPin,
  Calendar,
  Lightbulb,
  Target,
  Zap,
  Heart
} from "lucide-react";
import { TypingAnimation } from "@/components/TypingAnimation";
import { ProjectCard } from "@/components/ProjectCard";
import { SkillBar } from "@/components/SkillBar";
import { TimelineItem } from "@/components/TimelineItem";
import heroBackground from "@/assets/hero-background.jpg";

const Index = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const typingTexts = [
    "AI/ML Engineer",
    "Social Innovator", 
    "Hackathon Winner",
    "Tech Leader",
    "Problem Solver"
  ];

  const projects = [
    {
      title: "Biometric Missing Person Tracker",
      description: "Revolutionary system combining Aadhaar biometric data with GPS tracking using Raspberry Pi for real-time missing person identification and location.",
      techStack: ["Python", "Raspberry Pi", "GPS", "Aadhaar API", "Computer Vision"],
      role: "Lead Developer & Project Manager",
      outcome: "75%+ accuracy in person identification",
      isAward: true,
      awardTitle: "🏆 Best Societal Project 2024",
      tags: ["#SocialImpact", "#Biometrics", "#IoT", "#Python"]
    },
    {
      title: "Multi-Agent Cybersecurity System",
      description: "Autonomous cloud defense system using reinforcement learning with integrated chatbot for real-time threat response and user interaction.",
      techStack: ["Python", "TensorFlow", "RL Algorithms", "Cloud Security", "NLP"],
      role: "AI Research Lead",
      outcome: "Reduced response time by 60%",
      isAward: true,
      awardTitle: "🥉 Genesys Hackathon Finalist 2025",
      tags: ["#AI", "#Cybersecurity", "#RL", "#Chatbot"]
    },
    {
      title: "Accessible AI IDE for Visually Impaired",
      description: "Voice-triggered Python IDE with intelligent code narration, AI-powered assistance, and accessibility-first design for inclusive programming.",
      techStack: ["Python", "Speech Recognition", "TTS", "AI", "Accessibility APIs"],
      role: "Full-stack Developer",
      outcome: "100% accessibility compliance achieved",
      tags: ["#Accessibility", "#AI", "#VoiceUI", "#Inclusion"]
    },
    {
      title: "Financial Sentiment Analysis with LSTM",
      description: "Advanced NLP system analyzing stock market news sentiment using LSTM and BiLSTM networks for financial prediction insights.",
      techStack: ["Python", "PyTorch", "LSTM", "BiLSTM", "Financial APIs", "NLP"],
      role: "ML Engineer",
      outcome: "75%+ prediction accuracy on market sentiment",
      tags: ["#NLP", "#LSTM", "#FinTech", "#DeepLearning"]
    },
    {
      title: "Farming-Tech Community Platform",
      description: "Web platform connecting urban consumers with rural farmers, facilitating direct trade and supporting sustainable agriculture.",
      techStack: ["React", "Node.js", "MongoDB", "Payment Gateway", "Maps API"],
      role: "Frontend Lead",
      outcome: "Connected 200+ farmers with urban markets",
      isAward: true,
      awardTitle: "🥇 EcoSummit Winner 2024",
      tags: ["#SocialImpact", "#Agriculture", "#WebDev", "#Sustainability"]
    }
  ];

  const skills = [
    { skill: "Python", percentage: 95, icon: <Code className="h-4 w-4 text-primary" /> },
    { skill: "Machine Learning", percentage: 90, icon: <Brain className="h-4 w-4 text-primary" /> },
    { skill: "PyTorch/TensorFlow", percentage: 85, icon: <Zap className="h-4 w-4 text-primary" /> },
    { skill: "React/TypeScript", percentage: 88, icon: <Code className="h-4 w-4 text-primary" /> },
    { skill: "LLM/RAG Systems", percentage: 82, icon: <MessageSquare className="h-4 w-4 text-primary" /> },
    { skill: "Java", percentage: 80, icon: <Code className="h-4 w-4 text-primary" /> },
    { skill: "C Programming", percentage: 75, icon: <Code className="h-4 w-4 text-primary" /> },
    { skill: "Cloud Platforms", percentage: 78, icon: <Database className="h-4 w-4 text-primary" /> }
  ];

  const experiences = [
    {
      title: "App Developer",
      company: "Houzee Pvt Ltd",
      duration: "2023 - Present",
      description: [
        "Collaborated with cross-functional teams to enhance app functionality",
        "Reduced bug occurrence by 30% through improved testing protocols",
        "Implemented user feedback systems improving satisfaction by 25%"
      ],
      technologies: ["React Native", "JavaScript", "API Integration", "Testing"]
    },
    {
      title: "Fullstack Web Developer",
      company: "ScanPick Pvt Ltd",
      duration: "2022 - 2023",
      description: [
        "Developed ONESPEER platform from ground up",
        "Built responsive web applications using modern frameworks",
        "Integrated RESTful APIs and third-party services",
        "Optimized application performance and user experience"
      ],
      technologies: ["React", "Node.js", "REST APIs", "MongoDB", "GitHub"]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-border/50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-primary">Chitrangi</h1>
            <div className="flex items-center gap-6">
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
              <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</a>
              <a href="#experience" className="text-muted-foreground hover:text-primary transition-colors">Experience</a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
              <Button variant="ghost" size="sm" onClick={toggleTheme}>
                {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.1
          }}
        />
        <div className="absolute inset-0 gradient-hero z-10" />
        
        <div className="relative z-20 text-center max-w-4xl mx-auto px-6">
          <div className="space-y-6 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="text-foreground">Chitrangi</span>
              <br />
              <span className="gradient-primary bg-clip-text text-transparent">Bhatnagar</span>
            </h1>
            
            <div className="text-xl md:text-2xl text-muted-foreground h-8">
              <TypingAnimation texts={typingTexts} className="font-medium" />
            </div>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              "Engineering AI that Empowers and Includes" — Building intelligent systems 
              that create real-world impact and inclusive technological solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button size="lg" className="gradient-primary shadow-glow hover:shadow-[0_0_50px_hsl(var(--primary)_/_0.4)] transition-all">
                <ExternalLink className="mr-2 h-5 w-5" />
                View Projects
              </Button>
              <Button variant="outline" size="lg" className="hover:bg-primary hover:text-primary-foreground transition-all">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
              <Button variant="ghost" size="lg" className="hover:text-primary transition-all">
                <MessageSquare className="mr-2 h-5 w-5" />
                Let's Connect
              </Button>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 opacity-20">
          <div className="float">
            <Brain className="h-8 w-8 text-primary" />
          </div>
        </div>
        <div className="absolute top-40 right-20 opacity-20">
          <div className="float-delayed">
            <Code className="h-10 w-10 text-primary" />
          </div>
        </div>
        <div className="absolute bottom-40 left-20 opacity-20">
          <div className="float">
            <Database className="h-6 w-6 text-primary" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I'm Chitrangi, a Computer Science undergrad specializing in AI & ML. From biometric trackers 
              for missing persons to accessible coding tools for the visually impaired, I love using tech for 
              real change. I've led teams, won awards, and built across languages, models, and communities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-primary" />
                    My Mission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Building AI systems that bridge technological advancement with social impact, 
                    ensuring that innovation serves everyone, especially underserved communities.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-primary" />
                    What Drives Me
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    The intersection of AI/ML with real-world problems. Whether it's accessibility, 
                    cybersecurity, or social innovation, I'm passionate about creating technology 
                    that makes a tangible difference.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
              {skills.map((skill, index) => (
                <SkillBar
                  key={skill.skill}
                  skill={skill.skill}
                  percentage={skill.percentage}
                  icon={skill.icon}
                  delay={index * 200}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of my work in AI/ML, social impact technology, and innovative solutions 
              that have earned recognition and real-world impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Professional Experience</h2>
            <p className="text-xl text-muted-foreground">
              My journey in building impactful technology solutions across different organizations.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <TimelineItem 
                key={index} 
                {...exp} 
                isLeft={index % 2 === 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Leadership & Awards Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Leadership & Recognition</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-card text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>NSS Leadership</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Led 80+ volunteers across multiple social impact initiatives, 
                  organizing community drives and educational programs.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card text-center">
              <CardHeader>
                <Award className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                <CardTitle>Hackathon Success</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-muted-foreground">
                  <p>🥇 EcoSummit Winner 2024</p>
                  <p>🥉 Genesys Hackathon Finalist 2025</p>
                  <p>🏆 Best Societal Project 2024</p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card text-center">
              <CardHeader>
                <Heart className="h-12 w-12 text-red-500 mx-auto mb-4" />
                <CardTitle>Social Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Dedicated to using technology for social good, from accessibility 
                  tools to platforms connecting communities and solving real problems.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Let's Build Something Amazing</h2>
            <p className="text-xl text-muted-foreground">
              Whether it's collaborating on AI projects, discussing social innovation, 
              or exploring new opportunities — I'd love to connect!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Get In Touch</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>chitrangi.bhatnagar@example.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>India</span>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <Button variant="outline" size="sm" asChild>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Dine & Dialect
                  </a>
                </Button>
              </div>
            </div>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>
                  I'm always open to discussing new projects and opportunities.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Input placeholder="Your Name" />
                    </div>
                    <div>
                      <Input type="email" placeholder="Your Email" />
                    </div>
                  </div>
                  <div>
                    <Input placeholder="Subject" />
                  </div>
                  <div>
                    <Textarea placeholder="Your message..." rows={4} />
                  </div>
                  <Button className="w-full gradient-primary shadow-glow">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2024 Chitrangi Bhatnagar. Built with passion for inclusive technology.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
