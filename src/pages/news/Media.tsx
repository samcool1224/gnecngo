import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Camera, Video, Image, Download, Calendar, Users, Award, ExternalLink } from "lucide-react";

export default function Media() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const mediaCategories = [
    {
      icon: <Video className="h-8 w-8" />,
      title: "Event Videos",
      description: "Recordings from GNEC conferences, workshops, and special events showcasing our global impact.",
      count: "25+ Videos"
    },
    {
      icon: <Camera className="h-8 w-8" />,
      title: "Photo Gallery",
      description: "Visual documentation of GNEC activities, board meetings, and collaborative initiatives worldwide.",
      count: "500+ Photos"
    },
    {
      icon: <Image className="h-8 w-8" />,
      title: "Infographics",
      description: "Visual representations of GNEC's impact, NGO statistics, and UN partnership data.",
      count: "50+ Graphics"
    }
  ];

  const featuredMedia = [
    {
      title: "3rd GNEC Hackathon 2024 - Complete Coverage",
      type: "Video Collection",
      description: "Comprehensive video coverage of the 3rd GNEC Hackathon including opening ceremony, participant interviews, winner presentations, and closing ceremony.",
      date: "December 2024",
      thumbnail: "hackathon-2024",
      featured: true,
      videoUrl: "https://www.youtube.com/watch?v=JvJbKSscch0"
    },
    {
      title: "UN Civil Society Conference 2024 Highlights",
      type: "Video Collection",
      description: "Visual highlights from the annual UN Civil Society Conference featuring global NGO leaders, panel discussions, and networking sessions.",
      date: "August 2024",
      thumbnail: "conference-2024",
      videoUrl: "https://www.youtube.com/watch?v=2Ko-f62Afv0"
    },
    {
      title: "GNEC Board Meeting - Global Representation",
      type: "Photo Collection",
      description: "Documentation of GNEC board meetings showcasing the diverse global representation and collaborative decision-making process.",
      date: "June 2024",
      thumbnail: "board-meeting-2024"
    },
    {
      title: "Communication Workshop Series",
      type: "Video Series",
      description: "Educational video series from GNEC's communication workshops covering digital advocacy, media relations, and campaign strategies.",
      date: "2024",
      thumbnail: "workshops-2024"
    }
  ];

  const archivedMedia = [
    {
      title: "UN DPI/NGO Conference Archives",
      type: "Video & Photo Archive",
      description: "Historical coverage of UN DPI/NGO Conferences (now UN Civil Society Conference) from previous years, including plenaries, workshops, and side events.",
      date: "2019–2023",
      videoUrl: "https://www.youtube.com/@GlobalNGOExecutiveCommittee"
    },
    {
      title: "GNEC Communication Workshops – Past Sessions",
      type: "Video Archive",
      description: "Recordings of past communication workshops on UN advocacy, media engagement, and NGO capacity building.",
      date: "Ongoing archive",
      videoUrl: "https://www.youtube.com/@GlobalNGOExecutiveCommittee"
    },
    {
      title: "GNEC Hackathon – Past Editions",
      type: "Video & Photo Archive",
      description: "Highlights and winner presentations from earlier GNEC Hackathon editions, including project demos and award ceremonies.",
      date: "2022–2024",
      videoUrl: "https://gnecngo.vercel.app/hackathon/"
    },
    {
      title: "Board Retreats & Annual Meetings",
      type: "Photo Collection",
      description: "Photos from GNEC board retreats, annual meetings, and leadership gatherings documenting governance and strategic planning.",
      date: "Archive"
    },
    {
      title: "NGO Reporter – Covers & Highlights",
      type: "Publication Archive",
      description: "Selected covers and content highlights from the NGO Reporter publication, showcasing civil society stories and UN engagement.",
      date: "Archive"
    }
  ];

  const socialMediaPlatforms = [
    {
      platform: "Facebook",
      description: "Connect with GNEC's global community and stay updated on events and initiatives.",
      followers: "5K+ Followers"
    },
    {
      platform: "Twitter",
      description: "Real-time updates on UN-NGO partnerships and civil society developments.",
      followers: "3K+ Followers"
    },
    {
      platform: "Instagram",
      description: "Visual storytelling of GNEC's impact and behind-the-scenes moments.",
      followers: "2K+ Followers"
    },
    {
      platform: "LinkedIn",
      description: "Professional networking and thought leadership in the NGO sector.",
      followers: "4K+ Connections"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4">Visual Stories</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Media Gallery
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Explore GNEC's visual documentation of global civil society engagement, featuring videos, photos, and graphics from our events and initiatives worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                <Video className="h-4 w-4 mr-2" />
                Browse Videos
              </Button>
              <Button size="lg" variant="outline">
                <Camera className="h-4 w-4 mr-2" />
                View Photo Gallery
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Media Categories */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Media Categories</h2>
              <p className="text-lg text-muted-foreground">
                Discover our comprehensive collection of visual content documenting GNEC's global impact
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {mediaCategories.map((category, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="text-primary">
                        {category.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{category.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {category.description}
                    </p>
                    <Badge variant="secondary">{category.count}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Media */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Featured Media</h2>
              <p className="text-lg text-muted-foreground">
                Highlighting our most impactful visual content from recent events and initiatives
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {featuredMedia.map((media, index) => (
                <Card key={index} className={`p-6 ${media.featured ? 'ring-2 ring-primary/20 bg-primary/5' : ''}`}>
                  <CardContent className="p-0">
                    <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                      <div className="text-center">
                        <Video className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                        <p className="text-sm text-muted-foreground">Media Preview</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-3">
                      <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                        {media.type}
                      </Badge>
                      {media.featured && (
                        <Badge variant="default">
                          <Award className="h-3 w-3 mr-1" />
                          Featured
                        </Badge>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2">{media.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {media.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{media.date}</span>
                      </div>
                      <Button variant="outline" size="sm" asChild>
                        <a href={media.videoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Archived Media (from previous website) */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Archived Media</h2>
              <p className="text-lg text-muted-foreground">
                Additional media content from previous GNEC events and the legacy website. Contact communications@gnec.ngo for access to full archives.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {archivedMedia.map((media, index) => (
                <Card key={`archived-${index}`} className="p-6">
                  <CardContent className="p-0">
                    <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                      <div className="text-center">
                        <Video className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                        <p className="text-sm text-muted-foreground">Archive</p>
                      </div>
                    </div>
                    <Badge className="mb-2 bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                      {media.type}
                    </Badge>
                    <h3 className="text-lg font-bold mb-2">{media.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {media.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{media.date}</span>
                      {media.videoUrl && (
                        <Button variant="outline" size="sm" asChild>
                          <a href={media.videoUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            View
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Integration */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Follow GNEC on Social Media</h2>
              <p className="text-lg text-muted-foreground">
                Stay connected with our latest updates, behind-the-scenes content, and live event coverage
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {socialMediaPlatforms.map((platform, index) => (
                <Card key={index} className="p-6 text-center">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{platform.platform}</h3>
                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                      {platform.description}
                    </p>
                    <Badge variant="secondary" className="mb-3">
                      {platform.followers}
                    </Badge>
                    <Button variant="outline" size="sm" className="w-full">
                      Follow
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Media Usage Guidelines */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <CardContent className="p-0">
                <div className="text-center mb-6">
                  <h2 className="text-3xl font-bold mb-4">Media Usage & Downloads</h2>
                  <p className="text-lg text-muted-foreground">
                    Use of logo is prohibited without prior consent and authorisation. Contact communications@gnec.ngo to learn more.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-3">For NGOs & Partners</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Free use of GNEC media for non-commercial purposes</li>
                      <li>• Attribution required: "Courtesy of GNEC"</li>
                      <li>• Contact communications@gnec.ngo for permissions</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-3">For Media & Press</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Interview opportunities with GNEC leadership</li>
                      <li>• Event coverage and photo access provided</li>
                      <li>• Contact communications@gnec.ngo for media inquiries</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Share Your NGO's Story</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Have compelling visual content from your NGO's work? We'd love to feature your organization's impact stories in our media gallery and social channels.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="mailto:communications@gnec.ngo">Submit Media Content</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/contact">Contact Media Team</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
