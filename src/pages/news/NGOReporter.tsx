import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Newspaper, Mail, Calendar, Users, ExternalLink, FileText, Globe, Award } from "lucide-react";

export default function NGOReporter() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const recentIssues = [
    {
      title: "NGO Reporter Vol 38",
      date: "2024",
      description: "Latest developments in NGO-UN partnerships, featuring updates from GNEC board activities and global civil society initiatives.",
      topics: ["Board Updates", "Partnership News", "Event Highlights"]
    },
    {
      title: "NGO Reporter Vol 37",
      date: "2024", 
      description: "Focus on digital advocacy strategies and emerging technologies for NGO communications and outreach.",
      topics: ["Digital Advocacy", "Tech Innovation", "Communication Tools"]
    },
    {
      title: "NGO Reporter Vol 36",
      date: "2024",
      description: "Special coverage of the UN Civil Society Conference and its impact on global NGO collaboration.",
      topics: ["Conference Coverage", "Global Collaboration", "Policy Updates"]
    },
    {
      title: "NGO Reporter Vol 35",
      date: "2024",
      description: "Highlighting successful NGO campaigns and their contributions to Sustainable Development Goals achievement.",
      topics: ["Success Stories", "SDG Progress", "Campaign Analysis"]
    }
  ];

  const features = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Global Reach",
      description: "Distributed to NGO leaders, UN officials, media, and civil society networks worldwide."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Expert Contributors",
      description: "Articles from GNEC board members, UN officials, and leading NGO practitioners."
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "30+ Years of Authority",
      description: "Established in 1992 as the authoritative voice of civil society at the UN."
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Comprehensive Coverage",
      description: "News, analysis, and insights on UN-NGO relations and global civil society trends."
    }
  ];

  const submissionGuidelines = [
    "Articles must be UN/NGO-related and relevant to civil society engagement",
    "Content should be original and not previously published elsewhere",
    "Preferred length: 500-1500 words for feature articles",
    "Include author bio and organization affiliation",
    "High-resolution images welcome to accompany articles",
    "Submit via email to info@gnec.ngo with 'NGO Reporter Submission' in subject line"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4">GNEC Publication</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              NGO Reporter
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Gathering perspectives from the global NGO community. The authoritative newsletter connecting NGO leaders, UN officials, and civil society networks worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                <Mail className="h-4 w-4 mr-2" />
                Subscribe Free
              </Button>
              <Button size="lg" variant="outline">
                <FileText className="h-4 w-4 mr-2" />
                Browse Archives
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About NGO Reporter */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 mb-12">
              <CardContent className="p-0">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Newspaper className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold mb-4">Connecting Global Civil Society</h2>
                    <p className="text-lg leading-relaxed mb-4">
                      Welcome to our newsletter, NGO Reporter: Gathering Perspectives from the Global NGO Community. Its free subscriber list includes NGO leaders affiliated with UNDGC, as well as UN and other media, and all those interested in UN-related, NGO activities at UN Headquarters and worldwide.
                    </p>
                    <p className="text-lg leading-relaxed">
                      For over 30 years, NGO Reporter has been the authoritative voice of civil society at the UN, a news source that connects NGOs, the media, and civil society networks worldwide to the work of GNEC, more than 1,500 UNDGC affiliated NGOs, and topical issues related to all UN Department of Global Communications associates.
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
              <h2 className="text-3xl font-bold mb-4">Why Subscribe to NGO Reporter?</h2>
              <p className="text-lg text-muted-foreground">
                Discover what makes NGO Reporter essential reading for civil society professionals
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

      {/* Recent Issues */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Recent Issues</h2>
              <p className="text-lg text-muted-foreground">
                Browse our latest editions covering key developments in global civil society
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {recentIssues.map((issue, index) => (
                <Card key={index} className="p-6">
                  <CardContent className="p-0">
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="text-sm text-muted-foreground">{issue.date}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3">{issue.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {issue.description}
                    </p>
                    
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {issue.topics.map((topic, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <Button variant="outline" className="w-full">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Read More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Historical Context */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <CardContent className="p-0">
                <div className="text-center mb-6">
                  <h2 className="text-3xl font-bold mb-4">A Legacy of Excellence</h2>
                  <p className="text-lg text-muted-foreground">
                    Founded by visionary leaders who understood the importance of civil society communication
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-3">Founded in 1992</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      NGO Reporter was founded by Ms. Dorrie Weiss and Mr. Patrick Sciarratta, who launched the publication with a vision to create a vital communication bridge between NGOs, UN officials, and global civil society networks.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-3">30+ Years of Impact</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      For over three decades, NGO Reporter has chronicled the evolution of NGO-UN partnerships, documented major civil society achievements, and provided a platform for sharing best practices and innovations.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Article Submission */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Contribute to NGO Reporter</h2>
              <p className="text-lg text-muted-foreground">
                Share your organization's story, insights, and expertise with our global readership
              </p>
            </div>
            
            <Card className="p-8">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold mb-4">Article Submission Guidelines</h3>
                <div className="space-y-3 mb-6">
                  {submissionGuidelines.map((guideline, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground leading-relaxed">{guideline}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="flex-1" asChild>
                    <a href="mailto:info@gnec.ngo?subject=NGO Reporter Submission">Submit Article</a>
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <FileText className="h-4 w-4 mr-2" />
                    Submission Template
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Archive Access */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 text-center">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-4">Complete Archive Access</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Browse through our online archives with issues dating back to January 2012, documenting the evolution of global civil society engagement with the United Nations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg">
                    Browse Full Archive
                  </Button>
                  <Button size="lg" variant="outline">
                    Search by Topic
                  </Button>
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
            <h2 className="text-3xl font-bold mb-6">Stay Connected with Global Civil Society</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of NGO leaders, UN officials, and civil society professionals who rely on NGO Reporter for essential news and insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                <Mail className="h-4 w-4 mr-2" />
                Subscribe Now - It's Free
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/contact">Contact Editorial Team</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
