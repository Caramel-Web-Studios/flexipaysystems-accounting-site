"use client";
import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function AccountingChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
  { role: "assistant", content: "Hi! I'm your FlexiPay UK expert. Ask me about VAT, PAYE, or Self-Assessment." }
]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  // Regex to detect emails for HubSpot lead capture
  const emailRegex = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input || isLoading) return;

    const userMessage: Message = { role: "user", content: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    // --- HubSpot Lead Capture ---
    const detectedEmail = input.match(emailRegex)?.[0];
    if (detectedEmail) {
      fetch("/api/save-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: detectedEmail, name: "" }),
      }).catch((err) => console.error("HubSpot lead error:", err));
    }

    try {
      // --- GPT Chat Response ---
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
    } catch (err) {
      console.error("Chat API Error:", err);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, I encountered an error. Please try again." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      {/* Chat Box */}
      {isOpen && (
        <div className="bg-white w-[320px] sm:w-95 h-125 rounded-2xl shadow-2xl flex flex-col border border-brand-surface overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-brand-primary p-4 flex justify-between items-center text-white">
            <div>
              <p className="font-bold text-sm tracking-tight">FlexiPay Assistant</p>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-[10px] opacity-80 uppercase font-medium">UK Tax Expert Online</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1.5 rounded-lg transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.length === 0 && (
              <div className="bg-white border border-brand-surface p-3 rounded-xl rounded-tl-none text-brand-text text-[13px] shadow-sm italic">
                Hi! I&apos;m your FlexiPay UK expert. Ask me about VAT, PAYE, or Self-Assessment.
              </div>
            )}
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] p-3 rounded-2xl text-[13px] leading-relaxed shadow-sm ${
                    m.role === "user"
                      ? "bg-brand-primary text-white rounded-tr-none"
                      : "bg-white text-brand-text border border-brand-surface rounded-tl-none"
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-brand-surface p-3 rounded-2xl rounded-tl-none shadow-sm">
                  <Loader2 size={16} className="animate-spin text-brand-primary" />
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-brand-surface flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question..."
              className="flex-1 p-2.5 bg-brand-surface/30 border border-transparent rounded-xl outline-none focus:border-brand-primary text-brand-text text-sm transition-all"
            />
            <button
              type="submit"
              disabled={!input || isLoading}
              className="bg-brand-primary text-white p-2.5 rounded-xl hover:bg-brand-accent disabled:opacity-50 transition-all flex items-center justify-center"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`bg-brand-primary text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group ${isOpen ? "rotate-90" : ""}`}
      >
        {isOpen ? (
          <X size={30} />
        ) : (
          <div className="relative">
            <MessageCircle size={30} fill="currentColor" className="opacity-20 absolute inset-0" />
            <MessageCircle size={30} />
          </div>
        )}
      </button>
    </div>
  );
}