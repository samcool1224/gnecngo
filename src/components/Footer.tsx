import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-brand-charcoal text-white pt-16 pb-8 border-t border-brand-dark-gray">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="animate-fade-in [animation-delay:100ms]">
            <h4 className="text-xl font-bold mb-4 text-white">GNEC</h4>
            <p className="text-white/70 mb-4">
              {t.footer.description}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-brand-green transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-white/70 hover:text-brand-green transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-white/70 hover:text-brand-green transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
          
          <div className="animate-fade-in [animation-delay:200ms]">
            <h4 className="text-xl font-bold mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2">
              {[
                { name: t.nav.home, path: "/" },
                { name: t.nav.apartments, path: "/services/upcoming-events" },
                { name: t.nav.amenities, path: "/about/who-we-are" },
                { name: t.nav.gallery, path: "/news/podcast" },
                { name: t.nav.contact, path: "/contact" },
                { name: t.nav.bookNow, path: "/donate" },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-white/70 hover:text-brand-green transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="animate-fade-in [animation-delay:300ms]"> 
            <h4 className="text-xl font-bold mb-4">{t.footer.contact}</h4>
            <ul className="space-y-3">
              <li className="flex items-center"> 
                <Mail className="w-5 h-5 mr-2 text-brand-green" />
                <a href="mailto:info@gnec.ngo" className="text-white/70 hover:text-brand-green transition-colors">info@gnec.ngo</a>
              </li>
            </ul>
          </div>
          
          <div className="animate-fade-in [animation-delay:400ms]">
            <h4 className="text-xl font-bold mb-4">{t.footer.newsletter}</h4>
            <p className="text-white/70 mb-4">
              {t.footer.newsletterDesc}
            </p>
            <form className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder={t.footer.yourEmail} 
                className="rounded-md px-4 py-2 bg-brand-dark-gray text-white border border-brand-dark-gray focus:border-brand-green focus:outline-none"
                required 
              />
              <button 
                type="submit" 
                className="bg-brand-green text-white hover:bg-brand-blue transition-colors rounded-full px-6 py-2.5 font-medium mt-2"
              >
                {t.footer.subscribe}
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-brand-dark-gray pt-8 mt-8 text-center text-white/70">
          <p>&copy; {currentYear} GNEC. {t.footer.allRights}</p>
        </div>
      </div>
    </footer>
  );
}
