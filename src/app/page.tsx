import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Pricing } from "@/components/sections/Pricing";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <Navbar />

      {/* Announcement Banner */}
      <div className="bg-purple-800 text-white text-center py-3 px-4">
        <p className="flex items-center justify-center">
          <span className="mr-2">✨</span>
          Introducing Marble UI - 50+ blocks and templates to build beautiful landing pages in minutes
          <span className="ml-2">→</span>
        </p>
      </div>

      {/* Hero Section */}
      <Hero />

      {/* Pricing Section */}
      <Pricing />
      
      {/* Showcase Section */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Showcase</h2>
          <p className="text-gray-400 mb-12">Companies choose Marble UI to build their landing pages.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 h-64 rounded-lg"></div>
            <div className="bg-gray-800 h-64 rounded-lg"></div>
            <div className="bg-gray-800 h-64 rounded-lg"></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
