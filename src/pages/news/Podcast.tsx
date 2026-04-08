import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Mic, Award, Users, Search, LogIn } from "lucide-react";
import { PodcastEpisode, fetchPodcastEpisodes } from "@/lib/podcast-api";

export default function Podcast() {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [episodes, setEpisodes] = useState<PodcastEpisode[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    loadEpisodes();
  }, []);

  const loadEpisodes = async () => {
    try {
      const data = await fetchPodcastEpisodes();
      setEpisodes(data);
    } catch (error) {
      console.error("Error fetching episodes:", error);
    } finally {
      setLoading(false);
    }
  };

  const convertEpisodes = (items: PodcastEpisode[]) => {
    return items.map(ep => ({
      episode: ep.episode_number,
      title: ep.title,
      guest: ep.features || "GNEC Team",
      description: ep.description,
      category: ep.category || "General",
      tags: ep.tags || [],
      id: ep.id,
      imageUrl: ep.image_file_url || null,
    }));
  };

  const convertedEpisodes = convertEpisodes(episodes)
    .sort((a, b) => b.episode - a.episode);

  const latestThree = convertedEpisodes.slice(0, 3);

  const filteredEpisodes = convertedEpisodes.filter(episode =>
    episode.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    episode.guest.toLowerCase().includes(searchQuery.toLowerCase()) ||
    episode.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    episode.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (episode.tags && episode.tags.some(tag => 
      tag.toLowerCase().includes(searchQuery.toLowerCase())
    ))
  );

  const podcastStats = [
    { label: "Episodes Published", value: "25+" },
    { label: "Countries Reached", value: "50+" },
    { label: "NGOs Featured", value: "40+" }
  ];

  const podcastBasePath = location.pathname.startsWith("/podcast") ? "/podcast" : "/news/podcast";
  const podcastLibraryPath = location.pathname.startsWith("/podcast")
    ? "/podcast-library"
    : "/news/podcast-library";

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

  const listeningPlatforms = [
    {
      name: "Apple Podcasts",
      url: "#",
      icon: (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.182c5.423 0 9.818 4.395 9.818 9.818 0 5.423-4.395 9.818-9.818 9.818-5.423 0-9.818-4.395-9.818-9.818 0-5.423 4.395-9.818 9.818-9.818zM12 5.455c-3.614 0-6.545 2.931-6.545 6.545 0 3.614 2.931 6.545 6.545 6.545 3.614 0 6.545-2.931 6.545-6.545 0-3.614-2.931-6.545-6.545-6.545zm0 2.181c2.408 0 4.364 1.956 4.364 4.364 0 2.408-1.956 4.364-4.364 4.364-2.408 0-4.364-1.956-4.364-4.364 0-2.408 1.956-4.364 4.364-4.364zm0 1.091c-1.806 0-3.273 1.467-3.273 3.273 0 1.806 1.467 3.273 3.273 3.273 1.806 0 3.273-1.467 3.273-3.273 0-1.806-1.467-3.273-3.273-3.273zm0 1.091c1.204 0 2.182.978 2.182 2.182 0 1.204-.978 2.182-2.182 2.182-1.204 0-2.182-.978-2.182-2.182 0-1.204.978-2.182 2.182-2.182zm-.545 5.455c-.602 0-1.091.489-1.091 1.091v1.636c0 .602.489 1.091 1.091 1.091s1.091-.489 1.091-1.091v-1.636c0-.602-.489-1.091-1.091-1.091z"/>
        </svg>
      )
    },
    {
      name: "Spotify",
      url: "#",
      icon: (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
        </svg>
      )
    },
    {
      name: "Google Podcasts",
      url: "#",
      icon: (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M1.5 10.2h1.8v3.6H1.5zm4.5-4.5h1.8v12.6H6zm4.5 2.7h1.8v7.2h-1.8zm4.5-6.3h1.8v18.9h-1.8zm4.5 8.1h1.8v2.7h-1.8z"/>
        </svg>
      )
    },
    {
      name: "Amazon Music",
      url: "#",
      icon: (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M2.25 12.75c0-1.62.66-3.09 1.73-4.16a5.99 5.99 0 0 1 2.24-1.47c-.07.33-.07.69-.07 1.05 0 2.79 2.25 5.04 5.04 5.04.36 0 .72 0 1.05-.07-.45.84-1.05 1.56-1.74 2.1-.84.63-1.89 1.02-3 1.02-2.76 0-5.25-2.25-5.25-5.51zm19.5 0c0 5.52-4.5 10.02-10.02 10.02-3.15 0-5.94-1.47-7.77-3.75.33.03.69.06 1.02.06 2.76 0 5.25-1.11 7.08-2.91 1.83-1.83 2.94-4.35 2.94-7.11 0-.33 0-.69-.03-1.02 2.28 1.83 3.78 4.62 3.78 7.71z"/>
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4">GNEC Media</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              On The Ground Podcast
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Featuring one amazing NGO per episode, showcasing critical social good work toward SDG achievement. Hosted by Emmy-winning broadcaster Adriane Berg.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <Button asChild className="bg-brand-green text-white hover:bg-brand-blue transition-colors rounded-full px-6 py-2.5 font-medium">
                <Link to="/login">
                  <LogIn className="h-4 w-4 mr-2" />
                  Login
                </Link>
              </Button>
              <span className="text-sm font-medium text-muted-foreground">Listen on:</span>
              {listeningPlatforms.map((platform, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  asChild
                  className="gap-2"
                >
                  <a href={platform.url} target="_blank" rel="noopener noreferrer">
                    {platform.icon}
                    <span className="hidden sm:inline">{platform.name}</span>
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About the Podcast */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 mb-12">
              <CardContent className="p-0">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mic className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold mb-4">Amplifying NGO Voices Worldwide</h2>
                    <p className="text-lg leading-relaxed mb-4">
                      On the Ground is produced by the Global NGO Executive Committee and hosted by Emmy-winning Broadcaster, Adriane Berg. We offer our services to more than 1,500 UNDGC affiliated NGOs which are on the frontlines of addressing and tackling the most pressing issues of our time.
                    </p>
                    <p className="text-lg leading-relaxed">
                      In each episode, we showcase one amazing NGO that is on the ground, doing the critical social good work needed to help the world achieve the Sustainable Development Goals. If you would like to voice out the work that you are doing and be featured on our podcast, please contact outreach@gnec.ngo.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Podcast Statistics */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Podcast Impact</h2>
              <p className="text-lg text-muted-foreground">
                Measuring our reach in amplifying NGO voices globally
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {podcastStats.map((stat, index) => (
                <Card key={index} className="p-6 text-center">
                  <CardContent className="p-0">
                    <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Episodes */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Latest Episodes</h2>
              <p className="text-lg text-muted-foreground">
                Listen to our most recent conversations with NGO leaders making a difference worldwide
              </p>
            </div>
            
            <div className="space-y-8">
              {loading ? (
                <div className="text-center py-12">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-green mx-auto mb-4"></div>
                  <p className="text-muted-foreground">Loading episodes...</p>
                </div>
              ) : latestThree.length === 0 ? (
                <Card className="p-12">
                  <CardContent className="p-0 text-center">
                    <p className="text-muted-foreground text-lg">No episodes available yet.</p>
                  </CardContent>
                </Card>
              ) : (
                latestThree.map((episode, index) => (
                <Card key={index} className={`p-6 ${index === 0 ? 'ring-2 ring-primary/20 bg-primary/5' : ''}`}>
                  <CardContent className="p-0">
                    <div className="space-y-4">
                      <div className="flex flex-wrap items-center gap-2">
                        <Badge variant="secondary">Episode {episode.episode}</Badge>
                        <Badge className={getCategoryColor(episode.category)}>
                          {episode.category}
                        </Badge>
                        {index === 0 && (
                          <Badge variant="default">
                            <Award className="h-3 w-3 mr-1" />
                            Latest
                          </Badge>
                        )}
                        {episode.tags && episode.tags.length > 0 && (
                          <>
                            {episode.tags.slice(0, 3).map((tag, tagIndex) => (
                              <Badge key={tagIndex} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                            {episode.tags.length > 3 && (
                              <Badge variant="outline" className="text-xs">
                                +{episode.tags.length - 3} more
                              </Badge>
                            )}
                          </>
                        )}
                      </div>
                      
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{episode.title}</h3>
                        <p className="text-primary font-medium mb-3">with {episode.guest}</p>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {episode.description}
                        </p>
                      </div>
                      <div className="text-center space-y-3 pt-2">
                        <Button size="lg" className="rounded-full px-8 py-6 text-base" asChild>
                          <Link to={`${podcastBasePath}/${episode.episode}`}>Listen Now!</Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                ))
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Search and Older Episodes */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Explore More Episodes</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Search through our archive of inspiring conversations
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
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
              <div className="mt-6">
                <Button asChild>
                  <Link to={podcastLibraryPath}>Open Podcast Library</Link>
                </Button>
              </div>
            </div>
            
            <div className="space-y-6">
              {filteredEpisodes.length > 0 ? (
                filteredEpisodes.map((episode, index) => (
                  <Card key={index} className="p-6">
                    <CardContent className="p-0">
                      <div className="space-y-4">
                        <div className="flex flex-wrap items-center gap-2">
                          <Badge variant="secondary">Episode {episode.episode}</Badge>
                          <Badge className={getCategoryColor(episode.category)}>
                            {episode.category}
                          </Badge>
                          {episode.tags && episode.tags.length > 0 && (
                            <>
                              {episode.tags.slice(0, 3).map((tag, tagIndex) => (
                                <Badge key={tagIndex} variant="outline" className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                              {episode.tags.length > 3 && (
                                <Badge variant="outline" className="text-xs">
                                  +{episode.tags.length - 3} more
                                </Badge>
                              )}
                            </>
                          )}
                        </div>
                        
                        <div>
                          <h3 className="text-xl font-bold mb-2">{episode.title}</h3>
                          <p className="text-primary font-medium mb-3">with {episode.guest}</p>
                          <p className="text-muted-foreground mb-4 leading-relaxed">
                            {episode.description}
                          </p>
                        </div>
                        <div className="text-center space-y-3 pt-2">
                          <div className="text-xl font-bold">Listen Now!</div>
                          <Button size="lg" variant="outline" className="rounded-full px-8 py-5" asChild>
                            <Link to={`${podcastBasePath}/${episode.episode}`}>Listen to podcast</Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <Card className="p-12">
                  <CardContent className="p-0 text-center">
                    <p className="text-muted-foreground text-lg">
                      No episodes found matching your search. Try different keywords.
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Host Information */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="h-16 w-16 text-primary" />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-bold mb-2">Meet Your Host</h3>
                    <p className="text-primary font-medium mb-3">Adriane Berg</p>
                    <p className="text-muted-foreground leading-relaxed">
                      Emmy-winning broadcaster and GNEC Board Member representing the International Federation on Ageing. 
                      Adriane brings decades of media experience and a passion for amplifying the voices of organizations 
                      working to make the world a better place through their dedication to the UN's Sustainable Development Goals.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Get Featured */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Feature Your NGO on Our Podcast</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Is your organization doing amazing work toward achieving the SDGs? We'd love to share your story with our global audience of NGO professionals and UN partners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="mailto:outreach@gnec.ngo">Apply to be Featured</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
