

import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Mail, MapPin, Menu } from "lucide-react"; // Changed Phone to Mail
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const navigationItems = [
  { title: "Home", href: "#home" },
  { title: "Services", href: "#services" },
  { title: "Gallery", href: "#gallery" },
  { title: "Contact", href: "#contact" },
];

export default function Layout({ children, currentPageName }) {
  const darkBg = '#000000'; // Black
  const neumorphicExtruded = {
    borderRadius: '1rem',
    background: darkBg,
    boxShadow: '8px 8px 16px #000000, -8px -8px 16px #353535', // Updated shadow color
  };
  
  const neumorphicPressed = {
    borderRadius: '1rem',
    background: darkBg,
    boxShadow: 'inset 8px 8px 16px #000000, inset -8px -8px 16px #353535', // Updated shadow color
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const NavLinks = ({ mobile = false, onClose = () => {} }) => (
    <div className={`flex ${mobile ? 'flex-col space-y-6' : 'space-x-2'} items-center`}>
      {navigationItems.map((item) => (
        <button
          key={item.title}
          onClick={() => {
            scrollToSection(item.href);
            onClose();
          }}
          className="font-semibold text-base transition-all duration-300 rounded-2xl px-4 py-2 text-gray-300 hover:text-white"
        >
          {item.title}
        </button>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <button onClick={() => scrollToSection('#home')} className="flex items-center space-x-4">
              <img 
                src="/ddlm-logo.png?v=1"
                alt="Digital Dentistry Lab and Mastery - DDLM Logo"
                className="h-12 w-auto"
                onLoad={() => console.log('DDLM logo loaded successfully!')}
                onError={(e) => {
                  console.log('DDLM logo failed to load, using fallback');
                  // Fallback to current logo if DDLM logo not found
                  e.target.src = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/ad7cf4303_lgogo.png";
                }}
              />
              <span className="font-bold text-lg hidden sm:inline">Digital Dentistry Lab and Mastery</span>
            </button>

            <div className="flex items-center space-x-6">
              {/* Desktop Navigation */}
              <nav className="hidden lg:block" style={neumorphicExtruded}>
                <div className="p-1">
                  <NavLinks />
                </div>
              </nav>

              {/* Desktop Get Started Button - More Prominent */}
              <Button 
                onClick={() => scrollToSection('#contact')}
                style={neumorphicExtruded} 
                className="hidden md:inline-flex font-bold text-white border-none hover:text-gray-300 active:shadow-[inset_8px_8px_16px_#000000,_inset_-8px_-8px_16px_#353535] transition-all duration-200 px-8 py-4 text-lg" // Updated active shadow
              >
                GET STARTED
              </Button>

              {/* Mobile Get Started Button - Always Visible */}
              <Button 
                onClick={() => scrollToSection('#contact')}
                style={neumorphicExtruded} 
                className="md:hidden inline-flex font-bold text-white border-none hover:text-gray-300 active:shadow-[inset_8px_8px_16px_#000000,_inset_-8px_-8px_16px_#353535] transition-all duration-200 px-4 py-3" // Updated active shadow
              >
                START
              </Button>

              {/* Mobile Menu */}
              <Sheet>
                <SheetTrigger asChild className="lg:hidden">
                  <Button
                    variant="outline"
                    size="icon"
                    style={neumorphicExtruded}
                    className="border-none"
                  >
                    <Menu className="h-6 w-6 text-white" />
                  </Button>
                </SheetTrigger>
                <SheetContent className="bg-black border-gray-800">
                  <div className="flex flex-col space-y-8 mt-8">
                    <div className="mb-4 flex items-center space-x-3">
                      <img 
                        src="/ddlm-logo.png?v=1"
                        alt="Digital Dentistry Lab and Mastery - DDLM Logo"
                        className="h-10 w-auto flex-shrink-0"
                        onError={(e) => {
                          // Fallback to current logo if DDLM logo not found
                          e.target.src = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/ad7cf4303_lgogo.png";
                        }}
                      />
                       <span className="font-bold text-base">Digital Dentistry Lab and Mastery</span>
                    </div>
                    
                    <NavLinks mobile onClose={() => {}} />
                    
                    {/* Mobile contact info */}
                    <div className="pt-8 space-y-4">
                      <div style={{...neumorphicExtruded, background: darkBg}} className="p-4 flex items-center space-x-2 text-gray-300 font-semibold">
                        <Mail className="w-5 h-5 text-white" /> {/* Changed to Mail icon */}
                        <span>Info@digitaldentistrylabusa.com</span> {/* Changed to email */}
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black mt-16 border-t border-gray-800">
        <div className="container mx-auto px-6 py-12">
            <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
                <div className="md:col-span-1">
                    <div className="mb-4 flex items-center space-x-3 justify-center md:justify-start">
                      <img 
                        src="/ddlm-logo.png?v=1"
                        alt="Digital Dentistry Lab and Mastery - DDLM Logo"
                        className="h-10 w-auto"
                        onError={(e) => {
                          // Fallback to current logo if DDLM logo not found
                          e.target.src = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/ad7cf4303_lgogo.png";
                        }}
                      />
                       <span className="font-bold text-lg">Digital Dentistry Lab and Mastery</span>
                    </div>
                    <p className="font-semibold mb-4 text-gray-400">
                        State-of-the-art digital dental laboratory serving dental practices with precision cosmetic printing and design services.
                    </p>
                </div>
                
                <div className="md:col-span-1">
                    <h4 className="text-lg font-bold mb-4 text-white">SERVICES</h4>
                    <ul className="space-y-2 font-semibold text-gray-400">
                        <li>3D Cosmetic Printing</li>
                        <li>Digital Design</li>
                        <li>Crown & Bridge Work</li>
                        <li>Same-Day Hybrids</li>
                    </ul>
                </div>

                <div className="md:col-span-1">
                    <h4 className="text-lg font-bold mb-4 text-white">CONTACT</h4>
                     <div className="space-y-2 font-semibold text-gray-400">
                        <div className="flex items-center justify-center md:justify-start space-x-2">
                            <Mail className="w-4 h-4 text-white" /> {/* Changed to Mail icon */}
                            <span>Info@digitaldentistrylabusa.com</span> {/* Changed to email */}
                        </div>
                        <div className="flex items-center justify-center md:justify-start space-x-2">
                            <MapPin className="w-4 h-4 text-white" />
                            <span>Port St. Lucie, Florida</span>
                        </div>
                    </div>
                </div>
            </div>
          
            <div className="mt-12 pt-8 text-center border-t border-gray-800">
                <p className="font-bold text-gray-500">&copy; 2025 Digital Dentistry Lab and Mastery. All rights reserved.</p>
            </div>
        </div>
      </footer>
    </div>
  );
}

