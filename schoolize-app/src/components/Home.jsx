import React, { useEffect } from 'react';

function Home() {
  useEffect(() => {
    document.title = "Parcoursup - Accueil";
  }, []);

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Titre principal */}
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Bienvenue sur Parcoursup</h1>
      <p className="text-gray-700 mb-10">Ceci est la page d'accueil de Parcoursup.</p>

      {/* Section Calendrier Parcoursup */}
      <div className="flex flex-col md:flex-row bg-gray-50 p-6 rounded-lg shadow-md">
        {/* Image */}
        <div className="md:w-1/2 mb-4 md:mb-0">
          <img
            src="https://www.parcoursup.gouv.fr/sites/default/files/styles/size383x215/public/database/images/desktop/2024-11/deux-l-ves-sur-un-banc-ordi-793.jpg?itok=6zedKs4u"
            alt="Deux élèves sur un banc"
            className="w-full h-auto rounded-md"
          />
          <p className="text-sm text-gray-500 mt-2">© Stéphanie Lacombe</p>
        </div>

        {/* Texte */}
        <div className="md:w-1/2 md:pl-6">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Calendrier Parcoursup 2025</h2>
          <p className="text-gray-700 mb-4">
            Retrouvez les trois grandes étapes de Parcoursup et les dates importantes de la phase
            d'admission.
          </p>
          <p className="text-gray-700 mb-6">
            Rendez-vous à partir du mercredi 18 décembre pour découvrir la carte des formations
            2025 !
          </p>
          <a
            href="#"
            className="text-blue-600 font-semibold hover:underline inline-flex items-center"
          >
            Voir le calendrier{' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-1 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
