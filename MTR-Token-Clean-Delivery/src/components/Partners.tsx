import { Plane, Hotel, MapPin, Ship, Car, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Partners = () => {
  const partnerCategories = [
    { icon: Plane, name: "Airlines", count: 85 },
    { icon: Hotel, name: "Hotels", count: 120 },
    { icon: MapPin, name: "Tour Operators", count: 50 },
    { icon: Ship, name: "Cruise Lines", count: 15 },
    { icon: Car, name: "Car Rentals", count: 45 },
    { icon: Building2, name: "Travel Agencies", count: 30 },
  ];

  return (
    <section id="partners" className="py-24 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Partners</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Join our growing network of premium travel providers worldwide
          </p>
        </div>

        {/* Partner Categories */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {partnerCategories.map((category, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-2xl text-center space-y-3 hover:shadow-strong transition-all duration-300 hover:-translate-y-2 group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-xl flex items-center justify-center shadow-medium group-hover:scale-110 transition-transform duration-300">
                  <category.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-2xl font-bold gradient-accent-text">{category.count}+</div>
                  <div className="text-sm text-muted-foreground">{category.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partner Logos Placeholder */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="glass-card p-12 rounded-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
              {[...Array(8)].map((_, index) => (
                <div
                  key={index}
                  className="w-32 h-20 bg-muted/50 rounded-lg flex items-center justify-center hover:bg-muted transition-colors duration-300"
                >
                  <span className="text-muted-foreground font-semibold">Partner {index + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-3xl mx-auto text-center glass-card p-12 rounded-2xl shadow-strong">
          <h3 className="text-3xl font-bold mb-4">Become a Partner</h3>
          <p className="text-xl text-muted-foreground mb-8">
            Join the MTR network and offer your customers exclusive token rewards. Increase bookings and customer loyalty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Partner With Us
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
