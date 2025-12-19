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
      topics: ["Board Updates", "Partnership News", "Event Highlights"],
      url: "https://myemail.constantcontact.com/NGO-Reporter-Vol-38--1.html?soid=1118608394243&aid=rNkpqJuyR70"
    },
    {
      title: "NGO Reporter Vol 37",
      date: "2024", 
      description: "Focus on digital advocacy strategies and emerging technologies for NGO communications and outreach.",
      topics: ["Digital Advocacy", "Tech Innovation", "Communication Tools"],
      url: "https://myemail.constantcontact.com/NGO-Reporter-Vol-38--1.html?soid=1118608394243&aid=yJdfRku5fno"
    },
    {
      title: "NGO Reporter Vol 36",
      date: "2024",
      description: "Special coverage of the UN Civil Society Conference and its impact on global NGO collaboration.",
      topics: ["Conference Coverage", "Global Collaboration", "Policy Updates"],
      url: "https://myemail.constantcontact.com/NGO-Reporter-Vol-36--1.html?soid=1118608394243&aid=SeDSa18HRdw"
    },
    {
      title: "NGO Reporter Vol 35",
      date: "2024",
      description: "Highlighting successful NGO campaigns and their contributions to Sustainable Development Goals achievement.",
      topics: ["Success Stories", "SDG Progress", "Campaign Analysis"],
      url: "https://myemail.constantcontact.com/NGO-Reporter-Vol-35--1.html?soid=1118608394243&aid=Rxt6iYz4Syk"
    }
  ];

  const features = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Global Reach",
      description: "Distributed to NGO/CSO community leaders and organizations, UN Departments, Media and Civil Society networks worldwide."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Community Contributors",
      description: "Articles from GNEC board members, UN officials, and leading NGO/CSO Community leaders."
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "30+ years of engagement",
      description: "Established in 1992 as an amplifying voice of civil society at the UN and creating community engagement."
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Comprehensive Coverage",
      description: "News, analysis, and insights on UN-NGO relations and global civil society trends."
    }
  ];

  // Condensed article submission guidelines text per request
  const condensedGuidelines = `ARTICLE SUBMISSION GUIDELINES\n\nWE REQUEST THAT YOU SUBMIT YOUR UN/NGO RELATED ARTICLES FOR CONSIDERATION.\n\nSubmissions for consideration to the NGO Reporter:\nFirst, all articles must be reviewed for content and quality. Submissions for Consideration should be sent to the: communications@gnec.ngo.\n\nThe FLIER: should be one page, clear and legible, with all information and links correct and accessible.\n\nThe ARTICLE: should be 500-800 words – The lead paragraphs may be published in the magazine with a link to the GNEC site, and any related site, where the complete article may be viewed. Commentary and Event-oriented articles on a relevant tone, highlighting recently past or upcoming events are preferred.\n\nThe article should not contain any of the following: Advertorial/for-profit message endorsement of any kind; Information unrelated to the work of the UN in some capacity; Inappropriate information or language; specific political or religious advocacy.\n\nThe article can be a: Personal Essay; Op-ed; Narrative — and include photos and/or video content.\n\nHere are some guiding topics to help you get started: Actions your NGO has taken to address the issues presented/discussed at/by the UN. How the UN has shaped or changed your thinking about international issues, the SDGs, pending debates, etc. Your perspectives on the UN’s global development goals and challenges. Experiences with community action of any kind in relation to UN goals or challenges. Stories about global friendships and collaborations that started at UN Conferences, etc.\n\nSubmit articles in Word (.doc) format to this address: communications@gnec.ngo with the subject line “NGO REPORTER SUBMISSION REQUEST : ‘Title of the Article’”. Once reviewed, it may take about 14 business days until the article is acknowledged as received and a decision is provided as to its use in the NGO Reporter. Along with the article, kindly provide a brief description about the author (1 -2 sentences), together with relevant information such as a website link, a Twitter handle, and other contact information, if applicable.\n\nPhotos bring articles to life: please include HIGH RESOLUTION photographs or video links wherever possible.`;

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
                    
                    <Button variant="outline" className="w-full" asChild>
                      <a href={(issue as any).url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Read More
                      </a>
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
                <h3 className="text-xl font-bold mb-4">ARTICLE SUBMISSION GUIDELINES</h3>
                <div className="mb-6 text-muted-foreground whitespace-pre-line leading-relaxed">
                  {condensedGuidelines}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="flex-1" asChild>
                    <a href="mailto:communications@gnec.ngo?subject=NGO REPORTER SUBMISSION REQUEST">Submit Article</a>
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
