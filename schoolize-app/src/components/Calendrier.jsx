import { useState } from 'react';
import { motion } from 'framer-motion';

const timelineEvents = [
  {
    date: "20 décembre 2024",
    title: "Ouverture de la plateforme",
    description: "Découvrez le catalogue des formations disponibles"
  },
  {
    date: "17 janvier 2025",
    title: "Début des inscriptions",
    description: "Créez votre dossier et formulez vos vœux"
  },
  {
    date: "14 mars 2025",
    title: "Fin des vœux",
    description: "Date limite pour formuler vos vœux"
  },
  {
    date: "3 avril 2025",
    title: "Finalisation des dossiers",
    description: "Date limite pour compléter les dossiers"
  },
  {
    date: "30 mai 2025",
    title: "Début des réponses",
    description: "Début de la phase d'admission principale"
  }
];

export default function Calendar() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-900">Calendrier Parcoursup 2025</h1>
        <p className="mt-4 text-lg text-gray-600">
          Les dates clés de la procédure d'admission
        </p>
      </motion.div>

      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-200"></div>

        <div className="space-y-8">
          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.date}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedEvent(event)}
              className={`relative flex items-center ${
                index % 2 === 0 ? 'justify-start' : 'justify-end'
              }`}
            >
              <div
                className={`w-1/2 ${
                  index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'
                }`}
              >
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                  <div className="text-indigo-600 font-semibold">{event.date}</div>
                  <h3 className="text-lg font-bold mt-1">{event.title}</h3>
                  <p className="text-gray-600 mt-2">{event.description}</p>
                </div>
              </div>

              <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-indigo-600 border-4 border-white"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedEvent && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
          onClick={() => setSelectedEvent(null)}
        >
          <div className="bg-white rounded-lg p-8 max-w-lg w-full" onClick={e => e.stopPropagation()}>
            <h2 className="text-2xl font-bold mb-4">{selectedEvent.title}</h2>
            <p className="text-indigo-600 font-semibold mb-4">{selectedEvent.date}</p>
            <p className="text-gray-600">{selectedEvent.description}</p>
            <button
              onClick={() => setSelectedEvent(null)}
              className="mt-6 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-500"
            >
              Fermer
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}