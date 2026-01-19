'use client';

import { useState } from 'react';

const content = {
  es: {
    nav: {
      about: 'Nosotros',
      mission: 'Mision',
      team: 'Equipo',
      contact: 'Contacto',
    },
    hero: {
      tagline: 'El Portal Digital de tu Ciudad',
      title: 'Una homepage para cada pueblo y ciudad de Mexico',
      subtitle: 'Ya no necesitas visitar 10 sitios web americanos diferentes para hacer tus cosas. Hazlo todo en el portal de tu zocalo local.',
      cta: 'Proximamente',
    },
    features: {
      title: 'Todo en un solo lugar',
      items: [
        {
          icon: '🏪',
          title: 'Marketplace Local',
          description: 'Compra y vende dentro de tu comunidad. Apoya a los negocios locales.',
        },
        {
          icon: '👥',
          title: 'Directorio de Servicios',
          description: 'Encuentra plomeros, electricistas, doctores y mas en tu zona.',
        },
        {
          icon: '📰',
          title: 'Noticias Locales',
          description: 'Mantente informado sobre lo que pasa en tu colonia y ciudad.',
        },
        {
          icon: '🤝',
          title: 'Comunidad',
          description: 'Conecta con tus vecinos, organiza eventos y fortalece tu comunidad.',
        },
      ],
    },
    mission: {
      title: 'Nuestra Mision',
      text: 'Creemos que cada comunidad en Mexico merece su propia presencia digital. Un lugar donde los vecinos puedan conectar, los negocios locales puedan prosperar, y la informacion importante llegue a todos. Zocalos es el corazon digital de tu ciudad.',
    },
    team: {
      title: 'Nuestro Equipo',
      members: [
        {
          name: 'Monserrat Martinez Gonzales',
          role: 'CEO - Directora General',
          bio: 'Liderando la vision de conectar a Mexico digitalmente.',
        },
        {
          name: 'Laura Martinez Gonzales',
          role: 'CMO - Directora de Marketing',
          bio: 'Construyendo la marca que une comunidades.',
        },
        {
          name: 'Michael ONeal',
          role: 'CTO - Director de Tecnologia',
          bio: 'Arquitectando la plataforma del futuro.',
        },
      ],
    },
    footer: {
      company: 'Zocalos Inc.',
      location: 'Una corporacion C de Estados Unidos con sede en Texas, operando en Mexico.',
      rights: 'Todos los derechos reservados.',
    },
  },
  en: {
    nav: {
      about: 'About',
      mission: 'Mission',
      team: 'Team',
      contact: 'Contact',
    },
    hero: {
      tagline: 'The Digital Portal for Your City',
      title: 'A homepage for every town and city in Mexico',
      subtitle: 'No longer do you need to visit 10 different American websites to get things done. Do it all on your local zocalo portal.',
      cta: 'Coming Soon',
    },
    features: {
      title: 'Everything in one place',
      items: [
        {
          icon: '🏪',
          title: 'Local Marketplace',
          description: 'Buy and sell within your community. Support local businesses.',
        },
        {
          icon: '👥',
          title: 'Service Directory',
          description: 'Find plumbers, electricians, doctors and more in your area.',
        },
        {
          icon: '📰',
          title: 'Local News',
          description: 'Stay informed about what\'s happening in your neighborhood and city.',
        },
        {
          icon: '🤝',
          title: 'Community',
          description: 'Connect with your neighbors, organize events and strengthen your community.',
        },
      ],
    },
    mission: {
      title: 'Our Mission',
      text: 'We believe every community in Mexico deserves its own digital presence. A place where neighbors can connect, local businesses can thrive, and important information reaches everyone. Zocalos is the digital heart of your city.',
    },
    team: {
      title: 'Our Team',
      members: [
        {
          name: 'Monserrat Martinez Gonzales',
          role: 'CEO - Chief Executive Officer',
          bio: 'Leading the vision to digitally connect Mexico.',
        },
        {
          name: 'Laura Martinez Gonzales',
          role: 'CMO - Chief Marketing Officer',
          bio: 'Building the brand that unites communities.',
        },
        {
          name: 'Michael ONeal',
          role: 'CTO - Chief Technology Officer',
          bio: 'Architecting the platform of the future.',
        },
      ],
    },
    footer: {
      company: 'Zocalos Inc.',
      location: 'A US C Corporation based in Texas, operating in Mexico.',
      rights: 'All rights reserved.',
    },
  },
};

export default function Home() {
  const [lang, setLang] = useState<'es' | 'en'>('es');
  const t = content[lang];

  return (
    <div className="min-h-screen gradient-bg">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <span className="text-2xl font-bold gradient-primary-text">Zocalos</span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition">{t.nav.about}</a>
              <a href="#mission" className="text-gray-600 hover:text-gray-900 transition">{t.nav.mission}</a>
              <a href="#team" className="text-gray-600 hover:text-gray-900 transition">{t.nav.team}</a>
            </div>

            <button
              onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
              className="px-4 py-2 rounded-full border border-gray-200 hover:border-gray-300 transition flex items-center gap-2 text-sm font-medium"
            >
              <span>{lang === 'es' ? '🇲🇽' : '🇺🇸'}</span>
              <span>{lang === 'es' ? 'ES' : 'EN'}</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 hero-pattern">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-orange-100 to-red-100 text-sm font-medium text-gray-700 mb-6">
            {t.hero.tagline}
          </div>

          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            <span className="gradient-primary-text">{t.hero.title}</span>
          </h1>

          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            {t.hero.subtitle}
          </p>

          <button className="gradient-primary text-white font-semibold px-8 py-4 rounded-2xl text-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
            {t.hero.cta}
          </button>

          {/* Hero Visual */}
          <div className="mt-16 relative">
            <div className="animate-float">
              <div className="w-full max-w-lg mx-auto bg-white rounded-3xl shadow-2xl p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="space-y-3">
                  <div className="h-4 bg-gradient-to-r from-orange-200 to-red-200 rounded-full w-3/4"></div>
                  <div className="h-4 bg-gray-100 rounded-full w-full"></div>
                  <div className="h-4 bg-gray-100 rounded-full w-5/6"></div>
                  <div className="grid grid-cols-2 gap-3 mt-6">
                    <div className="h-20 bg-gradient-to-br from-orange-100 to-red-100 rounded-xl"></div>
                    <div className="h-20 bg-gradient-to-br from-teal-100 to-emerald-100 rounded-xl"></div>
                    <div className="h-20 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl"></div>
                    <div className="h-20 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            {t.features.title}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.features.items.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition duration-300 border border-transparent hover:border-gray-100"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-20 px-6 hero-pattern">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">{t.mission.title}</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            {t.mission.text}
          </p>

          {/* Mexico Map Visual */}
          <div className="mt-12 flex justify-center">
            <div className="relative w-64 h-64">
              <div className="absolute inset-0 gradient-primary rounded-full opacity-10 animate-pulse"></div>
              <div className="absolute inset-4 gradient-primary rounded-full opacity-20 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute inset-8 gradient-primary rounded-full opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-8xl">🇲🇽</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">{t.team.title}</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {t.team.members.map((member, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-gray-50 hover:shadow-xl transition duration-300"
              >
                <div className="w-24 h-24 mx-auto mb-6 gradient-primary rounded-full flex items-center justify-center text-white text-3xl font-bold">
                  {member.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-sm text-orange-500 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <span className="text-2xl font-bold">{t.footer.company}</span>
            </div>

            <div className="text-center md:text-right text-gray-400">
              <p className="mb-1">{t.footer.location}</p>
              <p>&copy; {new Date().getFullYear()} Zocalos Inc. {t.footer.rights}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
