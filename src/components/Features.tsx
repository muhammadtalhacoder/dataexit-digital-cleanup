
import { Inbox, Search, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Inbox,
    title: "Connect Your Inbox",
    description: "Securely connect your Gmail or Outlook account. We never store your email data.",
  },
  {
    icon: Search,
    title: "Detect Accounts",
    description: "Our AI-powered scanner identifies old accounts and subscriptions you might have forgotten.",
  },
  {
    icon: ShieldCheck,
    title: "Take Control",
    description: "Easily delete accounts, unsubscribe from services, or request data removal - all in one place.",
  },
];

export const Features = () => {
  return (
    <section className="py-20 bg-accent/50">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            How DataExit Works
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Our privacy-focused approach helps you regain control of your digital presence in three simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-sm animate-fadeIn opacity-0"
              style={{ animationDelay: `${0.2 * (index + 1)}s` }}
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
