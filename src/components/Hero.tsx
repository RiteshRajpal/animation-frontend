import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";
import ParticleSystem from "./ParticleSystem";
import AnimatedCounter from "./AnimatedCounter";
import { useState, useEffect } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 hero-gradient">
        <div 
          className="absolute inset-0 opacity-30 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
        
        {/* Particle System */}
        <ParticleSystem />
        
        {/* Interactive Mouse Follower */}
        <div 
          className="absolute w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float pulse-ring" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 morphing-shape blur-xl animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary-glow/20 rounded-full blur-lg animate-float animate-rotate-slow" style={{ animationDelay: "4s" }} />
      <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-accent/30 rounded-full animate-bounce-in animate-pulse-glow" style={{ animationDelay: "6s" }} />
      <div className="absolute bottom-1/3 left-1/6 w-24 h-24 bg-primary-glow/15 morphing-shape animate-float" style={{ animationDelay: "8s" }} />

      {/* Enhanced Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="mb-4 animate-bounce-in">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold animate-pulse-glow">
            🚀 Now with AI-Powered Features
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-up">
          <span className="text-gradient typewriter">Revolutionize</span>
          <br />
          <span className="animate-slide-left">Your Workflow</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto animate-fade-up-delay-1">
          Streamline your processes with our <span className="text-primary font-semibold animate-pulse">cutting-edge platform</span> designed for modern teams who demand excellence.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-delay-2">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary-glow shadow-elegant hover-glow px-8 py-4 text-lg magnetic-hover group relative overflow-hidden"
            onClick={() => scrollToSection("features")}
          >
            <span className="relative z-10">Explore Features</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-glow to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="glass-card hover-scale px-8 py-4 text-lg group relative overflow-hidden"
            onClick={() => scrollToSection("contact")}
          >
            <span className="relative z-10 group-hover:animate-wave">Get In Touch</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-all duration-500" />
          </Button>
        </div>

        {/* Enhanced Animated Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-fade-up-delay-3">
          <div className="glass-card p-6 rounded-2xl hover-scale group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <AnimatedCounter 
                end={10000} 
                suffix="+" 
                className="text-3xl font-bold text-gradient mb-2" 
              />
              <div className="text-muted-foreground group-hover:text-primary transition-colors duration-300">Active Users</div>
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary/20 rounded-full blur-sm group-hover:animate-bounce" />
          </div>
          
          <div className="glass-card p-6 rounded-2xl hover-scale group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <AnimatedCounter 
                end={99.9} 
                suffix="%" 
                className="text-3xl font-bold text-gradient mb-2" 
              />
              <div className="text-muted-foreground group-hover:text-accent transition-colors duration-300">Uptime</div>
            </div>
            <div className="absolute -top-2 -left-2 w-6 h-6 bg-accent/30 rounded-full blur-sm group-hover:animate-pulse" />
          </div>
          
          <div className="glass-card p-6 rounded-2xl hover-scale group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-glow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <AnimatedCounter 
                end={50} 
                suffix="+" 
                className="text-3xl font-bold text-gradient mb-2" 
              />
              <div className="text-muted-foreground group-hover:text-primary-glow transition-colors duration-300">Integrations</div>
            </div>
            <div className="absolute top-1/2 right-2 w-4 h-4 bg-primary-glow/40 rounded-full blur-sm group-hover:animate-spin" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;