import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { signIn, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (user) {
      navigate('/upload-selection');
    }
  }, [user, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { error } = await signIn(username, password);
    
    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      navigate('/upload-selection');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-brand-light-blue-gray/20 flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="pt-28 pb-16">
          <div className="container max-w-lg">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-3">Member Login</h1>
              <p className="text-muted-foreground">
                Access the GNEC upload portal for Podcast and NGO Reporter.
              </p>
            </div>

            <Card className="p-8">
              <CardContent className="p-0">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="p-3 rounded-md bg-red-50 border border-red-200">
                      <p className="text-sm text-red-600">{error}</p>
                    </div>
                  )}
                  
                  <div className="space-y-2">
                    <Label htmlFor="username">WordPress Username or Email</Label>
                    <Input
                      id="username"
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="your WordPress login"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-brand-green text-white hover:bg-brand-blue transition-colors rounded-full px-6 py-2.5 font-medium"
                  >
                    {loading ? "Signing in..." : "Sign In"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
