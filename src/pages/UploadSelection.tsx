import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mic, Newspaper, LogOut } from "lucide-react";
import ProtectedRoute from "@/components/ProtectedRoute";
import { useAuth } from "@/contexts/AuthContext";

export default function UploadSelection() {
  const { user, signOut } = useAuth();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLogout = async () => {
    await signOut();
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gradient-to-b from-white to-brand-light-blue-gray/20 flex flex-col">
        <Navbar />
        <main className="flex-1">
          <section className="pt-28 pb-16">
            <div className="container max-w-5xl">
              <div className="flex justify-between items-center mb-10 gap-4">
                <div>
                  <h1 className="text-4xl font-bold mb-3">Choose Upload System</h1>
                  <p className="text-muted-foreground">
                    Logged in as {user?.email || user?.name || user?.username}. Select where you want to publish content.
                  </p>
                </div>
                <Button
                  onClick={handleLogout}
                  variant="outline"
                  className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-8">
                  <CardContent className="p-0">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Mic className="h-7 w-7 text-primary" />
                      </div>
                      <h2 className="text-2xl font-bold">Podcast Upload</h2>
                    </div>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Create a new podcast episode with episode number, title, tags, description, category, audio, and optional cover image.
                    </p>
                    <Button asChild className="w-full bg-brand-green text-white hover:bg-brand-blue transition-colors rounded-full px-6 py-2.5 font-medium">
                      <Link to="/create-podcast">Go to Podcast Upload</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="p-8">
                  <CardContent className="p-0">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Newspaper className="h-7 w-7 text-primary" />
                      </div>
                      <h2 className="text-2xl font-bold">NGO Reporter Upload</h2>
                    </div>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Create a new NGO Reporter issue with volume number, date, description, tags, and the Read More link.
                    </p>
                    <Button asChild className="w-full bg-brand-green text-white hover:bg-brand-blue transition-colors rounded-full px-6 py-2.5 font-medium">
                      <Link to="/create-ngo-reporter">Go to NGO Reporter Upload</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </ProtectedRoute>
  );
}
