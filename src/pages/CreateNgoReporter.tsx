import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Upload, CheckCircle } from "lucide-react";
import ProtectedRoute from "@/components/ProtectedRoute";
import { useAuth } from "@/contexts/AuthContext";
import { createNgoReporterIssue } from "@/lib/ngo-reporter-api";

export default function CreateNgoReporter() {
  const [volumeNumber, setVolumeNumber] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [link, setLink] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const { user, signOut } = useAuth();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!user || !volumeNumber || !date || !description || !link) {
      setError("Please fill in all required fields");
      return;
    }

    setLoading(true);
    setError("");

    try {
      await createNgoReporterIssue({
        volumeNumber,
        date,
        description,
        tags,
        link,
      });

      setSuccess(true);
      setVolumeNumber("");
      setDate("");
      setDescription("");
      setTags("");
      setLink("");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await signOut();
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gradient-to-b from-white to-brand-light-blue-gray/20 flex flex-col">
        <Navbar />
        <main className="flex-1">
          <section className="pt-28 pb-16">
            <div className="container max-w-2xl">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h1 className="text-4xl font-bold mb-3">Create NGO Reporter Issue</h1>
                  <p className="text-muted-foreground">
                    Welcome, {user?.email || user?.name || user?.username}. Upload a new NGO Reporter issue.
                  </p>
                </div>
                <Button
                  onClick={handleLogout}
                  variant="outline"
                  className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white"
                >
                  Logout
                </Button>
              </div>

              <Card className="p-8">
                <CardContent className="p-0">
                  {success && (
                    <div className="mb-6 p-4 rounded-md bg-green-50 border border-green-200 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <p className="text-sm text-green-600">NGO Reporter issue created successfully. WordPress should now expose it through the NGO Reporter API and store the issue details in Cloudinary.</p>
                    </div>
                  )}

                  {error && (
                    <div className="mb-6 p-4 rounded-md bg-red-50 border border-red-200">
                      <p className="text-sm text-red-600">{error}</p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="volumeNumber">Volume Number</Label>
                      <Input
                        id="volumeNumber"
                        type="number"
                        min="1"
                        value={volumeNumber}
                        onChange={(e) => setVolumeNumber(e.target.value)}
                        placeholder="48"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="date">Date</Label>
                      <Input
                        id="date"
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">Description</Label>
                      <Textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Describe this NGO Reporter issue"
                        className="min-h-[120px]"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="tags">Tags</Label>
                      <Input
                        id="tags"
                        value={tags}
                        onChange={(e) => setTags(e.target.value)}
                        placeholder="civil society, UN, partnerships"
                      />
                      <p className="text-xs text-muted-foreground">
                        Enter tags separated by commas
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="link">Read More Link</Label>
                      <Input
                        id="link"
                        type="url"
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                        placeholder="https://..."
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-brand-green text-white hover:bg-brand-blue transition-colors rounded-full px-6 py-2.5 font-medium disabled:opacity-50"
                    >
                      {loading ? (
                        <div className="flex items-center gap-2">
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                          Uploading...
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <Upload className="h-4 w-4" />
                          Create NGO Reporter Issue
                        </div>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </ProtectedRoute>
  );
}
