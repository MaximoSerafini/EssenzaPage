import React from 'react';
import { MessageSquare } from 'lucide-react';
import { WHATSAPP_LINK } from '../utils/constants';

export const ContactButton: React.FC = () => {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center p-4 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-105"
      aria-label="Contactar por WhatsApp"
    >
      <MessageSquare size={24} />
      <span className="ml-2 hidden md:inline">Contactar</span>
    </a>
  );
};