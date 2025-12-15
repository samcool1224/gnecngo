import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Users, Calendar, DollarSign, FileText, Vote, Handshake, Target } from "lucide-react";

export default function Subcommittees() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const subcommittees = [
    {
      name: "Bylaws, Policies and Procedures Subcommittee",
      icon: <FileText className="h-6 w-6" />,
      chair: "Dr. Connie Sobon Sensor and Ms. Kim Quarles",
      secretary: "Dr. Piyush Gupta",
      email: "bylaws@gnec.ngo",
      description: "Responsible for reviewing GNEC's two official NYS and IRS governing documents, presenting any proposed revisions to the GNEC Board and recording revisions voted upon and made."
    },
    {
      name: "Communication Subcommittee",
      icon: <Mail className="h-6 w-6" />,
      chair: "Ms. Shennon Sequeira", 
      secretary: "Ms. Dayana Blanco Galo",
      email: "communications@gnec.ngo",
      description: "Develops communications strategies for GNEC events and creates materials to inform and promote the work of GNEC and UNDGC affiliated NGOs through various communications channels. Also responsible for social media and the NGO Reporter."
    },
    {
      name: "Events Subcommittee",
      icon: <Calendar className="h-6 w-6" />,
      chair: "Dr. J. Nadine Gracia and Mr. Dileepkumar Thankappan",
      secretary: "Ms. Elena Reiss",
      email: "events@gnec.ngo", 
      description: "Responsible for the planning, development, and implementation of an annual conference as well as other GNEC-initiated briefings and related events, which may be developed by GNEC or as collaborative efforts with UNDGC or other NGOs."
    },
    {
      name: "Fundraising Subcommittee",
      icon: <DollarSign className="h-6 w-6" />,
      chair: "HRH Prince Adnan El-Hashemite",
      secretary: "Ms. Farah Salim Eck",
      email: "fundraising@gnec.ngo",
      description: "Responsible for fundraising and development, including preparing presentations, prospecting, contacting potential funders and securing support for GNEC projects and UNDGC affiliated NGOs."
    },
    {
      name: "Finance Subcommittee", 
      icon: <Target className="h-6 w-6" />,
      chair: "Dr. Brian Muzàs",
      secretary: "Mr. Faisal El Fadl", 
      email: "treasurer@gnec.ngo",
      description: "Responsible for handling GNEC finances, receiving and disbursing funds, and managing the budget."
    },
    {
      name: "Election Subcommittee",
      icon: <Vote className="h-6 w-6" />,
      chair: "Ms. Aimée Quinlan",
      secretary: "Ms. Kim Quarles",
      email: "elections@gnec.ngo",
      description: "Responsible for all aspects of conducting the GNEC elections, including determining the most appropriate method to recruit candidates and administer the election process."
    },
    {
      name: "Outreach and Partnership Subcommittee",
      icon: <Handshake className="h-6 w-6" />,
      chair: "Ms. Adriane Berg",
      secretary: "Ms. Nora Hajjar",
      email: "outreach@gnec.ngo", 
      description: "Responsible for reaching out and engaging with all UNDGC affiliated NGOs by creating and providing opportunities to increase visibility and/or collaboration."
    },
    {
      name: "Strategic Plan Subcommittee",
      icon: <Target className="h-6 w-6" />,
      chair: "Mr. Dileepkumar Thankappan and Mr. Joseph DeMeyer",
      secretary: "HRH Prince Adnan El-Hashemite",
      email: "strategicplan@gnec.ngo",
      description: "Responsible for reviewing short and long range strategic plans for GNEC. Members: Adriane, Kim, Faisal."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4">GNEC Structure</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              2025 – 2027 GNEC Subcommittees
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              As governed by our by-laws, each voting Member of the GNEC Board shall participate in at least one of the eight subcommittees working to advance our mission.
            </p>
          </div>
        </div>
      </section>

      {/* Subcommittees Grid */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {subcommittees.map((committee, index) => (
                <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary">
                        {committee.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2">{committee.name}</h3>
                        <div className="space-y-2 text-sm">
                          <div>
                            <span className="font-medium">Chair: </span>
                            <span className="text-muted-foreground">{committee.chair}</span>
                          </div>
                          {committee.secretary && (
                            <div>
                              <span className="font-medium">Secretary: </span>
                              <span className="text-muted-foreground">{committee.secretary}</span>
                            </div>
                          )}
                          <div>
                            <span className="font-medium">Email: </span>
                            <a href={`mailto:${committee.email}`} className="text-primary hover:underline">
                              {committee.email}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {committee.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Get Involved with Our Subcommittees</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Each subcommittee plays a vital role in GNEC's mission to strengthen NGO-UN partnerships. Contact the relevant committee to learn about participation opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="/contact">Contact Us</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/about/who-we-are">Meet Our Team</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
