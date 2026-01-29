"use client";
import React, { useState } from 'react';

export default function AdminDashboard() {
  // Dummy data - Baad mein ise hum Database se connect karenge
  const [orders, setOrders] = useState([
    { id: 1, name: "Rahul Kumar", phone: "9876543210", amount: "₹120", status: "Pending", screenshot: "https://via.placeholder.com/150" },
    { id: 2, name: "Sneha Singh", phone: "9988776655", amount: "₹240", status: "Confirmed", screenshot: "https://via.placeholder.com/150" },
  ]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-4 md:p-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-black text-orange-500">OWNER DASHBOARD</h1>
            <p className="text-gray-500">Manage your Dhaba orders & Menu</p>
          </div>
          <button onClick={() => window.location.href = '/'} className="text-xs bg-gray-900 px-4 py-2 rounded-full border border-gray-800">Logout</button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Left: Orders List */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
              Recent Orders
            </h2>
            
            {orders.map((order) => (
              <div key={order.id} className="bg-[#111] border border-gray-800 rounded-3xl p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="flex gap-4 items-center">
                  <div className="w-16 h-16 bg-gray-800 rounded-2xl overflow-hidden cursor-pointer border border-orange-500/30 hover:scale-110 transition">
                    <img src={order.screenshot} alt="Payment Proof" className="w-full h-full object-cover" title="Click to enlarge" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{order.name}</h3>
                    <p className="text-sm text-gray-400">{order.phone} • {order.amount}</p>
                    <span className={`text-[10px] uppercase font-bold px-2 py-1 rounded ${order.status === 'Pending' ? 'bg-orange-500/10 text-orange-500' : 'bg-green-500/10 text-green-500'}`}>
                      {order.status}
                    </span>
                  </div>
                </div>
                <div className="flex gap-2 w-full md:w-auto">
                  <button className="flex-1 md:flex-none bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-xl text-sm font-bold transition">Confirm</button>
                  <button className="flex-1 md:flex-none bg-red-600/10 hover:bg-red-600 text-red-600 hover:text-white px-4 py-2 rounded-xl text-sm font-bold transition border border-red-600/20">Reject</button>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Menu Management (Owner Flexibility) */}
          <div className="bg-[#111] border border-gray-800 rounded-[2.5rem] p-8 h-fit sticky top-28">
            <h2 className="text-xl font-bold mb-6">Edit Today's Menu</h2>
            <div className="space-y-4">
              <div>
                <label className="text-xs text-gray-500 font-bold uppercase tracking-widest">Main Dish Name</label>
                <input type="text" defaultValue="Student Special Thali" className="w-full bg-black border border-gray-800 p-3 rounded-xl mt-1 text-sm outline-none focus:border-orange-500" />
              </div>
              <div>
                <label className="text-xs text-gray-500 font-bold uppercase tracking-widest">Price (₹)</label>
                <input type="number" defaultValue="120" className="w-full bg-black border border-gray-800 p-3 rounded-xl mt-1 text-sm outline-none focus:border-orange-500" />
              </div>
              <div className="flex items-center gap-2 py-2">
                <input type="checkbox" defaultChecked className="accent-orange-500 h-4 w-4" />
                <span className="text-sm">Available for Delivery?</span>
              </div>
              <button className="w-full bg-white text-black py-4 rounded-2xl font-black hover:bg-orange-500 hover:text-white transition">
                UPDATE WEBSITE
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}