// src/app/page.tsx
'use client';
import React, { useState } from 'react';
import { 
  BookOpen, MessageCircle, Heart, Shield, Users, 
  MapPin, Mail, Phone, Clock, CheckCircle2, Award, 
  Sparkles, Camera, ClipboardCheck, Menu, X, ArrowRight,
  GraduationCap, Info, AlertCircle
} from 'lucide-react';

export default function RealWorldSchoolWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ parentName: '', studentName: '', className: 'KG', phone: '', message: '' });

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you! Your admission inquiry for ${formData.studentName} has been received. Our administration team will contact you shortly.`);
    setFormData({ parentName: '', studentName: '', className: 'KG', phone: '', message: '' });
  };

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Academics", href: "#academics" },
    { label: "Gallery", href: "#gallery" },
    { label: "Admissions", href: "#admissions" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <div id="home" className="min-h-screen bg-white font-sans text-slate-800 scroll-smooth selection:bg-[#0A1F44] selection:text-white">
      
      {/* --- UTILITY TOP BAR --- */}
      <div className="bg-[#0A1F44] text-white py-2 px-4 text-xs font-medium border-b-2 border-[#FFC107]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 hidden sm:flex">
              <Mail size={12} className="text-[#FFC107]" /> mgmvastanvieps@gmail.com
            </span>
            <span className="flex items-center gap-1.5 bg-[#D32F2F] px-2 py-0.5 rounded text-white font-bold">
              Admission Open 2026
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span dir="rtl" className="font-serif font-bold text-[#FFC107] text-[13px]">
              ہمارا مقصد معیاری تعلیم
            </span>
            <span className="hidden md:inline-block text-slate-300">
              Classes: K.G. & 1 to 8
            </span>
          </div>
        </div>
      </div>

      {/* --- MAIN NAVIGATION HEADER --- */}
      <header className="sticky top-0 bg-white shadow-sm border-b border-slate-100 z-50">
        <div className="max-w-7xl mx-auto px-4 h-20 flex justify-between items-center">
          
          {/* Logo & Branding */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#0A1F44] rounded flex items-center justify-center text-[#FFC107] font-black text-xl shadow-sm">
              MGM
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="font-bold text-lg sm:text-xl text-[#0A1F44] leading-none tracking-tight">
                MGM VASTANVI
              </h1>
              <span className="text-[10px] sm:text-[11px] font-semibold text-[#2E7D32] uppercase tracking-wide mt-1">
                Umar Bin Khattab Welfare Trust Kunjkheda
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm font-semibold text-slate-600 hover:text-[#0A1F44] transition-colors">
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a href="#admissions" className="hidden sm:flex items-center gap-2 bg-[#2E7D32] hover:bg-[#1B5E20] text-white px-5 py-2.5 rounded text-sm font-semibold transition-colors shadow-sm">
              Enroll Now <ArrowRight size={16} />
            </a>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-600 hover:text-[#0A1F44] transition-colors"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-200 shadow-lg py-4 px-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 text-base font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#0A1F44] rounded-md"
              >
                {link.label}
              </a>
            ))}
            <a 
              href="#admissions" 
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 p-3 text-center bg-[#2E7D32] text-white rounded-md font-semibold"
            >
              Enroll Now
            </a>
          </div>
        )}
      </header>

      {/* --- HERO SECTION --- */}
      <section className="relative bg-[#0A1F44] border-b-8 border-[#FFC107]">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8)_0%,transparent_100%)]"></div>
        <div className="max-w-7xl mx-auto px-4 py-20 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-block bg-[#FFC107]/20 border border-[#FFC107]/50 text-[#FFC107] px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase">
              Knowledge Today, Leaders Tomorrow
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Nurturing Minds, <br />
              <span className="text-[#FFC107]">Building Futures.</span>
            </h2>
            
            <p className="text-base sm:text-lg text-slate-300 max-w-lg mx-auto lg:mx-0">
              Providing a high-quality, concept-based education in a secure and disciplined environment. Give your child the foundation they deserve.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <a href="#admissions" className="px-8 py-3.5 bg-[#FFC107] hover:bg-yellow-500 text-[#0A1F44] font-bold rounded shadow-md transition-colors text-center">
                Start Admission Process
              </a>
              <a href="#academics" className="px-8 py-3.5 bg-transparent border-2 border-white hover:bg-white hover:text-[#0A1F44] text-white font-bold rounded transition-colors text-center">
                Explore Academics
              </a>
            </div>
          </div>

          <div className="hidden lg:grid grid-cols-2 gap-4">
            {/* Image 1: Campus Life */}
            <div className="h-64 rounded-lg shadow-lg relative overflow-hidden group bg-slate-800">
               <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop" alt="Campus Life" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
               <div className="absolute bottom-0 left-0 w-full bg-[#0A1F44]/80 p-3 text-white text-xs font-semibold backdrop-blur-sm">Campus Life</div>
            </div>
            <div className="grid grid-rows-2 gap-4">
              {/* Image 2: Academics */}
              <div className="rounded-lg shadow-lg relative overflow-hidden group bg-slate-800">
                 <img src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&auto=format&fit=crop" alt="Academics" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                 <div className="absolute bottom-0 left-0 w-full bg-[#2E7D32]/80 p-2 text-white text-[10px] font-semibold backdrop-blur-sm">Academics</div>
              </div>
              {/* Image 3: Activities */}
              <div className="rounded-lg shadow-lg relative overflow-hidden group bg-slate-800">
                 <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop" alt="Activities" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                 <div className="absolute bottom-0 left-0 w-full bg-[#D32F2F]/80 p-2 text-white text-[10px] font-semibold backdrop-blur-sm">Activities</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- ABOUT US / WHY CHOOSE US COMBINED --- */}
      <section id="about" className="py-20 px-4 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-[#2E7D32] font-bold text-sm uppercase tracking-wider">
              <Info size={18} /> About Our Institution
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1F44] leading-tight">
              A Legacy of Quality Education & Strong Values
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Managed by the esteemed <strong>Umar Bin Khattab Welfare Trust Kunjkheda</strong>, MGM Vastanvi English School is dedicated to holistic child development. We believe in concept-based learning that goes beyond textbooks, ensuring every student is prepared for real-world challenges.
            </p>
            
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Experienced Faculty", "Smart Classrooms", "Regular Assessments", 
                "All-Round Development", "Value-Based Education", "Leadership Skills"
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-[#2E7D32] shrink-0" />
                  <span className="text-slate-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 space-y-8">
            <div>
              <h3 className="text-xl font-bold text-[#0A1F44] mb-2">Our Mission</h3>
              <div className="w-12 h-1 bg-[#FFC107] mb-4"></div>
              <p className="text-slate-600">To provide an environment that fosters intellectual, physical, and moral growth, shaping today's learners into tomorrow's ethical leaders.</p>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center border-t border-slate-100 pt-8">
              <div>
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-3"><BookOpen size={20} /></div>
                <h4 className="font-semibold text-slate-800 text-sm">Quality</h4>
              </div>
              <div>
                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3"><Heart size={20} /></div>
                <h4 className="font-semibold text-slate-800 text-sm">Values</h4>
              </div>
              <div>
                <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-3"><Award size={20} /></div>
                <h4 className="font-semibold text-slate-800 text-sm">Future</h4>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- KEY FOCUS AREAS (ACADEMICS) --- */}
      <section id="academics" className="py-20 px-4 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1F44]">Our 8 Key Focus Areas</h2>
            <div className="w-16 h-1 bg-[#FFC107] mx-auto"></div>
            <p className="text-slate-600">We maintain a comprehensive approach to education, ensuring that students excel academically, socially, and personally.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Quality Education", desc: "Concept-based learning ensuring true understanding.", icon: <BookOpen /> },
              { title: "Speaking & Writing", desc: "Dedicated focus on English communication skills.", icon: <MessageCircle /> },
              { title: "Personal Attention", desc: "Individual care and tracking for every child.", icon: <Heart /> },
              { title: "Cleanliness", desc: "Maintaining a safe, hygienic, and healthy environment.", icon: <Sparkles /> },
              { title: "Discipline & Values", desc: "Instilling good manners and strong moral ethics.", icon: <Award /> },
              { title: "Activity Learning", desc: "Projects and practical exposure for hands-on skills.", icon: <ClipboardCheck /> },
              { title: "Safe Environment", desc: "Secure campus parameters for peace of mind.", icon: <Shield /> },
              { title: "Parent Partnership", desc: "Active collaboration between teachers and home.", icon: <Users /> }
            ].map((area, idx) => (
              <div key={idx} className="p-6 bg-slate-50 border border-slate-100 rounded-lg hover:shadow-md transition-shadow group">
                <div className="w-12 h-12 bg-white text-[#0A1F44] border border-slate-200 rounded flex items-center justify-center mb-4 group-hover:bg-[#0A1F44] group-hover:text-[#FFC107] transition-colors">
                  {area.icon}
                </div>
                <h3 className="font-bold text-[#0A1F44] text-lg mb-2">{area.title}</h3>
                <p className="text-sm text-slate-600">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- GALLERY SECTION --- */}
      <section id="gallery" className="py-20 px-4 bg-slate-50 border-y border-slate-200 scroll-mt-20">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="flex flex-col md:flex-row justify-between items-end gap-4 border-b border-slate-200 pb-4">
            <div>
              <h2 className="text-3xl font-bold text-[#0A1F44]">Campus Gallery</h2>
              <p className="text-slate-600 mt-2">A glimpse into life at MGM Vastanvi.</p>
            </div>
            <a href="#contact" className="text-[#2E7D32] font-semibold hover:underline">Visit our campus &rarr;</a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Academics in Action", category: "Focus on Academics", imageSrc: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop" },
              { title: "Sports & Events", category: "Co-curricular Activities", imageSrc: "https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=800&auto=format&fit=crop" },
              { title: "Our Facilities", category: "Well Equipped Campus", imageSrc: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&auto=format&fit=crop" }
            ].map((img, i) => (
              <div key={i} className="bg-white rounded-lg overflow-hidden border border-slate-200 shadow-sm group">
                <div className="h-56 overflow-hidden relative bg-slate-800">
                  <img src={img.imageSrc} alt={img.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-4">
                  <span className="text-xs font-bold text-[#2E7D32] uppercase tracking-wider">{img.category}</span>
                  <h4 className="font-bold text-[#0A1F44] text-lg mt-1">{img.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ADMISSIONS SECTION --- */}
      <section id="admissions" className="py-20 px-4 bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto bg-slate-50 rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Admissions Info (Left) */}
            <div className="p-8 lg:p-12 bg-[#0A1F44] text-white space-y-8">
              <div>
                <span className="bg-[#D32F2F] text-white text-xs font-bold px-3 py-1 rounded uppercase tracking-wider">Admissions Open</span>
                <h2 className="text-3xl font-bold mt-4 mb-2">Join the MGM Family</h2>
                <p className="text-slate-300">We are currently accepting applications for K.G. and Classes 1 through 8. Secure your child's future today.</p>
              </div>

              <div className="bg-white/10 border border-white/20 p-5 rounded-lg flex gap-4">
                <AlertCircle className="text-[#FFC107] shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-[#FFC107]">Important Notice</h4>
                  <p className="text-sm text-slate-200 mt-1">Admissions interviews and processing will be conducted exclusively <strong>AFTER LUNCH</strong> hours. Please plan your visit accordingly.</p>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-sm font-semibold text-slate-300 uppercase tracking-wider">Contact Administration</p>
                <a href="https://wa.me/919209255313" target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 bg-[#2E7D32] hover:bg-[#1B5E20] rounded-lg transition-colors">
                  <span className="font-medium">Wasim Sir</span>
                  <span className="font-mono bg-black/20 px-2 py-1 rounded text-sm">920 925 5313</span>
                </a>
                <a href="https://wa.me/918805499982" target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 bg-[#2E7D32] hover:bg-[#1B5E20] rounded-lg transition-colors">
                  <span className="font-medium">Harun Mansuri Sir</span>
                  <span className="font-mono bg-black/20 px-2 py-1 rounded text-sm">880 549 9982</span>
                </a>
              </div>
            </div>

            {/* Application Form (Right) */}
            <div className="p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-[#0A1F44] mb-6">Online Inquiry Form</h3>
              <form onSubmit={handleInquirySubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-slate-700">Parent Name *</label>
                    <input required type="text" value={formData.parentName} onChange={e => setFormData({...formData, parentName: e.target.value})} className="w-full px-4 py-2.5 border border-slate-300 rounded-md focus:ring-2 focus:ring-[#0A1F44] focus:border-[#0A1F44] outline-none transition-shadow bg-white" placeholder="Full Name" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-slate-700">Student Name *</label>
                    <input required type="text" value={formData.studentName} onChange={e => setFormData({...formData, studentName: e.target.value})} className="w-full px-4 py-2.5 border border-slate-300 rounded-md focus:ring-2 focus:ring-[#0A1F44] focus:border-[#0A1F44] outline-none transition-shadow bg-white" placeholder="Full Name" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-slate-700">Class for Admission *</label>
                    <select value={formData.className} onChange={e => setFormData({...formData, className: e.target.value})} className="w-full px-4 py-2.5 border border-slate-300 rounded-md focus:ring-2 focus:ring-[#0A1F44] focus:border-[#0A1F44] outline-none transition-shadow bg-white">
                      <option value="KG">K.G. (Kindergarten)</option>
                      {Array.from({ length: 8 }, (_, i) => (
                        <option key={i+1} value={`Class ${i+1}`}>{`Class ${i+1}`}</option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-slate-700">Mobile Number *</label>
                    <input required type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-2.5 border border-slate-300 rounded-md focus:ring-2 focus:ring-[#0A1F44] focus:border-[#0A1F44] outline-none transition-shadow bg-white" placeholder="10-digit number" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-slate-700">Additional Remarks (Optional)</label>
                  <textarea rows={4} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} className="w-full px-4 py-2.5 border border-slate-300 rounded-md focus:ring-2 focus:ring-[#0A1F44] focus:border-[#0A1F44] outline-none transition-shadow resize-none bg-white" placeholder="Any specific questions or previous school details..." />
                </div>

                <button type="submit" className="w-full py-3.5 bg-[#FFC107] hover:bg-yellow-500 text-[#0A1F44] font-bold rounded-md transition-colors shadow-sm text-center">
                  Submit Inquiry
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* --- CONTACT MAP SECTION --- */}
      <section id="contact" className="py-20 px-4 bg-slate-50 border-t border-slate-200 scroll-mt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-[#0A1F44]">Contact Information</h2>
              <div className="w-12 h-1 bg-[#FFC107] mt-3"></div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-[#D32F2F] shrink-0 shadow-sm"><MapPin size={20} /></div>
                <div>
                  <h4 className="font-bold text-slate-800">Campus Address</h4>
                  <p className="text-slate-600 mt-1">UBKWTs Educational Campus, Kunjkheda,<br />Ta. Kannad, Dist. Aurangabad, Maharashtra</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-blue-600 shrink-0 shadow-sm"><Mail size={20} /></div>
                <div>
                  <h4 className="font-bold text-slate-800">Email Address</h4>
                  <a href="mailto:mgmvastanvieps@gmail.com" className="text-slate-600 hover:text-blue-600 mt-1 block">mgmvastanvieps@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-[#2E7D32] shrink-0 shadow-sm"><Clock size={20} /></div>
                <div>
                  <h4 className="font-bold text-slate-800">Office Hours</h4>
                  <p className="text-slate-600 mt-1">Monday - Saturday<br /><span className="text-sm font-semibold text-[#D32F2F]">Note: Admissions AFTER LUNCH</span></p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden h-[400px] border border-slate-300 shadow-sm bg-slate-200">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119934.33159981881!2d74.9658!3d20.3155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb8f9d0c2e3535%3A0xc3f6e1f021e1a5f4!2sKunjkheda%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>

        </div>
      </section>

      {/* --- PROFESSIONAL FOOTER --- */}
      <footer className="bg-[#0A1F44] text-slate-300 pt-16 pb-8 px-4 border-t-4 border-[#FFC107]">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-2 space-y-4">
              <h3 className="text-white font-bold text-xl tracking-tight">MGM VASTANVI ENGLISH SCHOOL</h3>
              <p className="text-sm leading-relaxed max-w-md text-slate-400">
                A premier educational institution in Aurangabad dedicated to providing quality education, instilling strong moral values, and building bright futures for the next generation.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-white font-semibold">Management Trust</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>Umar Bin Khattab Welfare Trust Kunjkheda</li>
                <li><a href="http://www.ubkwt.org" target="_blank" rel="noreferrer" className="text-[#FFC107] hover:underline">www.ubkwt.org</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-white font-semibold">Quick Links</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#academics" className="hover:text-white transition-colors">Focus Areas</a></li>
                <li><a href="#admissions" className="hover:text-white transition-colors">Admissions Desk</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <p>&copy; {new Date().getFullYear()} MGM Vastanvi English School. All Rights Reserved.</p>
            <p className="italic text-slate-400">"Quality Education ★ Strong Values ★ Bright Future"</p>
            <p>Designed for Kunjkheda, Aurangabad</p>
          </div>
          
        </div>
      </footer>

    </div>
  );
}