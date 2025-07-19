import {
  Shield, // Quality
  Truck,      // Delivery
  Award,     // Recognition
  Users,    // Support/Team
  Zap,       // Innovation (can be neutral)
  Heart      // Customer Focus
} from "lucide-react"; // Reverted to more standard icons
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar  from "@/components/layout/Navbar";
import { Breadcrumbs } from "../components/ui/breadcrumb";
import { Link } from "react-router-dom";

// Ensure 'Fredoka One' font is imported globally in your CSS (e.g., globals.css)
// @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap');


const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Every product is thoroughly inspected and sourced from reputable manufacturers to ensure durability and safety."
    },
    {
      icon: Truck,
      title: "Efficient Delivery",
      description: "We provide fast and reliable delivery services across Kenya, ensuring your orders arrive promptly."
    },
    {
      icon: Award,
      title: "Competitive Pricing",
      description: "Our commitment is to offer the best value, with transparent pricing and no hidden costs."
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "Our knowledgeable customer service team is ready to assist you with any inquiries."
    },
    {
      icon: Zap,
      title: "Product Innovation",
      description: "We continuously update our inventory with the latest and most engaging products available."
    },
    {
      icon: Heart,
      title: "Customer Satisfaction",
      description: "Your satisfaction is our primary objective, and we strive to exceed your expectations."
    }
  ];

  const team = [
    {
      name: "Name 1", 
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      description: "Over 10 years of experience in retail management and business development."
    },
    {
      name: "Name 2",
      role: "Head of Operations",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=300&q=80",
      description: "Manages logistics, inventory, and operational efficiency."
    },
    {
      name: "Name3",
      role: "Product Manager",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80",
      description: "Responsible for product selection, sourcing, and quality control."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
     
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-yellow-50 via-blue-50 to-purple-50">
          <div className="container mx-auto px-4">
            <Breadcrumbs />
            <div className="max-w-4xl mx-auto text-center">
              <h1
                className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text mb-6 drop-shadow-lg"
                style={{ fontFamily: "'Fredoka One', cursive" }}
              >
                About Krystal Toy Store
              </h1>
              <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
                Krystal Toy Store is dedicated to providing high-quality products and excellent service to our customers.
              </p>
                {/* <Link to="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold rounded-full px-8 py-4 shadow-lg transition-all duration-300 hover:scale-105"
                style={{ fontFamily: "'Fredoka One', cursive" }}
              >
                Contact Us
              </Button>
              </Link> */}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 ">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2
                  className="text-4xl font-bold text-gray-900 mb-6"
                  style={{ fontFamily: "'Fredoka One', cursive" }}
                >
                  Our History
                </h2>
                <div className="space-y-5 text-gray-700 text-lg leading-relaxed">
                  <p>
                    Krystal Toy Store was established in 2018 with a clear vision: to become a leading retailer of quality products in Kenya. We began as a local business in **Nairobi**, focusing on customer satisfaction and product reliability.
                  </p>
                  <p>
                    Our growth has been driven by a commitment to operational excellence and a customer-centric approach. We strive to offer a diverse range of products that meet the needs and expectations of our clientele.
                  </p>
                  <p>
                    Today, Krystal Toy Store serves a broad customer base across Kenya. We specialize in offering a wide selection of items, maintaining our dedication to quality assurance, transparent practices, and professional customer service.
                  </p>
                </div>
              </div>
              <div className="aspect-video rounded-2xl overflow-hidden shadow-xl border-2 border-purple-100">
                <img
                  src="/KrystalLogo.png" 
                  alt="A modern retail store interior"
                  className="w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/800x450?text=Krystal+Toy+Store+Interior'; }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-gradient-to-br from-pink-50 to-purple-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2
                className="text-4xl font-bold text-gray-900 mb-4"
                style={{ fontFamily: "'Fredoka One', cursive" }}
              >
                Our Core Values
              </h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
                These principles guide our operations and define our commitment to our customers.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value) => {
                const IconComponent = value.icon;
                return (
                  <Card key={value.title} className="rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-blue-100 bg-white">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-5 shadow-inner">
                        <IconComponent className="h-8 w-8 text-yellow-600" /> 
                      </div>
                      <h3
                        className="font-bold text-xl text-gray-900 mb-2"
                        style={{ fontFamily: "'Fredoka One', cursive" }}
                      >
                        {value.title}
                      </h3>
                      <p className="text-md text-gray-700 leading-relaxed">{value.description}</p>
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
              <h2
                className="text-4xl font-bold text-gray-900 mb-4"
                style={{ fontFamily: "'Fredoka One', cursive" }}
              >
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
                The professionals driving Krystal Toy Store's success.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {team.map((member) => (
                <Card key={member.name} className="rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-green-100 bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden border-4 border-pink-300 shadow-md">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/300x300?text=Team+Member'; }}
                      />
                    </div>
                    <h3
                      className="font-bold text-xl text-purple-700 mb-1"
                      style={{ fontFamily: "'Fredoka One', cursive" }}
                    >
                      {member.name}
                    </h3>
                    <p className="text-pink-500 text-md mb-2">{member.role}</p>
                    <p className="text-sm text-gray-600 leading-snug">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div
                  className="text-4xl md:text-5xl font-black mb-2 drop-shadow-lg"
                  style={{ fontFamily: "'Fredoka One', cursive" }}
                >
                  10,000+
                </div>
                <div className="text-lg opacity-90">Satisfied Customers</div>
              </div>
              <div>
                <div
                  className="text-4xl md:text-5xl font-black mb-2 drop-shadow-lg"
                  style={{ fontFamily: "'Fredoka One', cursive" }}
                >
                  500+
                </div>
                <div className="text-lg opacity-90">Products Available</div>
              </div>
              <div>
                <div
                  className="text-4xl md:text-5xl font-black mb-2 drop-shadow-lg"
                  style={{ fontFamily: "'Fredoka One', cursive" }}
                >
                  6
                </div>
                <div className="text-lg opacity-90">Years in Business</div>
              </div>
              <div>
                <div
                  className="text-4xl md:text-5xl font-black mb-2 drop-shadow-lg"
                  style={{ fontFamily: "'Fredoka One', cursive" }}
                >
                  47
                </div>
                <div className="text-lg opacity-90">Counties Covered</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;