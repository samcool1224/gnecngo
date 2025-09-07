import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mic, Play, Calendar, Clock, ExternalLink, Award, Users } from "lucide-react";

export default function Podcast() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const recentEpisodes = [
    {
      title: "A Master Class in Effective Fundraising and Successful Advocacy",
      guest: "Bernard Siegel, Health Span Action Coalition",
      description: "Join us as Bernard Siegel, co-founder of the Health Span Action Coalition, shares insights on making healthy longevity a universal right through stem cell research and advocacy.",
      date: "January 2025",
      duration: "45 min",
      category: "Advocacy",
      featured: true
    },
    {
      title: "The Chief Toni Anini Geriatric Center: Fighting Misconceptions",
      guest: "Dr. Farombi, Brain Health Initiative",
      description: "Dr. Farombi addresses cultural misconceptions about neurological conditions and the importance of early intervention through the 'Dementia Not Witchcraft' campaign.",
      date: "December 2024",
      duration: "38 min",
      category: "Health"
    },
    {
      title: "Inspiring Advice from Four Strong Organizations",
      guest: "Multiple NGO Leaders",
      description: "Leaders from Olof Palme Peace Foundation, American Association of University Women, Organization of American Firefighters, and NGO Committee on Human Rights share insights.",
      date: "November 2024",
      duration: "52 min",
      category: "Leadership"
    },
    {
      title: "World Elder Abuse Awareness with Dr. Gloria Gutman",
      guest: "Dr. Gloria Gutman",
      description: "Focusing on the pressing issue of elder abuse with insights on research complexities, various forms, and psychological aspects involved.",
      date: "October 2024",
      duration: "41 min",
      category: "Human Rights"
    },
    {
      title: "Women's Rights and Civil Society with Frances Zainoeddin",
      guest: "Frances Zainoeddin, Soroptimist International",
      description: "Celebrating achievements of women globally and discussing collaborative work on gender equality and rights of older women.",
      date: "September 2024",
      duration: "47 min",
      category: "Women's Rights"
    }
  ];

  const podcastStats = [
    { label: "Episodes Published", value: "25+" },
    { label: "Countries Reached", value: "50+" },
    { label: "NGOs Featured", value: "40+" },
    { label: "Total Downloads", value: "10K+" }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Advocacy": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                <Play className="h-4 w-4 mr-2" />
                Listen Now
              </Button>
              <Button size="lg" variant="outline">
                <ExternalLink className="h-4 w-4 mr-2" />
                Subscribe on Platforms
              </Button>
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
                      In each episode, we showcase one amazing NGO that is on the ground, doing the critical social good work needed to help the world achieve the Sustainable Development Goals. If you would like to voice out the work that you are doing and be featured on our podcast, please contact president@gnec.ngo.
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
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* Recent Episodes */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Recent Episodes</h2>
              <p className="text-lg text-muted-foreground">
                Listen to our latest conversations with NGO leaders making a difference worldwide
              </p>
            </div>
            
            <div className="space-y-6">
              {recentEpisodes.map((episode, index) => (
                <Card key={index} className={`p-6 ${episode.featured ? 'ring-2 ring-primary/20 bg-primary/5' : ''}`}>
                  <CardContent className="p-0">
                    <div className="flex flex-col lg:flex-row gap-6">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          <Badge className={getCategoryColor(episode.category)}>
                            {episode.category}
                          </Badge>
                          {episode.featured && (
                            <Badge variant="default">
                              <Award className="h-3 w-3 mr-1" />
                              Featured
                            </Badge>
                          )}
                        </div>
                        
                        <h3 className="text-2xl font-bold mb-2">{episode.title}</h3>
                        <p className="text-primary font-medium mb-3">with {episode.guest}</p>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {episode.description}
                        </p>
                        
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{episode.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{episode.duration}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="lg:w-48 flex flex-col gap-3">
                        <Button className="w-full">
                          <Play className="h-4 w-4 mr-2" />
                          Listen Now
                        </Button>
                        <Button variant="outline" className="w-full">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Show Notes
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
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
                <a href="mailto:president@gnec.ngo">Apply to be Featured</a>
              </Button>
              <Button size="lg" variant="outline">
                <ExternalLink className="h-4 w-4 mr-2" />
                Podcast Guidelines
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
