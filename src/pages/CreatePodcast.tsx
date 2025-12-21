import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, CheckCircle } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import { supabase } from "@/lib/supabase";

export default function CreatePodcast() {
  const [episodeNumber, setEpisodeNumber] = useState("");
  const [tags, setTags] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [features, setFeatures] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const { user, signOut } = useAuth();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file || !user) {
      setError("Please fill in all required fields");
      return;
    }

    setLoading(true);
    setError("");

    try {
      // Upload audio file to Supabase storage
      const fileExt = file.name.split('.').pop();
      const fileName = `${user.id}/${episodeNumber}-${Date.now()}.${fileExt}`;

      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('podcast-audio')
        .upload(fileName, file);

      if (uploadError) {
        throw new Error(`File upload failed: ${uploadError.message}`);
      }

      // Get public URL for the uploaded file
      const { data: { publicUrl } } = supabase.storage
        .from('podcast-audio')
        .getPublicUrl(fileName);

      // Optionally upload cover image to the same bucket
      let imagePublicUrl: string | null = null;
      if (imageFile) {
        const imageExt = imageFile.name.split('.').pop();
        const imageFileName = `${user.id}/${episodeNumber}-${Date.now()}-cover.${imageExt}`;
        const { error: imageUploadError } = await supabase.storage
          .from('podcast-audio')
          .upload(imageFileName, imageFile);
        if (imageUploadError) {
          throw new Error(`Image upload failed: ${imageUploadError.message}`);
        }
        const { data: { publicUrl: imageUrl } } = supabase.storage
          .from('podcast-audio')
          .getPublicUrl(imageFileName);
        imagePublicUrl = imageUrl;
      }

      // Parse tags into array
      const tagsArray = tags.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0);

      // Insert episode data into database
      const { error: insertError } = await supabase
        .from('podcast_episodes')
        .insert({
          episode_number: parseInt(episodeNumber),
          title,
          description,
          features,
          tags: tagsArray,
          audio_file_path: publicUrl,
          publication_date: new Date().toISOString().split('T')[0],
          category,
          created_by: user.id,
          image_file_path: imagePublicUrl
        });

      if (insertError) {
        throw new Error(`Database insert failed: ${insertError.message}`);
      }

      setSuccess(true);
      // Reset form
      setEpisodeNumber("");
      setTags("");
      setTitle("");
      setDescription("");
      setFeatures("");
      setFile(null);
      setImageFile(null);
      setCategory("");

    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  const handleLogout = async () => {
    await signOut();
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gradient-to-b from-white to-brand-light-blue-gray/20 flex flex-col">
        <Navbar />
        <main className="flex-1">
          <section className="pt-28 pb-16">
            <div className="container max-w-2xl">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h1 className="text-4xl font-bold mb-3">Create Podcast Episode</h1>
                  <p className="text-muted-foreground">
                    Welcome, {user?.email}. Create a new podcast episode.
                  </p>
                </div>
                <Button
                  onClick={handleLogout}
                  variant="outline"
                  className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white"
                >
                  Logout
                </Button>
              </div>

              <Card className="p-8">
                <CardContent className="p-0">
                  {success && (
                    <div className="mb-6 p-4 rounded-md bg-green-50 border border-green-200 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <p className="text-sm text-green-600">Episode created successfully! It will appear on the podcast page.</p>
                    </div>
                  )}
                  
                  {error && (
                    <div className="mb-6 p-4 rounded-md bg-red-50 border border-red-200">
                      <p className="text-sm text-red-600">{error}</p>
                    </div>
                  )}
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Episode Number */}
                    <div className="space-y-2">
                      <Label htmlFor="episodeNumber">Episode Number</Label>
                      <Select value={episodeNumber} onValueChange={setEpisodeNumber}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select episode number" />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from({ length: 100 }, (_, i) => i + 1).map((num) => (
                            <SelectItem key={num} value={num.toString()}>
                              Episode {num}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Tags */}
                    <div className="space-y-2">
                      <Label htmlFor="tags">Tags</Label>
                      <Input
                        id="tags"
                        value={tags}
                        onChange={(e) => setTags(e.target.value)}
                        placeholder="technology, innovation, sustainability (separated by commas)"
                      />
                      <p className="text-xs text-muted-foreground">
                        Enter tags separated by commas
                      </p>
                    </div>

                    {/* Title */}
                    <div className="space-y-2">
                      <Label htmlFor="title">Title</Label>
                      <Input
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Episode title"
                        required
                      />
                    </div>

                    {/* Description */}
                    <div className="space-y-2">
                      <Label htmlFor="description">Description</Label>
                      <Textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Episode description"
                        className="min-h-[120px]"
                        required
                      />
                    </div>

                    {/* Features */}
                    <div className="space-y-2">
                      <Label htmlFor="features">Features</Label>
                      <Input
                        id="features"
                        value={features}
                        onChange={(e) => setFeatures(e.target.value)}
                        placeholder="Featured guests or people involved"
                      />
                    </div>

                    {/* Category */}
                    <div className="space-y-2">
                      <Label htmlFor="category">Category</Label>
                      <Select value={category} onValueChange={setCategory}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Voluntourism">Voluntourism</SelectItem>
                          <SelectItem value="Technology & Rights">Technology & Rights</SelectItem>
                          <SelectItem value="Aging & Society">Aging & Society</SelectItem>
                          <SelectItem value="Health Advocacy">Health Advocacy</SelectItem>
                          <SelectItem value="Health">Health</SelectItem>
                          <SelectItem value="Leadership">Leadership</SelectItem>
                          <SelectItem value="Human Rights">Human Rights</SelectItem>
                          <SelectItem value="Women's Rights">Women's Rights</SelectItem>
                          <SelectItem value="Education">Education</SelectItem>
                          <SelectItem value="Environment">Environment</SelectItem>
                          <SelectItem value="Youth">Youth</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* File Upload */}
                    <div className="space-y-2">
                      <Label htmlFor="file">Audio File</Label>
                      <Input
                        id="file"
                        type="file"
                        onChange={handleFileChange}
                        accept="audio/*"
                        className="cursor-pointer"
                      />
                      {file && (
                        <p className="text-sm text-muted-foreground">
                          Selected: {file.name}
                        </p>
                      )}
                    </div>

                    {/* Cover Image Upload */}
                    <div className="space-y-2">
                      <Label htmlFor="cover">Cover Image</Label>
                      <Input
                        id="cover"
                        type="file"
                        onChange={handleImageChange}
                        accept="image/*"
                        className="cursor-pointer"
                      />
                      {imageFile && (
                        <p className="text-sm text-muted-foreground">
                          Selected: {imageFile.name}
                        </p>
                      )}
                    </div>


                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-brand-green text-white hover:bg-brand-blue transition-colors rounded-full px-6 py-2.5 font-medium disabled:opacity-50"
                    >
                      {loading ? (
                        <div className="flex items-center gap-2">
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                          Uploading...
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <Upload className="h-4 w-4" />
                          Create Episode
                        </div>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </ProtectedRoute>
  );
}
