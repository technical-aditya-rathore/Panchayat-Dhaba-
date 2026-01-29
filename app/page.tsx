"use client";
import React, { useState } from 'react';

export default function Home() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans">
      {/* Navbar */}
      <nav className="p-6 flex justify-between items-center border-b border-gray-900 sticky top-0 bg-[#0a0a0a]/80 backdrop-blur-md z-50">
        <h1 className="text-2xl font-black text-orange-500 italic">PANCHAT DHABA</h1>
        <div className="hidden md:flex gap-6 text-sm font-medium text-gray-400">
          <a href="#menu" className="hover:text-white transition">Menu</a>
          <a href="#payment" className="hover:text-white transition">Pay Now</a>
          <a href="/admin" className="hover:text-white transition text-xs border border-gray-700 px-3 py-1 rounded-full">Owner Login</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
          GARMA GARAM <br/> <span className="text-orange-600">GHAR JAISA KHANA.</span>
        </h2>
        <p className="text-gray-400 text-lg mb-8">Special Student Thalis starting at just ₹80. Pure Dhaba style, delivered to your hostel.</p>
        <a href="#payment" className="bg-orange-600 hover:bg-orange-500 text-white px-10 py-4 rounded-full font-bold transition-all inline-block shadow-lg shadow-orange-900/20">
          Order Now
        </a>
      </section>

      {/* Simple Menu Preview */}
      <section id="menu" className="max-w-6xl mx-auto px-6 py-10">
        <h3 className="text-2xl font-bold mb-8 border-l-4 border-orange-600 pl-4">Today's Specials</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {['Student Special Thali', 'Paneer Butter Masala', 'Dal Tadka (Dhaba Style)'].map((item) => (
            <div key={item} className="bg-[#111] p-6 rounded-3xl border border-gray-800 hover:border-orange-900 transition cursor-pointer">
              <div className="w-full h-40 bg-gray-800 rounded-2xl mb-4 animate-pulse"></div>
              <h4 className="text-xl font-bold">{item}</h4>
              <p className="text-gray-500 text-sm mt-2">Unlimited Roti + Rice + Salad</p>
              <p className="text-orange-500 font-bold mt-4 text-lg">₹120</p>
            </div>
          ))}
        </div>
      </section>

      {/* Specific Payment Section (The core requirement) */}
      <section id="payment" className="max-w-4xl mx-auto px-6 py-20">
        <div className="bg-[#111] rounded-[3rem] p-8 md:p-12 border border-gray-800 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/10 blur-3xl rounded-full"></div>
          
          <div className="grid md:grid-cols-2 gap-12 relative z-10">
            {/* Step 1: QR & Owner No */}
            <div>
              <span className="text-orange-500 font-bold text-sm uppercase tracking-widest">Step 1</span>
              <h3 className="text-3xl font-black mt-2 mb-6">Scan & Pay</h3>
              <div className="bg-white p-4 rounded-3xl inline-block mb-6 shadow-xl">
                {/* Visual Placeholder for QR */}
                <div className="w-48 h-48 bg-gray-200 flex items-center justify-center text-black text-xs font-bold text-center p-4 border-2 border-dashed border-gray-400">
                   [YOUR QR CODE IMAGE WILL GO HERE]
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-gray-400">Owner Name: <span className="text-white font-medium">Mr. Panchat</span></p>
                <p className="text-gray-400">Phone: <span className="text-white font-medium">+91 98765 43210</span></p>
                <p className="text-xs text-orange-500 bg-orange-500/10 p-3 rounded-xl inline-block">
                  Note: Payment confirm hone ke baad hi order prepare hoga.
                </p>
              </div>
            </div>

            {/* Step 2: Upload Proof */}
            <div>
              <span className="text-orange-500 font-bold text-sm uppercase tracking-widest">Step 2</span>
              <h3 className="text-3xl font-black mt-2 mb-6">Submit Proof</h3>
              
              {!submitted ? (
                <form onSubmit={(e) => {e.preventDefault(); setSubmitted(true)}} className="space-y-4">
                  <input type="text" placeholder="Aapka Naam" className="w-full bg-black border border-gray-800 p-4 rounded-2xl focus:border-orange-500 outline-none transition" required />
                  <input type="tel" placeholder="Hostel / Room Number" className="w-full bg-black border border-gray-800 p-4 rounded-2xl focus:border-orange-500 outline-none transition" required />
                  
                  <div className="border-2 border-dashed border-gray-800 rounded-2xl p-8 text-center hover:border-orange-500 transition group cursor-pointer bg-black/50">
                    <input type="file" className="hidden" id="proof" required />
                    <label htmlFor="proof" className="cursor-pointer">
                      <p className="text-gray-400 group-hover:text-orange-500">Click to upload Screenshot</p>
                      <p className="text-[10px] text-gray-600 mt-1">JPG, PNG allowed</p>
                    </label>
                  </div>

                  <button type="submit" className="w-full bg-orange-600 text-white py-4 rounded-2xl font-black text-lg hover:scale-[1.02] active:scale-95 transition shadow-lg shadow-orange-900/40">
                    CONFIRM & SEND
                  </button>
                </form>
              ) : (
                <div className="bg-green-500/10 border border-green-500/50 p-8 rounded-3xl text-center animate-in fade-in zoom-in duration-300">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <h4 className="text-xl font-bold text-green-500">Request Sent!</h4>
                  <p className="text-sm text-gray-400 mt-2">Owner aapka payment check kar rahe hain. Jaldi hi phone aayega.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <footer className="py-10 text-center text-gray-600 text-xs border-t border-gray-900">
        <p>© 2026 PANCHAT DHABA - Best Food for Best Students</p>
      </footer>
    </div>
  );
}