import { Metadata } from 'next'
import { Award, Heart, Users, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'À propos - SantePlusVeto | Dr MACHANE Ali',
  description: 'Découvrez le Dr MACHANE Ali, vétérinaire expérimenté spécialisé dans les consultations à domicile. Philosophie de soins basée sur la proximité et le bien-être animal.',
}

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'Passion pour les animaux',
      description: 'Un amour authentique pour le bien-être animal guide chaque consultation.',
    },
    {
      icon: Users,
      title: 'Proximité et écoute',
      description: 'Une relation de confiance avec les propriétaires et leurs animaux.',
    },
    {
      icon: Award,
      title: 'Excellence professionnelle',
      description: 'Des soins de qualité supérieure basés sur l\'expérience et l\'expertise.',
    },
  ]

  const experiences = [
    'Consultations vétérinaires à domicile',
    'Soins préventifs et curatifs',
    'Suivi médical personnalisé',
    'Conseils en santé animale',
  ]

  return (
    <div className="pt-20 sm:pt-24 pb-12 sm:pb-16 page-fade">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-900 dark:to-gray-800 py-12 sm:py-16 transition-colors duration-300">
        <div className="container-custom">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 px-4">
              À propos de SantePlusVeto
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
              Votre vétérinaire de confiance pour des soins professionnels à domicile
            </p>
          </div>
        </div>
      </section>

      {/* Doctor Profile */}
      <section className="section-padding bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="fade-in">
              <div className="bg-gradient-to-br from-primary-100 to-accent-100 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-6 sm:p-8 shadow-xl dark:shadow-gray-900/50 transition-colors duration-300">
                <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
                  <span className="text-4xl sm:text-6xl">👨‍⚕️</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white text-center mb-2">
                  Dr MACHANE Ali
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 text-center mb-4 sm:mb-6">
                  Vétérinaire à domicile
                </p>
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 shadow-md dark:shadow-gray-900/50 transition-colors duration-300">
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-3 sm:mb-4">
                    Passionné par le bien-être animal, le Dr MACHANE Ali propose des consultations vétérinaires professionnelles à domicile. 
                    Avec une approche humaine et personnalisée, chaque animal reçoit des soins adaptés à ses besoins spécifiques.
                  </p>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                    La philosophie de SantePlusVeto repose sur la proximité, la confiance et l'excellence des soins. 
                    Nous croyons que chaque animal mérite des soins de qualité dans un environnement familier et rassurant.
                  </p>
                </div>
              </div>
            </div>

            <div className="fade-in">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Notre Mission
              </h3>
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                Offrir des soins vétérinaires de qualité supérieure directement à votre domicile, 
                en créant une expérience rassurante pour vous et votre animal. Nous nous engageons à 
                fournir des services professionnels, personnalisés et accessibles.
              </p>

              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Domaines d'expertise
              </h3>
              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                {experiences.map((exp, index) => (
                  <li key={index} className="flex items-start space-x-2 sm:space-x-3">
                    <CheckCircle className="text-primary-600 dark:text-primary-400 mt-0.5 sm:mt-1 flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6" />
                    <span className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300">{exp}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="btn-primary inline-flex items-center space-x-2 text-sm sm:text-base py-2.5 sm:py-3 px-4 sm:px-6"
              >
                <span>Prendre rendez-vous</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
        <div className="container-custom">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 px-4">
              Nos Valeurs
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
              Les principes qui guident notre pratique quotidienne
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="card text-center group hover:border-primary-300"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary-400 to-accent-400 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <value.icon className="text-white w-8 h-8 sm:w-10 sm:h-10" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                  {value.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-accent-600 dark:from-primary-700 dark:to-accent-700 text-white transition-colors duration-300">
        <div className="container-custom text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 px-4">
            Faites confiance à l'expérience
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-primary-50 dark:text-primary-100 max-w-2xl mx-auto px-4">
            Contactez le Dr MACHANE Ali pour une consultation à domicile personnalisée
          </p>
          <Link
            href="/contact"
            className="bg-white text-primary-600 hover:bg-primary-50 font-semibold py-2.5 sm:py-3 px-6 sm:px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center space-x-2 text-sm sm:text-base"
          >
            <span>Nous contacter</span>
          </Link>
        </div>
      </section>
    </div>
  )
}
