import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800 pt-10">
      {/* Section Réseaux Sociaux */}
      <div className="text-center border-b border-gray-300 pb-6">
        <h2 className="text-lg font-semibold">Suivez-nous sur les réseaux sociaux</h2>
        <div className="flex justify-center items-center space-x-4 mt-4">
          {/* Icônes Réseaux Sociaux */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            <i className="fab fa-facebook-f text-2xl"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:text-pink-800"
          >
            <i className="fab fa-instagram text-2xl"></i>
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600 hover:text-red-800"
          >
            <i className="fab fa-youtube text-2xl"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600"
          >
            <i className="fab fa-twitter text-2xl"></i>
          </a>
        </div>
      </div>

      {/* Section Logos et Liens Principaux */}
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Logo et Texte */}
        <div className="flex flex-col items-center md:items-start">
          <img
            src="src/assets/images/Logo_rep_fr.png"
            alt="République Française"
            className="w-32 mb-4"
          />
          <img
            src="src/assets/images/Logo_Parcoursup.png"
            alt="Parcoursup"
            className="w-40 mb-4"
          />
        </div>

        {/* Liens externes */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Liens Utiles</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="https://info.gouv.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                info.gouv.fr
              </a>
            </li>
            <li>
              <a
                href="https://service-public.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                service-public.fr
              </a>
            </li>
            <li>
              <a
                href="https://legifrance.gouv.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                legifrance.gouv.fr
              </a>
            </li>
            <li>
              <a
                href="https://data.gouv.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                data.gouv.fr
              </a>
            </li>
          </ul>
        </div>

        {/* Mentions Légales */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Informations Légales</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/cookies" className="text-blue-600 hover:underline">
                Gestion des cookies
              </Link>
            </li>
            <li>
              <Link to="/legal" className="text-blue-600 hover:underline">
                Mentions légales
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Section Footer Bas */}
      <div className="bg-gray-200 text-center py-4 text-sm text-gray-600">
        <p>
          Sauf mention contraire, tous les contenus de ce site sont sous licence{' '}
          <a
            href="https://etalab.gouv.fr/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Etalab-2.0
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
