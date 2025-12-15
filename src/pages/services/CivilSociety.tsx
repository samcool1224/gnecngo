import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function CivilSociety() {
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">UN Civil Society Conference</h1>
            <p className="text-lg text-muted-foreground">History, context, and GNEC's role in the UN Civil Society Conference</p>
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
                  The UN Civil Society Conference (originally the NGODPI Conference) has been the most important gathering of civil society organizations anywhere on the planet. There have been sixty-eight (68) annual conferences to date; typically over 3,000 participants from 700 NGOs around the world attend to hear from senior UN officials, public opinion makers, and international media and, most importantly, to interact with each other in workshops, round-table discussions, and unique informal sessions. During 2020 and beyond, there has been forced postponement of in-person events at the UN. Alternatively, there are now numerous virtual events available for online NGOs/CSOs participation. While the pandemic has curtailed the already limited participation of NGOs/CSOs at United Nations Headquarters, it has in some ways ‘democratized’ access to its major events. GNEC will continue to take advantage of the opportunities to exchange, and the platform it has to provide access, while the major conferences are on hold.
                </p>
                <p>
                  Originally, all of the large, UN NGO-related conferences were held at UN headquarters in New York. After the 2008 Master Plan, several were held internationally, in Paris, Mexico City, Melbourne, Bonn, and Seoul. In 2019, the 68th Civil Society Conference was held in Salt Lake City, the first time in the U.S. but not at Headquarters. The gathering in Salt Lake broke all attendance records at nearly 6,000 staff, guests, and NGO delegates – from more than 100 countries, and almost half were youth.
                </p>
                <p>
                  These major Annual Conferences have been organized by the UN Department of Global Communications (UN DGC) (formerly the Department of Public Information) in cooperation with the Global NGO Executive Committee (GNEC). The focus of each Conference has been on an issue of global importance to civil society, such as climate change, human rights, disarmament, global health, etc. Today the Sustainable Development Goals (SDGs) are especially relevant. In Utah, in 2019, the topic was Building Inclusive and Sustainable Cities and Communities.
                </p>
                <p>
                  Beyond the plenaries and roundtables, the GNEC organised all of the Workshops and Exhibits. Those were populated by the UNDGC associated NGOs/CSOs and special guests, and adjudicated each year by GNEC board members as part of the UN/GNEC Conference Planning Committee.
                </p>
                <p>
                  The 69th UN Civil Society Conference will be held in Nairobi, Kenya from the 9th- 10th May 2024.
                </p>
              </CardContent>
            </Card>

            <div className="rounded-xl overflow-hidden border bg-background">
              <img src="/homepage/cslearnmore.jpg" alt="UN Civil Society Conference" className="w-full h-auto object-contain" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
