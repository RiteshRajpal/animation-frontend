import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "glass-card shadow-elegant backdrop-blur-lg" 
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="animate-fade-up">
            <h1 className="text-2xl font-bold text-gradient">TechFlow</h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-8 animate-fade-up-delay-1">
            <button 
              onClick={() => scrollToSection("hero")}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("features")}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              Contact
            </button>
          </div>

          <div className="animate-fade-up-delay-2">
            <Button 
              variant="default"
              className="bg-primary hover:bg-primary-glow shadow-elegant hover-glow"
              onClick={() => scrollToSection("features")}
            >
              Get Started
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;