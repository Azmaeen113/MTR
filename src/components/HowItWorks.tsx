import { Plane, Wallet, Lock, CircleDollarSign, Sparkles } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Plane,
      title: "Book Your Travel",
      description: "Book flights, hotels, or tours with our partner travel agencies and start earning instantly.",
    },
    {
      icon: CircleDollarSign,
      title: "Earn MTR Tokens",
      description: "Receive MTR tokens based on your booking value. The more you travel, the more you earn.",
    },
    {
      icon: Wallet,
      title: "Store in Your Wallet",
      description: "Hold tokens securely in your digital wallet. Track your balance and watch your portfolio grow.",
    },
    {
      icon: Lock,
      title: "Invest or Redeem",
      description: "Choose to invest tokens for potential returns or redeem them for travel benefits and upgrades.",
    },
    {
      icon: Sparkles,
      title: "Grow Your Portfolio",
      description: "Watch your travel investments compound. Turn every journey into a long-term asset.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How <span className="gradient-text">MTR Token</span> Works
          </h2>
          <p className="text-xl text-muted-foreground">
            Five simple steps to transform your travel into a rewarding investment
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-primary transform -translate-x-1/2" />

            {/* Steps */}
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-center gap-8 animate-slide-up`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Left Content (odd indexes) */}
                  {index % 2 === 0 ? (
                    <>
                      <div className="flex-1 text-center md:text-right">
                        <div className="glass-card p-6 inline-block rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300">
                          <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                          <p className="text-muted-foreground">{step.description}</p>
                        </div>
                      </div>
                      
                      {/* Icon Circle */}
                      <div className="relative z-10 flex-shrink-0">
                        <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center shadow-strong">
                          <step.icon className="h-10 w-10 text-primary-foreground" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center shadow-glow font-bold text-sm text-accent-foreground">
                          {index + 1}
                        </div>
                      </div>
                      
                      <div className="flex-1 hidden md:block" />
                    </>
                  ) : (
                    <>
                      <div className="flex-1 hidden md:block" />
                      
                      {/* Icon Circle */}
                      <div className="relative z-10 flex-shrink-0">
                        <div className="w-20 h-20 bg-gradient-secondary rounded-full flex items-center justify-center shadow-strong">
                          <step.icon className="h-10 w-10 text-secondary-foreground" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center shadow-glow font-bold text-sm text-accent-foreground">
                          {index + 1}
                        </div>
                      </div>

                      {/* Right Content (even indexes) */}
                      <div className="flex-1 text-center md:text-left">
                        <div className="glass-card p-6 inline-block rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300">
                          <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                          <p className="text-muted-foreground">{step.description}</p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
