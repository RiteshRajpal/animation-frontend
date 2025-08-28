import { Card } from "@/components/ui/card";
import { CheckCircle, Zap, Shield, Users, Sparkles, Rocket, Target, Award } from "lucide-react";
import { useState } from "react";

const Features = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const features = [
    {
      icon: <Zap className="w-8 h-8 text-accent transition-all duration-300 group-hover:animate-bounce" />,
      title: "Lightning Fast",
      description: "Experience blazing-fast performance with our optimized infrastructure built for speed and reliability.",
      gradient: "from-accent/10 to-accent/5",
      bgIcon: "bg-accent/10"
    },
    {
      icon: <Shield className="w-8 h-8 text-primary transition-all duration-300 group-hover:animate-pulse" />,
      title: "Enterprise Security",
      description: "Bank-grade security protocols ensure your data remains protected with end-to-end encryption.",
      gradient: "from-primary/10 to-primary/5",
      bgIcon: "bg-primary/10"
    },
    {
      icon: <Users className="w-8 h-8 text-primary-glow transition-all duration-300 group-hover:animate-wave" />,
      title: "Team Collaboration",
      description: "Seamlessly collaborate with your team in real-time with advanced sharing and communication tools.",
      gradient: "from-primary-glow/10 to-primary-glow/5",
      bgIcon: "bg-primary-glow/10"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-accent transition-all duration-300 group-hover:animate-spin" />,
      title: "Quality Assurance",
      description: "Built-in quality checks and automated workflows ensure consistent, high-quality results every time.",
      gradient: "from-accent/10 to-accent/5",
      bgIcon: "bg-accent/10"
    },
    {
      icon: <Sparkles className="w-8 h-8 text-primary transition-all duration-300 group-hover:animate-pulse" />,
      title: "AI-Powered Insights",
      description: "Leverage artificial intelligence to gain deep insights and make data-driven decisions automatically.",
      gradient: "from-primary/10 to-primary/5",
      bgIcon: "bg-primary/10"
    },
    {
      icon: <Rocket className="w-8 h-8 text-primary-glow transition-all duration-300 group-hover:animate-bounce" />,
      title: "Rapid Deployment",
      description: "Deploy your solutions in minutes, not hours, with our streamlined deployment pipeline.",
      gradient: "from-primary-glow/10 to-primary-glow/5",
      bgIcon: "bg-primary-glow/10"
    },
    {
      icon: <Target className="w-8 h-8 text-accent transition-all duration-300 group-hover:animate-pulse" />,
      title: "Precision Analytics",
      description: "Get precise analytics and reporting with real-time dashboards and customizable metrics.",
      gradient: "from-accent/10 to-accent/5",
      bgIcon: "bg-accent/10"
    },
    {
      icon: <Award className="w-8 h-8 text-primary transition-all duration-300 group-hover:animate-wave" />,
      title: "Award Winning",
      description: "Recognized by industry leaders for innovation, usability, and outstanding customer satisfaction.",
      gradient: "from-primary/10 to-primary/5",
      bgIcon: "bg-primary/10"
    }
  ];

  return (
    <section id="features" className="py-24 px-6 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-up">
            Powerful <span className="text-gradient">Features</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-up-delay-1">
            Everything you need to transform your workflow and boost productivity. 
            Built with modern technology and designed for scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className={`group p-8 glass-card hover-scale shadow-card border-0 animate-fade-up-delay-${(index % 4) + 1} relative overflow-hidden transition-all duration-500`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Animated Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Floating Particles on Hover */}
              {hoveredCard === index && (
                <>
                  <div className="absolute top-4 right-4 w-2 h-2 bg-primary/40 rounded-full animate-bounce" style={{ animationDelay: "0s" }} />
                  <div className="absolute bottom-6 left-6 w-1 h-1 bg-accent/60 rounded-full animate-bounce" style={{ animationDelay: "0.5s" }} />
                  <div className="absolute top-1/2 right-8 w-1.5 h-1.5 bg-primary-glow/50 rounded-full animate-bounce" style={{ animationDelay: "1s" }} />
                </>
              )}
              
              <div className="relative z-10">
                <div className={`mb-6 p-4 ${feature.bgIcon} rounded-2xl w-fit transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
              
              {/* Shimmer Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-pulse" />
              </div>
            </Card>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center mt-20">
          <div className="glass-card p-12 rounded-3xl shadow-elegant max-w-4xl mx-auto animate-fade-up-delay-2 relative overflow-hidden group">
            {/* Animated Background Elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
            
            <div className="relative z-10">
              <div className="mb-6 inline-block animate-bounce-in">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent text-sm font-semibold px-4 py-2 rounded-full border border-primary/20">
                  ✨ Join 10,000+ Happy Users
                </span>
              </div>
              
              <h3 className="text-4xl font-bold mb-6">
                Ready to <span className="text-gradient animate-pulse">Transform</span> Your Business?
              </h3>
              
              <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
                Join thousands of teams already using TechFlow to streamline their workflow and boost productivity by up to <span className="text-primary font-semibold">300%</span>.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <button className="group bg-primary hover:bg-primary-glow text-primary-foreground px-8 py-4 rounded-xl font-semibold shadow-elegant hover-glow transition-all duration-300 relative overflow-hidden">
                  <span className="relative z-10 group-hover:animate-wave">Start Free Trial</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-glow to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
                <button className="glass-card hover-scale px-8 py-4 rounded-xl font-semibold transition-all duration-300 group relative">
                  <span className="group-hover:animate-shake">Schedule Demo</span>
                </button>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2 animate-fade-up">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>No Credit Card Required</span>
                </div>
                <div className="flex items-center gap-2 animate-fade-up-delay-1">
                  <Shield className="w-4 h-4 text-primary" />
                  <span>Enterprise Grade Security</span>
                </div>
                <div className="flex items-center gap-2 animate-fade-up-delay-2">
                  <Award className="w-4 h-4 text-primary" />
                  <span>99.9% Uptime SLA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;