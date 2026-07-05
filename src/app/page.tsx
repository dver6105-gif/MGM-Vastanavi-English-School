// src/app/page.tsx
'use client';
import React, { useState } from 'react';
import { 
  BookOpen, MessageCircle, Heart, Shield, Users, 
  MapPin, Mail, Phone, Clock, Check, Award, 
  Sparkles, Camera, ClipboardCheck, GraduationCap,
  Menu, X, ExternalLink
} from 'lucide-react';

export default function SchoolWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ parentName: '', studentName: '', className: 'KG', phone: '', message: '' });

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you ${formData.parentName}. Your admission inquiry for ${formData.studentName} has been recorded successfully!`);
    setFormData({ parentName: '', studentName: '', className: 'KG', phone: '', message: '' });
  };

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Focus Areas", href: "#focus" },
    { label: "Why Choose Us", href: "#why-choose-us" },
    { label: "Gallery", href: "#gallery" },
    { label: "Admissions", href: "#admission" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <div id="home" className="min-h-screen bg-slate-50 font-sans antialiased text-slate-800 scroll-smooth">
      
      {/* --- TOP BRAND INFOBAR --- */}
      <div className="bg-[#0A1F44] text-white py-2 px-4 border-b border-[#FFC107]/20 text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex flex-wrap justify-center items-center gap-2 font-medium tracking-wide text-center sm:text-left">
            <span className="bg-[#D32F2F] text-white text-[10px] uppercase font-black px-1.5 py-0.5 rounded animate-pulse">Status</span>
            <span>🔥 ADMISSION OPEN - Enroll Today for a Bright Tomorrow</span>
          </div>
          <div className="flex items-center gap-4">
            <span dir="rtl" className="font-serif font-bold text-[#FFC107] text-sm tracking-wide bg-white/10 px-3 py-0.5 rounded-full">
              ہمارا مقصد معیاری تعلیم
            </span>
          </div>
        </div>
      </div>

      {/* --- RESPONSIVE NAVIGATION BAR --- */}
      <header className="sticky top-0 bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          
          {/* Logo Brand Frame */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-[#0A1F44] rounded-xl flex items-center justify-center text-[#FFC107] border-2 border-[#FFC107] shadow font-black text-lg shrink-0">
              MGM
            </div>
            <div>
              <h1 className="font-black text-sm sm:text-lg tracking-tight text-[#0A1F44] leading-tight">MGM VASTANVI ENGLISH SCHOOL</h1>
              <p className="text-[9px] sm:text-xs font-bold text-[#2E7D32] uppercase tracking-wider line-clamp-1">Managed by: Umar Bin Khattab Welfare Trust Kunjkheda</p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm font-bold text-slate-600 hover:text-[#0A1F44] transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-[#FFC107] after:transition-all pb-1">
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Button & Mobile Hamburger Trigger */}
          <div className="flex items-center gap-3">
            <a href="#admission" className="hidden sm:inline-flex items-center gap-2 bg-[#2E7D32] hover:bg-[#1B5E20] text-white px-4 py-2 rounded-xl font-bold text-xs uppercase shadow transition-all">
              <ClipboardCheck size={14} /> Enroll Now
            </a>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* --- MOBILE DRAWER MENU OVERLAY --- */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-t border-slate-200 absolute w-full left-0 shadow-xl py-4 px-4 space-y-2 animate-fadeIn">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                onClick={() => setMobileMenuOpen(false)}
                className="block p-3 font-bold text-slate-700 hover:bg-slate-50 hover:text-[#0A1F44] rounded-xl transition-all"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t mt-2">
              <a 
                href="#admission" 
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center flex items-center justify-center gap-2 bg-[#2E7D32] text-white py-3 rounded-xl font-bold uppercase text-sm shadow"
              >
                <ClipboardCheck size={16} /> Admission Desk
              </a>
            </div>
          </div>
        )}
      </header>

      {/* --- 1. PREMIUM HERO SECTOR --- */}
      <section className="relative bg-gradient-to-br from-[#0A1F44] via-[#102A5A] to-[#1a3d7d] text-white overflow-hidden py-16 px-4">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,193,7,0.12),transparent_50%)]" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-[#FFC107] text-[#0A1F44] px-4 py-1.5 rounded-full font-black text-xs sm:text-sm tracking-wide uppercase shadow-md border border-white/20">
              <Sparkles size={14} className="animate-spin" /> K.G. & Class 1 to 8 Inbound Roster
            </div>
            <h2 className="text-xs sm:text-sm font-bold tracking-widest text-slate-300 uppercase">Knowledge Today, Leaders Tomorrow</h2>
            <h1 className="text-3xl sm:text-5xl xl:text-6xl font-black tracking-tight leading-tight">
              NURTURING MINDS,<br />
              <span className="text-[#FFC107]">BUILDING FUTURES</span>
            </h1>
            <p className="text-sm sm:text-lg text-slate-300 font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Welcome to MGM Vastanvi English School. We offer an advanced concept-based layout designed for deep academic and all-round character building.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 max-w-md mx-auto lg:mx-0 pt-2">
              <a href="#admission" className="w-full sm:w-auto text-center px-8 py-4 bg-[#FFC107] hover:bg-[#FFD54F] text-[#0A1F44] font-black rounded-xl shadow-lg transition-all text-sm uppercase tracking-wide">
                Register for Admission
              </a>
              <a href="#focus" className="w-full sm:w-auto text-center px-6 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl border border-white/20 transition-all text-sm">
                View Focus Areas
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col sm:flex-row justify-center items-center gap-6 pt-6 lg:pt-0">
            <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full border-4 border-[#FFC107] bg-[#0A1F44]/50 shadow-xl flex flex-col items-center justify-center text-center p-3 transition-transform hover:scale-105">
              <BookOpen size={24} className="text-[#FFC107] mb-1" />
              <span className="text-[11px] font-black tracking-wide uppercase leading-tight">Focus on Academics</span>
            </div>
            <div className="flex lg:flex-col gap-6">
              <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full border-4 border-[#2E7D32] bg-[#0A1F44]/50 shadow-xl flex flex-col items-center justify-center text-center p-3 transition-transform hover:scale-105">
                <Award size={24} className="text-[#2E7D32] mb-1" />
                <span className="text-[11px] font-black tracking-wide uppercase leading-tight">Co-curricular Actions</span>
              </div>
              <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full border-4 border-[#D32F2F] bg-[#0A1F44]/50 shadow-xl flex flex-col items-center justify-center text-center p-3 transition-transform hover:scale-105">
                <Sparkles size={24} className="text-[#D32F2F] mb-1" />
                <span className="text-[11px] font-black tracking-wide uppercase leading-tight">Well Equipped Campus</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- 2. ABOUT US SECTOR --- */}
      <section id="about" className="py-20 px-4 bg-white scroll-mt-16">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex p-3 bg-blue-50 text-[#0A1F44] rounded-2xl border border-blue-100 shadow-sm">
            <GraduationCap size={32} />
          </div>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-[#0A1F44]">About Our Trust & Institution</h2>
          <div className="w-16 h-1 bg-[#FFC107] mx-auto rounded-full" />
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium max-w-3xl mx-auto">
            Managed with structural integrity by the <strong className="text-[#0A1F44]">Umar Bin Khattab Welfare Trust Kunjkheda</strong>. Our collective core vision maps modern academic workflows together with exceptional ethical values to give your child an unmatched framework for success.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8">
            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#2E7D32] flex items-center justify-center mx-auto mb-3 font-bold">1</div>
              <h4 className="font-bold text-[#0A1F44] text-base mb-1">Quality Education</h4>
              <p className="text-xs text-slate-500">Rigorous core concepts over basic plain memorization paradigms.</p>
            </div>
            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0A1F44] flex items-center justify-center mx-auto mb-3 font-bold">2</div>
              <h4 className="font-bold text-[#0A1F44] text-base mb-1">Strong Values</h4>
              <p className="text-xs text-slate-500">Meticulous training in good manners, community respect, and discipline.</p>
            </div>
            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm">
              <div className="w-8 h-8 rounded-lg bg-rose-50 text-[#D32F2F] flex items-center justify-center mx-auto mb-3 font-bold">3</div>
              <h4 className="font-bold text-[#0A1F44] text-base mb-1">Bright Future</h4>
              <p className="text-xs text-slate-500">Preparing self-reliant modern students equipped for continuous growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. KEY FOCUS AREAS GRID --- */}
      <section id="focus" className="py-20 px-4 bg-slate-50 border-y border-slate-200 scroll-mt-16">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-[#0A1F44]">8 Pillars of Student Care</h2>
            <p className="text-slate-500 text-xs sm:text-sm max-w-xl mx-auto">Our daily operational priorities ensure an optimal balance between learning safety and execution.</p>
            <div className="w-12 h-1 bg-[#FFC107] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Quality Education", desc: "Concept-based learning and tailored metrics.", icon: <BookOpen className="text-blue-600" /> },
              { title: "Speaking & Writing Skills", desc: "Heavy core emphasis on English communication fluency.", icon: <MessageCircle className="text-[#2E7D32]" /> },
              { title: "Personal Attention", desc: "Care matrices tuned for each child's individual pace.", icon: <Heart className="text-[#D32F2F]" /> },
              { title: "Cleanliness & Hygiene", desc: "Safe, healthy, and highly sanitized environment layouts.", icon: <Sparkles className="text-amber-500" /> },
              { title: "Discipline & Values", desc: "Daily emphasis on moral manners and core ethics.", icon: <Award className="text-purple-600" /> },
              { title: "Activity Based Learning", desc: "Practical project works and structural exposure.", icon: <ClipboardCheck className="text-indigo-600" /> },
              { title: "Safe & Secure Environment", desc: "Gated safety workflows for stress-free education runs.", icon: <Shield className="text-teal-600" /> },
              { title: "Parent – School Partnership", desc: "Continuous baseline feedback coordination loops.", icon: <Users className="text-pink-600" /> },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100 shadow-inner">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-slate-800 text-sm sm:text-base">{item.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 4. WHY CHOOSE US TRACKER --- */}
      <section id="why-choose-us" className="py-20 px-4 bg-white scroll-mt-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-4 text-center lg:text-left">
            <h2 className="text-2xl sm:text-4xl font-black text-[#0A1F44] tracking-tight">Why Choose Us?</h2>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-md mx-auto lg:mx-0">Institutional resources engineered from the ground up to establish elite growth standards.</p>
            <div className="w-12 h-1 bg-[#FFC107] mx-auto lg:mx-0 rounded-full" />
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Experienced faculty", "Smart classrooms", "Regular assessments", 
              "Co-curricular activities", "All-round development", "Value based education", 
              "Well-equipped facilities", "Leadership & life skills"
            ].map((chip, idx) => (
              <div key={idx} className="flex items-center gap-3 p-3.5 bg-slate-50 border border-slate-100 rounded-xl font-bold text-xs sm:text-sm text-slate-700 shadow-sm">
                <div className="p-1 bg-[#2E7D32] text-white rounded-md shrink-0"><Check size={12} /></div>
                <span>{chip}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 5. CAMPUS PREVIEW GALLERY --- */}
      <section id="gallery" className="py-20 px-4 bg-slate-50 border-t border-slate-200 scroll-mt-16">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-[#0A1F44]">Campus Gallery Framework</h2>
            <div className="w-12 h-1 bg-[#FFC107] mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { theme: "Co-curricular Activities", desc: "Interactive social, physical, and art event actions." },
              { theme: "Well Equipped Campus", desc: "Safe structural layouts and brightly optimized spaces." },
              { theme: "Focus on Academics", desc: "Concept-driven student evaluation models." }
            ].map((gal, i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm group">
                <div className="h-44 bg-slate-200 flex items-center justify-center text-slate-400 relative">
                  <Camera size={32} className="group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute top-3 right-3 bg-[#0A1F44]/90 text-white text-[9px] px-2 py-0.5 rounded font-mono font-bold tracking-wider">Demo Space Only</div>
                </div>
                <div className="p-4 border-t">
                  <h4 className="font-bold text-slate-800 text-sm sm:text-base">{gal.theme}</h4>
                  <p className="text-xs text-slate-500 mt-1">{gal.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 6. ADMISSIONS & INQUIRY CENTER --- */}
      <section id="admission" className="py-20 px-4 bg-white scroll-mt-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 bg-gradient-to-br from-slate-50 via-slate-100 to-slate-50 p-4 sm:p-10 rounded-3xl border border-slate-200 shadow-sm">
          
          {/* Informational Side Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-block bg-[#D32F2F] text-white font-black text-[10px] sm:text-xs px-3 py-1 rounded-md uppercase tracking-wide">
              Admissions Portal Active
            </div>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-[#0A1F44]">Admission Processing Desk</h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
              We are screening candidates for K.G. up to Class 8. You can initiate quick documentation routines directly via WhatsApp.
            </p>
            
            {/* Urgent Operational Sticky Note */}
            <div className="bg-amber-50 border-l-4 border-[#FFC107] p-4 rounded-r-xl shadow-inner">
              <p className="text-xs font-black text-[#0A1F44] uppercase tracking-wider">⚠️ Important Time Frame Notice</p>
              <p className="text-xs font-bold text-amber-900 mt-0.5">Admissions will be conducted strictly **AFTER LUNCH** hours.</p>
            </div>

            {/* Tap-to-Chat Action Chips */}
            <div className="space-y-2.5 pt-2">
              <p className="text-[10px] font-black uppercase text-slate-400 tracking-wider">Direct WhatsApp Contact Rows</p>
              <a href="https://wa.me/919209255313" target="_blank" rel="noreferrer" className="w-full flex items-center justify-between p-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md active:scale-[0.99]">
                <span className="flex items-center gap-2">💬 Contact Wasim Sir</span>
                <span className="text-xs bg-black/20 px-2 py-0.5 rounded font-mono font-bold">9209255313</span>
              </a>
              <a href="https://wa.me/918805499982" target="_blank" rel="noreferrer" className="w-full flex items-center justify-between p-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md active:scale-[0.99]">
                <span className="flex items-center gap-2">💬 Contact Harun Mansuri Sir</span>
                <span className="text-xs bg-black/20 px-2 py-0.5 rounded font-mono font-bold">8805499982</span>
              </a>
            </div>
          </div>

          {/* Clean Functional Form Grid */}
          <form onSubmit={handleInquirySubmit} className="lg:col-span-7 bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-base sm:text-lg font-bold text-slate-800 border-b pb-2">Institutional Seat Request Form</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] font-black text-slate-400 uppercase">Parent Full Name</label>
                <input required type="text" value={formData.parentName} onChange={e => setFormData({...formData, parentName: e.target.value})} className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:outline-blue-600 font-medium" placeholder="e.g., Wasim Khan" />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-black text-slate-400 uppercase">Student Full Name</label>
                <input required type="text" value={formData.studentName} onChange={e => setFormData({...formData, studentName: e.target.value})} className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:outline-blue-600 font-medium" placeholder="e.g., Ayaan Khan" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] font-black text-slate-400 uppercase">Target Registry Class</label>
                <select value={formData.className} onChange={e => setFormData({...formData, className: e.target.value})} className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:outline-blue-600 font-bold text-slate-700">
                  <option value="KG">K.G. Nursery Setup</option>
                  {Array.from({ length: 8 }, (_, i) => (
                    <option key={i+1} value={`Class ${i+1}`}>{`Class ${i+1}`}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-black text-slate-400 uppercase">Contact Mobile String</label>
                <input required type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:outline-blue-600 font-medium" placeholder="10-digit smartphone number" />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-black text-slate-400 uppercase">Custom Message Details</label>
              <textarea rows={3} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:outline-blue-600 font-medium" placeholder="Mention previous school details or specific conditions..." />
            </div>
            <button type="submit" className="w-full py-3.5 bg-[#0A1F44] hover:bg-[#133061] text-white font-extrabold text-xs sm:text-sm rounded-xl shadow transition-all tracking-wide uppercase">
              Submit Secure Seat Inquiry
            </button>
          </form>

        </div>
      </section>

      {/* --- 7. OFFICE OFFICE INFORMATION MATRIX --- */}
      <section id="contact" className="py-20 px-4 bg-slate-50 border-t border-slate-200 scroll-mt-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h2 className="text-2xl sm:text-4xl font-black text-[#0A1F44] tracking-tight">Official Communication Desk</h2>
              <div className="w-12 h-1 bg-[#FFC107] mt-2 rounded-full" />
            </div>
            
            <div className="space-y-3">
              <div className="flex items-start gap-4 p-4 bg-white border border-slate-200 rounded-2xl shadow-sm">
                <MapPin className="text-[#D32F2F] shrink-0 mt-1" size={18} />
                <div>
                  <h4 className="font-bold text-slate-800 text-xs sm:text-sm">Campus Geolocation</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed font-medium">
                    UBKWTs Educational Campus, Kunjkheda, Ta. Kannad, Dist. Aurangabad
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white border border-slate-200 rounded-2xl shadow-sm">
                <Mail className="text-blue-600 shrink-0 mt-1" size={18} />
                <div>
                  <h4 className="font-bold text-slate-800 text-xs sm:text-sm">Email Inquiries</h4>
                  <a href="mailto:mgmvastanvieps@gmail.com" className="text-xs text-blue-600 font-bold hover:underline block mt-0.5 break-all">
                    mgmvastanvieps@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white border border-slate-200 rounded-2xl shadow-sm">
                <Clock className="text-[#2E7D32] shrink-0 mt-1" size={18} />
                <div>
                  <h4 className="font-bold text-slate-800 text-xs sm:text-sm">Operational Timings</h4>
                  <p className="text-xs text-slate-500 mt-0.5 font-medium">Monday - Saturday / Admissions Processing strictly AFTER LUNCH</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Geographic Map Card Mock */}
          <div className="lg:col-span-7 rounded-3xl border border-slate-300 overflow-hidden min-h-[280px] bg-slate-200 flex flex-col items-center justify-center text-center p-6 shadow-sm relative group">
            <div className="absolute inset-0 bg-slate-300 flex flex-col items-center justify-center p-4">
              <MapPin size={36} className="text-[#D32F2F] mb-1 animate-bounce" />
              <p className="font-black text-slate-800 text-sm tracking-tight">Campus Navigation Matrix Area</p>
              <p className="text-[11px] text-slate-500 max-w-xs mt-0.5 font-medium">Kunjkheda, Ta. Kannad, Dist. Aurangabad, Maharashtra</p>
              
              <div className="flex flex-col sm:flex-row gap-2 mt-4">
                <a href="http://www.ubkwt.org" target="_blank" rel="noreferrer" className="px-4 py-2 bg-[#0A1F44] text-white font-bold rounded-xl text-xs shadow-sm hover:bg-slate-800 flex items-center justify-center gap-1.5 transition-colors">
                  Trust Hub <ExternalLink size={12} />
                </a>
                <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="px-4 py-2 bg-white text-slate-700 font-bold border border-slate-200 rounded-xl text-xs shadow-sm hover:bg-slate-50 flex items-center justify-center gap-1">
                  Open Google Maps
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- 8. BASEBOARD SYSTEM FOOTER --- */}
      <footer className="bg-[#0A1F44] text-slate-400 pt-12 pb-6 px-4 border-t-4 border-[#FFC107]">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-6 border-b border-slate-800">
            <div className="space-y-2">
              <h3 className="text-white font-black tracking-wider text-base sm:text-lg">MGM VASTANVI</h3>
              <p className="text-xs text-slate-400 leading-relaxed max-w-sm font-medium">
                Concept-based educational framework engineered for comprehensive academic success and life-skill leadership.
              </p>
            </div>
            <div className="space-y-1.5">
              <h4 className="text-[#FFC107] font-bold text-xs uppercase tracking-widest">Management Entity</h4>
              <p className="text-xs font-bold text-slate-300">Umar Bin Khattab Welfare Trust Kunjkheda</p>
              <p className="text-[11px] text-slate-500 font-medium">Driving regional educational excellence and child care safety standards.</p>
            </div>
            <div className="space-y-1">
              <h4 className="text-white font-bold text-xs uppercase tracking-widest">Institutional Creed</h4>
              <p className="text-xs text-slate-300 font-serif italic">{"Quality Education ★ Strong Values ★ Bright Future"}</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center text-[10px] sm:text-xs text-slate-500 gap-3 text-center">
            <p>© {new Date().getFullYear()} MGM Vastanvi English School. All Rights Reserved.</p>
            <p className="font-mono font-bold tracking-wider text-slate-600">English School in Aurangabad • Kunjkheda School Admission</p>
          </div>
        </div>
      </footer>

    </div>
  );
}