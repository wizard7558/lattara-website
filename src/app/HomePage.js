'use client';

import React, { useState, useEffect } from 'react';
import { Users, ArrowRight, ChevronRight, Code, LineChart, Check } from 'lucide-react';

const HomePage = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const expertise = [
    {
      title: 'Analytics Engineering',
      description: 'Build robust data pipelines and reporting systems that deliver accurate, actionable insights.',
      details: [
        'Data warehouse architecture',
        'ETL pipeline development',
        'Custom dashboard creation',
        'Data quality assurance'
      ]
    },
    {
      title: 'Marketing Analytics',
      description: 'Transform your marketing data into clear insights that drive strategic decisions.',
      details: [
        'Attribution modeling',
        'Campaign performance analysis',
        'Customer journey mapping',
        'ROI optimization'
      ]
    },
    {
      title: 'CRM Implementation',
      description: 'Optimize your customer relationship management with tailored solutions and workflows.',
      details: [
        'System architecture design',
        'Integration planning',
        'Workflow optimization',
        'Team training & enablement'
      ]
    }
  ];

  const caseStudies = [
    {
      client: 'Global Retail Brand',
      challenge: 'Fragmented marketing data across multiple platforms',
      solution: 'Implemented unified attribution modeling and automated reporting',
      result: '32% improvement in marketing ROI',
      tags: ['Attribution Modeling', 'Data Integration', 'Analytics']
    },
    {
      client: 'Tech Startup',
      challenge: 'Scaling CRM needs with rapid growth',
      solution: 'Custom CRM implementation with automated workflows',
      result: '60% reduction in manual data entry',
      tags: ['CRM', 'Automation', 'Scaling']
    },
    {
      client: 'E-commerce Company',
      challenge: 'Inconsistent customer journey tracking',
      solution: 'End-to-end analytics implementation',
      result: '45% increase in conversion rate',
      tags: ['Analytics', 'Customer Journey', 'Optimization']
    },
    {
      client: 'SaaS Platform',
      challenge: 'Complex multi-touch attribution needs',
      solution: 'Custom attribution model with ML implementation',
      result: '28% increase in ROAS',
      tags: ['Machine Learning', 'Attribution', 'ROAS']
    }
  ];

  const clientLogos = [
    '/images/placeholders/doordash.png',
    '/images/placeholders/reddit.png',
    '/images/placeholders/uber.png',
    '/images/placeholders/ramp.png',
    '/images/placeholders/edwards.png',
    '/images/placeholders/rippling.png',
    '/images/placeholders/zenefits.png',
    '/images/placeholders/thumbtack.png'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* SVG Logo */}
              <div className="flex items-center">
                <a href="/" className="flex items-center">
                  <img
                    src="/images/logo.svg" // Replace with your SVG path
                    alt="Lattara Logo"
                    className="h-20 w-auto"
                  />
                  <span className="sr-only">Lattara</span>
                </a>
              </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#expertise" className="text-gray-600 hover:text-blue-900 transition">Expertise</a>
              <a href="#case-studies" className="text-gray-600 hover:text-blue-900 transition">Case Studies</a>
              <a href="#approach" className="text-gray-600 hover:text-blue-900 transition">Approach</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-900 transition">Contact</a>
              <button className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition flex items-center gap-2">
                Let's Talk <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold text-blue-900 mb-6 leading-tight">
              Expert Marketing Analytics & CRM Consulting
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Helping businesses leverage data to optimize marketing performance, streamline operations, 
              and drive growth through tailored analytics and CRM solutions.
            </p>
            <div className="flex gap-4 justify-center">
              <button className="bg-blue-900 text-white px-8 py-4 rounded-lg hover:bg-blue-800 transition flex items-center gap-2">
                Schedule a Consultation <ChevronRight size={20} />
              </button>
              <button className="border-2 border-blue-900 text-blue-900 px-8 py-4 rounded-lg hover:bg-blue-50 transition">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-12 bg-white border-t border-b border-gray-100 overflow-hidden">
        <div className="scroll-container">
          <div className="scroll-container-inner">
            {/* Render the logos twice for seamless looping */}
            {[...clientLogos, ...clientLogos].map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Client ${index + 1}`}
                className="h-10 w-auto grayscale hover:grayscale-0 transition duration-300"
              />
            ))}
            {/* Render the logos 3x for seamless looping */}
            {[...clientLogos, ...clientLogos].map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Client ${index + 1}`}
                className="h-10 w-auto grayscale hover:grayscale-0 transition duration-300"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-white" id="expertise">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8">
            {expertise.map((area, index) => (
              <div key={index} className="bg-white p-6 shadow-sm rounded-lg flex flex-col min-h-full">
                <h3 className="text-xl font-bold text-blue-900 mb-4">{area.title}</h3>
                <p className="text-gray-600 mb-6">{area.description}</p>
                <div className="space-y-4 mt-auto">
                  {area.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-gray-50" id="case-studies">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-16 text-center">Client Success Stories</h2>
          <div className="relative">
            <div className="flex overflow-x-auto space-x-6 pb-8 snap-x snap-mandatory">
              {caseStudies.map((study, index) => (
                <div key={index} className="flex-none w-96 snap-center">
                  <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition duration-300 h-full">
                    <div className="text-sm text-blue-900 font-medium mb-4">{study.client}</div>
                    <h3 className="text-lg font-bold mb-4">Challenge:</h3>
                    <p className="text-gray-600 mb-4">{study.challenge}</p>
                    <h3 className="text-lg font-bold mb-4">Solution:</h3>
                    <p className="text-gray-600 mb-4">{study.solution}</p>
                    <h3 className="text-lg font-bold mb-4">Result:</h3>
                    <p className="text-green-600 font-medium mb-6">{study.result}</p>
                    <div className="flex flex-wrap gap-2">
                      {study.tags.map((tag, idx) => (
                        <span key={idx} className="bg-blue-100 text-blue-900 px-3 py-1 rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-white" id="approach">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-16 text-center">My Approach</h2>
          <div className="grid grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-8 bg-white shadow-sm rounded-lg">
              <div className="bg-blue-100 p-4 rounded-lg mb-6">
                <Users className="w-8 h-8 text-blue-900" />
              </div>
              <h3 className="font-bold text-lg mb-4">Collaborative Partnership</h3>
              <p className="text-gray-600">Working closely with your team to ensure solutions align with your goals and capabilities.</p>
            </div>
            <div className="flex flex-col items-center text-center p-8 bg-white shadow-sm rounded-lg">
              <div className="bg-blue-100 p-4 rounded-lg mb-6">
                <Code className="w-8 h-8 text-blue-900" />
              </div>
              <h3 className="font-bold text-lg mb-4">Technical Excellence</h3>
              <p className="text-gray-600">Leveraging deep technical expertise to build robust, scalable solutions.</p>
            </div>
            <div className="flex flex-col items-center text-center p-8 bg-white shadow-sm rounded-lg">
              <div className="bg-blue-100 p-4 rounded-lg mb-6">
                <LineChart className="w-8 h-8 text-blue-900" />
              </div>
              <h3 className="font-bold text-lg mb-4">Results-Driven</h3>
              <p className="text-gray-600">Focus on delivering measurable improvements and clear business value.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Marketing Analytics?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how I can help optimize your marketing analytics and CRM strategies.
          </p>
          <button className="bg-white text-blue-900 px-8 py-4 rounded-lg hover:bg-blue-50 transition font-medium">
            Schedule a Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;