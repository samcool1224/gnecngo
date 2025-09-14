
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, Clock, Send, Check, Globe, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    }, 3000);
  };
  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "General Inquiries",
      description: "For general questions about GNEC and our services",
      contact: "info@gnec.ngo"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Board & Leadership",
      description: "Contact our presidents and board members",
      contact: "president@gnec.ngo"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Communications",
      description: "Media inquiries, NGO Reporter, and communications",
      contact: "communications@gnec.ngo"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Events & Conferences",
      description: "Information about workshops, conferences, and events",
      contact: "events@gnec.ngo"
    }
  ];

  const faqItems = [
    {
      question: "How can my NGO get involved with GNEC?",
      answer: "Organizations with UNDGC affiliation can participate in our workshops, conferences, and initiatives. Contact us at president@gnec.ngo to learn more about engagement opportunities."
    },
    {
      question: "What is the annual UN Civil Society Conference?",
      answer: "Our flagship event facilitating global NGO collaboration and promoting understanding of UN's SDG efforts. It's held annually at UN Headquarters or abroad."
    },
    {
      question: "How does GNEC support NGO capacity building?",
      answer: "We provide regular communication workshops, strategic guidance, and networking opportunities to help NGOs become more effective UN partners."
    },
    {
      question: "What is the GNEC Hackathon?",
      answer: "A technology solutions contest for UN Sustainable Development Goals with global participation, focusing on innovation-driven approaches to SDG challenges."
    },
    {
      question: "How can I listen to the 'On The Ground' podcast?",
      answer: "Our podcast featuring amazing NGOs is available on major podcast platforms. Contact president@gnec.ngo for featuring opportunities."
    },
    {
      question: "What services does GNEC provide to affiliated NGOs?",
      answer: "We offer liaison services with UN DGC, strategic guidance, communication workshops, networking events, and advocacy support to enhance NGO-UN partnerships."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-brand-light-blue-gray/20">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4">Get In Touch</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Contact GNEC
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Connect with us to strengthen your organization's UN partnership and join our global network of civil society organizations.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">How to Reach Us</h2>
              <p className="text-lg text-muted-foreground">
                Choose the best contact method for your specific needs
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactMethods.map((method, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="text-brand-green">
                        {method.icon}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold mb-2">{method.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {method.description}
                    </p>
                    <Button size="sm" className="w-full border border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white transition-colors rounded-full px-4 py-2 font-medium bg-transparent" asChild>
                      <a href={`mailto:${method.contact}`}>{method.contact}</a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-brand-light-green-gray/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Send Us a Message</h2>
              <p className="text-lg text-muted-foreground">
                Have a specific question or want to discuss partnership opportunities? We'd love to hear from you.
              </p>
            </div>
            
            <Card className="p-8">
              <CardContent className="p-0">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input 
                          id="name" 
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name" 
                          required 
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input 
                          id="email" 
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@organization.org" 
                          required 
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number (Optional)</Label>
                        <Input 
                          id="phone" 
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+1 234 567 8900" 
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input 
                          id="subject" 
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="Partnership Inquiry" 
                          required 
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <textarea 
                        id="message" 
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="How can GNEC help strengthen your organization's UN partnership?" 
                        className="w-full min-h-[150px] p-3 rounded-md border border-input bg-background"
                        required 
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-brand-green text-white hover:bg-brand-blue transition-colors rounded-full px-6 py-2.5 font-medium">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                ) : (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Check className="h-8 w-8 text-brand-green" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Message Sent Successfully!</h3>
                    <p className="text-muted-foreground mb-6">
                      Thank you for reaching out. We'll respond to your message as soon as possible.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
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
                Find quick answers to commonly asked questions about GNEC and our services
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {faqItems.map((faq, index) => (
                <Card key={index} className="p-6">
                  <CardContent className="p-0">
                    <h3 className="text-lg font-bold mb-3">{faq.question}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Office Information */}
      <section className="py-16 bg-brand-light-blue-gray/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <CardContent className="p-0">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4">GNEC Headquarters</h2>
                  <p className="text-lg text-muted-foreground">
                    Based in New York, serving the global NGO community
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="w-12 h-12 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <MapPin className="h-6 w-6 text-brand-green" />
                    </div>
                    <h3 className="font-bold mb-2">Location</h3>
                    <p className="text-sm text-muted-foreground">
                      New York, United States of America
                    </p>
                  </div>
                  
                  <div>
                    <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Clock className="h-6 w-6 text-brand-blue" />
                    </div>
                    <h3 className="font-bold mb-2">Office Hours</h3>
                    <p className="text-sm text-muted-foreground">
                      Meetings: By appointment<br />
                      Inquiries: 24/7 online
                    </p>
                  </div>
                  
                  <div>
                    <div className="w-12 h-12 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Globe className="h-6 w-6 text-brand-green" />
                    </div>
                    <h3 className="font-bold mb-2">Global Reach</h3>
                    <p className="text-sm text-muted-foreground">
                      Serving 1,500+ NGOs<br />
                      Across all continents
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
