import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


/*
  [x]  1) Le shortnopsis : un bouton pour afficher le synopsis complet
  [x]  1.a) Faire en sorte que le bouton devienne "Voir moins" et qu'il marche
  [x]  1.b) Faire en sorte que le bouton disparaisse après le click
  [x]  1.c) Faire disparaitre les flèche de droite/gauche de la Gallery quand c'est nécessaire
  [x]  2) Les favoris : ajouter un système de favoris pour chaque film
  [x]  2.a) Les favoris survivent un rafraichissement
  [x]  3) Ajouter un système de tri dans App (pas de nouveau composant) : un bouton pour trier par année croissante/décroissante
  []  3.a) La même, mais dans un nouveau composant
  []  3.b) Ajouter des boutons pour les autres champs (ordre alphabétique/inverse)
  []  4) Champs de recherche directement dans l'App (pas de nouveau composant)
  []  4.a) La même, mais dans un nouveau composant
  []  4.b) Quand on clique sur le nom d'un réalisateur, il apparait dans le champs de recherche
  []  5) Un bouton supprimer (par film)
 */
