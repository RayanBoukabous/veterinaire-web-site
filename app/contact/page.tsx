'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Ici, vous pouvez ajouter la logique d'envoi du formulaire
    // Pour l'instant, on simule juste l'envoi
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', phone: '', email: '', message: '' })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="pt-20 sm:pt-24 pb-12 sm:pb-16 page-fade">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-900 dark:to-gray-800 py-12 sm:py-16 transition-colors duration-300">
        <div className="container-custom text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 px-4">
            Contactez-nous
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            Prenez rendez-vous pour une consultation vétérinaire à domicile
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Info */}
            <div className="fade-in">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">
                Informations de contact
              </h2>
              
              <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm sm:text-base">Téléphones</h3>
                    <div className="space-y-1">
                      <a
                        href="tel:0550181416"
                        className="block text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors text-sm sm:text-base"
                      >
                        0550 18 14 16
                      </a>
                      <a
                        href="tel:0662488922"
                        className="block text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors text-sm sm:text-base"
                      >
                        0662 48 89 22
                      </a>
                      <a
                        href="tel:0790000107"
                        className="block text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors text-sm sm:text-base"
                      >
                        0790 00 01 07
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm sm:text-base">Emails</h3>
                    <div className="space-y-1">
                      <a
                        href="mailto:contact@santeplusveto.com"
                        className="block text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors break-all text-xs sm:text-sm"
                      >
                        contact@santeplusveto.com
                      </a>
                      <a
                        href="mailto:alimachane@yahoo.fr"
                        className="block text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors break-all text-xs sm:text-sm"
                      >
                        alimachane@yahoo.fr
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm sm:text-base">Zone de service</h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                      Service à domicile - Consultation dans votre région
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-4 sm:p-6 transition-colors duration-300">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 text-sm sm:text-base">
                  Horaires de disponibilité
                </h3>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Lundi - Dimanche :</strong> Sur rendez-vous
                </p>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  Contactez-nous pour planifier une consultation à domicile selon vos disponibilités.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="fade-in">
              <div className="card">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                  Envoyez-nous un message
                </h2>
                
                {isSubmitted ? (
                  <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4 sm:p-6 text-center">
                    <CheckCircle className="text-green-600 mx-auto mb-3 sm:mb-4 w-12 h-12 sm:w-12 sm:h-12" />
                    <h3 className="text-lg sm:text-xl font-semibold text-green-900 mb-2">
                      Message envoyé !
                    </h3>
                    <p className="text-sm sm:text-base text-green-700">
                      Nous vous répondrons dans les plus brefs délais.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5 sm:mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-xl focus:border-primary-500 dark:focus:border-primary-400 focus:outline-none transition-colors text-sm sm:text-base"
                        placeholder="Votre nom"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5 sm:mb-2">
                        Téléphone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-xl focus:border-primary-500 dark:focus:border-primary-400 focus:outline-none transition-colors text-sm sm:text-base"
                        placeholder="0550 18 14 16"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5 sm:mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-xl focus:border-primary-500 dark:focus:border-primary-400 focus:outline-none transition-colors text-sm sm:text-base"
                        placeholder="votre@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5 sm:mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-xl focus:border-primary-500 dark:focus:border-primary-400 focus:outline-none transition-colors resize-none text-sm sm:text-base"
                        placeholder="Décrivez votre besoin ou posez votre question..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-primary w-full flex items-center justify-center space-x-2 text-sm sm:text-base py-2.5 sm:py-3"
                    >
                      <span>Envoyer le message</span>
                      <Send size={18} className="sm:w-5 sm:h-5" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-accent-600 dark:from-primary-700 dark:to-accent-700 text-white transition-colors duration-300">
        <div className="container-custom text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 px-4">
            Besoin d'une réponse rapide ?
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-primary-50 dark:text-primary-100 max-w-2xl mx-auto px-4">
            Appelez-nous directement pour prendre rendez-vous
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <a
              href="tel:0550181416"
              className="bg-white text-primary-600 hover:bg-primary-50 font-semibold py-2.5 sm:py-3 px-6 sm:px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center space-x-2 text-sm sm:text-base"
            >
              <Phone size={18} className="sm:w-5 sm:h-5" />
              <span>0550 18 14 16</span>
            </a>
            <a
              href="tel:0662488922"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white font-semibold py-2.5 sm:py-3 px-6 sm:px-8 rounded-xl transition-all duration-300 inline-flex items-center justify-center space-x-2 text-sm sm:text-base"
            >
              <Phone size={18} className="sm:w-5 sm:h-5" />
              <span>0662 48 89 22</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
