import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import TestimonialsSection from "@/components/TestimonialsSection";
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
    description: "Annual flagship event facilitating global NGO collaboration and promoting understanding of UN's SDG efforts.",
    year: 2024,
    participants: 1500,
    duration: "3 days",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
    location: "UN Headquarters",
    features: ["Global Collaboration", "SDG Focus", "Networking", "Workshops", "Panel Discussions", "Youth Participation"]
  },
  {
    id: "2",
    name: "Communication Workshops",
    description: "Regular training sessions throughout the year to help NGOs become more effective UN partners.",
    year: 1962,
    participants: 200,
    duration: "Ongoing",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop",
    location: "Various Locations",
    features: ["Training", "Best Practices", "UN Operations", "Partnership Development", "Capacity Building", "Strategic Guidance"]
  },
  {
    id: "3", 
    name: "GNEC Hackathon",
    description: "Technology solutions contest for UN Sustainable Development Goals with global participation encouraged.",
    year: 2023,
    participants: 500,
    duration: "48 hours",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop",
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
      icon: <Waves className="h-8 w-8 text-primary" />,
      title: t.home.services.features.liaison.title,
      description: t.home.services.features.liaison.description
    },
    {
      icon: <LifeBuoy className="h-8 w-8 text-primary" />,
      title: t.home.services.features.guidance.title,
      description: t.home.services.features.guidance.description
    },
    {
      icon: <Utensils className="h-8 w-8 text-primary" />,
      title: t.home.services.features.workshops.title,
      description: t.home.services.features.workshops.description
    },
    {
      icon: <Wifi className="h-8 w-8 text-primary" />,
      title: t.home.services.features.networking.title,
      description: t.home.services.features.networking.description
    },
    {
      icon: <Coffee className="h-8 w-8 text-primary" />,
      title: t.home.services.features.advocacy.title,
      description: t.home.services.features.advocacy.description
    },
    {
      icon: <MapPin className="h-8 w-8 text-primary" />,
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
                <Button asChild className="btn-primary">
                  <Link to="/about/who-we-are">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              
              <div className="relative animate-fade-in [animation-delay:300ms]">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop"
                    alt="UN Headquarters view" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-2/3 rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop"
                    alt="NGO conference meeting" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-6 -right-6 w-1/2 rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=300&fit=crop"
                    alt="Global collaboration" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Partnership Section */}
        <section className="relative py-20 bg-gradient-to-r from-sea-light to-white dark:from-sea-dark dark:to-background overflow-hidden">
          <div className="container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <span className="text-sm text-primary font-medium uppercase tracking-wider">
                  Join Our Network
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                  Strengthen Your UN Partnership
                </h2>
                <p className="text-muted-foreground mb-6">
                  Connect with GNEC to enhance your organization's impact through strategic UN partnerships and collaborative initiatives.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3">
                      <ArrowRight className="h-3 w-3" />
                    </div>
                    Access to UN Department of Global Communications
                  </li>
                  <li className="flex items-center">
                    <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3">
                      <ArrowRight className="h-3 w-3" />
                    </div>
                    Strategic guidance and capacity building
                  </li>
                  <li className="flex items-center">
                    <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3">
                      <ArrowRight className="h-3 w-3" />
                    </div>
                    Global networking opportunities
                  </li>
                  <li className="flex items-center">
                    <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3">
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
                      <Button asChild className="w-full">
                        <Link to="/contact">
                          <Users className="mr-2 h-4 w-4" />
                          Contact Us
                        </Link>
                      </Button>
                      
                      <Button asChild variant="outline" className="w-full">
                        <Link to="/about/who-we-are">
                          <Award className="mr-2 h-4 w-4" />
                          Learn About GNEC
                        </Link>
                      </Button>
                      
                      <Button asChild variant="outline" className="w-full">
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
            <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-primary/50 blur-3xl" />
            <div className="absolute bottom-10 right-40 w-48 h-48 rounded-full bg-sea-light blur-3xl" />
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPrograms.map((program, index) => (
                <div key={program.id} className="animate-fade-in" style={{ animationDelay: `${(index + 1) * 100}ms` }}>
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={program.image} 
                        alt={program.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary">{program.location}</Badge>
                        <span className="text-sm text-muted-foreground">{program.year}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{program.name}</h3>
                      <p className="text-muted-foreground mb-4 line-clamp-2">{program.description}</p>
                      
                      <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          {program.participants} participants
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {program.duration}
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
                      
                      <Button asChild className="w-full">
                        <Link to="/services/upcoming-events">
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button asChild className="btn-primary">
                <Link to="/services/upcoming-events">
                  View All Programs <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <TestimonialsSection />
        
        {/* Services Section */}
        <section className="section bg-card">
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
                  <div className="mb-4 p-3 rounded-full bg-primary/10">
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
        <section className="relative py-24 bg-primary/5">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Strengthen Your UN Partnership?
              </h2>
              <p className="text-muted-foreground mb-8">
                Join GNEC today and become part of a global network of civil society organizations working together to advance the UN's Sustainable Development Goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="btn-primary">
                  <Link to="/contact">Get Started Today</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
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
