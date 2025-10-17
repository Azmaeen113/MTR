import { Zap, Shield, Trophy, Sparkles, Clock, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Benefits = () => {
  const travelerBenefits = [
    {
      icon: Zap,
      title: "Earn Passive Rewards",
      description: "Accumulate tokens automatically with every booking",
    },
    {
      icon: Trophy,
      title: "Exclusive Discounts",
      description: "Access special rates and premium deals",
    },
    {
      icon: Sparkles,
      title: "Investment Opportunities",
      description: "Grow your portfolio with token appreciation",
    },
    {
      icon: Clock,
      title: "Flexible Redemption",
      description: "Use tokens when and where you want",
    },
    {
      icon: Shield,
      title: "Priority Booking",
      description: "Get first access to limited availability",
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "200+ partners worldwide at your service",
    },
  ];

  return (
    <section id="benefits" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose <span className="gradient-text">MTR Token</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Unlock a world of exclusive benefits designed for the modern traveler
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {travelerBenefits.map((benefit, index) => (
              <Card
                key={index}
                className="glass-card border-border/50 hover:shadow-strong transition-all duration-300 hover:-translate-y-2 group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center shadow-medium group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center glass-card p-12 rounded-2xl shadow-strong">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of travelers who are already earning rewards and building their travel portfolio with MTR Token.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 luxury-button rounded-lg font-semibold shadow-medium hover:shadow-strong hover:scale-105 transition-all duration-300">
                Get Started Now
              </button>
              <button className="px-8 py-4 bg-gradient-accent text-accent-foreground rounded-lg font-semibold shadow-glow hover:scale-105 transition-all duration-300 gold-glow">
                View Partnerships
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
