import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, Users, FileText, CheckCircle, ArrowRight } from "lucide-react";

export default function AboutUNDGC() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Be globally known",
      description: "Your organization's profile will be added to the UN Civil Society database"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Join international efforts",
      description: "Help monitor and implement international agreements"
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Get access to UN grounds",
      description: "Passes for activities or events at UN facilities"
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Access materials and events",
      description: "Get access to materials, activities and events which promote the work of the United Nations"
    },
    {
      icon: <ArrowRight className="h-6 w-6" />,
      title: "Exchange ideas",
      description: "Partake in a global community and exchange ideas with like-minded organizations"
    }
  ];

  const criteria = [
    "Support and respect the principles of the Charter of the United Nations",
    "Be a reputable civil society organization with national, regional or international standing",
    "Operate solely on a not-for-profit basis and have tax-exempt status at the national/federal level",
    "Be an established civil society organization that has been registered with the government of a Member State of the United Nations, and has operated as a not-for-profit and tax exempt organization for at least 2 years"
  ];

  const requiredDocuments = [
    "A copy of your organization's Constitution/By-laws",
    "Proof of non-profit & tax exemption status (only official government-issued documents)",
    "A copy of your most recent financial statement (requirements vary by annual income)",
    "6 different samples of recent information materials or advocacy events relating to UN work",
    "2 recommendation letters from individuals/organizations familiar with your work",
    "1 recommendation letter from a UNIC/UNIS/UNRIC or UN entity"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4">UN Partnership</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About United Nations Department of Global Communications
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Learn about the UN Department of Global Communications and how your organization can become officially associated to amplify your global impact.
            </p>
          </div>
        </div>
      </section>

      {/* What is UN DGC */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 mb-12">
              <CardContent className="p-0">
                <h2 className="text-3xl font-bold mb-6">What is UN DGC?</h2>
                <p className="text-lg leading-relaxed mb-6">
                  The Department of Global Communications tells this UN story across multiple platforms, digital and traditional, to build support for the aims and work of the United Nations.
                </p>
                <p className="text-lg leading-relaxed">
                  Through their global operations and offices in 60 countries, they reach millions of people with trusted, objective information and an inclusive message that enables the public, civil society, private sector and Member States to engage in the work of the United Nations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Associate */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why associate with DGC?</h2>
              <p className="text-lg text-muted-foreground">
                Discover the benefits of formal association with the UN Department of Global Communications
              </p>
            </div>
            
            {/* Top row: 3 centered */}
            <div className="grid lg:grid-cols-3 gap-6 justify-items-stretch max-w-5xl mx-auto">
              {benefits.slice(0,3).map((benefit, index) => (
                <Card key={index} className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary">
                        {benefit.icon}
                      </div>
                      <h3 className="text-lg font-bold">{benefit.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Bottom row: 2 centered */}
            <div className="grid lg:grid-cols-2 gap-6 justify-items-stretch max-w-3xl mx-auto mt-6">
              {benefits.slice(3).map((benefit, index) => (
                <Card key={`bottom-${index}`} className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary">
                        {benefit.icon}
                      </div>
                      <h3 className="text-lg font-bold">{benefit.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Criteria Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Criteria for formal Association</h2>
            <Card className="p-8">
              <CardContent className="p-0">
                <ul className="space-y-4">
                  {criteria.map((criterion, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-lg leading-relaxed">{criterion}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">How to apply?</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold mb-4">Step 1: Fill out the application form</h3>
                  <p className="text-muted-foreground mb-4">
                    Complete the official application form (typed forms only - no handwritten forms will be processed).
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold mb-4">Step 2: Prepare required documents</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {requiredDocuments.map((doc, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="p-6 mt-6">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold mb-4">Step 3: Submit your application</h3>
                <p className="text-muted-foreground mb-4">
                  Send the completed application form and all required documents directly to the Civil Society Unit via e-mail at <a href="mailto:undgccso@un.org" className="text-primary hover:underline">undgccso@un.org</a>.
                </p>
                <p className="text-sm text-muted-foreground">
                  All submitted materials must be in English or French. Material in other languages must be accompanied by a translation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Join the Global Network?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Take the first step towards formal association with the UN Department of Global Communications and amplify your organization's global impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="https://www.un.org/en/civil-society/page/application" target="_blank" rel="noopener noreferrer">Start Application</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Contact GNEC for Guidance</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
