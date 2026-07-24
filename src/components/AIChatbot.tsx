"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot } from "lucide-react";

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Halo! Saya Asisten AI SDN Petukangan Selatan 02. Ada yang ingin Anda tanyakan seputar sekolah atau PPDB?" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input;
    setMessages((prev) => [...prev, { sender: "user", text: userMessage }]);
    setInput("");

    // Simulasi respons cerdas AI untuk prototipe
    setTimeout(() => {
      let botReply = "Terima kasih atas pertanyaannya. Untuk informasi lebih lanjut, Anda dapat mengunjungi menu PPDB atau menghubungi kontak resmi sekolah.";
      const lower = userMessage.toLowerCase();
      
      if (lower.includes("ppdb") || lower.includes("daftar")) {
        botReply = "Pendaftaran PPDB Gelombang 1 dibuka pada 15 - 30 April 2026. Silakan cek menu PPDB di atas untuk persyaratan lengkapnya!";
      } else if (lower.includes("akreditasi") || lower.includes("nilai")) {
        botReply = "SD Negeri Petukangan Selatan 02 telah terakreditasi A dengan standar mutu pendidikan tinggi.";
      } else if (lower.includes("lokasi") || lower.includes("alamat")) {
        botReply = "Kami berlokasi di Pesanggrahan, Jakarta Selatan. Lingkungan sekolah aman, asri, dan ramah anak.";
      }

      setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
    }, 800);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-80 sm:w-96 bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col h-[450px]"
          >
            {/* Header Chat */}
            <div className="bg-[#0052CC] p-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-bold text-sm">Asisten AI Sekolah</div>
                  <div className="text-xs text-blue-100 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    Online 24/7
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-50">
              {messages.map((m, idx) => (
                <div 
                  key={idx} 
                  className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] p-3.5 rounded-2xl text-sm leading-relaxed ${
                    m.sender === 'user' 
                      ? 'bg-[#0052CC] text-white rounded-br-none' 
                      : 'bg-white text-slate-700 shadow-sm border border-slate-100 rounded-bl-none'
                  }`}>
                    {m.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Chat Input */}
            <form onSubmit={handleSend} className="p-3 bg-white border-t border-slate-100 flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Tanyakan sesuatu..."
                className="flex-1 px-4 py-2.5 rounded-full border border-slate-200 text-sm focus:outline-none focus:border-[#0052CC] transition-colors"
              />
              <button 
                type="submit"
                className="w-10 h-10 bg-[#0052CC] hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-colors shadow-md shadow-blue-500/20 shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-[#0052CC] hover:bg-blue-700 text-white rounded-full shadow-2xl flex items-center justify-center transition-transform hover:scale-105 active:scale-95 group relative"
      >
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white animate-bounce"></span>
        <MessageSquare className="w-6 h-6 group-hover:rotate-12 transition-transform" />
      </button>
    </div>
  );
}
