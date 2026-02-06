import Link from 'next/link'
import Image from 'next/image'
import { 
  Home, 
  Heart, 
  Stethoscope, 
  Shield, 
  Clock, 
  Users,
  ArrowRight,
  CheckCircle
} from 'lucide-react'

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-20 pb-12 sm:pt-24 sm:pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden transition-colors duration-300">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 sm:-top-40 sm:-right-40 w-40 h-40 sm:w-80 sm:h-80 bg-primary-200 dark:bg-primary-900/30 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-30 dark:opacity-20" />
          <div className="absolute -bottom-20 -left-20 sm:-bottom-40 sm:-left-40 w-40 h-40 sm:w-80 sm:h-80 bg-accent-200 dark:bg-accent-900/30 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-30 dark:opacity-20" />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="text-center md:text-left fade-in order-2 md:order-1">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight">
                Soins vétérinaires{' '}
                <span className="text-primary-600 dark:text-primary-400">professionnels</span>{' '}
                à domicile
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-200 mb-2 font-semibold">
                Dr MACHANE Ali
              </p>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 sm:mb-8">
                Votre vétérinaire de confiance pour le bien-être de vos animaux de compagnie
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
                <Link href="/contact" className="btn-primary inline-flex items-center justify-center space-x-2 text-sm sm:text-base py-2.5 sm:py-3 px-4 sm:px-6">
                  <span>Nous contacter</span>
                  <ArrowRight size={18} className="sm:w-5 sm:h-5" />
                </Link>
                <Link href="/services" className="btn-secondary inline-flex items-center justify-center space-x-2 text-sm sm:text-base py-2.5 sm:py-3 px-4 sm:px-6">
                  <span>Nos services</span>
                </Link>
              </div>
            </div>
            
            <div className="relative fade-in order-1 md:order-2">
              <Image
                src="/images/background.png"
                alt="Animaux de compagnie - Soins vétérinaires à domicile"
                width={600}
                height={600}
                className="w-full h-auto object-contain max-w-sm sm:max-w-md md:max-w-full mx-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container-custom">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
              Nos Services
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
              Des soins complets et professionnels pour vos animaux de compagnie
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                icon: Stethoscope,
                title: 'Consultation à domicile',
                description: 'Examen complet de votre animal dans le confort de votre foyer',
                color: 'from-primary-500 to-primary-600',
              },
              {
                icon: Heart,
                title: 'Soins de base',
                description: 'Vaccinations, vermifuges et soins préventifs',
                color: 'from-accent-500 to-accent-600',
              },
              {
                icon: Shield,
                title: 'Conseils santé',
                description: 'Guidance professionnelle pour le bien-être de votre animal',
                color: 'from-blue-500 to-blue-600',
              },
              {
                icon: Users,
                title: 'Suivi vétérinaire',
                description: 'Accompagnement continu pour la santé de votre compagnon',
                color: 'from-primary-500 to-accent-500',
              },
            ].map((service, index) => (
              <div
                key={index}
                className="card group hover:border-primary-200 fade-in"
              >
                <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform`}>
                  <service.icon className="text-white w-6 h-6 sm:w-8 sm:h-8" size={24} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn-secondary inline-flex items-center space-x-2">
              <span>Voir tous les services</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Avantages Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
        <div className="container-custom">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
              Pourquoi choisir SantePlusVeto ?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
              Des avantages qui font la différence pour vous et vos animaux
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Home,
                title: 'À domicile',
                description: 'Évitez le stress du transport. Votre animal reste dans son environnement familier.',
              },
              {
                icon: Clock,
                title: 'Rapidité',
                description: 'Prise de rendez-vous rapide et consultation dans les meilleurs délais.',
              },
              {
                icon: Shield,
                title: 'Professionnel',
                description: 'Expérience et expertise pour des soins de qualité supérieure.',
              },
            ].map((advantage, index) => (
              <div
                key={index}
                className="card text-center fade-in"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary-400 to-accent-400 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <advantage.icon className="text-white w-8 h-8 sm:w-10 sm:h-10" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                  {advantage.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-accent-600 dark:from-primary-700 dark:to-accent-700 text-white transition-colors duration-300">
        <div className="container-custom text-center fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 px-4">
            Prêt à prendre soin de votre animal ?
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-primary-50 dark:text-primary-100 max-w-2xl mx-auto px-4">
            Contactez-nous dès aujourd'hui pour une consultation à domicile
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Link href="/contact" className="bg-white text-primary-600 hover:bg-primary-50 font-semibold py-2.5 sm:py-3 px-6 sm:px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center space-x-2 text-sm sm:text-base">
              <span>Prendre rendez-vous</span>
              <ArrowRight size={18} className="sm:w-5 sm:h-5" />
            </Link>
            <a
              href="tel:0550181416"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white font-semibold py-2.5 sm:py-3 px-6 sm:px-8 rounded-xl transition-all duration-300 inline-flex items-center justify-center space-x-2 text-sm sm:text-base"
            >
              <span>Appeler maintenant</span>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
