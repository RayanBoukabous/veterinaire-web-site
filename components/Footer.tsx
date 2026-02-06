import Link from 'next/link'
import { Phone, Mail, Facebook, Instagram } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-primary-800 to-primary-900 dark:from-gray-900 dark:to-gray-950 text-white dark:text-gray-100 transition-colors duration-300">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* À propos */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 flex items-center space-x-2">
              <span>🐾</span>
              <span>SantePlus<span className="text-accent-400">Veto</span></span>
            </h3>
            <p className="text-primary-100 mb-3 sm:mb-4 text-sm sm:text-base">
              Consultations vétérinaires professionnelles à domicile. 
              Votre vétérinaire de confiance pour le bien-être de vos animaux.
            </p>
            <p className="text-primary-200 font-semibold text-sm sm:text-base">
              Dr MACHANE Ali
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Contact</h3>
            <div className="space-y-2 sm:space-y-3">
              <a
                href="tel:0550181416"
                className="flex items-center space-x-2 text-primary-100 hover:text-white transition-colors text-sm sm:text-base"
              >
                <Phone size={16} className="sm:w-[18px] sm:h-[18px] flex-shrink-0" />
                <span>0550 18 14 16</span>
              </a>
              <a
                href="tel:0662488922"
                className="flex items-center space-x-2 text-primary-100 hover:text-white transition-colors text-sm sm:text-base"
              >
                <Phone size={16} className="sm:w-[18px] sm:h-[18px] flex-shrink-0" />
                <span>0662 48 89 22</span>
              </a>
              <a
                href="tel:0790000107"
                className="flex items-center space-x-2 text-primary-100 hover:text-white transition-colors text-sm sm:text-base"
              >
                <Phone size={16} className="sm:w-[18px] sm:h-[18px] flex-shrink-0" />
                <span>0790 00 01 07</span>
              </a>
              <a
                href="mailto:contact@santeplusveto.com"
                className="flex items-center space-x-2 text-primary-100 hover:text-white transition-colors text-sm sm:text-base break-all"
              >
                <Mail size={16} className="sm:w-[18px] sm:h-[18px] flex-shrink-0" />
                <span>contact@santeplusveto.com</span>
              </a>
              <a
                href="mailto:alimachane@yahoo.fr"
                className="flex items-center space-x-2 text-primary-100 hover:text-white transition-colors text-sm sm:text-base break-all"
              >
                <Mail size={16} className="sm:w-[18px] sm:h-[18px] flex-shrink-0" />
                <span>alimachane@yahoo.fr</span>
              </a>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-primary-100 hover:text-white transition-colors text-sm sm:text-base"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-primary-100 hover:text-white transition-colors text-sm sm:text-base"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-primary-100 hover:text-white transition-colors text-sm sm:text-base"
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-primary-100 hover:text-white transition-colors text-sm sm:text-base"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <div className="mt-4 sm:mt-6 flex space-x-3 sm:space-x-4">
              <a
                href="https://facebook.com/santeplusveto"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook size={18} className="sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://instagram.com/santeplusveto"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={18} className="sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-700 dark:border-gray-800 pt-6 sm:pt-8 text-center text-primary-200 dark:text-gray-400">
          <p className="text-xs sm:text-sm">
            © {currentYear} SantePlusVeto - Dr MACHANE Ali. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
