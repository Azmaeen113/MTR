import { Rocket, Users, Building, Smartphone, Globe, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Roadmap = () => {
  const phases = [
    {
      quarter: "Q1 2024",
      status: "completed",
      icon: Rocket,
      title: "Token Launch",
      milestones: [
        "MTR Token smart contract deployment",
        "Initial liquidity pool creation",
        "Community building & marketing",
        "Website and documentation launch",
      ],
    },
    {
      quarter: "Q2 2024",
      status: "completed",
      icon: Users,
      title: "Partner Onboarding",
      milestones: [
        "First 50 travel partners integrated",
        "Beta testing with early adopters",
        "Reward distribution system launch",
        "Community governance framework",
      ],
    },
    {
      quarter: "Q3 2024",
      status: "in-progress",
      icon: Building,
      title: "Exchange Listings",
      milestones: [
        "Major DEX listings",
        "Strategic partnerships with travel agencies",
        "Enhanced wallet integration",
        "Staking mechanism implementation",
      ],
    },
    {
      quarter: "Q4 2024",
      status: "upcoming",
      icon: Smartphone,
      title: "Mobile App Release",
      milestones: [
        "iOS and Android app launch",
        "In-app booking functionality",
        "Real-time token tracking",
        "Push notifications for rewards",
      ],
    },
    {
      quarter: "Q1 2025",
      status: "upcoming",
      icon: Globe,
      title: "Global Expansion",
      milestones: [
        "200+ partner integrations",
        "Multi-currency support",
        "International travel insurance",
        "CEX listings",
      ],
    },
    {
      quarter: "Q2 2025",
      status: "upcoming",
      icon: Sparkles,
      title: "Advanced Features",
      milestones: [
        "AI-powered travel recommendations",
        "NFT travel collectibles",
        "Metaverse travel experiences",
        "DAO governance launch",
      ],
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-emerald-500";
      case "in-progress":
        return "bg-accent";
      case "upcoming":
        return "bg-muted";
      default:
        return "bg-muted";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "completed":
        return "Completed";
      case "in-progress":
        return "In Progress";
      case "upcoming":
        return "Upcoming";
      default:
        return status;
    }
  };

  return (
    <section id="roadmap" className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Project <span className="gradient-text">Roadmap</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Our journey to revolutionize travel rewards
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {phases.map((phase, index) => (
              <Card
                key={index}
                className="glass-card border-border/50 hover:shadow-strong transition-all duration-300 group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 space-y-4">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 ${getStatusColor(phase.status)} rounded-xl flex items-center justify-center shadow-medium group-hover:scale-110 transition-transform duration-300`}>
                        <phase.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{phase.quarter}</div>
                        <div className="font-semibold">{phase.title}</div>
                      </div>
                    </div>
                  </div>

                  {/* Status Badge */}
                  <div className="flex items-center gap-2">
                    <div className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(phase.status)} text-white`}>
                      {getStatusLabel(phase.status)}
                    </div>
                    {phase.status === "in-progress" && (
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                        <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: "0.2s" }} />
                        <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: "0.4s" }} />
                      </div>
                    )}
                  </div>

                  {/* Milestones */}
                  <ul className="space-y-2">
                    {phase.milestones.map((milestone, mIndex) => (
                      <li key={mIndex} className="flex items-start gap-2 text-sm">
                        <div className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${
                          phase.status === "completed" ? "bg-emerald-500" :
                          phase.status === "in-progress" ? "bg-accent" :
                          "bg-muted-foreground/50"
                        }`} />
                        <span className="text-muted-foreground">{milestone}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Progress Bar for In-Progress */}
                  {phase.status === "in-progress" && (
                    <div className="pt-2">
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-gradient-accent h-full rounded-full transition-all duration-1000" style={{ width: "65%" }} />
                      </div>
                      <div className="text-xs text-muted-foreground text-right mt-1">65% Complete</div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
