import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Vote, Users, Calendar, FileText, CheckCircle, Mail, AlertCircle } from "lucide-react";

export default function Elections() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const electionProcess = [
    {
      step: "January",
      title: "Elections Announced",
      description: "Elections are announced; open houses invite interested NGOs to learn more about the election process and what serving as an elected member of GNEC means."
    },
    {
      step: "March",
      title: "Call for Nominations",
      description: "The Nominations and Elections Subcommittee invites UNDGC affiliated NGOs to submit candidates along with their qualifications to elections@gnec.ngo."
    },
    {
      step: "April", 
      title: "Ballot Presentation",
      description: "The ballot containing the final roster of candidates is presented to all UNDGC affiliated NGOs for voting."
    },
    {
      step: "June",
      title: "Results Announcement",
      description: "Directors/officers-elect are presented at the June board meeting and welcomed to the GNEC Executive Board."
    },
    {
      step: "August",
      title: "Assumption of Duties",
      description: "New board members assume their duties at the August Retreat and begin their term of service."
    }
  ];

  const firstRow = electionProcess.slice(0, 3);
  const secondRow = electionProcess.slice(3);

  const candidateRequirements = [
    "Must be a representative of a UNDGC-affiliated NGO in good standing",
    "Organization must have completed its biennial review within required timeframe",
    "Candidate statement of less than 250 words required",
    "Up-to-date resume demonstrating relevant experience",
    "Endorsement letter from head of candidate's organization on official letterhead",
    "Prior experience working with UN representatives, NGOs, or Member States preferred"
  ];

  const votingEligibility = [
    "Each UNDGC-affiliated organization gets one ballot",
    "Must be listed on the UN DGC official list of NGOs/CSOs at the time of the election",
    "Organizations in good standing with UNDGC are eligible to vote"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4">Democratic Process</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Nominations and Elections
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Learn about GNEC's democratic election process as well as how UNDGC affiliated NGOs can participate in selecting the Executive Board leadership and can nominate members of their NGO.
            </p>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 mb-12">
              <CardContent className="p-0">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Vote className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold mb-4">Democratic Leadership Selection</h2>
                    <p className="text-lg leading-relaxed mb-4">
                      As per the GNEC Bylaws, the Nominations and Elections process is supervised by the Nominations and Elections Subcommittee, ensuring a fair and transparent democratic process for selecting GNEC's leadership.
                    </p>
                    <p className="text-lg leading-relaxed">
                      This annual process allows all UNDGC affiliated NGOs to have a voice in selecting the directors and officers who will guide GNEC's mission to strengthen NGO-UN partnerships worldwide.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Election Timeline */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Annual Election Timeline</h2>
              <p className="text-lg text-muted-foreground">
                The structured process ensuring democratic participation and transparent leadership selection
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
                {firstRow.map((phase, index) => (
                  <Card key={`row1-${index}`} className="p-6 text-center w-full">
                    <CardContent className="p-0">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Calendar className="h-8 w-8 text-primary" />
                      </div>
                      <Badge className="mb-3">{phase.step}</Badge>
                      <h3 className="text-lg font-bold mb-3">{phase.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {phase.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
                {secondRow.map((phase, index) => (
                  <Card key={`row2-${index}`} className="p-6 text-center w-full">
                    <CardContent className="p-0">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Calendar className="h-8 w-8 text-primary" />
                      </div>
                      <Badge className="mb-3">{phase.step}</Badge>
                      <h3 className="text-lg font-bold mb-3">{phase.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {phase.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Candidate Requirements */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Candidate Requirements</h2>
              <p className="text-lg text-muted-foreground">
                Essential qualifications and materials required for nomination to the GNEC Executive Board
              </p>
            </div>
            
            <Card className="p-8">
              <CardContent className="p-0">
                <div className="space-y-4">
                  {candidateRequirements.map((requirement, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="leading-relaxed">{requirement}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-1" />
                    <div>
                      <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">Interview Process</h4>
                      <p className="text-sm text-blue-800 dark:text-blue-200">
                        All candidates participate in a preliminary interview with the Nominations and Elections subcommittee covering their vision for GNEC, planned contributions, and relevant experience. The interview will also cover the mandatory responsibilities of GNEC directors, if a candidate is unable to perform these responsibilities they will be ineligible to serve on GNEC.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Voting Information */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Voting Eligibility & Process</h2>
              <p className="text-lg text-muted-foreground">
                How UNDGC affiliated organizations can participate in the democratic selection process
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-bold">Who Can Vote?</h3>
                  </div>
                  <ul className="space-y-2 text-sm">
                    {votingEligibility.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-center gap-3 mb-4">
                    <Mail className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-bold">How to Vote</h3>
                  </div>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p>Ballots are distributed during the voting period in April.</p>
                    <p>If you do not receive a ballot and your organization meets the requirements outlined in our WHO CAN VOTE section, please use the contact email below.</p>
                    <p>Each organization receives one ballot regardless of size or membership.</p>
                    <p>Voting is confidential and results are announced at the June board meeting.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-muted-foreground">
                Common questions about the GNEC election process
              </p>
            </div>
            
            <div className="space-y-6">
              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="text-lg font-bold mb-2">Can candidates campaign for their positions?</h3>
                  <p className="text-muted-foreground">
                    GNEC posts standardized promotional materials for all candidates. Beyond that, candidates are free to campaign however they like, so long as no GNEC resource is used and candidates are civil to others running for election.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="text-lg font-bold mb-2">What responsibilities do elected positions entail?</h3>
                  <p className="text-muted-foreground">
                    For full details on the responsibilities of directors and officers, please review the GNEC bylaws and policies & procedures documents available on our website.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Questions About Elections?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              The Nominations and Elections Subcommittee is here to help with any questions about the democratic process, candidate requirements, or voting procedures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="mailto:elections@gnec.ngo">Contact Elections Team</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/about/bylaws">Review Bylaws</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
