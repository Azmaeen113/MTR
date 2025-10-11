import { Users, Lock, Rocket, Gift } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { TrendingUp } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

const Tokenomics = () => {
  const { isDark } = useTheme();
  const distribution = [
    { name: "Traveler Rewards", value: 40, color: "hsl(var(--primary))", icon: Gift },
    { name: "Liquidity Pool", value: 25, color: "hsl(var(--secondary))", icon: TrendingUp },
    { name: "Team & Development", value: 15, color: "hsl(var(--accent))", icon: Users },
    { name: "Marketing", value: 10, color: "hsl(205 85% 65%)", icon: Rocket },
    { name: "Reserve Fund", value: 10, color: "hsl(187 85% 60%)", icon: Lock },
  ];

  const metrics = [
    { label: "Total Supply", value: "100M MTR" },
    { label: "Circulating Supply", value: "35M MTR" },
    { label: "Market Cap", value: "$15.8M" },
    { label: "Holders", value: "10,234" },
  ];

  return (
    <section id="tokenomics" className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Tokenomics</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Transparent, sustainable, and designed for long-term value creation
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* Key Metrics */}
          <div className="grid md:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <Card
                key={index}
                className="glass-card border-border/50 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">
                    {metric.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{metric.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Distribution */}
          <Card className="glass-card border-border/50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-8 text-center">Token Distribution</h3>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Interactive Pie Chart */}
                <div className="h-[400px] relative">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={distribution}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, value }) => `${value}%`}
                        outerRadius={140}
                        innerRadius={80}
                        paddingAngle={2}
                        dataKey="value"
                        animationBegin={0}
                        animationDuration={1000}
                        animationEasing="ease-out"
                      >
                        {distribution.map((entry, index) => (
                          <Cell 
                            key={`cell-${index}`} 
                            fill={entry.color}
                            stroke="hsl(var(--background))"
                            strokeWidth={3}
                            className="hover:opacity-80 transition-opacity cursor-pointer"
                          />
                        ))}
                      </Pie>
                      <Tooltip
                        contentStyle={{
                          background: "hsl(var(--card))",
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "0.75rem",
                          boxShadow: "var(--shadow-medium)",
                        }}
                        formatter={(value: number) => [`${value}%`, "Distribution"]}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="text-center">
                      <img 
                        src={isDark ? "/mtr logo.png" : "/light mode logo.png"}
                        alt="MTR Token" 
                        className="h-16 w-16 mx-auto mb-2"
                      />
                      <div className="text-2xl font-bold gradient-text">100M</div>
                      <div className="text-xs text-muted-foreground">Total Supply</div>
                    </div>
                  </div>
                </div>

                {/* Distribution Legend */}
                <div className="space-y-4">
                  {distribution.map((item, index) => (
                    <div 
                      key={index} 
                      className="group p-4 rounded-xl border border-border/50 hover:border-border transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer animate-slide-in-right"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div 
                            className="w-10 h-10 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110"
                            style={{ background: item.color }}
                          >
                            <item.icon className="h-5 w-5 text-white" />
                          </div>
                          <span className="font-semibold text-lg">{item.name}</span>
                        </div>
                        <span className="text-3xl font-bold gradient-accent-text">
                          {item.value}%
                        </span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-1000 ease-out group-hover:shadow-glow"
                          style={{ 
                            width: `${item.value}%`,
                            background: item.color
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
