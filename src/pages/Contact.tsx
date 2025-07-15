
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted");
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Store",
      details: ["Kimathi Street, Nairobi CBD", "Building 2nd Floor, Shop 201"],
      action: "Get Directions"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+254 700 123 456", "+254 733 987 654"],
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["support@pamoja.co.ke", "sales@pamoja.co.ke"],
      action: "Send Email"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Sat: 8:00 AM - 8:00 PM", "Sunday: 10:00 AM - 6:00 PM"],
      action: "View Calendar"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Get in Touch
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                We're here to help! Reach out to us for any questions, support, or feedback.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((info) => {
                const IconComponent = info.icon;
                return (
                  <Card key={info.title} className="text-center">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold mb-3">{info.title}</h3>
                      <div className="space-y-1 text-sm text-muted-foreground mb-4">
                        {info.details.map((detail, index) => (
                          <p key={index}>{detail}</p>
                        ))}
                      </div>
                      <Button variant="outline" size="sm">
                        {info.action}
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Contact Form and Map */}
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card>
                <CardHeader>
                  <CardTitle>Send us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">First Name</label>
                        <Input placeholder="Your first name" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Last Name</label>
                        <Input placeholder="Your last name" required />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input type="email" placeholder="your.email@example.com" required />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone Number</label>
                      <Input type="tel" placeholder="+254 700 000 000" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Subject</label>
                      <Input placeholder="What's this about?" required />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Message</label>
                      <Textarea 
                        placeholder="Tell us how we can help you..."
                        rows={5}
                        required
                      />
                    </div>
                    
                    <Button type="submit" className="w-full">
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Map and Additional Info */}
              <div className="space-y-8">
                {/* Map Placeholder */}
                <Card>
                  <CardContent className="p-0">
                    <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                      <div className="text-center text-muted-foreground">
                        <MapPin className="h-12 w-12 mx-auto mb-2" />
                        <p className="font-medium">Interactive Map</p>
                        <p className="text-sm">Kimathi Street, Nairobi CBD</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* FAQ Section */}
                <Card>
                  <CardHeader>
                    <CardTitle>Frequently Asked Questions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-1">What are your return policies?</h4>
                      <p className="text-sm text-muted-foreground">
                        We offer 30-day returns on most items in original condition.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Do you offer warranties?</h4>
                      <p className="text-sm text-muted-foreground">
                        All products come with manufacturer warranties, plus our own service guarantee.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Can I track my order?</h4>
                      <p className="text-sm text-muted-foreground">
                        Yes! You'll receive tracking information once your order ships.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Need Immediate Help?</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                For urgent support or technical issues, don't hesitate to call us directly.
                Our support team is ready to assist you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Support: +254 700 123 456
                </Button>
                <Button variant="outline" size="lg">
                  <Mail className="h-4 w-4 mr-2" />
                  Email Support
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
