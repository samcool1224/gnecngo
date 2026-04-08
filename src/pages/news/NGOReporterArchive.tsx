import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ExternalLink, ArrowLeft } from "lucide-react";
import { fetchNgoReporterIssues } from "@/lib/ngo-reporter-api";
import { mergeNgoReporterIssues } from "@/lib/ngo-reporter-data";

export default function NGOReporterArchive() {
  const [issues, setIssues] = useState(mergeNgoReporterIssues([]));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    const load = async () => {
      try {
        const dynamicIssues = await fetchNgoReporterIssues();
        setIssues(mergeNgoReporterIssues(dynamicIssues));
      } catch (error) {
        console.error("Error fetching NGO Reporter archive:", error);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navbar />

      <section className="pt-32 pb-8">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <Button variant="ghost" className="mb-6" asChild>
              <Link to="/news/ngo-reporter">
                <ArrowLeft className="h-4 w-4 mr-2" /> Back to NGO Reporter
              </Link>
            </Button>

            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">NGO Reporter Archive</h1>
              <p className="text-lg text-muted-foreground">
                Browse the complete archive, including the existing hardcoded volumes and new WordPress-powered issues.
              </p>
            </div>

            {loading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-green mx-auto mb-4"></div>
                <p className="text-muted-foreground">Loading archive...</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-6">
                {issues.map((issue) => (
                  <Card key={issue.id} className="p-6">
                    <CardContent className="p-0">
                      <div className="flex items-center gap-2 mb-3">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span className="text-sm text-muted-foreground">{issue.date}</span>
                        {issue.isDynamic && <Badge variant="outline">New</Badge>}
                      </div>

                      <h3 className="text-xl font-bold mb-3">{issue.title}</h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {issue.description}
                      </p>

                      <div className="mb-4">
                        <div className="flex flex-wrap gap-2">
                          {issue.topics.map((topic, idx) => (
                            <Badge key={`${issue.id}-${idx}`} variant="secondary" className="text-xs">
                              {topic}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <Button variant="outline" className="w-full" asChild>
                        <a href={issue.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Read More
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
