import { MessageCircle } from "lucide-react";
import { useState } from "react";

const WHATSAPP_URL =
  "https://wa.me/918730818101?text=Hi Debraj, I'd like to discuss a website project!";

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {/* Tooltip */}
      {showTooltip && (
        <div className="bg-card border border-border rounded-xl px-4 py-2 shadow-lg text-sm font-medium text-foreground whitespace-nowrap animate-fade-up">
          Chat with me 💬
        </div>
      )}

      {/* Button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        aria-label="Chat on WhatsApp"
        className="w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-200 whatsapp-pulse"
        style={{ backgroundColor: "#25D366" }}
      >
        <MessageCircle className="w-7 h-7 fill-white" />
      </a>
    </div>
  );
}
