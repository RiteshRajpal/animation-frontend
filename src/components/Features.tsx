import { Card } from "@/components/ui/card";
import { CheckCircle, Zap, Shield, Users } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-accent" />,
      title: "Lightning Fast",
      description: "Experience blazing-fast performance with our optimized infrastructure built for speed and reliability."
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Enterprise Security",
      description: "Bank-grade security protocols ensure your data remains protected with end-to-end encryption."
    },
    {
      icon: <Users className="w-8 h-8 text-primary-glow" />,
      title: "Team Collaboration",
      description: "Seamlessly collaborate with your team in real-time with advanced sharing and communication tools."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-accent" />,
      title: "Quality Assurance",
      description: "Built-in quality checks and automated workflows ensure consistent, high-quality results every time."
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className={`p-8 glass-card hover-scale shadow-card border-0 animate-fade-up-delay-${index % 4 + 1}`}
            >
              <div className="mb-6 p-3 bg-primary/10 rounded-2xl w-fit">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="glass-card p-12 rounded-3xl shadow-elegant max-w-3xl mx-auto animate-fade-up-delay-2">
            <h3 className="text-3xl font-bold mb-4">
              Ready to <span className="text-gradient">Get Started</span>?
            </h3>
            <p className="text-muted-foreground mb-8 text-lg">
              Join thousands of teams already using TechFlow to streamline their workflow and boost productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary hover:bg-primary-glow text-primary-foreground px-8 py-4 rounded-xl font-semibold shadow-elegant hover-glow transition-all duration-300">
                Start Free Trial
              </button>
              <button className="glass-card hover-scale px-8 py-4 rounded-xl font-semibold transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;