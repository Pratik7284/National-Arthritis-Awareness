/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, FileText, Image as ImageIcon, Newspaper, TrendingUp, Users, CheckCircle, Mail } from 'lucide-react';

const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfSrDUGqL_TvQs5Bwm4THWAk6ntK3YREtyCnosH0P9RI93YLA/viewform?embedded=true";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-4">
            <img src="https://i.ibb.co/MkJdk0jn/Screenshot-2026-04-03-161832.png" alt="Ipca Logo" className="h-8 sm:h-10 object-contain" />
            <div className="w-px h-8 bg-gray-300"></div>
            <img src="https://i.ibb.co/ynb7g3XR/Screenshot-2026-04-03-161926.png" alt="Zerodol Logo" className="h-8 sm:h-10 object-contain" />
          </div>
        </div>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfSrDUGqL_TvQs5Bwm4THWAk6ntK3YREtyCnosH0P9RI93YLA/viewform?usp=header"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center justify-center bg-purple-700 text-white px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition"
        >
          Participate Now
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden bg-gradient-to-b from-secondary/10 via-white to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-6 border border-accent/20">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              Multi-Expert Editorial Feature
            </div>
            <div className="mb-6">
              <img src="https://i.ibb.co/xSm56pgF/Screenshot-2026-04-03-161955.png" alt="Campaign Ribbon" className="h-16 sm:h-20 object-contain" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mb-6 leading-tight">
              National <span className="text-primary">Arthritis Awareness</span> Month
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 font-medium leading-relaxed">
              Get Featured in The Times of India. Join leading orthopedic specialists in a nationwide educational initiative.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfSrDUGqL_TvQs5Bwm4THWAk6ntK3YREtyCnosH0P9RI93YLA/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-purple-700 text-white px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition w-full sm:w-auto text-lg font-bold"
              >
                Participate Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="relative lg:ml-auto w-full max-w-lg mx-auto lg:mx-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-[3rem] transform rotate-3 scale-105 filter blur-xl opacity-70"></div>
            <img 
              src="https://i.ibb.co/0V2M5k74/Whats-App-Image-2026-04-03-at-1-01-21-PM.jpg" 
              alt="Campaign Poster" 
              className="relative rounded-[2rem] shadow-2xl border border-white/50 w-full object-cover z-10"
              referrerPolicy="no-referrer"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = "https://images.unsplash.com/photo-1576091160550-2173ff9e5ee4?auto=format&fit=crop&q=80&w=1000";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Trust() {
  return (
    <section className="py-8 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center justify-center gap-6 sm:gap-8">
            <div className="bg-white px-4 py-2 rounded-xl shadow-sm">
              <img src="https://i.ibb.co/MkJdk0jn/Screenshot-2026-04-03-161832.png" alt="Ipca Logo" className="h-8 sm:h-10 object-contain" />
            </div>
            <div className="bg-white px-4 py-2 rounded-xl shadow-sm">
              <img src="https://i.ibb.co/ynb7g3XR/Screenshot-2026-04-03-161926.png" alt="Zerodol Logo" className="h-8 sm:h-10 object-contain" />
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 text-base sm:text-lg font-medium bg-white/10 px-6 py-3 rounded-full backdrop-blur-sm">
            <Newspaper className="w-5 h-5 sm:w-6 sm:h-6 text-secondary" />
            Publishing in The Times of India – 20th May 2026
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12 lg:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 transform translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">About the Campaign</h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                <strong>National Arthritis Awareness Month</strong> is a dedicated initiative to bring attention to the growing prevalence of arthritis and the critical importance of early diagnosis and effective management.
              </p>
              <p>
                This campaign aims to educate the general public and patients about joint health, treatment options, and lifestyle modifications, directly from the leading voices in healthcare. By bringing together top specialists, we create a trusted source of medical information.
              </p>
              <p>
                Organized by <strong>Ipca</strong> and powered by <strong>Zerodol</strong>, this initiative bridges the gap between medical experts and those seeking reliable, professional medical advice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  const benefits = [
    {
      icon: <Newspaper className="w-8 h-8 text-primary" />,
      title: "Featured in Newspaper",
      description: "Get your profile and article published in The Times of India, reaching millions of readers."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-accent" />,
      title: "Increase Visibility",
      description: "Enhance your professional reach and establish yourself as a thought leader in arthritis management."
    },
    {
      icon: <Users className="w-8 h-8 text-secondary" />,
      title: "Reach Wider Audience",
      description: "Connect with a broader patient demographic seeking expert advice on joint health."
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Participate?</h2>
          <p className="text-lg sm:text-xl text-gray-600">Join a select group of orthopedic specialists in this nationwide awareness drive.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg shadow-gray-200/50 border border-gray-100 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 border border-gray-100">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EditorialPreview() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Editorial Preview</h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-8">
              A professionally designed editorial spread featuring insights from multiple specialists. <strong>You could be featured here.</strong>
            </p>
            <ul className="space-y-4">
              {[
                "Curated editorial page featuring 3–6 Orthopedic Experts per page",
                "Individual doctor profile with photo and article",
                "Designed for strong reader visibility and engagement"
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mr-3" />
                  <span className="text-gray-700 font-medium text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Mock Newspaper Layout */}
          <div className="relative mt-10 lg:mt-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl transform rotate-3 scale-105 filter blur-xl opacity-50"></div>
            <div className="relative bg-white rounded-xl shadow-2xl border border-gray-200 p-6 sm:p-8 transform -rotate-2 transition-transform hover:rotate-0 duration-500">
              <div className="border-b-4 border-gray-900 pb-4 mb-6 text-center">
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 uppercase tracking-widest">The Times of India</h3>
                <p className="text-sm text-gray-500 mt-2">Special Feature • 20th May 2026</p>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-primary text-center mb-8">National Arthritis Awareness Month</h4>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className={`bg-gray-50 p-3 rounded-lg border border-gray-100 ${i === 1 ? 'ring-2 ring-accent ring-offset-2 relative' : ''}`}>
                    {i === 1 && (
                      <div className="absolute -top-3 -right-3 bg-accent text-white text-xs font-bold px-2 py-1 rounded-full shadow-md animate-bounce">
                        You!
                      </div>
                    )}
                    <div className="w-12 h-12 bg-gray-200 rounded-full mb-3 mx-auto overflow-hidden">
                      <img src={`https://i.pravatar.cc/150?img=${i + 10}`} alt="Doctor" className="w-full h-full object-cover opacity-50 grayscale" />
                    </div>
                    <div className="h-2 bg-gray-300 rounded w-3/4 mx-auto mb-2"></div>
                    <div className="h-2 bg-gray-200 rounded w-full mb-1"></div>
                    <div className="h-2 bg-gray-200 rounded w-5/6 mx-auto"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Requirements() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What We Request</h2>
          <p className="text-lg sm:text-xl text-gray-600">Simple requirements to get your profile published.</p>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg shadow-gray-200/50 border border-gray-100 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <FileText className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Complete the Google Form</h3>
            <p className="text-gray-600 text-lg">
              Please fill out the provided Google Form below with your professional details and short article.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg shadow-gray-200/50 border border-gray-100 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300">
            <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mb-6">
              <ImageIcon className="w-10 h-10 text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Photo</h3>
            <p className="text-gray-600 text-lg">
              A high-resolution headshot to accompany your article and profile in the publication.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FormSection() {
  return (
    <section id="apply" className="py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-gray-100 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 flex flex-col items-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-purple-600 text-white font-bold text-sm sm:text-base mb-6 shadow-xl shadow-primary/30 border border-white/20">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
            </span>
            Application Form Open
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Submit Your Details</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-8 bg-white px-8 py-4 rounded-2xl shadow-sm border border-gray-100">
            Fill out the secure form below to confirm your participation in the editorial feature.
          </p>
          <div className="animate-bounce bg-white p-4 rounded-full shadow-md border border-gray-100 text-primary">
            <ArrowRight className="w-6 h-6 transform rotate-90" />
          </div>
        </div>
        
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden p-8 sm:p-12 text-center relative">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-accent to-secondary"></div>
          <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <FileText className="w-12 h-12 text-primary" />
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to get featured?</h3>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Click the button below to open the secure Google Form. You will be able to submit your details, article, and professional photo.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfSrDUGqL_TvQs5Bwm4THWAk6ntK3YREtyCnosH0P9RI93YLA/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-purple-700 text-white px-10 py-5 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all text-xl font-bold w-full sm:w-auto"
          >
            Open Participation Form
            <ArrowRight className="ml-3 w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 pb-24 sm:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
              <div className="bg-white px-3 py-1.5 rounded-lg">
                <img src="https://i.ibb.co/MkJdk0jn/Screenshot-2026-04-03-161832.png" alt="Ipca Logo" className="h-8 object-contain" />
              </div>
              <div className="bg-white px-3 py-1.5 rounded-lg">
                <img src="https://i.ibb.co/ynb7g3XR/Screenshot-2026-04-03-161926.png" alt="Zerodol Logo" className="h-8 object-contain" />
              </div>
            </div>
            <p className="text-gray-400 max-w-sm mx-auto md:mx-0 leading-relaxed">
              Empowering patients and healthcare professionals through education and awareness.
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4 text-gray-300">Contact Us</h4>
            <a 
              href="mailto:worldarthritis@ipca.com" 
              className="inline-flex items-center text-lg sm:text-xl font-medium text-secondary hover:text-white transition-colors"
            >
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 mr-3" />
              worldarthritis@ipca.com
            </a>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm text-center md:text-left">
          <p>&copy; {new Date().getFullYear()} Ipca Laboratories Ltd. All rights reserved.</p>
          <p>National Arthritis Awareness Month Initiative</p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 selection:bg-secondary/30 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <Trust />
        <About />
        <Benefits />
        <EditorialPreview />
        <Requirements />
        <FormSection />
      </main>
      <Footer />
      
      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-md border-t border-gray-200 sm:hidden z-50">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfSrDUGqL_TvQs5Bwm4THWAk6ntK3YREtyCnosH0P9RI93YLA/viewform?usp=header"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-full bg-purple-700 text-white px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition font-bold"
        >
          Participate Now
        </a>
      </div>
    </div>
  );
}
