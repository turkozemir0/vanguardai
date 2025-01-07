import React, { useState } from 'react';
import {
  Bot,
  Phone,
  Calendar,
  UserCheck,
  Clock,
  Shield,
  ChevronLeft,
  ChevronRight,
  Check,
} from 'lucide-react';

function App() {
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    {
      pain: 'Wasting Hours on Lead Qualification',
      solution:
        'AI Automation instantly qualifies leads based on your criteria, 24/7',
      icon: <UserCheck className="w-8 h-8 text-blue-400" />,
      image:
        'https://storage.googleapis.com/msgsndr/8ZRWeTVNflmzUVleED5f/media/677d992965b87e606d17cea0.jpeg',
    },
    {
      pain: 'Spending Days on Manual Follow-ups',
      solution:
        'Automated multi-channel follow-ups via email, SMS, calls, and WhatsApp',
      icon: <Phone className="w-8 h-8 text-blue-400" />,
      image:
        'https://storage.googleapis.com/msgsndr/8ZRWeTVNflmzUVleED5f/media/677d98af9c24d968aa1bb29e.jpeg',
    },
    {
      pain: 'Missing Appointments & Opportunities',
      solution:
        'AI handles all scheduling, reminders, and confirmations automatically',
      icon: <Calendar className="w-8 h-8 text-blue-400" />,
      image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a',
    },
  ];

  const packages = [
    {
      name: 'Vanguard AI Launch',
      price: '$500+/month',
      description: 'Ideal for small businesses exploring automation',
      features: [
        'Basic CRM configuration',
        '3 Essential lead workflows',
        'One ad campaign setup',
        'Analytics review',
        '20-min strategy session',
      ],
    },
    {
      name: 'Vanguard AI Propel',
      price: '$1,000–$1,500+/month',
      description: 'Perfect for businesses ready to scale',
      features: [
        'Advanced CRM customization',
        '5 Tailored workflows',
        'Full ad campaign management',
        'AI-driven lead scoring',
        'Weekly consultation',
      ],
    },
    {
      name: 'Vanguard AI Ascend',
      price: '$2,000–$3,000+/month',
      description: 'For medium businesses needing AI power',
      features: [
        'Full CRM integration',
        'AI calling capabilities',
        '8 Enhanced workflows',
        'Advanced ad strategy',
        'Weekly strategy calls',
      ],
    },
    {
      name: 'Vanguard AI Pinnacle',
      price: '$3,000+/month',
      description: 'Enterprise-level automation solution',
      features: [
        'Enterprise CRM setup',
        'Unlimited AI calling',
        'Unlimited workflows',
        'Dedicated support',
        'Advanced analytics',
      ],
    },
    {
      name: 'Vanguard AI Infinity',
      price: 'Contact for Pricing',
      description: 'Custom enterprise solution',
      features: [
        'Fully bespoke solutions',
        'Strategic partnership',
        'Global AI support',
        'Custom AI models',
        'Unlimited everything',
      ],
    },
  ];

  const testimonials = [
    {
      name: 'Michael Chen',
      role: 'CEO, TechGrowth Solutions',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
      quote:
        "Vanguard AI transformed our lead management. We've seen a 300% increase in qualified leads and our team saves 30+ hours weekly.",
      company: 'TechGrowth Solutions',
    },
    {
      name: 'Sarah Williams',
      role: 'Marketing Director, InnovateX',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      quote:
        'The AI calling feature is a game-changer. Our follow-up rate improved by 5x and sales conversion doubled in just two months.',
      company: 'InnovateX',
    },
    {
      name: 'David Martinez',
      role: 'Sales Manager, FutureScale',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      quote:
        'We eliminated manual follow-ups completely. Vanguard AI handles everything automatically, and our clients love the seamless experience.',
      company: 'FutureScale',
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-b from-black to-slate-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639322537228-f710d846310a')] opacity-10 bg-cover bg-center" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 relative">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-blue-950/50 px-4 py-2 rounded-full text-blue-400 mb-6">
                <Bot className="w-4 h-4" />
                <span className="text-sm font-medium">
                  Next-Gen AI Technology
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Vanguard AI
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 text-3xl md:text-4xl mt-2">
                  Automate Your Business Growth
                </span>
              </h1>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl">
                Transform your business with AI-powered automation. Eliminate
                manual tasks, convert more leads, and scale your operations
                effortlessly.
              </p>
            </div>
            <div className="flex-1">
              <img
                src="https://storage.googleapis.com/msgsndr/8ZRWeTVNflmzUVleED5f/media/677d9a49012edf7b80739a30.jpeg"
                alt="AI Visualization"
                className="rounded-xl shadow-2xl shadow-blue-500/20"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Features Slider */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Problems We Solve
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our AI-powered solutions eliminate your biggest business
              challenges
            </p>
          </div>

          <div className="relative">
            <button
              onClick={() =>
                setCurrentFeature((prev) =>
                  prev === 0 ? features.length - 1 : prev - 1
                )
              }
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-blue-900/50 p-2 rounded-full text-blue-400 hover:bg-blue-900"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={() =>
                setCurrentFeature((prev) =>
                  prev === features.length - 1 ? 0 : prev + 1
                )
              }
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-blue-900/50 p-2 rounded-full text-blue-400 hover:bg-blue-900"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="bg-gradient-to-b from-slate-800 to-slate-900 rounded-xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div>
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-red-400 mb-2">
                      Pain Point:
                    </h3>
                    <p className="text-white text-xl">
                      {features[currentFeature].pain}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-green-400 mb-2">
                      Solution:
                    </h3>
                    <p className="text-white text-xl">
                      {features[currentFeature].solution}
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <img
                    src={features[currentFeature].image}
                    alt="Feature visualization"
                    className="rounded-lg w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                  {features[currentFeature].icon}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-b from-slate-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              See how businesses are transforming their operations with Vanguard
              AI
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-b from-slate-800/50 to-slate-900/50 rounded-xl p-8 backdrop-blur-sm border border-slate-800/50"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-white font-semibold">
                      {testimonial.name}
                    </h3>
                    <p className="text-blue-400">{testimonial.role}</p>
                  </div>
                </div>
                <blockquote className="text-gray-300 mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-2">
                  <Bot className="w-4 h-4 text-blue-400" />
                  <span className="text-sm text-gray-500">
                    {testimonial.company}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Choose Your Growth Path
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Select the perfect package for your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`bg-gradient-to-b from-slate-800 to-slate-900 rounded-xl p-8 ${
                  index === 4 ? 'lg:col-span-3 md:col-span-2' : ''
                }`}
              >
                <h3 className="text-2xl font-bold text-white mb-2">
                  {pkg.name}
                </h3>
                <p className="text-blue-400 text-xl font-semibold mb-4">
                  {pkg.price}
                </p>
                <p className="text-gray-400 mb-6">{pkg.description}</p>
                <ul className="space-y-4">
                  {pkg.features.map((feature, fIndex) => (
                    <li
                      key={fIndex}
                      className="flex items-center gap-3 text-white"
                    >
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639322537228-f710d846310a')] opacity-5 bg-cover bg-center" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="bg-gradient-to-r from-slate-900 to-blue-900/50 p-12 rounded-2xl border border-blue-900/50">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Ready to Scale Your Business?
                </h2>
                <p className="text-gray-400 mb-8">
                  Join forward-thinking businesses leveraging Vanguard AI to
                  achieve unprecedented growth.
                </p>
                <div className="flex items-center gap-4 text-gray-400">
                  <Bot className="w-6 h-6 text-blue-400" />
                  <span>Powered by Empire Private Media</span>
                </div>
              </div>
              <div className="bg-black/50 p-8 rounded-xl backdrop-blur-sm">
                <a
                  href="https://emprestige.com/contactus"
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 text-center inline-block"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white font-bold text-xl mb-4 md:mb-0 flex items-center gap-2">
              <Bot className="w-6 h-6" />
              Vanguard AI
            </div>
            <div className="text-gray-600">
              © {new Date().getFullYear()} Powered by Empire Private Media
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
