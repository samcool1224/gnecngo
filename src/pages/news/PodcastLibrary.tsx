import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Search, ExternalLink } from "lucide-react";
import { supabase } from "@/lib/supabase";

interface SupabaseEpisode {
  id: string;
  episode_number: number;
  title: string;
  description: string;
  features: string;
  tags: string[];
  audio_file_path: string;
  publication_date: string;
  category: string;
  created_at: string;
}

export default function PodcastLibrary() {
  const [searchQuery, setSearchQuery] = useState("");
  const [supabaseEpisodes, setSupabaseEpisodes] = useState<SupabaseEpisode[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchSupabaseEpisodes();
  }, []);

  const fetchSupabaseEpisodes = async () => {
    try {
      const { data, error } = await supabase
        .from('podcast_episodes')
        .select('*')
        .order('episode_number', { ascending: false });

      if (!error) setSupabaseEpisodes(data || []);
    } finally {
      setLoading(false);
    }
  };

  const episodes = supabaseEpisodes.map(ep => ({
    episode: ep.episode_number,
    title: ep.title,
    guest: ep.features || "GNEC Team",
    description: ep.description,
    date: new Date(ep.publication_date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' }),
    audioUrl: ep.audio_file_path,
    category: ep.category,
    tags: ep.tags || [],
  }));

  const filtered = episodes.filter(episode =>
    episode.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    episode.guest.toLowerCase().includes(searchQuery.toLowerCase()) ||
    episode.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    episode.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (episode.tags && episode.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())))
  );

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navbar />

      <section className="pt-32 pb-8">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Podcast Library</h1>
            <p className="text-lg text-muted-foreground">
              Browse all episodes or open the full external archive.
            </p>
            <div className="mt-4 flex justify-center">
              <Button asChild>
                <a href="https://gnec.ngo/podcast-2/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" /> Full External Archive
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search episodes by title, guest, topic, category, or tags..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 py-6 text-lg"
                />
              </div>
            </div>

            {loading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-green mx-auto mb-4"></div>
                <p className="text-muted-foreground">Loading episodes...</p>
              </div>
            ) : (
              <div className="space-y-6">
                {filtered.length > 0 ? (
                  filtered.map((episode, index) => (
                    <Card key={index} className="p-6">
                      <CardContent className="p-0">
                        <div className="space-y-4">
                          <div className="flex flex-wrap items-center gap-2">
                            <Badge variant="secondary">Episode {episode.episode}</Badge>
                            <Badge className={getCategoryColor(episode.category)}>
                              {episode.category}
                            </Badge>
                            {episode.tags && episode.tags.slice(0, 3).map((tag, tagIndex) => (
                              <Badge key={tagIndex} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          <div>
                            <h3 className="text-xl font-bold mb-2">{episode.title}</h3>
                            <p className="text-primary font-medium mb-3">with {episode.guest}</p>
                            <p className="text-muted-foreground mb-4 leading-relaxed">
                              {episode.description}
                            </p>
                          </div>

                          <div className="w-full">
                            <audio controls className="w-full">
                              <source src={episode.audioUrl} type="audio/mpeg" />
                              Your browser does not support the audio element.
                            </audio>
                          </div>

                          <div className="flex items-center gap-4 text-sm text-muted-foreground pt-2">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              <span>{episode.date}</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <Card className="p-12">
                    <CardContent className="p-0 text-center">
                      <p className="text-muted-foreground text-lg">
                        No episodes found. Try different keywords or open the full archive.
                      </p>
                    </CardContent>
                  </Card>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
