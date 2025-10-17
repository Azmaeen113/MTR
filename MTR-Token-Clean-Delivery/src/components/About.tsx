import { Coins, TrendingUp, Gift } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const features = [
    {
      icon: Coins,
      title: "Earn Rewards",
      description: "Accumulate MTR tokens with every booking. The more you travel, the more you earn. Turn your wanderlust into wealth.",
    },
    {
      icon: TrendingUp,
      title: "Invest & Grow",
      description: "Watch your tokens appreciate in value. Invest in exclusive travel opportunities and grow your portfolio with every adventure.",
    },
    {
      icon: Gift,
      title: "Redeem Benefits",
      description: "Use your tokens for premium upgrades, exclusive discounts, and VIP experiences. Your rewards, your way.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What is <span className="gradient-text">MTR Token?</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            MTR (Travel Royalties) is a revolutionary reward token system that transforms the way you experience travel. 
            Earn tokens for your journeys, invest in future adventures, and unlock exclusive benefits in the travel ecosystem.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glass-card hover:shadow-strong transition-all duration-300 hover:-translate-y-2 animate-scale-in border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-8 pb-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-2xl flex items-center justify-center shadow-medium">
                  <feature.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Counter */}
        <div className="mt-20 p-8 glass-card rounded-2xl max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold gradient-accent-text mb-2">$5M+</div>
              <div className="text-muted-foreground">Total Value Locked</div>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-accent-text mb-2">150+</div>
              <div className="text-muted-foreground">Countries Supported</div>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-accent-text mb-2">24/7</div>
              <div className="text-muted-foreground">Customer Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
