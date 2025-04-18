
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState<string | null>(null);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thanks for your interest!",
      description: "We'll notify you when DataExit launches.",
    });
    setEmail("");
  };

  return (
    <section className="py-20 px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Ready to Delete Your Digital Past?
          </h2>
          <p className="text-muted mb-8">
            Join our waitlist to get early access and help shape the future of digital privacy.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1"
                required
              />
              <Button type="submit" className="bg-primary hover:bg-primary/90">
                Join Waitlist
              </Button>
            </div>

            {email && (
              <div className="animate-fadeIn">
                <p className="text-sm text-muted mb-3">Would you use this product?</p>
                <div className="flex justify-center gap-4">
                  {["Yes", "Maybe", "Not for me"].map((option) => (
                    <Button
                      key={option}
                      type="button"
                      variant={interest === option ? "default" : "outline"}
                      size="sm"
                      onClick={() => setInterest(option)}
                    >
                      {option}
                    </Button>
                  ))}
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
