'use client'

import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  const phoneNumber = '213550181416' // Format international sans +
  const message = encodeURIComponent('Bonjour, je souhaite prendre rendez-vous pour une consultation vétérinaire à domicile.')

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white p-3 sm:p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 group"
      aria-label="Contacter sur WhatsApp"
    >
      <MessageCircle size={24} className="sm:w-7 sm:h-7 group-hover:rotate-12 transition-transform" />
      <span className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-500 rounded-full animate-pulse" />
    </a>
  )
}
