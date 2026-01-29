"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = (e: any) => {
    e.preventDefault();
    // Aap apna secret password yahan set kar sakte ho
    if (password === 'panchat123') {
      router.push('/admin/dashboard');
    } else {
      alert('Wrong Password, Bhai!');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <div className="bg-[#111] border border-gray-800 p-8 rounded-[2rem] w-full max-w-md shadow-2xl">
        <h2 className="text-3xl font-black text-orange-500 mb-2">Owner Login</h2>
        <p className="text-gray-500 mb-8">Sirf Panchat Dhaba owner ke liye.</p>
        
        <form onSubmit={handleLogin} className="space-y-4">
          <input 
            type="password" 
            placeholder="Enter Secret Password" 
            className="w-full bg-black border border-gray-800 p-4 rounded-2xl focus:border-orange-500 outline-none transition"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="w-full bg-orange-600 py-4 rounded-2xl font-bold hover:bg-orange-500 transition">
            Access Dashboard
          </button>
        </form>
      </div>
    </div>
  );
}