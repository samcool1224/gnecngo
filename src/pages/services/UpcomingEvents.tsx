import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Users, ExternalLink } from "lucide-react";

export default function UpcomingEvents() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const upcomingEvents = [
    {
      title: "GNEC Holiday Meet and Greet",
      date: "December 19, 2024",
      time: "11:30 AM - 12:30 PM",
      location: "Virtual Event",
      type: "Networking",
      description: "Save the date and register here!",
      participants: "Open to All",
      registration: "Open",
      featured: true
    },
    {
      title: "Closing Ceremony - 3rd GNEC Hackathon",
      date: "December 5, 2024",
      time: "12:00 PM - 1:00 PM",
      location: "Virtual Event",
      type: "Hackathon",
      description: "Save the date and register here!",
      participants: "Open to All",
      registration: "Open"
    },
    {
      title: "Opening Ceremony - 3rd GNEC Hackathon",
      date: "October 3, 2024",
      time: "12:00 PM - 1:00 PM",
      location: "Virtual Event",
      type: "Hackathon",
      description: "",
      participants: "Open to All",
      registration: "Open"
    },
    {
      title: "2025 UN Civil Society Conference",
      date: "May 15-17, 2025",
      time: "9:00 AM - 6:00 PM EST",
      location: "UN Headquarters, New York",
      type: "Conference",
      description: "Annual flagship event facilitating global NGO/CSO collaboration and promoting understanding of UN's SDG efforts. Join civil society organizations from around the world.",
      participants: "1,500+ Expected",
      registration: "Open",
      featured: false
    },
    {
      title: "Communication Workshop Series - Spring 2025",
      date: "March 10, 2025",
      time: "2:00 PM - 4:00 PM EST",
      location: "Virtual & UN Headquarters",
      type: "Workshop",
      description: "Monthly workshop designed to enhance NGO/CSO knowledge of UN operations and partnerships. Focus on effective communication strategies.",
      participants: "200+ Expected",
      registration: "Open"
    },
    /* Roundtable events removed as per request */
    {
      title: "GNEC Board Meeting - Q2 2025",
      date: "June 12, 2025",
      time: "11:00 AM - 4:00 PM EST",
      location: "UN Headquarters, New York",
      type: "Board Meeting",
      description: "Quarterly board meeting to discuss strategic initiatives, review subcommittee reports, and plan upcoming activities.",
      participants: "Board Members",
      registration: "By Invitation"
    },
    {
      title: "Youth Leadership Summit",
      date: "July 20-22, 2025",
      time: "Full Day Event",
      location: "Geneva, Switzerland",
      type: "Summit",
      description: "Empowering young leaders in civil society to engage effectively with UN processes and advance youth-led initiatives.",
      participants: "300+ Expected",
      registration: "Opening Soon"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Conference": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "Workshop": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "Roundtable": return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
      case "Board Meeting": return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200";
      case "Summit": return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  const getRegistrationColor = (status: string) => {
    switch (status) {
      case "Open": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "Opening Soon": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      case "By Invitation": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
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
            <Badge className="mb-4">Events & Programs</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Upcoming Events
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Join GNEC's upcoming workshops, conferences, and initiatives designed to strengthen NGO/CSO-UN partnerships and advance global civil society engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Upcoming Events</h2>
              <p className="text-lg text-muted-foreground">
                Dates and details subject to confirmation
              </p>
            </div>
            
            <div className="space-y-6">
              {upcomingEvents.map((event, index) => (
                <Card key={index} className={`p-6 ${event.featured ? 'ring-2 ring-primary/20 bg-primary/5' : ''}`}>
                  <CardContent className="p-0">
                    <div className="flex flex-col lg:flex-row gap-6">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          <Badge className={getTypeColor(event.type)}>
                            {event.type}
                          </Badge>
                          <Badge className={getRegistrationColor(event.registration)}>
                            {event.registration}
                          </Badge>
                          {event.featured && (
                            <Badge variant="default">Featured Event</Badge>
                          )}
                        </div>
                        
                        <h3 className="text-2xl font-bold mb-3">{event.title}</h3>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {event.description}
                        </p>
                        
                        <div className="grid sm:grid-cols-2 gap-4 text-sm">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-primary" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-primary" />
                            <span>{event.time}</span>
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
                      </div>
                      
                      <div className="lg:w-48 flex flex-col gap-3">
                        <Button className="w-full" disabled={event.registration !== "Open"}>
                          {event.registration === "Open" ? "Register Now" : 
                           event.registration === "Opening Soon" ? "Registration Soon" : 
                           "Invitation Only"}
                        </Button>
                        <Button variant="outline" className="w-full">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Learn More
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

      {/* Event Types */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Types of GNEC Events</h2>
              <p className="text-lg text-muted-foreground">
                Discover the various ways GNEC brings together the global NGO/CSO community
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="p-6 text-center">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Conferences</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Large-scale gatherings bringing together NGOs/CSOs worldwide to address global challenges and strengthen UN partnerships.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 text-center">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="h-8 w-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Workshops</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Skill-building sessions focused on communication strategies, UN processes, and effective advocacy techniques.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 text-center">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Regional Roundtables</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Regional discussions on SDG implementation and local challenges facing civil society organizations.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Stay Updated on GNEC Events</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Subscribe to our NGO Reporter newsletter and follow our social media channels to be the first to know about upcoming events and registration openings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="/news/ngo-reporter">Subscribe to NGO Reporter</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/contact">Contact Events Team</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
