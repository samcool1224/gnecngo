import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function CommunicationWorkshops() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-10">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4">Key Initiative</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Communication Workshops</h1>
            <p className="text-lg text-muted-foreground">GNEC's collaboration with UNDGC to convene workshops, town halls, webinars, and more for the NGO/CSO community</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="p-6">
              <CardContent className="p-0 space-y-4 leading-relaxed">
                <p>
                  Since its inception in 1962, the GNEC, and NGO DPI previously, have a proud history of partnering with UNDGC, and DPI previously, at their request. GNEC has participated in and in some cases led aspects within the Planning Committees for each major UN Civil Society Conference since their inception – the work of this body has primarily been to prepare all aspects of the workshops and exhibits while also being major content and volunteer service contributors to most other aspects of each event.
                </p>
                <p>
                  During the past few years, virtual conferences and briefings have become the lifeline for global civil society and the UNDGC affiliated NGOs/CSOs. During the year, numerous workshops are organised by GNEC – or produced as platform hosts by GNEC for others – to address issues we hope are important to UNDGC affiliated NGOs/CSOs. Some of the jointly organised GNEC–UNDGC events held yearly are the Communication Workshops, Town Hall Meetings, Webinars, Meet and Greet events, GNEC Hackathon and many more designed to help NGO/CSOs find increased success in the field.
                </p>
                <p>
                  We jointly organised events with various UNDGC affiliated NGO/CSOs such as: World Assembly of Youth, International Federation of Ageing, African Youth Movement, NGO Committee on Sustainable Development–NY, Light Up foundation, NGO Committee on Ageing–NY, League of Women Voters in the United States, Delta Sigma Theta Sorority, just to mention a few.
                </p>
                <p>
                  These collaborations give the NGO/CSOs opportunities to share information and best practices and to develop partnerships to help achieve the Sustainable Development Goals by 2030. We are open to collaborate and partner with all UNDGC affiliated NGOs/CSOs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
