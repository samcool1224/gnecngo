import { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { PodcastEpisode as PodcastEpisodeRecord, fetchPodcastEpisodeByNumber } from "@/lib/podcast-api";

export default function PodcastEpisode() {
  const { episode } = useParams<{ episode: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const [data, setData] = useState<PodcastEpisodeRecord | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const load = async () => {
      if (!episode) return;
      const epNum = parseInt(episode, 10);
      if (Number.isNaN(epNum)) {
        setError("Invalid episode id");
        setLoading(false);
        return;
      }
      try {
        const episodeData = await fetchPodcastEpisodeByNumber(epNum);
        setData(episodeData);
      } catch (e: any) {
        setError(e.message ?? "Failed to load episode");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [episode]);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Voluntourism": return "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200";
      case "Technology & Rights": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "Aging & Society": return "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200";
      case "Health Advocacy": return "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200";
      case "Health": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "Leadership": return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
      case "Human Rights": return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      case "Women's Rights": return "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  const podcastBasePath = location.pathname.startsWith("/podcast") ? "/podcast" : "/news/podcast";

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navbar />

      <section className="pt-32 pb-8">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Button variant="ghost" className="mb-4" onClick={() => navigate(podcastBasePath) }>
              <ArrowLeft className="h-4 w-4 mr-2" /> Back to Podcast
            </Button>

            {loading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-green mx-auto mb-4"></div>
                <p className="text-muted-foreground">Loading episode...</p>
              </div>
            ) : error ? (
              <Card className="p-8">
                <CardContent className="p-0 text-center">
                  <p className="text-destructive">{error}</p>
                </CardContent>
              </Card>
            ) : data ? (
              <>
                <div className="text-center mb-8">
                  <Badge variant="secondary" className="mr-2">Episode {data.episode_number}</Badge>
                  {data.category && (
                    <Badge className={getCategoryColor(data.category)}>{data.category}</Badge>
                  )}
                  <h1 className="text-4xl md:text-5xl font-bold mt-4">{data.title}</h1>
                </div>

                <Card className="p-6">
                  <CardContent className="p-0">
                    <div className="space-y-6">
                      {/* Banner Image Below Title */}
                      <div className="w-full">
                        {data.image_file_url ? (
                          <img src={data.image_file_url} alt={data.title} className="w-full h-64 md:h-80 object-cover rounded-md" />
                        ) : (
                          <div className="w-full h-64 md:h-80 bg-muted rounded-md flex items-center justify-center text-muted-foreground">
                            No cover image
                          </div>
                        )}
                      </div>

                      {/* Audio Player */}
                      <div className="w-full">
                        {data.audio_file_url ? (
                          <audio controls className="w-full">
                            <source src={data.audio_file_url} type="audio/mpeg" />
                            Your browser does not support the audio element.
                          </audio>
                        ) : (
                          <div className="p-4 rounded-md bg-muted text-muted-foreground">No audio file available.</div>
                        )}
                      </div>

                      {/* Description and Features */}
                      {data.features && (
                        <p className="text-primary font-medium">with {data.features}</p>
                      )}
                      <p className="text-muted-foreground leading-relaxed">{data.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </>
            ) : null}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
