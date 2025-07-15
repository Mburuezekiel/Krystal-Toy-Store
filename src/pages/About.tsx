
import { Shield, Truck, Award, Users, Zap, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Every product is thoroughly tested and comes with manufacturer warranty"
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Quick and reliable delivery across Kenya with tracking"
    },
    {
      icon: Award,
      title: "Best Prices",
      description: "Competitive pricing with transparent costs and no hidden fees"
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Knowledgeable customer service team ready to help"
    },
    {
      icon: Zap,
      title: "Latest Technology",
      description: "We stock the newest and most innovative electronics"
    },
    {
      icon: Heart,
      title: "Customer First",
      description: "Your satisfaction is our top priority"
    }
  ];

  const team = [
    {
      name: "John Kiprotich",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      description: "15+ years in electronics retail"
    },
    {
      name: "Sarah Wanjiku",
      role: "Head of Operations",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=300&q=80",
      description: "Expert in supply chain management"
    },
    {
      name: "David Ochieng",
      role: "Technical Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80",
      description: "Technology specialist and advisor"
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
                About Pamoja Electronics
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Your trusted partner in bringing the latest technology to Kenya. 
                We believe in making quality electronics accessible to everyone.
              </p>
              <Button size="lg">Get in Touch</Button>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Founded in 2018, Pamoja Electronics started with a simple mission: to make 
                    high-quality electronics accessible to everyone in Kenya. What began as a 
                    small shop in Nairobi has grown into one of the country's most trusted 
                    electronics retailers.
                  </p>
                  <p>
                    "Pamoja" means "together" in Swahili, and that's exactly how we approach 
                    our business. We work together with our customers, suppliers, and community 
                    to create value and build lasting relationships.
                  </p>
                  <p>
                    Today, we serve thousands of customers across Kenya, offering everything 
                    from smartphones and laptops to gaming equipment and smart home devices. 
                    Our commitment to quality, transparency, and customer service remains unchanged.
                  </p>
                </div>
              </div>
              <div className="aspect-video rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800&q=80"
                  alt="Electronics store"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                These core values guide everything we do and shape our commitment to excellence
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value) => {
                const IconComponent = value.icon;
                return (
                  <Card key={value.title}>
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold mb-2">{value.title}</h3>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The passionate people behind Pamoja Electronics
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {team.map((member) => (
                <Card key={member.name}>
                  <CardContent className="p-6 text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-semibold mb-1">{member.name}</h3>
                    <p className="text-primary text-sm mb-2">{member.role}</p>
                    <p className="text-xs text-muted-foreground">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">10,000+</div>
                <div className="text-sm opacity-90">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
                <div className="text-sm opacity-90">Products</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">6</div>
                <div className="text-sm opacity-90">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">47</div>
                <div className="text-sm opacity-90">Counties Served</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
