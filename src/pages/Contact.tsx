import { MapPin, Phone, Mail, Clock, Send, Wand2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Breadcrumbs } from "../components/ui/breadcrumb";


const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted!");
    alert("Your message has been sent successfully. We'll get back to you soon.");
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      details: ["Krystal Toy Store, Kimathi Street", "Nairobi CBD, 2nd Floor, Shop 201"],
      action: "Get Directions",
      link: "https://maps.app.goo.gl/YourActualGoogleMapsLinkHere"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+254 700 123 456 (General Enquiries)", "+254 733 987 654 (Order Support)"],
      action: "Call Now",
      link: "tel:+254700123456"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["support@krystaltoystore.co.ke", "sales@krystaltoystore.co.ke"],
      action: "Send Email",
      link: "mailto:support@krystaltoystore.co.ke"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Saturday: 8:00 AM - 8:00 PM", "Sunday: 10:00 AM - 6:00 PM"],
      action: "View Hours",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
     
      <main>
        <section className="py-16 bg-gradient-to-br from-yellow-50 via-blue-50 to-purple-50">
          <div className="container mx-auto px-4">
            {/* <Breadcrumbs /> */}
            <div className="max-w-4xl mx-auto text-center">
              <h1
                className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text mb-6 drop-shadow-lg"
                style={{ fontFamily: "'Fredoka One'" }}
              >
                Connect with Krystal Toy Store
              </h1>
              <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
                Have questions, need support, or want to provide feedback? Our dedicated team is here to assist you.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {contactInfo.map((info) => {
                const IconComponent = info.icon;
                return (
                  <Card key={info.title} className="text-center rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-pink-100 bg-white">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-5 shadow-inner">
                        <IconComponent className="h-8 w-8 text-purple-600 animate-pulse" />
                      </div>
                      <h3
                        className="font-bold text-xl text-gray-900 mb-3"
                        style={{ fontFamily: "'Fredoka One'" }}
                      >
                        {info.title}
                      </h3>
                      <div className="space-y-2 text-md text-gray-700 mb-5 leading-snug">
                        {info.details.map((detail, index) => (
                          <p key={index}>{detail}</p>
                        ))}
                      </div>
                      <Button
                        variant="default"
                        size="lg"
                        className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold rounded-full px-8 py-3 shadow-md transition-all duration-300 hover:scale-105"
                        style={{ fontFamily: "'Fredoka One'" }}
                        asChild
                      >
                        {info.link ? (
                          <a href={info.link} target={info.link.startsWith('http') || info.link.startsWith('mailto') || info.link.startsWith('tel') ? "_blank" : "_self"} rel="noopener noreferrer">
                            {info.action}
                          </a>
                        ) : (
                          <button>{info.action}</button>
                        )}
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <Card className="rounded-2xl shadow-xl border-2 border-blue-100 bg-white">
                <CardHeader>
                  <CardTitle
                    className="text-3xl font-bold text-gray-900"
                    style={{ fontFamily: "'Fredoka One'" }}
                  >
                    Send Us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700">First Name</label>
                        <Input placeholder="First Name" required className="border-pink-200 focus:border-purple-400 focus:ring-purple-400 rounded-lg py-2" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700">Last Name</label>
                        <Input placeholder="Last Name" required className="border-pink-200 focus:border-purple-400 focus:ring-purple-400 rounded-lg py-2" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">Email</label>
                      <Input type="email" placeholder="you@example.com" required className="border-pink-200 focus:border-purple-400 focus:ring-purple-400 rounded-lg py-2" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">Phone Number (Optional)</label>
                      <Input type="tel" placeholder="+254 7XX XXX XXX" className="border-pink-200 focus:border-purple-400 focus:ring-purple-400 rounded-lg py-2" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">Subject</label>
                      <Input placeholder="Enter subject here" required className="border-pink-200 focus:border-purple-400 focus:ring-purple-400 rounded-lg py-2" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">Message</label>
                      <Textarea
                        placeholder="Type your message here..."
                        rows={6}
                        required
                        className="border-pink-200 focus:border-purple-400 focus:ring-purple-400 rounded-lg py-2"
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white font-bold rounded-full px-8 py-3 shadow-lg transition-all duration-300 hover:scale-105"
                      style={{ fontFamily: "'Fredoka One'" }}
                    >
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="space-y-8">
                <Card className="rounded-2xl shadow-xl border-2 border-yellow-100 bg-white">
                  <CardContent className="p-0">
                    <div className="aspect-video bg-gradient-to-br from-blue-100 to-green-100 rounded-t-2xl flex items-center justify-center">
                      <div className="text-center text-gray-700 p-4">
                        <MapPin className="h-16 w-16 mx-auto mb-3 text-blue-600 animate-pulse-slow" />
                        <p className="font-bold text-xl mb-1" style={{ fontFamily: "'Fredoka One'" }}>Our Store Location</p>
                        <p className="text-md leading-snug">
                          Find us on Kimathi Street, Nairobi CBD, on the 2nd Floor.<br/>
                          Visit us during business hours!
                        </p>
                        <Button
                          variant="ghost"
                          className="mt-4 text-blue-600 hover:text-blue-800 flex items-center"
                          onClick={() => window.open("https://maps.app.goo.gl/YourActualGoogleMapsLinkHere", "_blank")}
                        >
                          <MapPin className="h-4 w-4 mr-2" /> View on Map
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="rounded-2xl shadow-xl border-2 border-orange-100 bg-white">
                  <CardHeader>
                    <CardTitle
                      className="text-3xl font-bold text-gray-900"
                      style={{ fontFamily: "'Fredoka One'" }}
                    >
                      Frequently Asked Questions
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-bold text-lg text-purple-700 mb-1">What is your return policy?</h4>
                      <p className="text-md text-gray-700 leading-snug">
                        We offer **30-day returns** on most items in their original condition. Please refer to our full return policy for details.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-purple-700 mb-1">Do products come with a warranty?</h4>
                      <p className="text-md text-gray-700 leading-snug">
                        All products come with **manufacturer warranties**. Specific warranty details are available on each product page or by contacting support.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-purple-700 mb-1">How can I track my order?</h4>
                      <p className="text-md text-gray-700 leading-snug">
                        Once your order has shipped, you will receive **tracking information** via email. You can also track your order directly on our website.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-purple-700 mb-1">Do you offer gift wrapping?</h4>
                      <p className="text-md text-gray-700 leading-snug">
                        Yes, we offer **gift wrapping services** for various occasions. You can select this option during the checkout process.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-blue-100 to-green-100">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2
                className="text-4xl font-bold text-gray-900 mb-4 drop-shadow-md"
                style={{ fontFamily: "'Fredoka One'" }}
              >
                Need Immediate Assistance?
              </h2>
              <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
                For urgent matters or direct support, please call us. Our support team is available to assist you promptly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold rounded-full px-8 py-4 shadow-lg transition-all duration-300 hover:scale-105"
                  style={{ fontFamily: "'Fredoka One'" }}
                  asChild
                >
                  <a href="tel:+254700123456">
                    <Phone className="h-5 w-5 mr-3" />
                    Call Us Now
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-pink-400 text-purple-600 hover:bg-pink-100 hover:text-purple-800 font-bold rounded-full px-8 py-4 shadow-lg transition-all duration-300 hover:scale-105"
                  style={{ fontFamily: "'Fredoka One'" }}
                  asChild
                >
                  <a href="mailto:support@krystaltoystore.co.ke">
                    <Mail className="h-5 w-5 mr-3" />
                    Email Support
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;