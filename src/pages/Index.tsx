import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, Wifi, Utensils, Waves, LifeBuoy, MapPin, Coffee, Calendar, Users, Award } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

// Featured programs data
interface ProgramProps {
  id: string;
  name: string;
  description: string;
  year: number;
  participants: number;
  duration: string;
  image: string;
  location: string;
  features: string[];
}

const featuredPrograms: ProgramProps[] = [
  {
    id: "1",
    name: "UN Civil Society Conference",
    description: "The UN Civil Society Conference unites global NGOs/CSOs to drive collaboration and accelerate progress on the SDGs.",
    year: 2025,
    participants: 1500,
    duration: "3 days",
    image: "https://gnec.ngo/wp-content/uploads/2026/01/civilsociety.jpg",
    location: "UN Headquarters",
    features: ["Global Collaboration", "SDG Focus", "Networking", "Workshops", "Panel Discussions", "Youth Participation"]
  },
  {
    id: "2",
    name: "Communication Workshops",
    description: "GNEC partners with UNDGC to support NGO/CSO collaboration, capacity-building, and progress toward the SDGs.",
    year: 1962,
    participants: 200,
    duration: "Ongoing",
    image: "https://gnec.ngo/wp-content/uploads/2026/01/workshops.jpg",
    location: "Various Locations",
    features: ["Training", "Best Practices", "UN Operations", "Partnership Development", "Capacity Building", "Strategic Guidance"]
  },
  {
    id: "3", 
    name: "GNEC Hackathon",
    description: "The GNEC Hackathon is your calling to create a real impact. Collaborate, create, and compete in an online competition centered around the United Nations Sustainable Development Goals.",
    year: 2025,
    participants: 500,
    duration: "48 hours",
    image: "https://gnec.ngo/wp-content/uploads/2026/01/hackathonlogo.png",
    location: "Global/Virtual",
    features: ["Innovation", "SDG Solutions", "Technology", "Youth Focus", "Global Participation", "Impact Measurement"]
  }
];

export default function Index() {
  const { t } = useLanguage();
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  
  // Service features
  const features = [
    {
      icon: <Waves className="h-8 w-8 text-brand-green" />,
      title: t.home.services.features.liaison.title,
      description: t.home.services.features.liaison.description
    },
    {
      icon: <LifeBuoy className="h-8 w-8 text-brand-blue" />,
      title: t.home.services.features.guidance.title,
      description: t.home.services.features.guidance.description
    },
    {
      icon: <Utensils className="h-8 w-8 text-brand-green" />,
      title: t.home.services.features.workshops.title,
      description: t.home.services.features.workshops.description
    },
    {
      icon: <Wifi className="h-8 w-8 text-brand-blue" />,
      title: t.home.services.features.networking.title,
      description: t.home.services.features.networking.description
    },
    {
      icon: <Coffee className="h-8 w-8 text-brand-green" />,
      title: t.home.services.features.advocacy.title,
      description: t.home.services.features.advocacy.description
    },
    {
      icon: <MapPin className="h-8 w-8 text-brand-blue" />,
      title: t.home.services.features.global.title,
      description: t.home.services.features.global.description
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Welcome Section */}
        <section id="welcome" className="section">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in [animation-delay:100ms]">
                <span className="text-sm text-primary font-medium uppercase tracking-wider">
                  {t.home.welcome.subtitle}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                  {t.home.welcome.title}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {t.home.welcome.description1}
                </p>
                <p className="text-muted-foreground mb-8">
                  {t.home.welcome.description2}
                </p>
                <Button asChild className="bg-brand-green text-white hover:bg-brand-blue transition-colors rounded-full px-6 py-2.5 font-medium">
                  <Link to="/about/who-we-are">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              
              <div className="relative animate-fade-in [animation-delay:300ms]">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <img 
                    src="https://gnec.ngo/wp-content/uploads/2026/01/section2img1.jpg"
                    alt="GNEC program image 1" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-2/3 rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://gnec.ngo/wp-content/uploads/2026/01/section2img2.jpg"
                    alt="GNEC program image 2" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-6 -right-6 w-1/2 rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://gnec.ngo/wp-content/uploads/2026/01/section2img3.jpg"
                    alt="GNEC program image 3" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Partnership Section */}
        <section className="relative py-20 bg-gradient-to-r from-brand-light-blue-gray to-white overflow-hidden">
          <div className="container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <span className="text-sm font-semibold uppercase tracking-wider text-brand-blue">
                  Join Our Network
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold mt-2 mb-6 text-brand-blue">
                  Strengthen Your UN Partnership
                </h2>
                <p className="text-brand-dark-gray mb-6">
                  Connect with GNEC to enhance your organization's impact through strategic UN partnerships and collaborative initiatives.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <div className="h-5 w-5 rounded-full bg-brand-green/20 text-brand-green flex items-center justify-center mr-3">
                      <ArrowRight className="h-3 w-3" />
                    </div>
                    Access to UN Department of Global Communications
                  </li>
                  <li className="flex items-center">
                    <div className="h-5 w-5 rounded-full bg-brand-green/20 text-brand-green flex items-center justify-center mr-3">
                      <ArrowRight className="h-3 w-3" />
                    </div>
                    Strategic guidance and capacity building
                  </li>
                  <li className="flex items-center">
                    <div className="h-5 w-5 rounded-full bg-brand-green/20 text-brand-green flex items-center justify-center mr-3">
                      <ArrowRight className="h-3 w-3" />
                    </div>
                    Global networking opportunities
                  </li>
                  <li className="flex items-center">
                    <div className="h-5 w-5 rounded-full bg-brand-green/20 text-brand-green flex items-center justify-center mr-3">
                      <ArrowRight className="h-3 w-3" />
                    </div>
                    Participation in flagship events
                  </li>
                </ul>
              </div>
              
              <div className="animate-fade-in [animation-delay:200ms]">
                <Card className="p-8">
                  <CardContent className="p-0">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold mb-2">Get Involved Today</h3>
                      <p className="text-muted-foreground">
                        Ready to strengthen your organization's UN partnership?
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      <Button asChild className="w-full bg-brand-blue text-white hover:bg-brand-green transition-colors rounded-full px-6 py-2.5 font-medium">
                        <Link to="/contact">
                          <Users className="mr-2 h-4 w-4" />
                          Contact Us
                        </Link>
                      </Button>
                      
                      <Button asChild className="w-full border border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white transition-colors rounded-full px-6 py-2.5 font-medium bg-transparent">
                        <Link to="/about/who-we-are">
                          <Award className="mr-2 h-4 w-4" />
                          Learn About GNEC
                        </Link>
                      </Button>
                      
                      <Button asChild className="w-full border border-brand-green text-brand-green hover:bg-brand-green hover:text-white transition-colors rounded-full px-6 py-2.5 font-medium bg-transparent">
                        <Link to="/services/upcoming-events">
                          <Calendar className="mr-2 h-4 w-4" />
                          View Events
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
            <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-brand-green/30 blur-3xl" />
            <div className="absolute bottom-10 right-40 w-48 h-48 rounded-full bg-brand-blue/30 blur-3xl" />
          </div>
        </section>
        
        {/* Featured Apartments */}
        <section className="section">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
              <span className="text-sm text-primary font-medium uppercase tracking-wider">
                {t.home.featuredPrograms.subtitle}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                {t.home.featuredPrograms.title}
              </h2>
              <p className="text-muted-foreground">
                {t.home.featuredPrograms.description}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
              {featuredPrograms.map((program, index) => (
                <div key={program.id} className="h-full animate-fade-in" style={{ animationDelay: `${(index + 1) * 100}ms` }}>
                  <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={program.image} 
                        alt={program.name}
                        className={`${(program.id === "2" || program.id === "3") ? 'w-full h-full object-contain bg-white px-2 border-x border-gray-200' : 'w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300'}`}
                      />
                    </div>
                    <CardContent className="p-6 flex flex-col flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary">{program.location}</Badge>
                        <span className="text-sm text-muted-foreground">{program.year}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{program.name}</h3>
                      <p className="text-muted-foreground mb-4 italic">{program.description}</p>
                      
                      <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          {program.participants} participants
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-1 mb-4">
                        {program.features.slice(0, 3).map((feature, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                        {program.features.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{program.features.length - 3} more
                          </Badge>
                        )}
                      </div>
                      
                      <div className="mt-auto">
                        {program.id === "3" ? (
                          <Button asChild className="w-full bg-brand-green text-white hover:bg-brand-blue transition-colors rounded-full px-6 py-2.5 font-medium">
                            <Link to="/services/hackathon">
                              Learn More <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        ) : (
                          <Button asChild className="w-full bg-brand-green text-white hover:bg-brand-blue transition-colors rounded-full px-6 py-2.5 font-medium">
                            <Link to={program.id === "1" ? "/services/civil-society" : "/services/communication-workshops"}>
                              Learn More <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button asChild className="bg-brand-green text-white hover:bg-brand-blue transition-colors rounded-full px-6 py-2.5 font-medium">
                <Link to="/services/upcoming-events">
                  View All Programs <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Services Section */}
        <section className="section bg-brand-light-green-gray">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
              <span className="text-sm text-primary font-medium uppercase tracking-wider">
                {t.home.services.subtitle}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                {t.home.services.title}
              </h2>
              <p className="text-muted-foreground">
                {t.home.services.description}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="glass-card p-6 rounded-xl animate-fade-in flex flex-col items-center text-center"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <div className="mb-4 p-3 rounded-full bg-brand-green/10">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="relative py-24 bg-gradient-to-r from-brand-light-blue-gray to-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-brand-blue">
                Ready to Strengthen Your UN Partnership?
              </h2>
              <p className="text-brand-dark-gray mb-8">
                Join GNEC today and become part of a global network of civil society organizations working together to advance the UN's Sustainable Development Goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-brand-green text-white hover:bg-brand-blue transition-colors rounded-full px-8 py-3 font-medium">
                  <Link to="/contact">Get Started Today</Link>
                </Button>
                <Button asChild size="lg" className="border border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white transition-colors rounded-full px-8 py-3 font-medium bg-transparent">
                  <Link to="/about/who-we-are">Learn More About GNEC</Link>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Decorative waves */}
          <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
            <svg 
              className="absolute bottom-0 w-full h-24 fill-background"
              preserveAspectRatio="none"
              viewBox="0 0 1440 74"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M0,37.1L40,34.5C80,32,160,27,240,29.6C320,32,400,42,480,42.9C560,44,640,35,720,32.1C800,30,880,34,960,40.8C1040,47,1120,56,1200,56.6C1280,57,1360,48,1400,43.3L1440,39.1L1440,74L1400,74C1360,74,1280,74,1200,74C1120,74,1040,74,960,74C880,74,800,74,720,74C640,74,560,74,480,74C400,74,320,74,240,74C160,74,80,74,40,74L0,74Z"
                className="animate-wave opacity-50"
              />
              <path 
                d="M0,37.1L40,34.5C80,32,160,27,240,29.6C320,32,400,42,480,42.9C560,44,640,35,720,32.1C800,30,880,34,960,40.8C1040,47,1120,56,1200,56.6C1280,57,1360,48,1400,43.3L1440,39.1L1440,74L1400,74C1360,74,1280,74,1200,74C1120,74,1040,74,960,74C880,74,800,74,720,74C640,74,560,74,480,74C400,74,320,74,240,74C160,74,80,74,40,74L0,74Z"
                className="animate-wave opacity-100 [animation-delay:-4s]"
              />
            </svg>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
