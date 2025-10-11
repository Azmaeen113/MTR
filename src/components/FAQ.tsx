import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "How do I earn MTR tokens?",
      answer: "You earn MTR tokens automatically with every booking you make through our partner travel agencies. The token amount is based on your booking value - typically 1-5% of your purchase in MTR tokens. Simply create an account, link your wallet, and start booking!",
    },
    {
      question: "How do I store my MTR tokens securely?",
      answer: "MTR tokens can be stored in any compatible cryptocurrency wallet that supports ERC-20 tokens. We recommend using hardware wallets like Ledger or software wallets like MetaMask for optimal security. Always enable two-factor authentication and never share your private keys.",
    },
    {
      question: "What investment opportunities are available?",
      answer: "You can invest your MTR tokens through several mechanisms: staking for passive rewards (8-12% APY), liquidity provision on decentralized exchanges, or holding for potential token appreciation. We also offer exclusive investment opportunities in travel-related ventures for token holders.",
    },
    {
      question: "How can I redeem my tokens?",
      answer: "Redeem your MTR tokens for various travel benefits: flight upgrades, hotel room upgrades, tour packages, car rentals, or even convert them to partner loyalty points. Visit the redemption portal in your account dashboard to see all available options.",
    },
    {
      question: "What security measures protect MTR tokens?",
      answer: "MTR tokens utilize industry-standard security protocols including: smart contract audits by leading firms, multi-signature wallet requirements, regular security assessments, and 24/7 monitoring. Our platform also employs advanced encryption and follows best practices for digital asset protection.",
    },
    {
      question: "Can I transfer MTR tokens to other users?",
      answer: "Yes! MTR tokens are fully transferable. You can send tokens to any compatible wallet address. However, note that transferring tokens to unverified addresses may affect your eligibility for certain partner benefits and rewards programs.",
    },
    {
      question: "What is the minimum booking value to earn tokens?",
      answer: "There is no minimum booking value to earn MTR tokens. However, the token reward is proportional to your booking value. Typically, bookings over $100 receive the standard reward rate, while larger bookings may qualify for bonus multipliers.",
    },
    {
      question: "How do I track my token balance and rewards?",
      answer: "Access your personalized dashboard through our website or mobile app (coming Q4 2024) to view your current token balance, reward history, pending rewards, staking positions, and available redemption options in real-time.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <div className="w-16 h-16 mx-auto mb-6 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-strong">
            <HelpCircle className="h-8 w-8 text-primary-foreground" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about MTR Token
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card border-border/50 px-6 rounded-lg animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="text-lg font-semibold pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Contact CTA */}
          <div className="mt-12 text-center glass-card p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-3">Still have questions?</h3>
            <p className="text-muted-foreground mb-6">
              Our support team is here to help you 24/7
            </p>
            <button className="px-6 py-3 bg-gradient-primary text-primary-foreground rounded-lg font-semibold shadow-medium hover:shadow-strong hover:scale-105 transition-all duration-300">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
