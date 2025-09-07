import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Trophy, Users, Globe, Target, Calendar, ExternalLink, Award } from "lucide-react";

export default function Hackathon() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const hackathonFeatures = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "SDG-Focused Challenges",
      description: "Technology solutions targeting specific UN Sustainable Development Goals and global challenges."
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Participation",
      description: "Teams from around the world collaborating to create innovative solutions for social good."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Mentorship Program",
      description: "Expert mentors from UN agencies, NGOs, and tech industry guide participants throughout the event."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Implementation Support",
      description: "Winning solutions receive support for real-world implementation and scaling opportunities."
    }
  ];

  const pastWinners = [
    {
      year: "2024",
      title: "EcoTrack: Carbon Footprint Monitor",
      team: "GreenTech Innovators",
      description: "AI-powered platform helping organizations track and reduce their carbon footprint through real-time monitoring and actionable insights.",
      sdg: "Climate Action (SDG 13)"
    },
    {
      year: "2024", 
      title: "EduConnect: Remote Learning Bridge",
      team: "Digital Education Alliance",
      description: "Low-bandwidth solution connecting rural students to quality education resources and virtual classrooms.",
      sdg: "Quality Education (SDG 4)"
    },
    {
      year: "2023",
      title: "WaterWise: Smart Water Management",
      team: "AquaTech Solutions",
      description: "IoT-based system for monitoring water quality and optimizing distribution in underserved communities.",
      sdg: "Clean Water & Sanitation (SDG 6)"
    }
  ];

  const challengeCategories = [
    {
      title: "Climate & Environment",
      description: "Solutions addressing climate change, environmental protection, and sustainable resource management.",
      sdgs: ["SDG 13", "SDG 14", "SDG 15"]
    },
    {
      title: "Health & Wellbeing", 
      description: "Innovations improving global health outcomes, mental wellness, and healthcare accessibility.",
      sdgs: ["SDG 3", "SDG 2"]
    },
    {
      title: "Education & Equality",
      description: "Technologies promoting inclusive education, gender equality, and reduced inequalities.",
      sdgs: ["SDG 4", "SDG 5", "SDG 10"]
    },
    {
      title: "Economic Development",
      description: "Solutions fostering sustainable economic growth, decent work, and innovation infrastructure.",
      sdgs: ["SDG 8", "SDG 9", "SDG 1"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4">Innovation Challenge</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              GNEC Hackathon
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              A global technology solutions contest for UN Sustainable Development Goals, bringing together innovators worldwide to create impactful solutions for pressing global challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="https://gnec.ngo/hackathon/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Visit Hackathon Site
                </a>
              </Button>
              <Button size="lg" variant="outline">
                <Calendar className="h-4 w-4 mr-2" />
                2025 Registration Opens Soon
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About the Hackathon */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 mb-12">
              <CardContent className="p-0">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Code className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold mb-4">Innovation for Global Impact</h2>
                    <p className="text-lg leading-relaxed mb-4">
                      The GNEC Hackathon is an annual technology solutions contest that challenges participants to develop innovative applications, platforms, and tools addressing the United Nations Sustainable Development Goals.
                    </p>
                    <p className="text-lg leading-relaxed">
                      This global event brings together developers, designers, entrepreneurs, and social innovators to collaborate on solutions that can make a real difference in communities worldwide. With a focus on innovation-driven approaches to SDG challenges, the hackathon serves as a catalyst for technological solutions to global problems.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Join the GNEC Hackathon?</h2>
              <p className="text-lg text-muted-foreground">
                Discover what makes our hackathon a unique opportunity for innovation and impact
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {hackathonFeatures.map((feature, index) => (
                <Card key={index} className="p-6">
                  <CardContent className="p-0">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Categories */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Challenge Categories</h2>
              <p className="text-lg text-muted-foreground">
                Explore the key areas where innovative solutions can make the biggest impact
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {challengeCategories.map((category, index) => (
                <Card key={index} className="p-6">
                  <CardContent className="p-0">
                    <h3 className="text-xl font-bold mb-3">{category.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {category.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {category.sdgs.map((sdg, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {sdg}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Past Winners */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Celebrating Innovation</h2>
              <p className="text-lg text-muted-foreground">
                Highlighting winning solutions from recent GNEC Hackathons
              </p>
            </div>
            
            <div className="space-y-6">
              {pastWinners.map((winner, index) => (
                <Card key={index} className="p-6">
                  <CardContent className="p-0">
                    <div className="flex flex-col lg:flex-row gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <Trophy className="h-6 w-6 text-yellow-500" />
                          <Badge variant="secondary">{winner.year} Winner</Badge>
                          <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                            {winner.sdg}
                          </Badge>
                        </div>
                        
                        <h3 className="text-2xl font-bold mb-2">{winner.title}</h3>
                        <p className="text-primary font-medium mb-3">by {winner.team}</p>
                        <p className="text-muted-foreground leading-relaxed">
                          {winner.description}
                        </p>
                      </div>
                      
                      <div className="lg:w-48 flex flex-col gap-3">
                        <Button variant="outline" className="w-full">
                          View Project
                        </Button>
                        <Button variant="outline" className="w-full">
                          Team Profile
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

      {/* How to Participate */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">How to Participate</h2>
              <p className="text-lg text-muted-foreground">
                Ready to make a global impact? Here's how to join the next GNEC Hackathon
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 text-center">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    1
                  </div>
                  <h3 className="text-lg font-bold mb-2">Register</h3>
                  <p className="text-sm text-muted-foreground">
                    Sign up individually or as a team when registration opens for the next hackathon.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 text-center">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    2
                  </div>
                  <h3 className="text-lg font-bold mb-2">Collaborate</h3>
                  <p className="text-sm text-muted-foreground">
                    Work with your team to develop innovative solutions during the hackathon period.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 text-center">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    3
                  </div>
                  <h3 className="text-lg font-bold mb-2">Present</h3>
                  <p className="text-sm text-muted-foreground">
                    Showcase your solution to judges and compete for prizes and implementation support.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Innovate for Global Good?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join the next GNEC Hackathon and be part of a global community working to solve the world's most pressing challenges through technology and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="https://gnec.ngo/hackathon/" target="_blank" rel="noopener noreferrer">
                  Learn More & Register
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/contact">Contact Hackathon Team</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
