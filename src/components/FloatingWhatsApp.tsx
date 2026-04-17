import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919898404514"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-10 right-10 md:bottom-12 md:right-12 z-50 flex items-center gap-3 group"
      aria-label="Chat with us on WhatsApp"
    >
      {/* Text Bubble */}
      <div className="bg-white text-zinc-800 text-sm font-medium px-4 py-2 rounded-full shadow-md 
        opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 
        transition-all duration-300 whitespace-nowrap">
        WhatsApp
      </div>

      {/* Button */}
      <div className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(37,211,102,0.4)]">
        
        {/* Icon */}
        <MessageCircle className="w-7 h-7 text-white fill-white transition-transform duration-300 group-hover:scale-110" />

        {/* Ping Animation */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-20 animate-ping -z-10"></span>
      </div>
    </a>
  );
}