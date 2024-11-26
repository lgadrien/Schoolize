import React, { useState, useEffect } from 'react';

function GestiondesCookies() {

  useEffect(() => {
    document.title = "Parcoursup - Gestion des Cookies";
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">
          Gestion de vos préférences sur les cookies
        </h1>

        <p className="text-gray-700 mb-4">
          Le ministère de l’enseignement supérieur, de la recherche et de
          l’innovation s’engage à traiter vos données à caractère personnel dans
          le respect de la loi n° 78-17 du 6 janvier 1978 modifiée relative à
          l'informatique, aux fichiers et aux libertés et du RGPD.
        </p>

        <p className="text-gray-700 mb-4">
          Nous sommes particulièrement attentifs à la protection des données personnelles et
          nous veillons à ce que la collecte de vos données soit réduite au strict
          nécessaire.
        </p>

        <p className="text-gray-700 mb-4">
          Il convient de distinguer les cookies que nous émettons sur
          parcoursup.gouv.fr pour le bon fonctionnement du site, des cookies de
          mesure d’audience et de ceux émis par des tiers.
        </p>

        <p className="text-gray-700 mb-4">
          Certaines fonctionnalités du site (partage de contenus sur les réseaux sociaux,
          lecteurs vidéos) font appel à des services proposés par des tiers. Ces
          fonctionnalités déposent des cookies leur permettant d’identifier les sites que
          vous consultez et les contenus auxquels vous vous intéressez. Ces cookies ne sont
          déposés que si vous donnez votre accord. Vous pouvez ci-dessous vous informer sur
          la nature de chacun des cookies déposés, les accepter ou les refuser à tout
          moment. Ce choix est possible soit globalement pour l’ensemble du site et
          l’ensemble des services, soit service par service.
        </p>

        <div className="my-6">
          <a
            href="#"
            className="text-blue-600 hover:underline"
          >
            S’informer sur les cookies et données personnelles du site
            Parcoursup.gouv.fr
          </a>
          , contacter ou exercer vos droits auprès du délégué à la protection des
          données.
        </div>

        {/* Boutons globaux */}
        <div className="flex space-x-4 my-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Autoriser tous les cookies
          </button>
          <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">
            Refuser tous les cookies
          </button>
        </div>

        {/* Services de cookies */}
        <div className="mt-8">
          {/* Service Eulerian */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800">Eulerian (Exemption CNIL)</h3>
            <p className="text-gray-700">
              autorisé - Ce service n'a installé aucun cookie.
            </p>
            <a
              href="#"
              className="text-blue-600 hover:underline"
            >
              Lire la suite
            </a>{' '}
            -{' '}
            <a
              href="#"
              className="text-blue-600 hover:underline"
            >
              Voir le site officiel
            </a>{' '}
            <span className="text-green-600 ml-2">Activé</span>
          </div>

          {/* Service Eulerian Analytics */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800">Eulerian Analytics</h3>
            <p className="text-gray-700">
              autorisé - Ce service n'a installé aucun cookie.
            </p>
            <a
              href="#"
              className="text-blue-600 hover:underline"
            >
              Lire la suite
            </a>{' '}
            -{' '}
            <a
              href="#"
              className="text-blue-600 hover:underline"
            >
              Voir le site officiel
            </a>
            <div className="mt-2">
              <button className="bg-green-600 text-white px-3 py-1 rounded-md mr-2 hover:bg-green-700">
                Autoriser
              </button>
              <button className="bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700">
                Refuser
              </button>
            </div>
          </div>

          {/* Service Twitter */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800">Twitter</h3>
            <p className="text-gray-700">
              autorisé - Ce service n'a installé aucun cookie.
            </p>
            <a
              href="#"
              className="text-blue-600 hover:underline"
            >
              Lire la suite
            </a>{' '}
            -{' '}
            <a
              href="#"
              className="text-blue-600 hover:underline"
            >
              Voir le site officiel
            </a>
            <div className="mt-2">
              <button className="bg-green-600 text-white px-3 py-1 rounded-md mr-2 hover:bg-green-700">
                Autoriser
              </button>
              <button className="bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700">
                Refuser
              </button>
            </div>
          </div>

          {/* Service YouTube */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800">YouTube</h3>
            <p className="text-gray-700">
              autorisé - Ce service n'a installé aucun cookie.
            </p>
            <a
              href="#"
              className="text-blue-600 hover:underline"
            >
              Lire la suite
            </a>{' '}
            -{' '}
            <a
              href="#"
              className="text-blue-600 hover:underline"
            >
              Voir le site officiel
            </a>
            <div className="mt-2">
              <button className="bg-green-600 text-white px-3 py-1 rounded-md mr-2 hover:bg-green-700">
                Autoriser
              </button>
              <button className="bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700">
                Refuser
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GestiondesCookies;
