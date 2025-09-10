```jsx
import React, { useState, useRef, useEffect } from "react";

const App = () => {
  const [showCalendly, setShowCalendly] = useState(false);
  const [showLeadMagnet, setShowLeadMagnet] = useState(false);
  const [showServicesModal, setShowServicesModal] = useState(false);
  const [showBlogModal, setShowBlogModal] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const modalRef = useRef();

  const packages = [
    {
      name: "Starter",
      price: "$997",
      subtitle: "(one-time)",
      features: [
        "AI Chatbot (website + FB Messenger)",
        "Automated lead capture forms",
        "Basic email/SMS follow-up sequence",
        "✅ 30-day support"
      ],
      cta: "Get Starter Package"
    },
    {
      name: "Growth",
      price: "$1,997",
      subtitle: "(one-time)",
      features: [
        "Everything in Starter",
        "AI missed-call text/voicemail system",
        "Lead qualification & routing",
        "CRM integration (HubSpot / GoHighLevel)",
        "✅ 90-day support"
      ],
      cta: "Get Growth Package"
    },
    {
      name: "Scale",
      price: "$2,997",
      subtitle: "(one-time + $297/mo)",
      features: [
        "Everything in Growth",
        "Multi-channel AI assistant",
        "Calendar booking automation",
        "Ongoing optimization + dedicated manager",
        "✅ 180-day support"
      ],
      cta: "Get Scale Package"
    }
  ];

  const testimonials = [
    {
      text: "Magnates Agency automated my real estate business — I now close 30% more deals without hiring extra staff.",
      author: "Daniel R."
    },
    {
      text: "Our dental clinic doubled appointments in 2 months. The AI system follows up with patients better than we ever could.",
      author: "Dr. Sarah K."
    },
    {
      text: "I run a contracting business. Before this, I missed dozens of leads monthly. Now? My phone books itself.",
      author: "James L."
    }
  ];

  const services = [
    { icon: "🖥️", title: "Website Design & Branding", desc: "Elegant, premium, and conversion-optimized." },
    { icon: "🛒", title: "E-Commerce Automation", desc: "Hands-off scaling on Amazon, TikTok, Walmart, and Shopify." },
    { icon: "🤖", title: "AI Automation", desc: "Custom AI workflows to save time & grow faster." },
    { icon: "🎥", title: "YouTube Automation", desc: "Monetized channels, managed end-to-end." },
    { icon: "🎨", title: "Branding", desc: "Luxury brand identity & positioning." }
  ];

  const packagesTeaser = ["Starter", "Growth", "Elite", "Custom"];
  const packageDescriptions = {
    Starter: "Perfect for SMEs",
    Growth: "Scalable & Profitable",
    Elite: "Enterprise-level",
    Custom: "Tailored to Your Needs"
  };

  const blogs = [
    {
      id: 1,
      title: "How AI Follow-Up Doubles Local Business Revenue",
      date: "April 15, 2024",
      content: "In this comprehensive analysis, we break down the exact AI follow-up system that helped our client increase revenue by 112% in just 90 days. The key wasn't just automation technology—it was the strategic implementation of multi-channel follow-up sequences that engaged leads at precisely the right moments. Our client, a home services contractor, was missing over 60% of their inbound leads due to slow response times. We implemented an AI system that responds to every inquiry within 30 seconds across multiple channels—website chat, SMS, and Facebook Messenger. The AI doesn't just say "Hello"—it qualifies leads by asking strategic questions, schedules appointments directly into the client's calendar, and sends automated follow-ups if leads don't convert immediately. For leads that need nurturing, the system deploys a 7-day email and SMS sequence with personalized content based on the lead's specific needs. What's remarkable is that this system works while the business owner sleeps. After implementation, response time dropped from 45 minutes to 22 seconds, lead-to-customer conversion increased from 18% to 39%, and monthly revenue grew from $42,000 to $89,000. The best part? This isn't custom enterprise software. We built this using existing AI tools configured in a proprietary way that most agencies don't understand. And we can implement a similar system for your business in as little as 72 hours."
    },
    {
      id: 2,
      title: "Top 5 Ways AI Saves Small Businesses 30+ Hours/Month",
      date: "March 28, 2024",
      content: "Time is your most valuable asset, yet most small business owners waste dozens of hours each month on tasks that could—and should—be automated. In our work with over 200 businesses, we've identified the 5 highest-impact AI automations that consistently save our clients at least 30 hours per month. 1. Automated Lead Response: 80% of leads convert when contacted within 5 minutes, but most businesses take hours. Our AI systems respond to every lead in under 30 seconds, qualifying them and booking appointments—saving 8-12 hours weekly. 2. Intelligent Email Management: AI that sorts, prioritizes, and drafts responses to your emails can eliminate 3-5 hours of weekly inbox management. Our clients report a 70% reduction in time spent on email. 3. Content Creation at Scale: Whether it's social media posts, blog articles, or marketing emails, AI can generate high-quality content 10x faster than humans. One client produces a month's worth of content in a single afternoon. 4. Meeting Scheduling Automation: No more back-and-forth emails. AI assistants coordinate availability, send calendar invites, and even prepare meeting agendas—saving 4-6 hours monthly. 5. Customer Service Automation: AI chatbots handle 60-80% of routine customer inquiries, freeing up your team for complex issues. One e-commerce client reduced support tickets by 72% while improving response times. The businesses that implement these five automations don't just save time—they gain a competitive advantage. They can respond faster, serve more customers, and scale without hiring additional staff. And the setup? Much simpler than you think."
    },
    {
      id: 3,
      title: "The Future of Customer Support: AI-First Approach",
      date: "March 10, 2024",
      content: "The customer support landscape is undergoing a revolution. No longer is 24/7 support a luxury—it's becoming an expectation. And AI is making it possible for businesses of all sizes to provide instant, intelligent support around the clock. In this deep dive, we explore how leading companies are implementing AI-first support systems that handle 80% of customer inquiries without human intervention, while actually improving customer satisfaction scores. The key is moving from reactive to proactive support. Instead of waiting for customers to contact you with problems, AI systems monitor customer behavior and reach out with solutions before issues arise. For example, if a customer abandons their shopping cart, AI doesn't just send a generic reminder—it analyzes why they left and offers a personalized solution. Our proprietary AI support systems use natural language processing to understand customer intent, not just keywords. This means they can handle complex inquiries, not just simple FAQs. One client in the SaaS industry reduced their support response time from 14 hours to 48 seconds, while increasing customer satisfaction from 78% to 94%. But the real game-changer is the learning capability. These systems get smarter with every interaction, analyzing thousands of support conversations to identify patterns and improve responses. They also integrate seamlessly with your CRM, so when a human does need to intervene, they have full context of the customer's journey. The ROI is compelling: one e-commerce client reduced their support costs by 63% while handling 3x the volume of inquiries. Another B2B company increased upsell revenue by 29% because their AI support system could identify expansion opportunities during routine support interactions. This isn't the future—it's available today. And businesses that adopt AI-first support now will have a significant competitive advantage over those waiting."
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    setTimeout(() => {
      setShowLeadMagnet(false);
      setFormSubmitted(false);
      setFormData({ name: '', email: '' });
    }, 2000);
  };

  // Close modals when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowCalendly(false);
        setShowServicesModal(false);
        setShowBlogModal(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Simulate scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'social-proof', 'pain-point', 'how-it-works', 'why-choose', 'services', 'packages', 'case-studies', 'testimonials', 'industries', 'faq', 'guarantee', 'about', 'blog', 'lead-magnet'];
      
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Animated Background Gradient */}
      <div className="fixed inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-500 to-green-400 animate-pulse"></div>
      </div>

      {/* Header */}
      <header className="relative z-30 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-green-400 bg-clip-text text-transparent">
            Magnates Agency
          </div>
          <nav className="hidden md:flex space-x-8">
           {['Home', 'Packages', 'Case Studies', 'About', 'Contact'].map((item) => (
  <button
    key={item}
    onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
    className={`hover:text-purple-400 transition-colors duration-200 ${
      activeSection === item.toLowerCase().replace(' ', '-') ? "text-purple-400" : ""
    }`}
  >
    {item}
  </button>
))}

          </nav>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm border-t border-purple-500/20">
            <div className="px-6 py-4 space-y-4">
              {['Home', 'Packages', 'Case Studies', 'About', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="block w-full text-left hover:text-purple-400 transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative z-10 px-6 py-24 md:py-32">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-green-400 bg-clip-text text-transparent">
              Automate Your Business.
            </span>
            <br />
            Scale Without Limits.
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Magnates Agency helps US businesses automate customer support, lead capture, and follow-ups with AI — so you close more deals while working less.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={() => setShowCalendly(true)}
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-lg"
            >
              🚀 Book Free Consultation
            </button>
            <button
              onClick={() => scrollToSection('packages')}
              className="px-8 py-4 border-2 border-purple-500 text-purple-400 hover:bg-purple-500/20 font-semibold rounded-xl transition-all duration-300 text-lg"
            >
              📦 See Packages
            </button>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section id="social-proof" className="relative z-10 px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-gray-400 mb-8">Trusted by growth-focused businesses across the US.</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70">
            {['Google', 'HubSpot', 'Meta', 'Stripe', 'Shopify', 'GoHighLevel', 'WhatsApp'].map((logo) => (
              <div key={logo} className="text-2xl font-bold text-gray-600">{logo}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Pain Point */}
      <section id="pain-point" className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-purple-400">
            Are You Losing Leads Every Single Day?
          </h2>
          <div className="space-y-4 text-lg text-gray-300 max-w-2xl mx-auto">
            <p>• 80% of businesses fail to follow up with leads within 5 minutes.</p>
            <p>• Missed calls = missed revenue.</p>
            <p>• Manual staff = wasted costs + human error.</p>
          </div>
          <button
            onClick={() => scrollToSection('how-it-works')}
            className="mt-10 px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            See How AI Fixes This
          </button>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Your Business. <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">AI-Powered.</span> Stress-Free.
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Discovery Call: We analyze your workflows & uncover automation opportunities.",
              "Custom AI Build: We design & implement a tailored automation system.",
              "Launch & Support: We optimize, track results, and scale growth with you."
            ].map((step, index) => (
              <div key={index} className="bg-black/50 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/20">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  {index + 1}
                </div>
                <p className="text-gray-300 leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button
              onClick={() => setShowCalendly(true)}
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Schedule Free Call
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-choose" className="relative z-10 px-6 py-20 bg-black/50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Not Just AI Tools. <span className="text-purple-400">Your Long-Term Growth Partner.</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              "⚡ Save 50% on admin costs instantly",
              "🤖 Never miss a call, message, or lead again",
              "📈 ROI-focused automations tailored to your industry",
              "🔒 US-based team with proven case studies"
            ].map((item, index) => (
              <div key={index} className="p-6 rounded-xl bg-black/50 border border-purple-500/20">
                <p className="text-gray-300">{item}</p>
              </div>
            ))}
          </div>
          <button
            onClick={() => setShowCalendly(true)}
            className="mt-12 px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Book Free Consultation
          </button>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            AI Automation Services <span className="text-purple-400">Tailored to Your Business</span>
          </h2>
          <div className="space-y-4 max-w-4xl mx-auto text-lg">
            {[
              "AI Chatbots & Virtual Assistants (Website, SMS, WhatsApp, Messenger, IG DM)",
              "Lead Capture & Nurturing Systems (Forms, surveys, qualification bots)",
              "CRM Automation & Integration (HubSpot, GoHighLevel, Salesforce)",
              "AI Follow-Up Sequences (Email, SMS, missed-call text-back)",
              "Calendar & Booking Automation (Perfect for clinics, real estate, contractors, lawyers)",
              "Multi-Channel Support Automation (24/7 across platforms)",
              "Data & Analytics Dashboard (Track ROI, conversions, and performance in real time)"
            ].map((service, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <p className="text-gray-300">{service}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button
              onClick={() => setShowServicesModal(true)}
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Explore Services
            </button>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="relative z-10 px-6 py-20 bg-black/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Choose Your <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Automation Path</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              <div key={index} className="bg-black/70 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-2 text-white">{pkg.name}</h3>
                <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  {pkg.price}
                </div>
                <p className="text-gray-400 mb-6">{pkg.subtitle}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="text-gray-300 flex items-start space-x-2">
                      <span className="text-green-400 mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setShowCalendly(true)}
                  className="w-full py-3 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold rounded-xl transition-all duration-300"
                >
                  {pkg.cta}
                </button>
              </div>
            ))}
          </div>
          <div className="text-center mt-8 text-gray-400">
            <p>👉 "Not sure which plan fits? → <button onClick={() => setShowCalendly(true)} className="text-purple-400 hover:underline">Book Free Consultation</button>."</p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Real Businesses. <span className="text-purple-400">Real Growth.</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              "Dental Clinic: +40% patient bookings in 60 days",
              "Contractor: 2× inbound leads within 30 days",
              "Realtor: 30% more closings without extra staff",
              "Law Firm: 24/7 client intake with zero extra hires"
            ].map((study, index) => (
              <div key={index} className="p-6 rounded-xl bg-black/50 border border-purple-500/20">
                <p className="text-gray-300">{study}</p>
              </div>
            ))}
          </div>
          <button
            onClick={() => setShowCalendly(true)}
            className="mt-12 px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            See If AI Fits My Business
          </button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative z-10 px-6 py-20 bg-black/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            What Our <span className="text-purple-400">Clients Say</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-black/70 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/20">
                <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                <p className="text-purple-400 font-semibold">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            AI Automation for <span className="text-purple-400">Every Industry</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Healthcare & Clinics → More bookings, less staff pressure.",
              "Real Estate → 24/7 lead follow-up, higher closing rates.",
              "Contractors & Home Services → No more missed calls = no more missed jobs.",
              "Law Firms → Automated client intake + scheduling.",
              "E-commerce & Retail → Abandoned cart recovery + customer support.",
              "Restaurants & Hospitality → Reservation bots + review follow-up."
            ].map((industry, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <p className="text-gray-300">{industry}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button
              onClick={() => setShowCalendly(true)}
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              See How AI Fits My Industry
            </button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative z-10 px-6 py-20 bg-black/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Frequently <span className="text-purple-400">Asked Questions</span>
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "How fast can I see results?",
                a: "Most clients see ROI within 30–60 days of launch."
              },
              {
                q: "Is this complicated for my team?",
                a: "No — we handle setup, training, and ongoing optimization."
              },
              {
                q: "What if it doesn’t work for me?",
                a: "You’re covered with our 90-day Results Guarantee."
              },
              {
                q: "Do I need to replace staff?",
                a: "Not at all — AI enhances your team, not replaces them."
              }
            ].map((item, index) => (
              <div key={index} className="border-b border-gray-800 pb-6">
                <h3 className="text-xl font-semibold mb-2 text-purple-400">{item.q}</h3>
                <p className="text-gray-300">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section id="guarantee" className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-purple-400">
            100% Risk-Free Guarantee
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            If you don’t see measurable automation results within 90 days, we’ll work with you for free until you do. Your investment is safe.
          </p>
          <button
            onClick={() => setShowCalendly(true)}
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Book Free Consultation
          </button>
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative z-10 px-6 py-20 bg-black/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            The Team Powering <span className="text-purple-400">AI Growth</span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Magnates Agency is a US-based AI automation agency helping businesses scale without extra staff. With years of automation expertise and proven case studies, we’re not just software installers — we’re your long-term partners in growth.
          </p>
        </div>
      </section>

      {/* Blog */}
      <section id="blog" className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            AI Automation <span className="text-purple-400">Insights</span>
          </h2>
          <div className="space-y-4 max-w-2xl mx-auto">
            {blogs.map((blog) => (
              <div key={blog.id} className="flex items-center justify-between p-4 bg-black/50 rounded-xl border border-purple-500/20">
                <div>
                  <p className="text-gray-300 font-semibold">{blog.title}</p>
                  <p className="text-gray-500 text-sm">{blog.date}</p>
                </div>
                <button
                  onClick={() => setShowBlogModal(blog)}
                  className="text-purple-400 hover:text-purple-300 font-semibold"
                >
                  Read More →
                </button>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button
              onClick={() => setShowServicesModal(true)}
              className="px-8 py-4 border-2 border-purple-500 text-purple-400 hover:bg-purple-500/20 font-semibold rounded-xl transition-all duration-300"
            >
              Explore Services
            </button>
          </div>
        </div>
      </section>

      {/* Lead Magnet */}
      <section id="lead-magnet" className="relative z-10 px-6 py-20 bg-gradient-to-r from-purple-900/30 to-blue-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Free Guide: <span className="text-purple-400">7 AI Automations Every Local Business Needs in 2025</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Download this free PDF guide and discover the exact automations our clients use to generate 2×–3× more revenue.
          </p>
          
          {!formSubmitted ? (
            <form onSubmit={handleFormSubmit} className="max-w-md mx-auto space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) = /> setFormData({...formData, name: e.target.value})}
                required
                className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) = /> setFormData({...formData, email: e.target.value})}
                required
                className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none"
              />
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold rounded-xl transition-all duration-300"
              >
                Download Free Guide
              </button>
            </form>
          ) : (
            <div className="max-w-md mx-auto p-6 bg-green-500/20 border border-green-500 rounded-xl">
              <p className="text-green-400 text-lg">✓ Guide sent to your email! Check your inbox.</p>
            </div>
          )}
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Your Competitors Are Already Automating. <span className="text-purple-400">Why Aren’t You?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Spots are limited — book your free consultation today and see how AI can scale your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={() => setShowCalendly(true)}
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-lg"
            >
              🚀 Book Free Consultation
            </button>
            <button
              onClick={() => scrollToSection('packages')}
              className="px-8 py-4 border-2 border-purple-500 text-purple-400 hover:bg-purple-500/20 font-semibold rounded-xl transition-all duration-300 text-lg"
            >
              📦 Choose My Package
            </button>
          </div>
        </div>
      </section>

      {/* Services Modal */}
      {showServicesModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
          <div 
            ref={modalRef}
            className="bg-white text-slate-900 rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-8 md:p-10">
              <button
                onClick={() => setShowServicesModal(false)}
                className="float-right text-2xl font-bold text-slate-500 hover:text-slate-700 ml-auto"
              >
                ×
              </button>
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6 text-slate-900">
                ✨ Discover Our Premium Solutions
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                At Magnates Agency, we craft luxury-driven, conversion-focused solutions tailored to elevate your brand. Explore our service categories below:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-10">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <span className="text-2xl mt-1">{service.icon}</span>
                    <div>
                      <h3 className="font-semibold text-slate-900">{service.title}</h3>
                      <p className="text-slate-600 text-sm">{service.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mb-10">
                <h3 className="text-2xl font-bold mb-4 text-slate-900">📦 Package Options</h3>
                <div className="space-y-3">
                  {packagesTeaser.map((pkg) => (
                    <div key={pkg} className="text-slate-700">
                      • <span className="font-semibold">{pkg}</span> — {packageDescriptions[pkg]}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-slate-200">
                <a
                  href="#contact"
                  className="flex-1 px-6 py-4 bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-semibold rounded-xl text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Get Proposal
                </a>
                <a
                  href="https://calendly.com/magnates-agency"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-6 py-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl text-center border-2 border-yellow-500 hover:border-yellow-400 transition-all duration-300"
                >
                  Book a Free Call
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Blog Modal */}
      {showBlogModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
          <div 
            ref={modalRef}
            className="bg-white text-slate-900 rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col"
          >
            <div className="p-8 md:p-10 flex-1 overflow-y-auto">
              <button
                onClick={() => setShowBlogModal(null)}
                className="float-right text-2xl font-bold text-slate-500 hover:text-slate-700 ml-auto"
              >
                ×
              </button>
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-2 text-slate-900">
                🚀 {showBlogModal.title}
              </h2>
              <p className="text-slate-600 mb-6">By Magnates Agency • {showBlogModal.date}</p>
              <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed whitespace-pre-line">
                {showBlogModal.content}
              </div>
            </div>
            <div className="p-8 md:p-10 bg-slate-50 border-t border-slate-200">
              <p className="text-slate-700 mb-4 text-center">👉 Inspired? Let’s apply this to your business.</p>
              <button
                onClick={() => {
                  setShowBlogModal(null);
                  setShowCalendly(true);
                }}
                className="w-full px-6 py-4 bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-semibold rounded-xl text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Schedule Free Consultation
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Calendly Modal */}
      {showCalendly && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div ref={modalRef} className="bg-black border border-purple-500/30 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-purple-500/20 flex justify-between items-center">
              <h3 className="text-2xl font-bold text-white">Schedule Your Free Consultation</h3>
              <button
                onClick={() => setShowCalendly(false)}
                className="text-gray-400 hover:text-white text-2xl"
              >
                ×
              </button>
            </div>
            <div className="p-6">
              <div className="text-center py-12">
                <div className="text-6xl mb-4">📅</div>
                <h4 className="text-xl font-semibold mb-4 text-white">Connect With Our Team</h4>
                <p className="text-gray-300 mb-6">
                  We'll analyze your business and show you exactly how AI automation can save you time and increase revenue.
                </p>
                <div className="space-y-3 text-sm text-gray-400">
                  <p>• 30-minute strategy session</p>
                  <p>• Custom automation recommendations</p>
                  <p>• No pressure, just value</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-purple-500/20">
                <a
                  href="https://calendly.com/magnates-agency/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold rounded-xl transition-all duration-300"
                >
                  Book 30-Minute Call
                </a>
                <button
                  onClick={() => setShowCalendly(false)}
                  className="flex-1 text-center px-6 py-3 border border-gray-600 text-gray-300 hover:bg-gray-800 font-semibold rounded-xl transition-all duration-300"
                >
                  Maybe Later
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Lead Magnet Modal */}
      {showLeadMagnet && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-black border border-purple-500/30 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-purple-500/20 flex justify-between items-center">
              <h3 className="text-2xl font-bold text-white">Download Your Free Guide</h3>
              <button
                onClick={() => setShowLeadMagnet(false)}
                className="text-gray-400 hover:text-white text-2xl"
              >
                ×
              </button>
            </div>
            <div className="p-6">
              <div className="text-center py-8">
                <div className="text-5xl mb-4">📘</div>
                <h4 className="text-xl font-semibold mb-4 text-white">7 AI Automations Every Local Business Needs in 2025</h4>
                <p className="text-gray-300 mb-6">
                  Enter your details below to get instant access to this valuable resource.
                </p>
              </div>
              {!formSubmitted ? (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) = /> setFormData({...formData, name: e.target.value})}
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) = /> setFormData({...formData, email: e.target.value})}
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold rounded-xl transition-all duration-300"
                  >
                    Get Instant Access
                  </button>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="text-3xl mb-4">✓</div>
                  <p className="text-green-400 text-lg">Your guide has been sent! Check your email.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="relative z-10 px-6 py-12 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-green-400 bg-clip-text text-transparent mb-4 md:mb-0">
              Magnates Agency
            </div>
            <div className="flex space-x-6">
              {['LinkedIn', 'Instagram', 'Facebook'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8 text-sm">
            {['Home', 'Packages', 'Contact', 'Privacy', 'Terms'].map((link) => (
              <a
                key={link}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (link === 'Contact') {
                    setShowCalendly(true);
                  }
                }}
                className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </div>
          <div className="text-center text-sm text-gray-500">
            <p>Contact: hello@magnatesagency.com | +1-XXX-XXX-XXXX</p>
          </div>
        </div>
      </footer>

      {/* Sticky Bottom CTA */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40">
        <button
          onClick={() => setShowCalendly(true)}
          className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 text-lg min-w-48"
        >
          Book Free Consultation
        </button>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap');
        
        * {
          font-family: 'Inter', sans-serif;
        }
        
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Montserrat', sans-serif;
        }
        
        .prose {
          max-width: none;
        }
        
        .prose p {
          margin-bottom: 1em;
          line-height: 1.8;
        }
        
        .whitespace-pre-line {
          white-space: pre-line;
        }
      `}</style>
    </div>
  );
};

export default App;
```
