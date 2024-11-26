import React, { useState, useEffect } from 'react';

function MentionsLégales() {

useEffect(() => {
  document.title = "Parcoursup - Mentions légales";
}, []);

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-6">
        {/* Titre Principal */}
        <h1 className="text-3xl font-bold text-blue-600 mb-6">
          Mentions légales
        </h1>
        <p className="text-sm text-gray-500 mb-8">Mis à jour le 18 juillet 2024</p>

        {/* Sommaire */}
        <h2 className="text-2xl font-semibold mb-4">Sommaire</h2>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li><a href="#informations" className="text-blue-600 hover:underline">Informations éditoriales, hébergement, gestion et suivi technique</a></li>
          <li><a href="#donnees" className="text-blue-600 hover:underline">Données personnelles et cookies</a></li>
          <li><a href="#propriete" className="text-blue-600 hover:underline">Propriété intellectuelle et réutilisation</a></li>
        </ul>

        {/* Section Informations */}
        <section id="informations" className="mb-8">
          <h3 className="text-xl font-bold mb-4">
            Mentions légales : Informations éditoriales, hébergement, gestion et suivi technique
          </h3>
          <p className="text-gray-700 mb-2"><strong>Éditeur :</strong> Ministère de l'Enseignement supérieur, de la Recherche et de l’Innovation (MESR)</p>
          <p className="text-gray-700 mb-2"><strong>Adresse :</strong> 1 rue Descartes, 75231 Paris Cedex 05</p>
          <p className="text-gray-700 mb-2"><strong>Directrice de publication :</strong> La directrice générale de l’Enseignement supérieur et de l’Insertion professionnelle</p>
          <p className="text-gray-700 mb-2"><strong>Développements :</strong> Almavia CX</p>
          <p className="text-gray-700 mb-2"><strong>Hébergement :</strong> Société Avenir Télématique (ATE)</p>
          <p className="text-gray-700 mb-2"><strong>Conception graphique et ergonomique :</strong> La Netscouade</p>
          <p className="text-gray-700 mb-2"><strong>Statistiques :</strong> Eulérian</p>
          <p className="text-gray-700">
            Le suivi technique du site est assuré au quotidien par la Délégation à la communication avec l’aide technique de la Direction du numérique pour l’éducation.
          </p>
        </section>

        {/* Section Données personnelles et cookies */}
        <section id="donnees" className="mb-8">
          <h3 className="text-xl font-bold mb-4">Données personnelles et cookies</h3>
          <p className="text-gray-700 mb-4">
            Le MESR est très attentif à la protection des données à caractère personnel et s'engage à ce que la collecte et le traitement des données, effectués à partir de Parcoursup, soient conformes à la loi Informatique et Libertés et au règlement général sur la protection des données (RGPD).
          </p>
          <a href="#" className="text-blue-600 hover:underline">Données personnelles et cookies &gt; Lien à ajouter</a>
        </section>

        {/* Section Propriété intellectuelle */}
        <section id="propriete" className="mb-8">
          <h3 className="text-xl font-bold mb-4">Propriété intellectuelle et réutilisation</h3>
          <p className="text-gray-700 mb-4">
            La présente charte d’usage de la marque Parcoursup détaille les entités, en particulier les formations de l’enseignement supérieur, autorisées à utiliser la marque Parcoursup et définit ses conditions d’utilisation.
          </p>
          <a href="#" className="text-blue-600 hover:underline">Télécharger la charte d'usage Parcoursup</a> <span className="text-gray-500">(PDF – 595.58 Ko)</span>
          <p className="text-gray-700 mt-4">
            Un kit de logo est mis à disposition des partenaires autorisés à utiliser le logo Parcoursup conformément à la charte d’usage.
          </p>
          <a href="#" className="text-blue-600 hover:underline">Télécharger le kit de logo</a> <span className="text-gray-500">(ZIP – 158.04 Ko)</span>
        </section>

        {/* Section Liens hypertextes */}
        <section className="mb-8">
          <h3 className="text-xl font-bold mb-4">Liens hypertextes</h3>
          <p className="text-gray-700 mb-4">
            Les Sites Internet du MESR peuvent fournir des liens hypertextes profonds pointant vers des sites Internet édités par des tiers et des références à d’autres sites Internet. Ces liens ou références ne constituent ni une approbation ni une validation de leurs contenus.
          </p>
          <p className="text-gray-700">
            La création de liens hypertextes en direction des Sites Internet du MESR est libre à la condition qu’elle ne porte pas atteinte aux intérêts matériels ou moraux du ministère de l’Enseignement supérieur et de la Recherche.
          </p>
        </section>

        {/* Section Crédits */}
        <section className="mb-8">
          <h3 className="text-xl font-bold mb-4">Crédits vidéos et photos</h3>
          <p className="text-gray-700 mb-4">
            Les ministères de l'Éducation nationale, de l’Enseignement supérieur et de la Recherche sont titulaires des droits relatifs à la propriété intellectuelle des vidéos et photographies figurant sur l'ensemble du site (sauf mention contraire).
          </p>
          <p className="text-gray-700">
            <strong>Détails des crédits vidéos :</strong> Agence Successive<br />
            <strong>Détails des crédits photos :</strong> Brooke Cagle, John Schnobrich, Alexis Brown, Anna Vander Stel - UNSPLASH RAWPIXEL
          </p>
        </section>
      </div>
    </div>
  );
}

export default MentionsLégales;
