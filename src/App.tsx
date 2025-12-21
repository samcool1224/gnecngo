
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// About Us pages
import WhoWeAre from "./pages/about/WhoWeAre";
import Subcommittees from "./pages/about/Subcommittees";
import AboutUNDGC from "./pages/about/AboutUNDGC";
import Bylaws from "./pages/about/Bylaws";
import Message from "./pages/about/Message";

// Services & Events pages
import UpcomingEvents from "./pages/services/UpcomingEvents";
import PastEvents from "./pages/services/PastEvents";
import Hackathon from "./pages/services/Hackathon";
import Elections from "./pages/services/Elections";
import CivilSociety from "./pages/services/CivilSociety";
import CommunicationWorkshops from "./pages/services/CommunicationWorkshops";

// News & Media pages
import Podcast from "./pages/news/Podcast";
import PodcastLibrary from "./pages/news/PodcastLibrary";
import PodcastEpisode from "./pages/news/PodcastEpisode";
import NGOReporter from "./pages/news/NGOReporter";
import Media from "./pages/news/Media";
import { LanguageProvider } from "./contexts/LanguageContext";
import { AuthProvider } from "./contexts/AuthContext";
import Login from "./pages/Login";
import Donate from "./pages/Donate";
import CreatePodcast from "./pages/CreatePodcast";

// Create a react-query client
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <AuthProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/create-podcast" element={<CreatePodcast />} />
            
            {/* About Us Routes */}
            <Route path="/about/who-we-are" element={<WhoWeAre />} />
            <Route path="/about/subcommittees" element={<Subcommittees />} />
            <Route path="/about/undgc" element={<AboutUNDGC />} />
            <Route path="/about/bylaws" element={<Bylaws />} />
            <Route path="/about/message" element={<Message />} />
            
            {/* Services & Events Routes */}
            <Route path="/services/upcoming-events" element={<UpcomingEvents />} />
            <Route path="/services/past-events" element={<PastEvents />} />
            <Route path="/services/hackathon" element={<Hackathon />} />
            <Route path="/services/elections" element={<Elections />} />
            <Route path="/services/civil-society" element={<CivilSociety />} />
            <Route path="/services/communication-workshops" element={<CommunicationWorkshops />} />
            
            {/* News & Media Routes */}
            <Route path="/news/podcast" element={<Podcast />} />
            <Route path="/news/podcast/:episode" element={<PodcastEpisode />} />
            <Route path="/news/podcast-library" element={<PodcastLibrary />} />
            <Route path="/news/ngo-reporter" element={<NGOReporter />} />
            <Route path="/news/media" element={<Media />} />
            
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        </AuthProvider>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
