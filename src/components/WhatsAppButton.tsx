'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919250592505?text=Hi%20VMC%20Media%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xl shadow-[#25D366]/40 hover:shadow-2xl hover:shadow-[#25D366]/60 hover:scale-110 active:scale-95 transition-all duration-300 group cursor-pointer"
    >
      <FontAwesomeIcon icon={faWhatsapp} className="w-8 h-8 text-white" />
    </a>
  );
};

export default WhatsAppButton;
