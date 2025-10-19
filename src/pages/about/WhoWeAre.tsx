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
      image: "/officers/uwemrobert.png",
      description: "Nigerian nationality with International Diploma in Environmental Pollution Control and Master's in Industrial Biochemistry. Founding President of African Youth Movement and has addressed the UN twice at Annual UNDPINGO Conferences."
    },
    {
      name: "Ms. Ediola Pashollari", 
      title: "New York President",
      organization: "World Assembly of Youth (WAY)",
      image: "/officers/ediolapashollari.png",
      description: "Albanian nationality residing in New York. Holds MBA, MA in Political Science, Masters in Entreprenology, and LLB. Secretary General of WAY and Director of World Youth Institute."
    },
    {
      name: "Mr. Dileepkumar Thankappan",
      title: "International Vice President", 
      organization: "World Yoga Community",
      image: "/officers/thankappan.png",
      description: "Founder, Global Chairman, and CEO of World Yoga Community. Hindu Monk, ordained Interfaith Minister, and global culture of peace activist residing in New York."
    },
    {
      name: "Dr. Constance Sobon Sensor",
      title: "New York Vice President",
      organization: "League of Women Voters of the United States", 
      image: "/officers/constancesensor.png",
      description: "PhD, RN, recently retired Professor from Rutgers University. Main representative for LWVUS at the UN, focusing on population health and Sustainable Development Goals."
    },
    {
      name: "Dr. Brian Muzás",
      title: "Treasurer",
      organization: "School of Diplomacy and International Relations, Seton Hall University",
      image: "/officers/brianmuzas.png",
      description: "Assistant Professor and Director of the Center for United Nations and Global Governance Studies. Catholic Priest with PhD in Public Affairs and research focus on international security."
    },
    {
      name: "Ms. Shennon Sequeira",
      title: "Secretary", 
      organization: "MUN Impact",
      image: "/officers/shennonsequiera.png",
      description: "Portuguese nationality with LLB Law with Criminology, pursuing LLM. Youth Representative on Board of Directors at MUN Impact, recognized in Top 20 Young Women in Sustainable Development."
    }
  ];

  const directors = [
    {
      name: "Ms. Olasubomi Iginla Aina",
      title: "Director",
      organization: "Lightup Foundation",
      image: "/directors/olasubomiaina.png",
      description: `Ms. Olasubomi Iginla Aina is of Nigerian nationality and currently resides in London, United Kingdom. She holds a Masters in Law (LLM), Brighton University, UK; Generative Leadership, Oxford University; BSc. Architecture, Obafemi Awolowo University, Ile-Ife, Nigeria. She is the Executive Director of the Lightup Foundation, a charity that has broken a world record with the “Bag of Hope” project used to project the UN Rights of the Child, targeting 30 countries. She was appointed as Member of the Most Excellent Order of the British Empire (MBE) on the nomination of the UK Prime Minister. Appointed as Diaspora Ambassador for Nigeria and National Assembly Ambassador to the UK by the Nigerian government in 2019 and Minister of Youth for the State of African Diaspora (SOAD) – the African Diaspora being the 6th region of the African Union (AU). She has organised various programmes and activities and presented at several UN events.`
    },
    {
      name: "Ms. Elena Reiss",
      title: "Director",
      organization: "Lehigh University",
      image: "/directors/Elena-Reiss.jpg",
      description: `Elena Reiss is an experienced higher education professional, program manager, and passionate women’s rights advocate. She serves as Lehigh University’s designated alternate representative to the United Nations, where she champions youth leadership and amplifies student voices on global platforms. For nearly two decades, Ms. Reiss has dedicated her career to designing transformative learning experiences that open doors for students to thrive globally—whether by guiding them through competitive fellowships or mentoring them to engage meaningfully with NGOs at the UN. Her professional “sweet spot” lies at the intersection of content strategy, youth empowerment, and global education.`
    },
    {
      name: "Ms. Kim Quarles",
      title: "Director",
      organization: "World Jurist Association",
      image: "/directors/kimquarles.png",
      description: `Kim Quarles is the Executive Vice President of the World Jurist Association (WJA), a global association of judges, politicians, professors, lawyers and law students, whose mission is world peace through the Rule of Law. The WJA is DGC and ECOSOC accredited, and Ms. Quarles is one of its two designated representatives to the United Nations. She is currently a Senior Vice President at Willis Towers Watson and specializes in Professional Liability and Information Security.`
    },
    {
      name: "Ms. Aimée Quinlan",
      title: "Director",
      organization: "Future China",
      image: "/directors/aimeequinlan.png",
      description: `Ms. Aimée Quinlan currently serves on the board representing Future China, an NGO dedicated to eliminate the unbalanced distribution of education resources in China. She holds a B.A. from the City College of New York, graduating summa cum laude, and has served as a youth representative to an NGO at the UN. Within GNEC, she is the Chair of the Nominations and Elections Subcommittee.`
    },
    {
      name: "Dr. J. Nadine Gracia",
      title: "Director",
      organization: "National Social Action Commission of Delta Sigma Theta Sorority",
      image: "/directors/nadinegracia.png",
      description: `Dr. J. Nadine Gracia earned a BA from Stanford University, an MD from the University of Pittsburgh School of Medicine, and an MS in Clinical Epidemiology from the University of Pennsylvania. She is a Commissioner on the National Social Action Commission of Delta Sigma Theta Sorority, Incorporated and serves as Co-Chair of the Delta Days at the United Nations Subcommittee. Dr. Gracia is a national health equity and public health leader with extensive leadership experience.`
    },
    {
      name: "Ms. Nora Hajjar",
      title: "Director",
      organization: "World Lebanese Cultural Union Inc.",
      image: "/directors/norahajjar.png",
      description: `Ms. Nora Hajjar is a Senior AI Engineer at Microsoft, focusing on building large language models, AI platforms, and agents. Her prior work spans healthcare, international development, policy research, and civil society tech. She holds an MS in Computational Analysis and Public Policy from the University of Chicago and a BS in Political Science and Economics from Georgetown University.`
    },
    {
      name: "Mr. Joseph DeMeyer",
      title: "Director",
      organization: "Society for the Psychological Study of Social Issues",
      image: "/directors/josephdemeyer.png",
      description: `Mr. Joseph DeMeyer holds a 25-year tenure as UN NGO Representative of the Society for the Psychological Study of Social Issues with executive roles in the NGO Committees on Mental Health and on Education, Learning and Literacy; and in the Psychology Coalition at the UN. He has co-organized presentations at UN Commissions and Civil Society Conferences and submitted oral and written statements at High Level Political Forums.`
    },
    {
      name: "Ms. Dayana Blanco Galo",
      title: "Director",
      organization: "The City College of New York",
      image: "/directors/dayanagalo.png",
      description: `Ms. Dayana J. Blanco Galo is currently an undergraduate student at CUNY City College, pursuing a double major in Business Administration and Management and International Studies. She brings a fresh perspective on global issues and is actively involved in empowering youth through education.`
    },
    {
      name: "Adriane Berg",
      title: "Director",
      organization: "International Federation on Ageing",
      image: "/directors/adrianeberg.png",
      description: `Ms. Adriane Berg holds a BA from Brooklyn College and a JD from New York University School of Law. She is the UN Representative from the International Federation on Ageing and a veteran radio and TV personality. Through her course Speak Out Communication, Adriane empowers older adults to confidently navigate diverse interactions.`
    },
    {
      name: "Ms. Farah Salim Eck",
      title: "Director",
      organization: "United Nations Association of the USA (UNA-USA)",
      image: "/directors/faraheck.png",
      description: `Ms. Farah Salim Eck is Managing Director at the UN Association of the USA (UNA-USA), catalyzing partnerships, programs and policies that bolster everyday UN champions. She has passionately supported the UN's values and principles in personal and professional roles.`
    },
    {
      name: "HRH Prince Adnan El-Hashemite",
      title: "Director",
      organization: "Seton Hall University",
      image: "/directors/hrhadnan.png",
      description: `HRH Adnan is the Dean of RASIT and Executive Director for Global Initiatives at Holy Family University. As a philanthropist, HRH has been a driving force behind equity in education and ethical social developments, mobilizing support for scholarships and humanitarian relief. He promotes peace and social development through cultures, languages, and arts.`
    },
    {
      name: "Dr Piyush Gupta",
      title: "Director",
      organization: "Cancer Aid Society India",
      image: "/directors/piyushgupta.png",
      description: `Dr. Gupta, with degrees across Science, Law, Management, and Social Sciences, founded Cancer Aid Society in 1987 to control Tobacco, Cancer, and NCDs integrated with Palliative Care. He serves as Secretary of National Association of Palliative Care for AYUSH & Integrative Medicine and has represented India at various UN meetings.`
    },
    {
      name: "Mr Faisal Alfadl",
      title: "Director",
      organization: "Saudi Green Building Forum",
      image: "/directors/Faisal-Alfadl-.jpg",
      description: `Mr. Faisal ALFADL's philosophy centers on creating sustainable and eco-friendly environments advocating innovative architecture and urban planning policies. As an educator and advocate, he is a master architect and urban planner, inspiring the next generation to ensure sustainability remains at the forefront of practice.`
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
