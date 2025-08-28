import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 hero-gradient">
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary-glow/20 rounded-full blur-lg animate-float" style={{ animationDelay: "4s" }} />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-up">
          <span className="text-gradient">Revolutionize</span>
          <br />
          Your Workflow
        </h1>
        
        <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto animate-fade-up-delay-1">
          Streamline your processes with our cutting-edge platform designed for modern teams who demand excellence.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-delay-2">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary-glow shadow-elegant hover-glow px-8 py-4 text-lg"
            onClick={() => scrollToSection("features")}
          >
            Explore Features
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="glass-card hover-scale px-8 py-4 text-lg"
            onClick={() => scrollToSection("contact")}
          >
            Get In Touch
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-fade-up-delay-3">
          <div className="glass-card p-6 rounded-2xl hover-scale">
            <div className="text-3xl font-bold text-gradient mb-2">10K+</div>
            <div className="text-muted-foreground">Active Users</div>
          </div>
          <div className="glass-card p-6 rounded-2xl hover-scale">
            <div className="text-3xl font-bold text-gradient mb-2">99.9%</div>
            <div className="text-muted-foreground">Uptime</div>
          </div>
          <div className="glass-card p-6 rounded-2xl hover-scale">
            <div className="text-3xl font-bold text-gradient mb-2">50+</div>
            <div className="text-muted-foreground">Integrations</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;