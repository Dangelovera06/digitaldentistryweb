
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight, Award, Clock, Users, Zap, Phone, Star, Printer, Palette, Shield,
  Layers, Target, Cpu, CheckCircle, Crown, Smile, Grid, Eye, Send, AlertCircle, MapPin,
  Mail, Sparkles
} from
"lucide-react";

export default function Home() {
  const darkBg = '#000000';
  const neumorphicExtruded = {
    borderRadius: '1.5rem',
    background: darkBg,
    boxShadow: '12px 12px 24px #000000, -12px -12px 24px #353535'
  };

  const neumorphicPressed = {
    borderRadius: '1.5rem',
    background: darkBg,
    boxShadow: 'inset 8px 8px 16px #000000, inset -8px -8px 16px #353535'
  };

  const glassEffect = {
    borderRadius: '1rem',
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
  };

  const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [currentHeroImage, setCurrentHeroImage] = useState(0);

  const heroImages = [
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/0216df545_ChatGPTImageAug29202511_51_04AM.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/18b5a9d0d_Aug29202511_36_48AM.png"
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentHeroImage((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 4000); // Change image every 4 seconds
    return () => clearTimeout(timer);
  }, [currentHeroImage, heroImages.length]);

  const features = [
  { icon: Award, title: "PRECISION CRAFTSMANSHIP", description: "State-of-the-art 3D printing for flawless restorations." },
  { icon: Clock, title: "RAPID TURNAROUND", description: "Fast production times without compromising quality." },
  { icon: Users, title: "PRACTICE PARTNERSHIP", description: "Collaborative approach with dental practices across Florida." },
  { icon: Zap, title: "CUTTING-EDGE TECH", description: "Latest digital design software and printing equipment." }];


  const services = [
      { icon: Printer, title: "3D COSMETIC PRINTING", description: "Advanced 3D printing for crowns, veneers, and bridges with industry-leading precision.", features: ["High-resolution printing", "Biocompatible materials", "Perfect color matching"] },
      { icon: Palette, title: "MOBILE DIGITAL DESIGN", description: "On-site CAD services from in-office scan to final restoration design.", features: ["In-office 3D scanning", "Custom design workflow", "Immediate design approval"] },
      { icon: Shield, title: "CROWN & BRIDGE WORK", description: "Full-coverage restorations delivered with optimal fit and rapid turnaround times.", features: ["Single crown fabrication", "Multi-unit bridges", "Implant-supported crowns"] },
      { icon: Smile, title: "ADVANCED HYBRIDS", description: "Complete hybrid arch solutions designed for exceptional function and aesthetics.", features: ["Full arch conversions", "Immediate load provisionals", "Expert on-site scanning"] },
  ];


  const galleryItems = [
  { id: 1, title: "FULL ARCH RESTORATION", category: "crowns", image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/b45a4cae6_Firefly20250828112625.png" },
  { id: 2, title: "ANTERIOR CROWNS", category: "crowns", image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/eff33ebee_ChatGPTImageAug28202512_04_26PM.png" },
  { id: 3, title: "BRIDGE WORK", category: "bridges", image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/b4ee9dff1_ChatGPTImageAug28202511_55_19AM.png" },
  { id: 4, title: "VENEER SET", category: "veneers", image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/c3cf92411_ChatGPTImageAug28202511_58_49AM.png" },
  { id: 5, title: "IMPLANT CROWNS", category: "implants", image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/640881b03_JPeF1ImplantCADCAMProvisional3DPrintedCrownBridge.jpg" },
  { id: 6, title: "DIGITAL DESIGN", category: "orthodontics", image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/015acad82_ai-edited-image-1755789363033.jpg" }];

  const speedServices = [
    {
      title: "MOBILE SCANNING SERVICE",
      description: "We bring the digital scanning and design process directly to your practice.",
      icon: Users,
      features: ["Eliminates messy impressions", "On-demand technician scheduling", "Reduces shipping logistics"]
    },
    {
      title: "IN-OFFICE SCAN & DESIGN",
      description: "Our technicians come to your practice to scan and collaborate on the design.",
      icon: Target,
      features: ["Expert scanning assistance", "Real-time design collaboration", "Ensures perfect digital models"]
    },
    {
      title: "RAPID TURNAROUND",
      description: "Our streamlined digital workflow ensures fast delivery from our central lab.",
      icon: Zap,
      features: ["Increased patient satisfaction", "Fewer appointments", "Maximized practice efficiency"]
    }];


  const contactServices = [
      "3D Cosmetic Printing", "Mobile Digital Design", "Crown & Bridge Work",
      "Advanced Hybrids", "General Consultation"
  ];


  const contactInfo = [
  { icon: Mail, title: "EMAIL US", details: "Info@digitaldentistrylabusa.com" },
  { icon: MapPin, title: "VISIT US", details: "Port St. Lucie, FL" },
  { icon: Clock, title: "TURNAROUND", details: "24-48 Hours Rush" }];


  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      // Simple form submission - you can replace this with your preferred email service
      console.log('Form submitted:', formData);
      // For now, we'll simulate a successful submission
      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-black">
            {/* Hero Section */}
            <section id="home" className="relative overflow-hidden">
                <div className="container mx-auto px-6 py-20">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div style={{ ...glassEffect, borderRadius: '2rem' }} className="inline-block text-white px-6 py-2 font-bold text-sm mb-6">
                                TREASURE COAST'S PREMIER DIGITAL LAB
                            </div>
                            <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-tight">
                                Built for Dentists. <br /> <span className="text-gray-300">Trusted by Patients.</span>
                            </h1>
                            <p className="text-xl font-semibold text-gray-400 max-w-lg">
                                Our state-of-the-art lab in Port St. Lucie delivers exceptional cosmetic restorations with cutting-edge 3D printing technology for dental practices.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 pt-8">
                                <Button
                  onClick={() => document.querySelector('#services').scrollIntoView({ behavior: 'smooth' })}
                  style={{ ...neumorphicExtruded, background: darkBg }}
                  className="font-bold text-gray-300 text-lg px-8 py-6 border-none hover:text-white active:shadow-[inset_8px_8px_16px_#000000,_inset_-8px_-8px_16px_#353535] transition-all duration-200">

                                    <span>VIEW SERVICES</span>
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Button>
                                <Button
                  onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
                  style={{ ...neumorphicExtruded, background: darkBg }}
                  className="font-bold text-gray-300 text-lg px-8 py-6 border-none hover:text-white active:shadow-[inset_8px_8px_16px_#000000,_inset_-8px_-8px_16px_#353535] transition-all duration-200">

                                    <Send className="w-5 h-5 mr-2" />
                                    <span>GET QUOTE</span>
                                </Button>
                            </div>
                        </div>

                        <div className="mt-12 lg:mt-0">
                            <div className="relative h-96" style={glassEffect}>
                                {heroImages.map((src, index) => (
                                    <img
                                      key={src}
                                      src={src}
                                      alt={`3D Printed Dental Restoration ${index + 1}`}
                                      className={`absolute inset-0 w-full h-full object-cover rounded-2xl transition-opacity duration-1000 ease-in-out ${index === currentHeroImage ? 'opacity-100' : 'opacity-0'}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mobile Lab Section */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div style={{ ...glassEffect, borderRadius: '2rem' }} className="inline-block text-white px-6 py-2 font-bold text-sm mb-6">
                                THE FUTURE IS DIGITAL DENTISTRY
                            </div>
                            <h2 className="text-5xl lg:text-7xl font-extrabold text-white mb-8">
                                The Lab That Comes to You.
                            </h2>
                            <p className="text-xl font-semibold text-gray-400 max-w-2xl">
                                We've revolutionized the dental lab model by bringing the first step of the digital workflow directly to your practice. Our mobile service features expert technicians performing on-site scanning and design consultation, ensuring a perfect digital impression. This seamless process eliminates logistical headaches and allows for rapid turnaround times from our state-of-the-art lab.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 grid-rows-2 gap-4 h-96">
                            <div className="col-span-1 row-span-1" style={glassEffect}>
                                <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/b8bb3d20f_intaoral-scan.png" alt="Intraoral Scanner" className="w-full h-full object-cover rounded-2xl"/>
                            </div>
                             <div className="col-span-1 row-span-2" style={glassEffect}>
                                <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/735f56f62_ChatGPTImageAug29202506_05_04PM.png" alt="Dental Lab Equipment" className="w-full h-full object-cover rounded-2xl"/>
                            </div>
                            <div className="col-span-1 row-span-1" style={glassEffect}>
                               <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/03bf41153_4c02d7af-bd97-402f-88e2-e00c03d744fb.png" alt="3D Dental Printer" className="w-full h-full object-cover rounded-2xl"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Speed & Turnaround Section */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <div style={{ ...glassEffect, borderRadius: '2rem' }} className="inline-block text-white px-6 py-2 font-bold text-sm mb-6">
                            THE FUTURE IS DIGITAL DENTISTRY
                        </div>
                        <h2 className="text-5xl lg:text-7xl font-extrabold text-white mb-8">
                            Unmatched <span className="text-gray-300">Convenience</span>
                        </h2>
                        <p className="text-xl font-semibold text-gray-400 max-w-3xl mx-auto">
                            Our mobile service brings the lab to your doorstep, serving from Vero Beach to West Palm Beach. We handle everything from scanning to fabrication right at your practice, enabling same-day treatment for your patients.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {speedServices.map((service, index) =>
            <div key={index} style={glassEffect} className="p-8 text-center transition-all duration-300 hover:bg-opacity-20">
                                <service.icon className="w-12 h-12 mx-auto mb-6 text-white" />
                                <h3 className="text-xl font-bold text-gray-200 mb-4">{service.title}</h3>
                                <p className="font-semibold text-gray-400 mb-6">{service.description}</p>
                                <ul className="space-y-2">
                                    {service.features.map((feature, idx) =>
                <li key={idx} className="flex items-center justify-center space-x-2">
                                            <CheckCircle className="w-4 h-4 text-white flex-shrink-0" />
                                            <span className="font-semibold text-sm text-gray-400">{feature}</span>
                                        </li>
                )}
                                </ul>
                            </div>
            )}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-6xl font-extrabold text-white mb-6">
                            Why Partner With Our <span className="text-gray-300">Lab?</span>
                        </h2>
                        <p className="text-xl font-semibold text-gray-400 max-w-2xl mx-auto">
                            Combining advanced technology with expert craftsmanship to deliver exceptional dental restorations for your practice.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) =>
            <div key={index} style={glassEffect} className="p-8 text-center transition-all duration-300 hover:bg-opacity-20">
                                <feature.icon className="w-12 h-12 mx-auto mb-6 text-white" />
                                <h3 className="text-lg font-bold text-gray-200 mb-4">{feature.title}</h3>
                                <p className="font-semibold text-gray-400">{feature.description}</p>
                            </div>
            )}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <div style={{ ...glassEffect, borderRadius: '2rem' }} className="inline-block text-white px-6 py-2 font-bold text-sm mb-6">
                            OUR LAB CAPABILITIES
                        </div>
                        <h2 className="text-5xl lg:text-7xl font-extrabold text-white mb-8">
                            Centralized <span className="text-gray-300">Digital</span> Solutions
                        </h2>
                        <p className="text-xl font-semibold text-gray-400 max-w-3xl mx-auto">
                            We combine cutting-edge mobile scanning with expert craftsmanship at our central facility to deliver exceptional restorations to your practice.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) =>
            <div key={index} style={glassEffect} className="p-8 flex flex-col">
                                <div className="flex-grow">
                                    <div className="flex items-center space-x-4 mb-4">
                                        <service.icon className="w-8 h-8 text-white flex-shrink-0" />
                                        <h3 className="font-bold text-lg text-gray-200">{service.title}</h3>
                                    </div>
                                    <p className="font-semibold text-gray-400 mb-6">{service.description}</p>
                                </div>
                                <ul className="space-y-2">
                                    {service.features.map((feature, idx) =>
                <li key={idx} className="flex items-center space-x-2">
                                            <CheckCircle className="w-4 h-4 text-white flex-shrink-0" />
                                            <span className="font-semibold text-sm text-gray-400">{feature}</span>
                                        </li>
                )}
                                </ul>
                            </div>
            )}
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section id="gallery" className="py-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <div style={{ ...glassEffect, borderRadius: '2rem' }} className="inline-block text-white px-6 py-2 font-bold text-sm mb-6">
                            SHOWCASE OF EXCELLENCE
                        </div>
                        <h2 className="text-5xl lg:text-7xl font-extrabold text-white mb-8">
                            Our <span className="text-gray-300">Mastery</span>
                        </h2>
                        <p className="text-xl font-semibold text-gray-400 max-w-3xl mx-auto">
                            Explore our collection of precision-crafted dental restorations created for practices across Florida.
                        </p>
                    </div>

                    {/* Portfolio Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {galleryItems.map((item) =>
            <div key={item.id} style={glassEffect}>
                                <div className="relative h-64" style={{ ...neumorphicPressed, borderBottomLeftRadius: 0, borderBottomRightRadius: 0, background: darkBg }}>
                                    {item.image ?
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover" /> :


                <div className="absolute inset-0 flex items-center justify-center text-center p-4">
                                            <div className="text-center">
                                                <Eye className="w-12 h-12 mx-auto mb-4 text-white" />
                                                <p className="font-bold text-sm text-gray-200">CASE IMAGE</p>
                                            </div>
                                        </div>
                }
                                </div>
                                <div className="p-6">
                                    <h3 className="text-lg font-bold text-gray-200 mb-2">{item.title}</h3>
                                </div>
                            </div>
            )}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <div style={{ ...glassEffect, borderRadius: '2rem' }} className="inline-block text-white px-6 py-2 font-bold text-sm mb-6">
                            PARTNER WITH US TODAY
                        </div>
                        <h2 className="text-5xl lg:text-7xl font-extrabold text-white mb-8">
                            Start Your <span className="text-gray-300">Partnership</span>
                        </h2>
                        <p className="text-xl font-semibold text-gray-400 max-w-3xl mx-auto">
                            Ready to enhance your practice with precision digital dental restoration services from Digital Dentistry Lab and Mastery? Contact us for a consultation.
                        </p>
                    </div>

                    {/* Contact Info */}
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {contactInfo.map((info, index) =>
            <div key={index} style={glassEffect} className="text-center px-5 py-8 flex flex-col">
                                <div className="flex-grow flex flex-col items-center justify-center">
                                    <info.icon className="w-12 h-12 mx-auto mb-6 text-white" />
                                    <h3 className="text-lg font-bold text-gray-200 mb-2">{info.title}</h3>
                                    <p className="text-lg lg:text-xl font-bold text-gray-300 break-words">{info.details}</p>
                                </div>
                            </div>
            )}
                    </div>

                    {/* Contact Form */}
                    <div style={glassEffect} className="p-8 md:p-12">
                        <h3 className="text-3xl font-extrabold text-white mb-8 text-center">
                            Request a <span className="text-gray-300">Partnership Consultation</span>
                        </h3>

                        {submitStatus === "success" &&
            <div style={glassEffect} className="p-4 mb-8 flex items-center space-x-3">
                                <CheckCircle className="w-6 h-6 text-green-400" />
                                <div>
                                    <p className="font-bold text-green-300">Message sent successfully!</p>
                                    <p className="font-semibold text-green-400 text-sm">We'll be in touch shortly to discuss your partnership.</p>
                                </div>
                            </div>
            }
                        {submitStatus === "error" &&
            <div style={glassEffect} className="p-4 mb-8 flex items-center space-x-3">
                                <AlertCircle className="w-6 h-6 text-red-400" />
                                <div>
                                    <p className="font-bold text-red-300">Error sending message.</p>
                                    <p className="font-semibold text-red-400 text-sm">Please try again or call us directly.</p>
                                </div>
                            </div>
            }

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  required
                  placeholder="Practice Name / Contact Name *"
                  style={glassEffect}
                  className="w-full p-4 font-semibold text-white bg-transparent border-none outline-none placeholder:text-gray-400" />

                                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required
                  placeholder="Email Address *"
                  style={glassEffect}
                  className="w-full p-4 font-semibold text-white bg-transparent border-none outline-none placeholder:text-gray-400" />

                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="Phone Number"
                  style={glassEffect}
                  className="w-full p-4 font-semibold text-white bg-transparent border-none outline-none placeholder:text-gray-400" />

                                <select
                  value={formData.service}
                  onChange={(e) => handleInputChange('service', e.target.value)}
                  required
                  style={{ ...glassEffect, appearance: 'none' }}
                  className="w-full p-4 font-semibold text-white bg-transparent border-none outline-none">

                                    <option value="" className="bg-black text-gray-500">Select service of interest *</option>
                                    {contactServices.map((s) => <option key={s} value={s} className="bg-black text-white">{s}</option>)}
                                </select>
                            </div>
                            <textarea
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                placeholder="Tell us about your practice and lab service needs..."
                style={glassEffect}
                className="w-full p-4 font-semibold text-white bg-transparent border-none outline-none h-32 placeholder:text-gray-400"></textarea>

                            <div className="text-center">
                                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{ ...neumorphicExtruded, background: darkBg }}
                  className="inline-flex items-center space-x-2 font-bold text-gray-300 text-lg px-8 py-4 border-none hover:text-white active:shadow-[inset_8px_8px_16px_#000000,_inset_-8px_-8px_16px_#353535] transition-all duration-200">

                                    <Send className="w-5 h-5" />
                                    <span>{isSubmitting ? "SENDING..." : "START PARTNERSHIP"}</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-20">
                <div className="container mx-auto px-6 text-center">
                    <div style={glassEffect} className="p-12 md:p-16">
                        <Sparkles className="w-12 h-12 mx-auto mb-6 text-gray-300" />
                        <h2 className="text-4xl lg:text-6xl font-extrabold text-white mb-6">
                            Ready to Master Your <span className="text-gray-300">Practice?</span>
                        </h2>
                        <p className="text-xl font-semibold text-gray-400 mb-8 max-w-3xl mx-auto">
                            Partner with Digital Dentistry Lab and Mastery today and discover how our advanced lab services can elevate your patient care and practice efficiency.
                        </p>
                        <Button
              onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
              style={{ ...neumorphicExtruded, background: darkBg }}
              className="font-bold text-gray-300 text-lg px-8 py-6 border-none hover:text-white active:shadow-[inset_8px_8px_16px_#000000,_inset_-8px_-8px_16px_#353535] transition-all duration-200">

                            BECOME A PARTNER
                        </Button>
                    </div>
                </div>
            </section>
        </div>);

}
