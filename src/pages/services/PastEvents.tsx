import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, ExternalLink, Play } from "lucide-react";

export default function PastEvents() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pastEvents = [
    {
      title: "GNEC Holiday Meet and Greet",
      date: "December 19, 2024",
      time: "11:30 AM - 12:30 PM EST",
      location: "Virtual Event",
      type: "Networking",
      description: "End-of-year celebration bringing together GNEC board members, affiliated NGOs, and partners to reflect on achievements and strengthen community bonds.",
      participants: "150+ Attendees",
      materials: ["Event Recording", "Photo Gallery", "Participant List"]
    },
    {
      title: "Closing Ceremony - 3rd GNEC Hackathon",
      date: "December 5, 2024", 
      time: "12:00 PM - 1:00 PM EST",
      location: "Virtual Event",
      type: "Hackathon",
      description: "Celebration of innovative technology solutions for UN Sustainable Development Goals, featuring winner presentations and awards ceremony.",
      participants: "500+ Global Participants",
      materials: ["Winner Presentations", "Awards Ceremony Recording", "Project Showcase"]
    },
    {
      title: "Opening Ceremony - 3rd GNEC Hackathon",
      date: "October 3, 2024",
      time: "12:00 PM - 1:00 PM EST", 
      location: "Virtual Event",
      type: "Hackathon",
      description: "Launch of the third annual GNEC Hackathon, bringing together global innovators to develop technology solutions for SDG challenges.",
      participants: "800+ Registered",
      materials: ["Opening Keynote", "Challenge Briefings", "Participant Guide"]
    },
    {
      title: "UN Civil Society Conference 2024",
      date: "August 26-28, 2024",
      time: "Full Day Event",
      location: "UN Headquarters, New York",
      type: "Conference",
      description: "Annual flagship conference facilitating global NGO collaboration with focus on climate action, human rights, and sustainable development.",
      participants: "1,200+ Global Attendees",
      materials: ["Conference Proceedings", "Session Recordings", "Networking Directory"]
    },
    {
      title: "Communication Workshop - Digital Advocacy",
      date: "June 15, 2024",
      time: "2:00 PM - 4:00 PM EST",
      location: "Hybrid - UN HQ & Virtual",
      type: "Workshop", 
      description: "Capacity building workshop on digital advocacy strategies, social media engagement, and online campaign development for NGOs.",
      participants: "200+ Participants",
      materials: ["Workshop Slides", "Resource Toolkit", "Best Practices Guide"]
    },
    {
      title: "Regional SDGs Roundtable - Asia Pacific",
      date: "May 20, 2024",
      time: "9:00 AM - 2:00 PM JST",
      location: "Tokyo, Japan",
      type: "Roundtable",
      description: "Regional discussion on SDG implementation challenges and opportunities in the Asia Pacific region with local NGO leaders.",
      participants: "120+ Regional Representatives",
      materials: ["Regional Report", "Action Plan", "Follow-up Commitments"]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Conference": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "Workshop": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "Roundtable": return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
      case "Hackathon": return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200";
      case "Networking": return "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200";
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
            <Badge className="mb-4">Event Archive</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Past Events
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Explore GNEC's recent workshops, conferences, and initiatives that have strengthened NGO-UN partnerships and advanced global civil society engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Event Timeline */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Recent Events Timeline</h2>
              <p className="text-lg text-muted-foreground">
                A chronological overview of our recent activities and their impact on the global NGO community
              </p>
            </div>
            
            <div className="space-y-6">
              {pastEvents.map((event, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="flex flex-col lg:flex-row gap-6">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          <Badge className={getTypeColor(event.type)}>
                            {event.type}
                          </Badge>
                          <Badge variant="outline">
                            Completed
                          </Badge>
                        </div>
                        
                        <h3 className="text-2xl font-bold mb-3">{event.title}</h3>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {event.description}
                        </p>
                        
                        <div className="grid sm:grid-cols-2 gap-4 text-sm mb-4">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-primary" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-primary" />
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4 text-primary" />
                            <span>{event.participants}</span>
                          </div>
                        </div>

                        {event.materials && (
                          <div>
                            <h4 className="font-medium mb-2">Available Materials:</h4>
                            <div className="flex flex-wrap gap-2">
                              {event.materials.map((material, idx) => (
                                <Badge key={idx} variant="secondary" className="text-xs">
                                  {material}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                      
                      <div className="lg:w-48 flex flex-col gap-3">
                        <Button variant="outline" className="w-full">
                          <Play className="h-4 w-4 mr-2" />
                          View Recording
                        </Button>
                        <Button variant="outline" className="w-full">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Event Materials
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

      {/* Event Statistics */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">2024 Event Impact</h2>
              <p className="text-lg text-muted-foreground">
                Measuring our collective impact on global civil society engagement
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="p-6 text-center">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-primary mb-2">25+</div>
                  <div className="text-sm text-muted-foreground">Events Hosted</div>
                </CardContent>
              </Card>

              <Card className="p-6 text-center">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-primary mb-2">3,000+</div>
                  <div className="text-sm text-muted-foreground">Total Participants</div>
                </CardContent>
              </Card>

              <Card className="p-6 text-center">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-primary mb-2">85</div>
                  <div className="text-sm text-muted-foreground">Countries Represented</div>
                </CardContent>
              </Card>

              <Card className="p-6 text-center">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">NGOs Engaged</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Event Archive Access */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 text-center">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-4">Access Complete Event Archive</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Looking for materials from events prior to 2024? Access our complete archive of past conferences, workshops, and initiatives dating back to GNEC's founding.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg">
                    Browse Full Archive
                  </Button>
                  <Button size="lg" variant="outline">
                    Request Specific Materials
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Next Event</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Don't miss out on upcoming opportunities to connect with the global NGO community and strengthen your organization's UN partnership.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="/services/upcoming-events">View Upcoming Events</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/news/ngo-reporter">Subscribe for Updates</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
