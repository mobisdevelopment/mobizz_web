"use client";

import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot, User, Loader2 } from "lucide-react";
import { COMPANY_INFO } from "../constants/constants";

interface Message {
  role: "user" | "model";
  text: string;
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "model",
      text: "Salut! Sunt asistentul virtual MobizzApp. Cu ce te pot ajuta astăzi?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: userMessage }]);
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages, userMessage }),
      });
      const data = await res.json();
      const aiText =
        data.text ||
        "Îmi pare rău, am întâmpinat o eroare. Te rog să încerci din nou.";
      setMessages((prev) => [...prev, { role: "model", text: aiText }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "model",
          text: "Momentan sunt offline. Te rog să ne contactezi pe email la office@mobizzapp.ro.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[90vw] sm:w-[400px] h-[550px] bg-white rounded-3xl shadow-2xl border border-dark-200 flex flex-col overflow-hidden animate-fade-in ring-1 ring-black/5">
          {/* Header */}
          <div className="bg-black p-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-brand-500 p-2 rounded-xl text-white shadow-lg shadow-brand-500/20">
                <Bot size={22} />
              </div>
              <div>
                <h3 className="text-white font-bold text-sm leading-tight">
                  Asistent MobizzApp
                </h3>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-brand-500 rounded-full animate-pulse"></span>
                  <span className="text-brand-400 text-[10px] uppercase font-black tracking-widest">
                    Activ Acum
                  </span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-dark-400 hover:text-white transition-colors p-1.5 rounded-xl hover:bg-dark-800"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-4 space-y-5 bg-slate-50"
          >
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`flex gap-3 max-w-[88%] ${
                    msg.role === "user" ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm ${
                      msg.role === "user"
                        ? "bg-accent-500 text-white"
                        : "bg-black text-white"
                    }`}
                  >
                    {msg.role === "user" ? (
                      <User size={16} />
                    ) : (
                      <Bot size={16} />
                    )}
                  </div>
                  <div
                    className={`p-4 rounded-2xl text-[15px] leading-relaxed shadow-sm border ${
                      msg.role === "user"
                        ? "bg-accent-600 text-white border-accent-700 rounded-tr-none font-semibold"
                        : "bg-white text-black border-slate-200 rounded-tl-none font-bold"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-200 p-4 rounded-2xl rounded-tl-none flex items-center gap-3 shadow-sm">
                  <Loader2 size={18} className="animate-spin text-brand-600" />
                  <span className="text-sm text-black font-black">
                    Asistentul scrie răspunsul...
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-5 bg-white border-t border-slate-200">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Scrie întrebarea ta aici..."
                className="w-full pl-5 pr-14 py-4 bg-white border-2 border-slate-200 rounded-2xl focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 transition-all text-base text-black font-bold placeholder-slate-400 shadow-inner"
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className={`absolute right-2 top-1/2 -translate-y-1/2 p-3 rounded-xl transition-all ${
                  input.trim()
                    ? "bg-brand-500 text-white shadow-xl hover:bg-brand-600 active:scale-90"
                    : "text-slate-300"
                }`}
              >
                <Send size={20} />
              </button>
            </div>
            <div className="flex items-center justify-center gap-2 mt-3">
              <div className="h-px w-8 bg-slate-200"></div>
              <p className="text-[11px] text-slate-500 font-bold uppercase tracking-tighter">
                Mobizz AI Engine
              </p>
              <div className="h-px w-8 bg-slate-200"></div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 transform hover:scale-110 active:scale-95 ${
          isOpen
            ? "bg-dark-950 text-white rotate-90"
            : "bg-brand-500 text-white shadow-brand-500/40 ring-4 ring-white"
        }`}
        aria-label="Deschide chat"
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent-500 rounded-full border-4 border-white animate-pulse shadow-lg"></span>
        )}
      </button>
    </div>
  );
};

export default ChatBot;
