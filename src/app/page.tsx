// src/app/page.tsx
'use client';
import React, { useState } from 'react';
import { 
  BookOpen, MessageCircle, Heart, Shield, Users, 
  MapPin, Mail, Phone, Clock, Check, Award, 
  Sparkles, Camera, ClipboardCheck, GraduationCap 
} from 'lucide-react';

export default function SchoolWebsite() {
  const [formData, setFormData] = useState({ parentName: '', studentName: '', className: 'KG', phone: '', message: '' });

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you ${formData.parentName}. Your admission inquiry for ${formData.studentName} has been recorded locally! Our administrative team will reach out shortly.`);
    setFormData({ parentName: '', studentName: '', className: 'KG', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans antialiased">
      
      {/* --- BRAND HEADER BANNER --- */}
      <div className="bg-[#0A1F44] text-white py-2 px-4 border-b border-[#FFC107]/30 text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2 font-medium tracking-wide">
            <span className="bg-[#D32F2F] text-white text-[10px] uppercase font-black px-2 py-0.5 rounded animate-pulse">Announcement</span>
            <span>✨ Knowledge Today, Leaders Tomorrow</span>
          </div>
          <div className="flex items-center gap-4">
            <span dir="rtl" className="font-serif font-bold text-[#FFC107] text-sm tracking-wide bg-white/10 px-3 py-0.5 rounded-full">
              ہمارا مقصد معیاری تعلیم
            </span>
            <span className="hidden md:inline text-slate-300">📍 Dist. Aurangabad</span>
          </div>
        </div>
      </div>

      {/* --- NAVIGATION DASHBOARD HEADER --- */}
      <header className="sticky top-0 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#0A1F44] rounded-xl flex items-center justify-center text-[#FFC107] border-2 border-[#FFC107] shadow-inner font-black text-xl">
              MGM
            </div>
            <div>
              <h2 className="font-black text-base sm:text-xl tracking-tight text-[#0A1F44] leading-tight">MGM VASTANVI ENGLISH SCHOOL</h2>
              <p className="text-[10px] sm:text-xs font-bold text-[#2E7D32] uppercase tracking-wider">Managed by: Umar Bin Khattab Welfare Trust Kunjkheda</p>
            </div>
          </div>
          <a href="#admission" className="hidden lg:inline-flex items-center gap-2 bg-[#2E7D32] hover:bg-[#1B5E20] text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-md transition-all tracking-wider uppercase">
            <ClipboardCheck size={16} /> Admission Desk
          </a>
        </div>
      </header>

      {/* --- 1. HERO SECTOR BANNER --- */}
      <section className="relative bg-gradient-to-br from-[#0A1F44] via-[#102A5A] to-[#1a3d7d] text-white overflow-hidden py-16 md:py-24 px-4">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,193,7,0.1),transparent_45%)]" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-block bg-[#FFC107] text-[#0A1F44] px-4 py-1.5 rounded-full font-black text-xs sm:text-sm tracking-widest uppercase shadow-md border-2 border-white">
              🚀 ADMISSION OPEN • K.G. & Class 1 to 8
            </div>
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black tracking-tight leading-tight">
              NURTURING MINDS,<br />
              <span className="text-[#FFC107]">BUILDING FUTURES</span>
            </h1>
            <p className="text-base sm:text-xl text-slate-300 font-medium max-w-2xl mx-auto lg:mx-0">
              Providing holistic, value-based concept learning environment to shape the ethical leaders of tomorrow at Kunjkheda, Kannad.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
              <a href="#admission" className="px-8 py-4 bg-[#FFC107] hover:bg-[#FFD54F] text-[#0A1F44] font-extrabold rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 text-base tracking-wide uppercase">
                Enroll Your Child Now
              </a>
              <a href="#focus" className="px-6 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl border border-white/20 transition-all text-base">
                Explore Curriculum
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative flex gap-4 items-center">
              <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full border-4 border-[#FFC107] overflow-hidden bg-slate-700 shadow-xl flex items-center justify-center text-center p-4 text-xs font-bold leading-tight">
                🎓 Focus on Academics
              </div>
              <div className="flex flex-col gap-4">
                <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full border-4 border-[#2E7D32] overflow-hidden bg-slate-600 shadow-xl flex items-center justify-center text-center p-4 text-xs font-bold leading-tight transform translate-y-4">
                  🎨 Co-curricular Activities
                </div>
                <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full border-4 border-[#D32F2F] overflow-hidden bg-slate-800 shadow-xl flex items-center justify-center text-center p-4 text-xs font-bold leading-tight">
                  🏫 Well Equipped Campus
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- 2. ABOUT US INFRASTRUCTURE --- */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex p-3 bg-blue-50 text-[#0A1F44] rounded-2xl border border-blue-100">
            <GraduationCap size={32} />
          </div>
          <h2 className="text-3xl font-black tracking-tight text-[#0A1F44]">About Our Institution</h2>
          <div className="w-24 h-1 bg-[#FFC107] mx-auto rounded-full" />
          <p className="text-lg text-slate-600 leading-relaxed font-medium">
            Managed by the esteemed <strong className="text-[#0A1F44]">Umar Bin Khattab Welfare Trust Kunjkheda</strong>, MGM VASTANVI ENGLISH SCHOOL is committed to driving educational excellence in the region. 
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            <div className="p-5 bg-slate-50 border rounded-xl text-center">
              <h4 className="font-extrabold text-[#2E7D32] text-lg mb-2">Quality Education</h4>
              <p className="text-sm text-slate-500">Robust concept-driven modern foundation guidelines.</p>
            </div>
            <div className="p-5 bg-slate-50 border rounded-xl text-center">
              <h4 className="font-extrabold text-[#0A1F44] text-lg mb-2">Strong Values</h4>
              <p className="text-sm text-slate-500">Instilling deep moral manners, discipline, and cultural ethics.</p>
            </div>
            <div className="p-5 bg-slate-50 border rounded-xl text-center">
              <h4 className="font-extrabold text-[#D32F2F] text-lg mb-2">Bright Future</h4>
              <p className="text-sm text-slate-500">Empowering individual skill tracking for long-term leadership.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. KEY FOCUS AREAS GRID --- */}
      <section id="focus" className="py-16 px-4 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-black tracking-tight text-[#0A1F44]">Our Core Operational Focus</h2>
            <p className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto">Every strategy is crafted carefully to support your child's comprehensive growth matrix.</p>
            <div className="w-16 h-1 bg-[#FFC107] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Quality Education", desc: "Concept-based learning and clear curriculum alignment.", icon: <BookOpen className="text-blue-600" /> },
              { title: "Speaking & Writing", desc: "Dedicated core focus on fluent English communication skills.", icon: <MessageCircle className="text-[#2E7D32]" /> },
              { title: "Personal Attention", desc: "Individualized care matrix tailored for every child's pace.", icon: <Heart className="text-[#D32F2F]" /> },
              { title: "Cleanliness & Hygiene", desc: "A safe, clean, and meticulously healthy campus environment.", icon: <Sparkles className="text-amber-500" /> },
              { title: "Discipline & Values", desc: "Nurturing excellent manners and moral values daily.", icon: <Award className="text-purple-600" /> },
              { title: "Activity Learning", desc: "Practical hands-on exposure and skill project work.", icon: <ClipboardCheck className="text-indigo-600" /> },
              { title: "Safe Environment", desc: "Secure campus parameters for stress-free learning.", icon: <Shield className="text-teal-600" /> },
              { title: "Parent Partnership", desc: "Active coordination loops between school and home.", icon: <Users className="text-pink-600" /> },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100 shadow-inner">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-slate-800 text-base">{item.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 4. WHY CHOOSE US CHIPS --- */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-3xl font-black text-[#0A1F44] tracking-tight">Why Choose Our School?</h2>
            <p className="text-slate-500 text-sm leading-relaxed">We combine excellent academics with state-of-the-art facilities to deliver the best foundation for your child's success.</p>
            <div className="w-12 h-1 bg-[#FFC107] rounded-full" />
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Experienced faculty", "Smart classrooms", "Regular assessments", 
              "Co-curricular activities", "All-round development", "Value based education", 
              "Well-equipped facilities", "Leadership & life skills"
            ].map((chip, idx) => (
              <div key={idx} className="flex items-center gap-3 p-3 bg-slate-50 border rounded-xl font-semibold text-sm text-slate-700">
                <div className="p-1 bg-[#2E7D32] text-white rounded-md"><Check size={14} /></div>
                <span>{chip}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 5. IMAGE GALLERY TRACKER --- */}
      <section className="py-16 px-4 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-black tracking-tight text-[#0A1F44]">Campus Showcase</h2>
            <div className="w-12 h-1 bg-[#FFC107] mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { theme: "Co-curricular Activities", desc: "Sports, art, and festival events" },
              { theme: "Well Equipped Campus", desc: "Safe layout structures and bright classrooms" },
              { theme: "Focus on Academics", desc: "Interactive conceptual teaching methodologies" }
            ].map((gal, i) => (
              <div key={i} className="bg-white rounded-2xl border overflow-hidden shadow-sm hover:shadow-md transition-all group">
                <div className="h-48 bg-slate-200 flex items-center justify-center text-slate-400 relative">
                  <Camera size={36} className="group-hover:scale-110 transition-transform" />
                  <div className="absolute top-3 right-3 bg-[#0A1F44]/80 text-white text-[10px] px-2 py-0.5 rounded font-mono font-bold uppercase tracking-wider">Placeholder Frame</div>
                </div>
                <div className="p-5 border-t">
                  <h4 className="font-bold text-slate-800 text-base">{gal.theme}</h4>
                  <p className="text-xs text-slate-500 mt-1">{gal.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 6. ADMISSION & ENROLLMENT FORM --- */}
      <section id="admission" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 bg-gradient-to-br from-slate-50 to-slate-100 p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm">
          
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-block bg-[#D32F2F] text-white font-black text-xs px-3 py-1 rounded-md uppercase tracking-wider shadow-sm">
              Admission Registration Desk
            </div>
            <h2 className="text-3xl font-black tracking-tight text-[#0A1F44]">Secure Your Spot Today</h2>
            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              We welcome applications for K.G. and Classes 1 through 8. Connect with us directly via WhatsApp for instant documentation assistance.
            </p>
            <div className="bg-[#FFC107]/20 border-l-4 border-[#FFC107] p-4 rounded-r-xl">
              <p className="text-sm font-black text-[#0A1F44] uppercase tracking-wide">⚠️ Operational Notice</p>
              <p className="text-xs font-bold text-slate-700 mt-0.5">Admissions will be conducted strictly AFTER LUNCH hours.</p>
            </div>
            <div className="space-y-3 pt-2">
              <p className="text-xs font-bold uppercase text-slate-400 tracking-widest">Instant Desk Help</p>
              <a href="https://wa.me/919209255313" target="_blank" rel="noreferrer" className="w-full flex items-center justify-between p-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl shadow transition-colors">
                <span>Chat with Wasim Sir</span>
                <span className="text-xs bg-white/20 px-2 py-0.5 rounded font-mono">9209255313</span>
              </a>
              <a href="https://wa.me/918805499982" target="_blank" rel="noreferrer" className="w-full flex items-center justify-between p-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl shadow transition-colors">
                <span>Chat with Harun Mansuri Sir</span>
                <span className="text-xs bg-white/20 px-2 py-0.5 rounded font-mono">8805499982</span>
              </a>
            </div>
          </div>

          <form onSubmit={handleInquirySubmit} className="lg:col-span-7 bg-white p-6 rounded-2xl border shadow-sm space-y-4">
            <h3 className="text-lg font-bold text-slate-800 border-b pb-2">Quick Inquiry Form</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase">Parent Full Name</label>
                <input required type="text" value={formData.parentName} onChange={e => setFormData({...formData, parentName: e.target.value})} className="w-full p-2.5 bg-slate-50 border rounded-lg text-sm focus:outline-blue-600" placeholder="e.g. Salim Khan" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase">Student Name</label>
                <input required type="text" value={formData.studentName} onChange={e => setFormData({...formData, studentName: e.target.value})} className="w-full p-2.5 bg-slate-50 border rounded-lg text-sm focus:outline-blue-600" placeholder="e.g. Ayaan Khan" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase">Target Admission Class</label>
                <select value={formData.className} onChange={e => setFormData({...formData, className: e.target.value})} className="w-full p-2.5 bg-slate-50 border rounded-lg text-sm focus:outline-blue-600 font-medium">
                  <option value="KG">K.G. Nursery</option>
                  <option value="Class 1">Class 1</option>
                  <option value="Class 2">Class 2</option>
                  <option value="Class 3">Class 3</option>
                  <option value="Class 4">Class 4</option>
                  <option value="Class 5">Class 5</option>
                  <option value="Class 6">Class 6</option>
                  <option value="Class 7">Class 7</option>
                  <option value="Class 8">Class 8</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase">Contact Mobile Number</label>
                <input required type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full p-2.5 bg-slate-50 border rounded-lg text-sm focus:outline-blue-600" placeholder="10 digit number" />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-500 uppercase">Additional Message / Inquiries</label>
              <textarea rows={3} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} className="w-full p-2.5 bg-slate-50 border rounded-lg text-sm focus:outline-blue-600" placeholder="Any structural message..." />
            </div>
            <button type="submit" className="w-full py-3 bg-[#0A1F44] hover:bg-[#15346b] text-white font-bold text-sm rounded-xl transition-all shadow tracking-wider uppercase">
              Submit Digital Request
            </button>
          </form>

        </div>
      </section>

      {/* --- 7. CONTACT & LOCATION COMPONENT --- */}
      <section className="py-16 px-4 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h2 className="text-2xl font-black text-[#0A1F44] tracking-tight">Contact Office Desk</h2>
              <div className="w-12 h-1 bg-[#FFC107] mt-2 rounded-full" />
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-white border rounded-2xl shadow-sm">
                <MapPin className="text-[#D32F2F] shrink-0 mt-0.5" size={20} />
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">School Address</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    UBKWTs Educational Campus, Kunjkheda, Ta. Kannad, Dist. Aurangabad
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white border rounded-2xl shadow-sm">
                <Mail className="text-blue-600 shrink-0 mt-0.5" size={20} />
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Official Email</h4>
                  <a href="mailto:mgmvastanvieps@gmail.com" className="text-xs text-blue-600 font-medium hover:underline block mt-1">
                    mgmvastanvieps@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white border rounded-2xl shadow-sm">
                <Clock className="text-[#2E7D32] shrink-0 mt-0.5" size={20} />
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Office Timings</h4>
                  <p className="text-xs text-slate-500 mt-1">Regular Days: Morning Hours (Admissions AFTER LUNCH)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 rounded-2xl border overflow-hidden bg-slate-200 shadow-inner min-h-[300px] flex items-center justify-center text-center p-6 text-slate-400 font-medium relative">
            <div className="absolute inset-0 bg-slate-300 flex flex-col items-center justify-center p-4">
              <MapPin size={40} className="text-[#D32F2F] mb-2 animate-bounce" />
              <p className="font-bold text-slate-700 text-sm">Kunjkheda Campus Navigation Area</p>
              <p className="text-xs text-slate-500 max-w-sm mt-1">Ta. Kannad, Dist. Aurangabad, Maharashtra</p>
              <a href="http://www.ubkwt.org" target="_blank" rel="noreferrer" className="mt-4 px-4 py-2 bg-white text-slate-800 font-bold border rounded-lg text-xs hover:bg-slate-50 shadow-sm flex items-center gap-1">
                Visit Trust Site: www.ubkwt.org
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* --- 8. FOOTER BASEBOARD --- */}
      <footer className="bg-[#0A1F44] text-slate-400 pt-12 pb-6 px-4 border-t-4 border-[#FFC107]">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-slate-800">
            <div className="space-y-3">
              <h3 className="text-white font-black text-lg tracking-wider">MGM VASTANVI</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Nurturing young minds through clean, hygienic, and highly structured activity-led value education layouts.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-[#FFC107] font-bold text-sm uppercase tracking-widest">Trust Operations</h4>
              <p className="text-xs leading-relaxed text-slate-300">Umar Bin Khattab Welfare Trust Kunjkheda</p>
              <p className="text-xs text-slate-500">Dedicated to general regional uplifting and top-tier foundational education.</p>
            </div>
            <div className="space-y-1">
              <h4 className="text-white font-bold text-sm tracking-wide">Institutional Motto</h4>
              <p className="text-xs text-slate-300 font-serif italic">"Quality Education ★ Strong Values ★ Bright Future"</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center text-[11px] text-slate-500 gap-4">
            <p>© {new Date().getFullYear()} MGM Vastanvi English School. All Rights Reserved.</p>
            <p className="font-mono">Keywords: English School in Aurangabad | Kunjkheda School Admission</p>
          </div>
        </div>
      </footer>

    </div>
  );
}