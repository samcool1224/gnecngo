import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Donate() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const paypalUrl = "https://www.paypal.com/us/fundraiser/charity/1391190";

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-brand-light-blue-gray/20 flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="pt-28 pb-12">
          <div className="container max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Support GNEC</h1>
            <p className="text-muted-foreground text-lg">
              Your contribution helps strengthen Civil Society and advance UN partnerships worldwide.
            </p>
          </div>
        </section>

        {/* Why donate */}
        <section className="pb-8">
          <div className="container max-w-4xl">
            <Card className="p-8">
              <CardContent className="p-0 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Why donate to or sponsor GNEC?</h2>
                  <p className="leading-relaxed">HELP US</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Because GNEC supports and strengthens the work of so many other NGOs throughout the world.
                  </p>
                </div>

                <p className="leading-relaxed">
                  Your ONE donation or sponsorship here is able to reach nearly 1550 NGOs, already vetted by the UN, and active with great programming that makes us all proud.
                </p>

                <div className="pt-2">
                  <Button asChild size="lg" className="bg-brand-green text-white hover:bg-brand-blue transition-colors rounded-full px-8 py-3 font-medium">
                    <a href={paypalUrl} target="_blank" rel="noopener noreferrer">DONATE</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Memorial fund content */}
        <section className="pb-16">
          <div className="container max-w-4xl space-y-6">
            <Card className="p-8">
              <CardContent className="p-0 space-y-4">
                <p className="leading-relaxed">
                  Words cannot begin to capture the many dimensions of Patrick Sciarratta and the enormity of what the world has lost in his passing. He was a mover and a shaker, a colleague, an ally, a mentor, an innovator, an actor, a juggler, a global citizen, a passionate advocate for the inclusion of Civil Society and youth, and most importantly, a friend to all who knew him. His imagination and energy knew no bounds. He was vibrant, effervescent, and charismatic. He had the ability to dream big AND make those dreams a reality.
                </p>
                <p className="leading-relaxed">
                  Patrick was one of the most dedicated individuals we have had the pleasure of knowing. He was a living definition of servant leadership.
                </p>
                <p className="leading-relaxed">
                  In service to Civil Society, in his two-year tenure as the President of the Global NGO Executive Committee, he never ceased to innovate and develop programs for the benefit of communities around the world. He had many more ideas for how to strengthen the NGO community and further enhance the inclusion of Civil Society at the United Nations. We at GNEC will work to carry his torch onwards.
                </p>
                <p className="leading-relaxed">
                  At the time of his passing, Patrick was hard at work trying to secure funding to sustain continued programming for the Global NGO Executive Committee, which is composed entirely of elected volunteers from NGOs around the world.
                </p>
                <p className="leading-relaxed">
                  The Patrick Sciarratta GNEC Memorial Fund is a tribute to his legacy that will support the continued work of GNEC for the years to come.
                </p>
                <p className="leading-relaxed">
                  We hope that friends and colleagues of Patrick’s will consider a donation to GNEC in Patrick’s memory to support sustaining the work that he was so deeply committed to.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  General Disclaimer: Contributions to the GNEC do not constitute donations to the United Nations. It is expressly forbidden for donors to infer or imply that contributions to the Global NGO Executive Committee are used for any other objective other than those stated above.
                </p>
                <p className="leading-relaxed">
                  Write us for more information on donations at <a className="text-brand-blue underline" href="mailto:info@gnec.ng">info@gnec.ng</a>
                </p>

                <div className="pt-2">
                  <Button asChild size="lg" className="w-full sm:w-auto border border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white transition-colors rounded-full px-8 py-3 font-medium bg-transparent">
                    <a href={paypalUrl} target="_blank" rel="noopener noreferrer">Donate via PayPal</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
