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
      name: "Mr. Uwem Robert Otu",
      title: "International President",
      organization: "African Youth Movement",
      image: "/officers/uwemrobert.png",
      description: "Mr. Uwem Robert Otu is a Nigerian UN-engaged leader, environmental specialist, and founding President of the African Youth Movement, with global speaking credentials and advanced training in pollution control, water management and biochemistry."
    },
    {
      name: "Ms. Ediola Pashollari", 
      title: "Co-President",
      organization: "World Assembly of Youth (WAY)",
      image: "/officers/ediolapashollari.png",
      description: "Ms. Ediola Pashollari, an Albanian leader in global youth development, is GNEC’s Co- President and WAY Secretary General, with multiple advanced degrees and extensive international experience in youth advocacy, programmes and policy."
    },
    {
      name: "Guruji H.H. Dileepkumar Thankappan",
      title: "International Vice President", 
      organization: "World Yoga Community",
      image: "/officers/thankappan.png",
      description: "Guruji H.H. Dileepkumar Thankappan, Founder and CEO of the World Yoga Community, is a Hindu monk, interfaith minister, UN religious leader, humanitarian, spiritual teacher and global advocate for peace and yoga."
    },
    {
      name: "Dr. Connie Sobon Sensor",
      title: "New York Vice President",
      organization: "League of Women Voters of the United States", 
      image: "/officers/constancesensor.png",
      description: "Dr. Connie Sobon Sensor, PhD, RN, is an American nursing leader and UN representative for LWVUS, with extensive experience in population health, SDGs, global citizenship, climate advocacy and nursing education and policy."
    },
    {
      name: "Rev. Dr. Brian Keenan Muzás",
      title: "Treasurer",
      organization: "School of Diplomacy and International Relations, Seton Hall University",
      image: "/officers/brianmuzas.png",
      description: "Rev. Dr. Brian Keenan Muzás, a Catholic priest and scholar, is a Seton Hall University professor and UN-focused researcher, specializing in international security, ethics, and interreligious dialogue, with advanced degrees in theology, aeronautics and engineering."
    },
    {
      name: "Ms. Shennon Sequeira",
      title: "Secretary", 
      organization: "MUN Impact",
      image: "/officers/shennonsequiera.png",
      description: "Ms. Shennon Sequeira, a Portuguese youth leader and legal professional, serves on MUN Impact’s board, advocates for youth engagement and empowerment, and has been recognized among the Top 20 Young Women in Sustainable Development."
    }
  ];

  const directors = [
    {
      name: "Ms. Olasubomi Iginla Aina",
      title: "Director",
      organization: "Lightup Foundation",
      image: "/directors/olasubomiaina.png",
      description: `Ms. Olasubomi Iginla Aina, Nigerian-born UK resident and MBE recipient, is Executive Director of Lightup Foundation, UN speaker, and African Diaspora ambassador, recognized for leadership in youth empowerment and global advocacy.`
    },
    {
      name: "Ms. Elena Reiss",
      title: "Director",
      organization: "Lehigh University",
      image: "/directors/Elena-Reiss.jpg",
      description: `Elena Reiss, Lehigh University’s UN alternate representative, is an experienced higher education professional and women’s rights advocate, dedicated to youth empowerment, global education and creating transformative programs that prepare students for international engagement.`
    },
    {
      name: "Ms. Kim Quarles",
      title: "Director",
      organization: "World Jurist Association",
      image: "/directors/kimquarles.png",
      description: `Kim Quarles, Executive Vice President of the World Jurist Association and UN representative, is a lawyer and insurance executive with extensive experience in global governance, law and advocacy for world peace through the Rule of Law.`
    },
    {
      name: "Ms. Aimée Quinlan",
      title: "Director",
      organization: "Future China",
      image: "/directors/aimeequinlan.png",
      description: `Ms. Aimée Quinlan represents Future China, advocating for equitable education and youth voices, with a strong commitment to civic engagement, international cooperation and enhancing education initiatives and global outreach.`
    },
    {
      name: "Dr. J. Nadine Gracia",
      title: "Director",
      organization: "National Social Action Commission of Delta Sigma Theta Sorority",
      image: "/directors/nadinegracia.png",
      description: `Dr. J. Nadine Gracia, a national health equity leader, represents the Delta Sigma Theta Sorority. She holds extensive experience in public health, federal leadership, nonprofit work, and civic engagement.`
    },
    {
      name: "Ms. Nora Hajjar",
      title: "Director",
      organization: "World Lebanese Cultural Union Inc.",
      image: "/directors/norahajjar.png",
      description: `Ms. Nora Hajjar, Senior AI Engineer at Microsoft, combines technology expertise and global civic experience to advance ethical, inclusive innovation, leveraging AI and data for social good and Civil Society impact at the UN.`
    },
    {
      name: "Mr. Joseph DeMeyer",
      title: "Director",
      organization: "Society for the Psychological Study of Social Issues",
      image: "/directors/josephdemeyer.png",
      description: `Mr. Joseph DeMeyer, holds 25 years of experience as an UN NGO representative. He advocates for mental health, education and youth engagement whilst promoting global citizenship.`
    },
    {
      name: "Ms. Dayana Blanco Galo",
      title: "Director",
      organization: "The City College of New York",
      image: "/directors/dayanagalo.png",
      description: `Ms. Dayana J. Blanco Galo, a university student, advocates for youth empowerment and education. Whilst promoting global partnerships, cultural competence and representation to advance UN goals and amplify diverse voices.`
    },
    {
      name: "Adriane Berg",
      title: "Director",
      organization: "International Federation on Ageing",
      image: "/directors/adrianeberg.png",
      description: `Ms. Adriane Berg is the UN Representative for the International Federation on Ageing, a lawyer, media host, and advocate. She empowers older adults through aging-focused initiatives, education, podcasts and global programs.`
    },
    {
      name: "Ms. Farah Salim Eck",
      title: "Director",
      organization: "United Nations Association of the USA (UNA-USA)",
      image: "/directors/faraheck.png",
      description: `Ms. Farah Salim Eck, Managing Director at UNA-USA, advances UN values through partnerships and programs, leveraging personal and professional experience in global humanitarian, education and human rights initiatives.`
    },
    {
      name: "HRH Prince Adnan El-Hashemite",
      title: "Director",
      organization: "Seton Hall University",
      image: "/directors/hrhadnan.png",
      description: `HRH Adnan, Dean of RASIT and Executive Director at Holy Family University, is a philanthropist advancing education, youth development, peace and social equity through scholarships, humanitarian relief and global cultural initiatives.`
    },
    {
      name: "Dr Piyush Gupta",
      title: "Director",
      organization: "Cancer Aid Society India",
      image: "/directors/piyushgupta.png",
      description: `Dr. Gupta, founder of Cancer Aid Society, is an Indian health leader in palliative care, cancer and NCD control, representing India at UN and WHO, with extensive global advocacy and publications.`
    },
    {
      name: "Mr Faisal Alfadl",
      title: "Director",
      organization: "Saudi Green Building Forum",
      image: "/directors/Faisal-Alfadl-.jpg",
      description: `Mr. Faisal Alfadl, architect and urban planner, champions sustainable development and eco-friendly design. He mentors youth and promotes green practices to create positive global impact through architecture, policy and environmental advocacy.`
    }
  ];

  const advisoryBoard = [
    { name: "Ambassador Isaiah Zimba Chabala", bio: "Founder and President, Visionary Consulting Associates; Former Ambassador of Zambia to the United Nations" },
    { name: "Hawa Taylor-Kamara Diallo", bio: "President and Executive Director, I.B. Taylor-Kamara Foundation" },
    { name: "Kairong Hou", bio: "Head of International Business Development, FutureChina NGO" },
    { name: "Dr. Rose Cardarelli", bio: "Founder and CEO, Education for All Coalition" },
    { name: "Richard Jordan", bio: "Representative at the UN for the International Council for Caring Communities" },
    { name: "Dr. Aysesegul Durakoglu", bio: "Professor at the Music and Technology Program, Stevens Institute of Technology" },
    { name: "Dr. Kevin Merges", bio: "Chief Global Impact Officer, Saddle River Day School" },
    { name: "Eunhee Jung", bio: "Founder and President, IVECA Center for International Virtual Schooling" },
    { name: "Neha Tripathi", bio: "Director International Affairs, Cancer Aid Society" },
    { name: "Jason Xu", bio: "Global Coordinator, GNEC Hackathon" },
    { name: "Ruoyu Xu", bio: "Global Coordinator, GNEC Hackathon" },
    { name: "Aniefiok Thomas", bio: "Former Senior Special Assistant on SDGs to Akwa Ibom State Government" },
    { name: "James M. Black II", bio: "Legal Advisor, GNEC; Partner and General Counsel, Falcon Rappaport & Berkman LLP" },
    { name: "Dr. Sandra Timmerman", bio: "Representative at the UN for the International Federation on Ageing" },
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
              The Global NGO Executive Committee is comprised of nineteen representatives elected by organizations officially associated with the United Nations Department of Global Communications (UNDGC).
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
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
              {executiveCommittee.map((member, index) => (
                <Card key={index} className="h-full">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <div className="aspect-[4/3] w-full overflow-hidden rounded-md mb-4">
                        <img src={(member as any).image} alt={member.name} className="w-full h-full object-cover" />
                      </div>
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

      <section className="py-16">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Executive Committee Directors</h2>
              <p className="text-lg text-muted-foreground">Meet the directors supporting GNEC's global mission</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
              {directors.map((member, index) => (
                <Card key={index} className="h-full">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <div className="aspect-[4/3] w-full overflow-hidden rounded-md mb-4">
                        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                      <Badge variant="secondary" className="mb-2">{member.title}</Badge>
                      <p className="text-sm font-medium text-primary mb-3">{member.organization}</p>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Advisory Board</h2>
              <p className="text-lg text-muted-foreground">Our advisory board brings extensive expertise to guide GNEC</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
              {advisoryBoard.map((person, index) => (
                <Card key={index} className="h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{person.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{person.bio}</p>
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
