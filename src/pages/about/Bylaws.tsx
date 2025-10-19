import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, Scale, Users } from "lucide-react";

export default function Bylaws() {
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
            <Badge className="mb-4">Governance</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              By-Laws and Procedures
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              The foundational documents that guide GNEC's operations and governance structure in service to the global NGO community.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 mb-12">
              <CardContent className="p-0">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Scale className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold mb-4">Governance Framework</h2>
                    <p className="text-lg leading-relaxed mb-4">
                      The Global NGO Executive Committee (GNEC) serving Board is elected by members of non-governmental organizations (NGOs) affiliated with the United Nations Department of Global Communications ("UNDGC").
                    </p>
                    <p className="text-lg leading-relaxed">
                      The mandate of the GNEC Board emanates from Article 71 of the Charter of the United Nations, United Nations General Assembly resolution 13(1), Annex 1 of 13 February 1946, and ECOSOC resolutions 1296 (XLIV) of 23 May 1968, 1297 (XLIV) of 27 May 1968 and 1996/31 of 25 July 1996.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Documents */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Governing Documents</h2>
              <p className="text-lg text-muted-foreground">
                The essential documents that define GNEC's structure, processes, and responsibilities
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">GNEC By-Laws</h3>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    The official by-laws adopted in June 2024 that establish the fundamental governance structure, membership requirements, and operational procedures of the Global NGO Executive Committee.
                  </p>
                  <Button 
                    className="w-full" 
                    variant="outline"
                    onClick={() => window.open('https://gnec.ngo/wp-content/uploads/2021/03/FINAL-Bylaws-June-2020.pdf', '_blank')}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download By-Laws (PDF)
                  </Button>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Policies & Procedures</h3>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Detailed policies and procedures that complement the by-laws, providing specific guidance on how the Executive Committee carries out its obligations to NGOs affiliated with UNDGC.
                  </p>
                  <Button 
                    className="w-full" 
                    variant="outline"
                    onClick={() => window.open('https://gnec.ngo/wp-content/uploads/2021/03/FINAL-Bylaws-June-2020.pdf', '_blank')}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download Policies (PDF)
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Key Provisions */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Key Provisions</h2>
            
            <div className="space-y-6">
              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold mb-3">Board Composition</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The GNEC has a 19-member Board. By GNEC by-laws, each member of the Board must be a representative of one of the UNDGC affiliated NGOs/CSOs, ensuring direct representation of the civil society community.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold mb-3">Subcommittee Participation</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    As governed by the by-laws, each voting Member of the GNEC Board shall participate in at least one of the eight subcommittees, ensuring active engagement in the organization's various functions and initiatives.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold mb-3">Electoral Process</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The by-laws establish clear procedures for the democratic election of Board members, ensuring transparency and fair representation of the diverse UNDGC-affiliated NGO community worldwide.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold mb-3">Operational Framework</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The policies and procedures detail how GNEC carries out its mission to strengthen NGO-UN partnerships, including guidelines for events, communications, and strategic planning initiatives.
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
            <h2 className="text-3xl font-bold mb-6">Questions About Our Governance?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our By-Laws and Policies & Procedures Subcommittee is available to answer questions about GNEC's governance structure and operational guidelines.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="mailto:bylaws@gnec.ngo">Contact By-Laws Committee</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/about/subcommittees">View All Subcommittees</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
