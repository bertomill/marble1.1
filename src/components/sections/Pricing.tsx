import React from "react";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonVariant: "primary" | "secondary" | "outline";
  popular?: boolean;
}

export const Pricing: React.FC = () => {
  const tiers: PricingTier[] = [
    {
      name: "Free",
      price: "$0",
      description: "Perfect for trying out Marble UI",
      features: [
        "10 basic components",
        "Community support",
        "One project",
        "Basic documentation"
      ],
      buttonText: "Get Started",
      buttonVariant: "outline"
    },
    {
      name: "Pro",
      price: "$15",
      description: "For individual developers and small teams",
      features: [
        "All 150+ components",
        "Premium templates",
        "Priority support",
        "Advanced animations",
        "No attribution required"
      ],
      buttonText: "Subscribe to Pro",
      buttonVariant: "primary",
      popular: true
    },
    {
      name: "Team",
      price: "$49",
      description: "For organizations and larger teams",
      features: [
        "Everything in Pro",
        "Unlimited team members",
        "Team collaboration",
        "Custom branding",
        "Enterprise support",
        "API access"
      ],
      buttonText: "Contact Sales",
      buttonVariant: "secondary"
    }
  ];

  return (
    <section className="py-24 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
        <p className="text-xl text-gray-400 mb-16 max-w-2xl mx-auto">
          Choose the plan that's right for you. All plans include 14-day free trial.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <Card
              key={tier.name}
              className={`
                flex flex-col h-full
                ${tier.popular ? 'border-2 border-purple-500 relative' : ''}
              `}
            >
              {tier.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-bold">{tier.name}</h3>
                <div className="mt-4 mb-2">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className="text-gray-400 ml-2">/month</span>
                </div>
                <p className="text-gray-400">{tier.description}</p>
              </div>
              
              <ul className="space-y-3 mb-8 flex-grow">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="mt-auto">
                <Button variant={tier.buttonVariant} className="w-full">
                  {tier.buttonText}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};