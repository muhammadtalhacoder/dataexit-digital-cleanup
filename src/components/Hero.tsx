
import { ArrowRight, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="px-6 pt-24 pb-20 md:pt-32 md:pb-28">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="inline-flex items-center px-4 py-2 bg-accent rounded-full text-sm font-medium text-muted animate-fadeIn opacity-0" style={{ animationDelay: "0.2s" }}>
            <Shield className="w-4 h-4 mr-2" />
            Privacy-First by Design
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold font-display leading-tight max-w-4xl animate-fadeIn opacity-0" style={{ animationDelay: "0.4s" }}>
            Take Control of Your Digital Footprint
          </h1>
          
          <p className="text-lg md:text-xl text-muted max-w-2xl animate-fadeIn opacity-0" style={{ animationDelay: "0.6s" }}>
            Discover and delete old online accounts you've forgotten about. 
            Protect your privacy with our intelligent inbox scanner.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fadeIn opacity-0" style={{ animationDelay: "0.8s" }}>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Join the Waitlist
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              How it Works
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
