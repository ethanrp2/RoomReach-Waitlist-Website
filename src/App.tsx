import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Building2, ArrowRight, Users, ClipboardSignature, Search } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

function App() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    toast.success("You've been added to the waitlist!", {
      description: "We'll notify you when RoomReach launches.",
    });
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-neutral-50 to-orange-50 flex flex-col">
      <Toaster />
      <div className="container mx-auto px-4 py-12 md:py-24 flex-grow">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-3 mb-8">
            <Building2 className="h-10 w-10 text-primary" />
            <span className="text-3xl font-bold">RoomReach</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 bg-clip-text">
            Find Your Perfect Room<br></br>@ UIUC
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mb-12">
            Join our waitlist! Be the the first to know when we launch our revolutionary housing platform.
          </p>
          
          <form onSubmit={handleSubmit} className="w-full max-w-md mb-24">
            <div className="flex gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="h-12 rounded-full shadow-md border-2 border-orange-100 bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 hover:border-primary/50 transition-all duration-300"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button 
                type="submit" 
                className="h-12 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
              >
                Join
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </form>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
            <div className="group flex flex-col items-center p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-orange-100/50 shadow-sm hover:shadow-lg hover:bg-white/90 transition-all duration-300 hover:-translate-y-1">
              <div className="p-4 rounded-xl bg-orange-50 group-hover:bg-orange-100 transition-colors duration-300">
                <Search className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mt-6 mb-3">Smart Housing Search</h3>
              <p className="text-muted-foreground">
                Find student-friendly housing options near your campus with advanced filters and virtual tours.
              </p>
            </div>

            <div className="group flex flex-col items-center p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-orange-100/50 shadow-sm hover:shadow-lg hover:bg-white/90 transition-all duration-300 hover:-translate-y-1">
              <div className="p-4 rounded-xl bg-orange-50 group-hover:bg-orange-100 transition-colors duration-300">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mt-6 mb-3">Roommate Matching</h3>
              <p className="text-muted-foreground">
                Connect with potential roommates based on lifestyle, interests, and living preferences.
              </p>
            </div>

            <div className="group flex flex-col items-center p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-orange-100/50 shadow-sm hover:shadow-lg hover:bg-white/90 transition-all duration-300 hover:-translate-y-1">
              <div className="p-4 rounded-xl bg-orange-50 group-hover:bg-orange-100 transition-colors duration-300">
                <ClipboardSignature className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mt-6 mb-3">Group Leasing</h3>
              <p className="text-muted-foreground">
                Form roommate groups and streamline the lease signing process together, all in one place.
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer className="w-full py-6 text-center text-sm text-muted-foreground/80 border-t border-orange-100/50 bg-white/50 backdrop-blur-sm">
        RoomReach © 2025. All rights reserved.
      </footer>
    </div>
  );
}

export default App;