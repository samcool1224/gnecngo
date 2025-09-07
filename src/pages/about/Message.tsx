import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Quote, Users, Globe, Heart } from "lucide-react";

export default function Message() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4">Leadership Message</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Message from the Presidents
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              A joint message from our International President and New York President on GNEC's mission and vision for global civil society engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Presidents Introduction */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="p-6">
                <CardContent className="p-0">
                  <div className="text-center mb-4">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-12 w-12 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Uwem Robert OTU</h3>
                    <p className="text-primary font-medium">International President</p>
                    <p className="text-sm text-muted-foreground">African Youth Movement</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="p-0">
                  <div className="text-center mb-4">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Globe className="h-12 w-12 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Ediola Pashollari</h3>
                    <p className="text-primary font-medium">New York President</p>
                    <p className="text-sm text-muted-foreground">World Assembly of Youth (WAY)</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Main Message */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-6">
                  <Quote className="h-8 w-8 text-primary" />
                  <h2 className="text-3xl font-bold">Our Joint Message</h2>
                </div>
                
                <div className="space-y-6 text-lg leading-relaxed">
                  <p>
                    We are delighted to invite you to join and participate in our journey of giving a voice to NGOs worldwide.
                  </p>
                  
                  <p>
                    We call on you to support and partner with us on our many flagship initiatives such as: Communications Workshops, Regional SDGs Roundtable, GNEC Hackathon, the United Nations Civil Society Conference, among others. It is our desire to witness change be driven in our countries and communities.
                  </p>
                  
                  <p>
                    Nowadays, we face very crucial and challenging times. We are being impacted by climate change and its attendant disruption of livelihoods; we are seeing hate speech, misinformation and disinformation assume a very ugly dimension; we are facing wars and terrorism in almost every continent; we are witnessing religious intolerance, gender disparity and inequalities in our day to day life.
                  </p>
                  
                  <p>
                    Now is the time to come together in order to achieve the Sustainable Development Goals and ensure that no one is left behind. It is pertinent to join forces and work together to highlight the importance of the Civil Society's role in your community, nation, region and the world at large.
                  </p>
                  
                  <p>
                    We call on you to register and affiliate with the United Nations Department of Global Communications and join our growing family of NGOs where you will find that your aspirations for Global visibility and relevance are met.
                  </p>
                  
                  <p>
                    Stay tuned here for updates on the programmes and activities we will unveil to the Global NGO Community.
                  </p>
                  
                  <p className="font-medium text-right mt-8">
                    Thank you.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Themes */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Shared Vision</h2>
              <p className="text-lg text-muted-foreground">
                The key themes that guide our leadership and GNEC's mission
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 text-center">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Unity in Diversity</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Bringing together NGOs from all continents and sectors to work collectively toward common goals and shared values.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 text-center">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Global Impact</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Amplifying the voice of civil society in addressing climate change, inequality, and other pressing global challenges.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 text-center">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Sustainable Development</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Working together to achieve the SDGs and ensure no one is left behind in our pursuit of a better world.
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
            <h2 className="text-3xl font-bold mb-6">Join Our Global Movement</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Heed the call of our presidents and become part of the global network working to strengthen civil society's voice at the United Nations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="/contact">Get Involved Today</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/about/undgc">Learn About UN Association</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
