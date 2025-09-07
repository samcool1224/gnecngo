import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function WhoWeAre() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const executiveCommittee = [
    {
      name: "Mr. Uwem Robert OTU",
      title: "International President",
      organization: "African Youth Movement",
      description: "Nigerian nationality with International Diploma in Environmental Pollution Control and Master's in Industrial Biochemistry. Founding President of African Youth Movement and has addressed the UN twice at Annual UNDPINGO Conferences."
    },
    {
      name: "Ms. Ediola Pashollari", 
      title: "New York President",
      organization: "World Assembly of Youth (WAY)",
      description: "Albanian nationality residing in New York. Holds MBA, MA in Political Science, Masters in Entreprenology, and LLB. Secretary General of WAY and Director of World Youth Institute."
    },
    {
      name: "Mr. Dileepkumar Thankappan",
      title: "International Vice President", 
      organization: "World Yoga Community",
      description: "Founder, Global Chairman, and CEO of World Yoga Community. Hindu Monk, ordained Interfaith Minister, and global culture of peace activist residing in New York."
    },
    {
      name: "Dr. Constance Sobon Sensor",
      title: "New York Vice President",
      organization: "League of Women Voters of the United States", 
      description: "PhD, RN, recently retired Professor from Rutgers University. Main representative for LWVUS at the UN, focusing on population health and Sustainable Development Goals."
    },
    {
      name: "Dr. Brian Muzás",
      title: "Treasurer",
      organization: "School of Diplomacy and International Relations, Seton Hall University",
      description: "Assistant Professor and Director of the Center for United Nations and Global Governance Studies. Catholic Priest with PhD in Public Affairs and research focus on international security."
    },
    {
      name: "Ms. Shennon Sequeira",
      title: "Secretary", 
      organization: "MUN Impact",
      description: "Portuguese nationality with LLB Law with Criminology, pursuing LLM. Youth Representative on Board of Directors at MUN Impact, recognized in Top 20 Young Women in Sustainable Development."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4">About GNEC</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Who We Are
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              The Global NGO Executive Committee is comprised of eighteen representatives elected by organizations officially associated with the United Nations Department of Global Communications (UNDGC).
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 mb-12">
              <CardContent className="p-0">
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <div className="space-y-4 text-lg leading-relaxed">
                  <p>
                    The Executive Committee was founded to promote a closer working relationship between the United Nations and the NGOs associated with UNDGC. GNEC acts as a liaison between the NGO/CSO community and UN, and help them make more effective use of their affiliation with the UNDGC.
                  </p>
                  <p>
                    In partnership with the UNDGC, the Executive Committee organizes the Communication Workshops, Town Hall Meetings, Briefings and the annual UN Civil Society Conference (formerly known as the UN DPI NGO Conference), at the UN Headquarters or abroad.
                  </p>
                  <p>
                    These events aim to facilitate collaboration among NGOs, empowers civil society, and increases public understanding of the United Nations' critical efforts on issues of economic and social development, climate justice, human rights, the rule of law, peace-building, and other SDGs.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Executive Committee Officers */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Executive Committee Officers</h2>
              <p className="text-lg text-muted-foreground">
                Meet the leadership team guiding GNEC's mission worldwide
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {executiveCommittee.map((member, index) => (
                <Card key={index} className="h-full">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                      <Badge variant="secondary" className="mb-2">{member.title}</Badge>
                      <p className="text-sm font-medium text-primary mb-3">{member.organization}</p>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Global Network</h2>
            <p className="text-lg text-muted-foreground mb-8">
              GNEC provides civil society with abundant opportunities to become more knowledgeable about the UN and the NGO/CSO sector through our popular Communications Workshops and other activities throughout the year.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="/contact">Get Involved</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/about/subcommittees">View Subcommittees</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
