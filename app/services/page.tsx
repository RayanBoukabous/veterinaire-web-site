import { Metadata } from 'next'
import { 
  Stethoscope, 
  Heart, 
  Shield, 
  Users, 
  Syringe,
  Activity,
  FileText,
  Phone
} from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Services - SantePlusVeto | Consultations vétérinaires à domicile',
  description: 'Découvrez nos services de consultations vétérinaires à domicile : soins de base, vaccinations, conseils santé et suivi vétérinaire.',
}

export default function ServicesPage() {
  const services = [
    {
      icon: Stethoscope,
      title: 'Consultation vétérinaire à domicile',
      description: 'Examen complet de votre animal dans le confort de votre foyer. Diagnostic précis et recommandations personnalisées.',
      features: [
        'Examen clinique complet',
        'Diagnostic et traitement',
        'Conseils personnalisés',
        'Rapport de consultation',
      ],
      color: 'from-primary-500 to-primary-600',
    },
    {
      icon: Syringe,
      title: 'Vaccinations et prévention',
      description: 'Protégez votre animal avec nos programmes de vaccination et de prévention adaptés à ses besoins.',
      features: [
        'Vaccinations annuelles',
        'Vermifuges',
        'Anti-parasitaires',
        'Protection contre les maladies',
      ],
      color: 'from-accent-500 to-accent-600',
    },
    {
      icon: Heart,
      title: 'Soins de base',
      description: 'Tous les soins essentiels pour maintenir la santé et le bien-être de votre compagnon.',
      features: [
        'Soins des plaies',
        'Nettoyage des oreilles',
        'Coupe des griffes',
        'Soins dentaires de base',
      ],
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Activity,
      title: 'Suivi médical',
      description: 'Accompagnement continu pour les animaux nécessitant un suivi régulier ou des soins chroniques.',
      features: [
        'Suivi post-opératoire',
        'Gestion des maladies chroniques',
        'Surveillance de la santé',
        'Ajustement des traitements',
      ],
      color: 'from-primary-500 to-accent-500',
    },
    {
      icon: FileText,
      title: 'Conseils santé animale',
      description: 'Guidance professionnelle sur l\'alimentation, l\'hygiène et le bien-être de votre animal.',
      features: [
        'Conseils nutritionnels',
        'Hygiène et soins quotidiens',
        'Comportement animal',
        'Prévention des maladies',
      ],
      color: 'from-accent-500 to-blue-500',
    },
    {
      icon: Users,
      title: 'Accompagnement personnalisé',
      description: 'Un suivi adapté à chaque animal et à chaque situation, avec une approche humaine et professionnelle.',
      features: [
        'Relation de confiance',
        'Disponibilité',
        'Écoute et conseils',
        'Proximité et réactivité',
      ],
      color: 'from-primary-400 to-blue-500',
    },
  ]

  return (
    <div className="pt-20 sm:pt-24 pb-12 sm:pb-16 page-fade">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-900 dark:to-gray-800 py-12 sm:py-16 transition-colors duration-300">
        <div className="container-custom text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 px-4">
            Nos Services
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            Des soins vétérinaires complets et professionnels à domicile pour le bien-être de vos animaux de compagnie
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="card group hover:border-primary-300 transition-all duration-300"
              >
                <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <service.icon className="text-white w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                  {service.title}
                </h2>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6">
                  {service.description}
                </p>
                <ul className="space-y-1.5 sm:space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-gray-700 dark:text-gray-300">
                      <Shield className="text-primary-600 dark:text-primary-400 mt-0.5 sm:mt-1 flex-shrink-0 w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                      <span className="text-xs sm:text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-accent-600 dark:from-primary-700 dark:to-accent-700 text-white transition-colors duration-300">
        <div className="container-custom text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 px-4">
            Besoin d'un service spécifique ?
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-primary-50 dark:text-primary-100 max-w-2xl mx-auto px-4">
            Contactez-nous pour discuter de vos besoins et prendre rendez-vous
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Link
              href="/contact"
              className="bg-white dark:bg-gray-800 text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-gray-700 font-semibold py-2.5 sm:py-3 px-6 sm:px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center space-x-2 text-sm sm:text-base"
            >
              <span>Nous contacter</span>
              <Phone size={18} className="sm:w-5 sm:h-5" />
            </Link>
            <a
              href="tel:0550181416"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white font-semibold py-2.5 sm:py-3 px-6 sm:px-8 rounded-xl transition-all duration-300 inline-flex items-center justify-center space-x-2 text-sm sm:text-base"
            >
              <span>Appeler maintenant</span>
              <Phone size={18} className="sm:w-5 sm:h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
