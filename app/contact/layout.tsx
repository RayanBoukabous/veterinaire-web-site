import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact - SantePlusVeto | Prendre rendez-vous',
  description: 'Contactez SantePlusVeto pour prendre rendez-vous avec le Dr MACHANE Ali. Consultations vétérinaires à domicile. Téléphones, emails et formulaire de contact.',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
