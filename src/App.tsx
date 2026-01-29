import { useState } from 'react';
import { Menu, X, Smartphone, Globe, Brain, Zap, Headphones, Palette } from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">
              <span className="text-white">Jonath</span>
              <span className="text-blue-500">Tech</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="hover:text-blue-500 transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="hover:text-blue-500 transition-colors">
                About Us
              </button>
              <button onClick={() => scrollToSection('services')} className="hover:text-blue-500 transition-colors">
                Services
              </button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-blue-500 transition-colors">
                Contact Us
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="block w-full text-left hover:text-blue-500 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left hover:text-blue-500 transition-colors"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block w-full text-left hover:text-blue-500 transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left hover:text-blue-500 transition-colors"
              >
                Contact Us
              </button>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Transforming Your Vision into Reality with{' '}
            <span className="text-blue-500">Innovative AI-Powered</span> Software Solutions
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Leading the way in cutting-edge technology solutions that drive business growth and digital transformation
          </p>
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
          >
            Get Started Today
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-800/50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">About JonathTech</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              At JonathTech, we specialize in delivering state-of-the-art software solutions powered by artificial
              intelligence. Our team of experienced developers and AI specialists work closely with clients to transform
              their business challenges into opportunities for growth and innovation.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              With years of experience serving Fortune 500 companies and startups alike, we bring enterprise-level
              expertise to every project, ensuring scalable, secure, and cutting-edge solutions.
            </p>
          </div>

          {/* Why Choose Us */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            <div className="bg-gray-900 p-6 rounded-lg border border-blue-500/30 hover:border-blue-500 transition-colors">
              <h3 className="text-xl font-semibold mb-3 text-blue-500">Fortune 500 Experience</h3>
              <p className="text-gray-400">
                Battle-tested expertise working with industry leaders across multiple sectors
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border border-green-500/30 hover:border-green-500 transition-colors">
              <h3 className="text-xl font-semibold mb-3 text-green-500">AI-First Approach</h3>
              <p className="text-gray-400">
                Leveraging cutting-edge AI and machine learning to solve complex business problems
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border border-orange-500/30 hover:border-orange-500 transition-colors">
              <h3 className="text-xl font-semibold mb-3 text-orange-500">Agile Development</h3>
              <p className="text-gray-400">
                Fast, iterative delivery ensuring your product reaches market quickly
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border border-purple-500/30 hover:border-purple-500 transition-colors">
              <h3 className="text-xl font-semibold mb-3 text-purple-500">24/7 Support</h3>
              <p className="text-gray-400">
                Round-the-clock technical support to keep your systems running smoothly
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform">
              <div className="bg-blue-500 p-8 flex items-center justify-center">
                <Smartphone size={64} className="text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">Mobile App Development</h3>
                <p className="text-gray-400">
                  Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and
                  Android
                </p>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform">
              <div className="bg-orange-500 p-8 flex items-center justify-center">
                <Globe size={64} className="text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">Web Development</h3>
                <p className="text-gray-400">
                  Responsive, scalable web applications built with modern frameworks and best practices for optimal
                  performance
                </p>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform">
              <div className="bg-purple-500 p-8 flex items-center justify-center">
                <Brain size={64} className="text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">AI Solutions</h3>
                <p className="text-gray-400">
                  Custom AI and machine learning solutions including natural language processing, computer vision, and
                  predictive analytics
                </p>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform">
              <div className="bg-green-500 p-8 flex items-center justify-center">
                <Zap size={64} className="text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">Process Automation</h3>
                <p className="text-gray-400">
                  Streamline operations with intelligent automation solutions that reduce costs and improve efficiency
                </p>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform">
              <div className="bg-cyan-500 p-8 flex items-center justify-center">
                <Headphones size={64} className="text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">IT Consultancy</h3>
                <p className="text-gray-400">
                  Strategic technology consulting to align your IT infrastructure with business objectives and industry
                  standards
                </p>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform">
              <div className="bg-pink-500 p-8 flex items-center justify-center">
                <Palette size={64} className="text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">UI/UX Design</h3>
                <p className="text-gray-400">
                  Beautiful, intuitive interfaces designed with user research and data-driven insights to maximize
                  engagement
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 px-6 bg-gray-800/50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-blue-500 mb-2">10+</div>
              <div className="text-gray-400 text-lg">Years Experience</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-green-500 mb-2">200+</div>
              <div className="text-gray-400 text-lg">Happy Clients</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-orange-500 mb-2">500K+</div>
              <div className="text-gray-400 text-lg">Users Reached</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-purple-500 mb-2">250%</div>
              <div className="text-gray-400 text-lg">Avg. Revenue Growth</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-gray-400 text-lg">
              Ready to transform your business? Let's discuss your project
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="How can we help?"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 py-12 px-6 border-t border-gray-800">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold mb-4">
                <span className="text-white">Jonath</span>
                <span className="text-blue-500">Tech</span>
              </div>
              <p className="text-gray-400">
                Innovative AI-powered solutions for modern businesses
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('home')} className="block text-gray-400 hover:text-blue-500">
                  Home
                </button>
                <button onClick={() => scrollToSection('about')} className="block text-gray-400 hover:text-blue-500">
                  About Us
                </button>
                <button onClick={() => scrollToSection('services')} className="block text-gray-400 hover:text-blue-500">
                  Services
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <div className="space-y-2 text-gray-400">
                <p>Mobile Development</p>
                <p>Web Development</p>
                <p>AI Solutions</p>
                <p>IT Consultancy</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-gray-400">
                <p>info@jonathtech.com</p>
                <p>+1 (555) 123-4567</p>
                <p>123 Tech Street, Silicon Valley, CA 94025</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 JonathTech. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
