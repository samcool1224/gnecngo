import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Award, Globe, ExternalLink, Play, FileText, Clock } from "lucide-react";

export default function LMS() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const courseCategories = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: "UN System & Processes",
      description: "Understanding how the United Nations operates, key agencies, and decision-making processes.",
      courses: ["Introduction to the UN", "ECOSOC & Civil Society", "SDG Implementation"]
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "NGO Partnership Development",
      description: "Building effective partnerships with UN agencies and other civil society organizations.",
      courses: ["Partnership Strategies", "Collaboration Best Practices", "Network Building"]
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Communication & Advocacy",
      description: "Developing effective communication strategies and advocacy campaigns for global impact.",
      courses: ["Digital Advocacy", "Media Relations", "Campaign Development"]
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Leadership Development",
      description: "Building leadership skills for NGO executives and emerging civil society leaders.",
      courses: ["Executive Leadership", "Youth Leadership", "Board Governance"]
    }
  ];

  const features = [
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Self-Paced Learning",
      description: "Access courses anytime, anywhere, and learn at your own pace with flexible scheduling."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Expert Instructors",
      description: "Learn from UN officials, NGO leaders, and subject matter experts with real-world experience."
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Certification Programs",
      description: "Earn certificates of completion to demonstrate your professional development achievements."
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Global Community",
      description: "Connect with learners from around the world and build your professional network."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4">Professional Development</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              GNEC Learning Management System
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Enhance your organization's capacity through our comprehensive online learning platform designed specifically for NGOs and civil society organizations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="https://alison.com/free-lms/global-ngo-executive-committee-gnec" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Access GNEC LMS
                </a>
              </Button>
              <Button size="lg" variant="outline">
                <Play className="h-4 w-4 mr-2" />
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About LMS */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 mb-12">
              <CardContent className="p-0">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <BookOpen className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold mb-4">Empowering NGOs Through Education</h2>
                    <p className="text-lg leading-relaxed mb-4">
                      The GNEC Learning Management System provides comprehensive online training and professional development opportunities specifically designed for NGOs and civil society organizations working with the United Nations.
                    </p>
                    <p className="text-lg leading-relaxed">
                      Our platform offers courses on UN processes, partnership development, advocacy strategies, and leadership skills, helping organizations maximize their impact and effectiveness in advancing the Sustainable Development Goals.
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
              <h2 className="text-3xl font-bold mb-4">Platform Features</h2>
              <p className="text-lg text-muted-foreground">
                Discover what makes the GNEC LMS an essential tool for NGO capacity building
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
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

      {/* Course Categories */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Course Categories</h2>
              <p className="text-lg text-muted-foreground">
                Explore our comprehensive curriculum designed for NGO professionals at all levels
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {courseCategories.map((category, index) => (
                <Card key={index} className="p-6">
                  <CardContent className="p-0">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary">
                        {category.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {category.description}
                        </p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Available Courses:</h4>
                      <div className="flex flex-wrap gap-2">
                        {category.courses.map((course, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Structured Learning Paths</h2>
              <p className="text-lg text-muted-foreground">
                Follow curated learning journeys designed for different roles and experience levels
              </p>
            </div>
            
            <div className="space-y-6">
              <Card className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-center gap-3 mb-3">
                    <Clock className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-bold">New NGO Representative Path</h3>
                    <Badge>6-8 weeks</Badge>
                  </div>
                  <p className="text-muted-foreground mb-3">
                    Perfect for organizations new to UN partnership, covering basics of UN system, UNDGC affiliation, and initial engagement strategies.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">UN Basics</Badge>
                    <Badge variant="outline" className="text-xs">UNDGC Affiliation</Badge>
                    <Badge variant="outline" className="text-xs">First Steps</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-center gap-3 mb-3">
                    <Clock className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-bold">Advanced Advocacy Path</h3>
                    <Badge>10-12 weeks</Badge>
                  </div>
                  <p className="text-muted-foreground mb-3">
                    For experienced NGO professionals looking to enhance their advocacy skills and develop sophisticated campaign strategies.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">Campaign Strategy</Badge>
                    <Badge variant="outline" className="text-xs">Digital Advocacy</Badge>
                    <Badge variant="outline" className="text-xs">Policy Influence</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-center gap-3 mb-3">
                    <Clock className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-bold">Leadership Development Path</h3>
                    <Badge>8-10 weeks</Badge>
                  </div>
                  <p className="text-muted-foreground mb-3">
                    Designed for current and aspiring NGO leaders, focusing on governance, strategic planning, and organizational development.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">Executive Skills</Badge>
                    <Badge variant="outline" className="text-xs">Board Governance</Badge>
                    <Badge variant="outline" className="text-xs">Strategic Planning</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Learning Success Stories</h2>
              <p className="text-lg text-muted-foreground">
                See how GNEC LMS has helped NGOs enhance their capacity and impact
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <CardContent className="p-0">
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="h-5 w-5 text-yellow-500" />
                      <span className="font-medium">Certificate Completed</span>
                    </div>
                    <h3 className="text-lg font-bold">African Youth Development Initiative</h3>
                    <p className="text-sm text-muted-foreground">Nigeria</p>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    "The UN Partnership Development course helped us establish formal relationships with three UN agencies, significantly expanding our program reach and funding opportunities."
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="p-0">
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="h-5 w-5 text-yellow-500" />
                      <span className="font-medium">Learning Path Completed</span>
                    </div>
                    <h3 className="text-lg font-bold">Women's Rights Collective</h3>
                    <p className="text-sm text-muted-foreground">India</p>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    "The Advanced Advocacy Path transformed our campaign strategies. We successfully influenced policy changes at the national level using techniques learned through GNEC LMS."
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
            <h2 className="text-3xl font-bold mb-6">Start Your Learning Journey Today</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of NGO professionals worldwide who are enhancing their skills and expanding their impact through the GNEC Learning Management System.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="https://alison.com/free-lms/global-ngo-executive-committee-gnec" target="_blank" rel="noopener noreferrer">
                  Access GNEC LMS Now
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/contact">Get Learning Support</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
