import { Mail, Phone, MapPin, Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-gradient-to-t from-primary/5 to-background py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-up">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-up-delay-1">
            Ready to transform your workflow? Get in touch with our team and discover how TechFlow can revolutionize your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Contact Info */}
          <div className="glass-card p-8 rounded-2xl shadow-card hover-scale animate-fade-up">
            <div className="mb-6 p-3 bg-primary/10 rounded-2xl w-fit">
              <Mail className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Email Us</h3>
            <p className="text-muted-foreground mb-2">General inquiries:</p>
            <a href="mailto:hello@techflow.com" className="text-primary hover:text-primary-glow transition-colors duration-300">
              hello@techflow.com
            </a>
            <p className="text-muted-foreground mb-2 mt-4">Support:</p>
            <a href="mailto:support@techflow.com" className="text-primary hover:text-primary-glow transition-colors duration-300">
              support@techflow.com
            </a>
          </div>

          <div className="glass-card p-8 rounded-2xl shadow-card hover-scale animate-fade-up-delay-1">
            <div className="mb-6 p-3 bg-accent/10 rounded-2xl w-fit">
              <Phone className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Call Us</h3>
            <p className="text-muted-foreground mb-2">Sales:</p>
            <a href="tel:+1-555-0123" className="text-primary hover:text-primary-glow transition-colors duration-300">
              +1 (555) 012-3456
            </a>
            <p className="text-muted-foreground mb-2 mt-4">Support:</p>
            <a href="tel:+1-555-0789" className="text-primary hover:text-primary-glow transition-colors duration-300">
              +1 (555) 078-9012
            </a>
          </div>

          <div className="glass-card p-8 rounded-2xl shadow-card hover-scale animate-fade-up-delay-2">
            <div className="mb-6 p-3 bg-primary-glow/10 rounded-2xl w-fit">
              <MapPin className="w-8 h-8 text-primary-glow" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Visit Us</h3>
            <p className="text-muted-foreground leading-relaxed">
              123 Innovation Drive<br />
              Tech Valley, CA 94043<br />
              United States
            </p>
            <p className="text-muted-foreground mt-4">
              Mon-Fri: 9:00 AM - 6:00 PM PST
            </p>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-gradient mb-2">TechFlow</h3>
              <p className="text-muted-foreground">Revolutionizing workflows since 2024</p>
            </div>
            
            <div className="flex space-x-6">
              <a 
                href="#" 
                className="p-3 glass-card rounded-full hover-scale hover-glow transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-foreground" />
              </a>
              <a 
                href="#" 
                className="p-3 glass-card rounded-full hover-scale hover-glow transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-foreground" />
              </a>
              <a 
                href="#" 
                className="p-3 glass-card rounded-full hover-scale hover-glow transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-foreground" />
              </a>
            </div>
          </div>
          
          <div className="text-center mt-8 pt-8 border-t border-border/30">
            <p className="text-muted-foreground">
              © 2024 TechFlow. All rights reserved. Built with precision and care.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;