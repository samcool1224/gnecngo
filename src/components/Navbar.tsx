
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  
  const navLinks = [
    { name: "Home", path: "/" },
    { 
      name: "About Us", 
      path: "/about",
      dropdown: [
        { name: "Who We Are", path: "/about/who-we-are" },
        { name: "2025 – 2027 GNEC Subcommittees", path: "/about/subcommittees" },
        { name: "About UNDGC", path: "/about/undgc" },
        { name: "By-Laws and Procedures", path: "/about/bylaws" },
        { name: "Message from the Presidents", path: "/about/message" }
      ]
    },
    { 
      name: "Services & Events", 
      path: "/services",
      dropdown: [
        { name: "Upcoming Events", path: "/services/upcoming-events" },
        { name: "Past Events", path: "/services/past-events" },
        { name: "GNEC Hackathon", path: "/services/hackathon" },
        { name: "Elections", path: "/services/elections" }
      ]
    },
    { 
      name: "News & Media", 
      path: "/news",
      dropdown: [
        { name: "Podcast", path: "/news/podcast" },
        { name: "NGO Reporter", path: "/news/ngo-reporter" },
        { name: "Media", path: "/news/media" }
      ]
    },
    { name: "Contact", path: "/contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  useEffect(() => {
    const handleClickOutside = () => {
      setActiveDropdown(null);
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);
  
  return <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300", scrolled ? "bg-white/95 backdrop-blur-lg py-3 shadow-md border-b border-brand-light-blue-gray" : "bg-white/90 backdrop-blur-sm py-5")}>
      <nav className="container flex justify-center items-center relative">
        <Link to="/" className="absolute left-0 flex items-center">
          <img src="/homepage/ngologo.png" alt="GNEC NGO/CSO logo" className="h-10 md:h-12 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 items-center">
          {navLinks.map(link => (
            <li key={link.name} className="relative flex items-center">
              {link.dropdown ? (
                <div 
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="font-medium text-brand-dark-gray transition-colors hover:text-brand-blue flex items-center gap-1 py-2">
                    {link.name}
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  {activeDropdown === link.name && (
                    <div className="absolute top-full left-0 w-64 z-50">
                      {/* Invisible bridge to prevent gap */}
                      <div className="h-2 w-full"></div>
                      <div className="bg-white shadow-lg rounded-lg border border-brand-light-blue-gray py-2">
                        {link.dropdown.map(subLink => (
                          <Link
                            key={subLink.name}
                            to={subLink.path}
                            className="block px-4 py-2 text-sm text-brand-dark-gray hover:bg-brand-light-blue-gray hover:text-brand-blue transition-colors"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {subLink.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link to={link.path} className="font-medium text-brand-dark-gray transition-colors hover:text-brand-blue py-2 inline-block">
                  {link.name}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center space-x-2 absolute right-0 pr-10">
          <Button asChild className="bg-brand-green text-white hover:bg-brand-blue transition-colors rounded-full px-6 py-2.5 font-medium">
            <Link to="/donate">Donate</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center space-x-2">
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="rounded-full text-brand-dark-gray hover:text-brand-blue hover:bg-brand-light-blue-gray">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={cn("fixed inset-0 z-40 bg-white/80 backdrop-blur-sm md:hidden transition-opacity duration-300", mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none")}>
        <div className={cn("fixed inset-y-0 right-0 w-3/4 max-w-sm bg-white shadow-xl p-6 transition-transform duration-300 ease-in-out border-l border-brand-light-blue-gray", mobileMenuOpen ? "translate-x-0" : "translate-x-full")}>
          <div className="flex flex-col h-full justify-between">
            <div>
              <div className="flex justify-end mb-8">
                <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)} className="rounded-full text-brand-dark-gray hover:text-brand-blue hover:bg-brand-light-blue-gray">
                  <X className="h-6 w-6" />
                </Button>
              </div>
              <ul className="space-y-4">
                {navLinks.map(link => (
                  <li key={link.name}>
                    {link.dropdown ? (
                      <div>
                        <div className="text-lg font-medium mb-2 text-brand-dark-gray">{link.name}</div>
                        <ul className="ml-4 space-y-2">
                          {link.dropdown.map(subLink => (
                            <li key={subLink.name}>
                              <Link 
                                to={subLink.path} 
                                className="text-sm text-brand-dark-gray hover:text-brand-blue transition-colors" 
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {subLink.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <Link to={link.path} className="text-lg font-medium text-brand-dark-gray transition-colors hover:text-brand-blue" onClick={() => setMobileMenuOpen(false)}>
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            
            <Button asChild className="w-full bg-brand-green text-white hover:bg-brand-blue transition-colors rounded-full px-6 py-2.5 font-medium mt-6">
              <Link to="/donate" onClick={() => setMobileMenuOpen(false)}>
                Donate
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>;
}
