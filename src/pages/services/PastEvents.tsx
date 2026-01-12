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
  title: "GNEC Annual Meeting",
  date: "June 16, 2025",
  time: "1:00-2:00 PM EST",
  location: "Virtual (www.gnec.ngo)",
  type: "Annual Meeting",
  description: "The official annual gathering of the Global NGO Executive Committee (GNEC) to discuss organizational progress and committee initiatives.",
  participants: "NGO Representatives and Stakeholders",
  materials: ["Meeting Minutes", "Annual Report", "Website Resources"]
},
{
  title: "GNEC Annual Retreat",
  date: "August 12, 2025",
  time: "10:30 AM - 3:00 PM EST",
  location: "Virtual Event",
  type: "Retreat",
  description: "An intensive internal retreat for the Global NGO Executive Committee focused on strategic planning and organizational development.",
  participants: "Executive Committee Members",
  materials: ["Retreat Agenda", "Strategic Plan", "Working Documents"]
},
{
  title: "GNEC Hackathon Winner's Circle",
  date: "December 7, 2025",
  time: "11:00 AM EST",
  location: "Virtual Event",
  type: "Networking",
  description: "A special session to meet and engage with winners from previous GNEC Hackathons, showcasing their continued impact and innovative solutions.",
  participants: "Hackathon Winners and Tech Innovators",
  materials: ["Registration Link", "Winner Profiles", "Project Archives"]
},
{
  title: "Building Awareness of Aging Issues Across the Life Continuum",
  date: "December 9, 2025",
  time: "10:00 AM - 11:00 AM EST",
  location: "Virtual Event",
  type: "Educational Dialogue",
  description: "A joint program by the NGO Committee on Ageing/NY and GNEC exploring how intergenerational collaboration benefits all causes and fosters community action.",
  participants: "UN Representatives and Civil Society Members",
  materials: ["Registration Link", "Speaker Biographies", "Program Summary"]
},
{
  title: "Annual Holiday Meet and Greet",
  date: "December 17, 2025",
  time: "11:00 AM EST",
  location: "Virtual Event",
  type: "Social/Networking",
  description: "A year-end social gathering for the GNEC community to celebrate the year's achievements and facilitate networking among members.",
  participants: "GNEC Community and Executive Committee",
  materials: ["Event QR Code", "Holiday Program", "Networking Directory"]
},
    {title: "4th GNEC Hackathon Opening Ceremony",
      date: "May 30, 2025",
      time: "12:00 PM EST",
      location: "Virtual Event",
      type: "Hackathon",
      description: "Grand finale of the 4th GNEC Hackathon showcasing innovative solutions from global participants. The event featured project presentations, judging, and awards ceremony.",
      participants: "150+ Participants",
      materials: ["Event Recording", "Project Showcase", "Winning Projects"]},
    {
      title: "4th GNEC Hackathon Closing Ceremony",
      date: "May 30, 2025",
      time: "12:00 PM EST",
      location: "Virtual Event",
      type: "Hackathon",
      description: "Grand finale of the 4th GNEC Hackathon showcasing innovative solutions from global participants. The event featured project presentations, judging, and awards ceremony.",
      participants: "150+ Participants",
      materials: ["Event Recording", "Project Showcase", "Winning Projects"]
    },
    {
      title: "Global Youth Summit on Climate Action",
      date: "April 15-17, 2025",
      time: "9:00 AM - 5:00 PM EST",
      location: "UN Headquarters, New York",
      type: "Summit",
      description: "Empowering young leaders with knowledge and tools to drive climate action in their communities. The summit featured workshops, panel discussions, and networking sessions.",
      participants: "300+ Youth Delegates",
      materials: ["Summit Report", "Workshop Materials", "Action Toolkit"]
    },
    {
      title: "Digital Advocacy Masterclass Series",
      date: "March 5-7, 2025",
      time: "2:00 PM - 4:00 PM EST",
      location: "Online",
      type: "Workshop",
      description: "A three-part masterclass series on advanced digital advocacy strategies for NGOs/CSOs, covering social media campaigns, digital storytelling, and online engagement.",
      participants: "120+ NGO Representatives",
      materials: ["Session Recordings", "Presentation Slides", "Resource Guide"]
    },
    {
      title: "SDG Innovation Challenge 2025",
      date: "February 20-22, 2025",
      time: "Full Day Event",
      location: "Hybrid - Geneva & Virtual",
      type: "Hackathon",
      description: "A 48-hour innovation challenge bringing together technologists and development practitioners to create tech solutions for the Sustainable Development Goals.",
      participants: "200+ Innovators",
      materials: ["Challenge Briefs", "Winning Solutions", "Event Photos"]
    },
    {
      title: "Women in Leadership Forum",
      date: "January 25, 2025",
      time: "10:00 AM - 3:00 PM EST",
      location: "UN Women HQ, New York",
      type: "Forum",
      description: "Celebrating and empowering women leaders in international development. The forum featured keynote speeches, panel discussions, and leadership workshops.",
      participants: "180+ Attendees",
      materials: ["Event Summary", "Speaker Presentations", "Networking Directory"]
    },
    {
      title: "UN Civil Society Conference 2024",
      date: "August 26-28, 2024",
      time: "Full Day Event",
      location: "UN Headquarters, New York",
      type: "Conference",
      description: "Annual flagship conference facilitating global NGO/CSO collaboration with focus on climate action, human rights, and sustainable development.",
      participants: "1,200+ Global Attendees",
      materials: ["Conference Proceedings", "Session Recordings", "Networking Directory"]
    },
    {
      title: "Communication Workshop - Digital Advocacy",
      date: "June 15, 2024",
      time: "2:00 PM - 4:00 PM EST",
      location: "Hybrid - UN HQ & Virtual",
      type: "Workshop", 
      description: "Capacity building workshop on digital advocacy strategies, social media engagement, and online campaign development for NGOs/CSOs.",
      participants: "200+ Participants",
      materials: ["Workshop Slides", "Resource Toolkit", "Best Practices Guide"]
    },
    
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
              Explore GNEC's recent workshops, conferences, and initiatives that have strengthened NGO/CSO-UN partnerships and advanced global civil society engagement.
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
                A chronological overview of our recent activities and their impact on the global NGO/CSO community
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
                  <div className="text-sm text-muted-foreground">NGOs/CSOs Engaged</div>
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
              Don't miss out on upcoming opportunities to connect with the global NGO/CSO community and strengthen your organization's UN partnership.
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
