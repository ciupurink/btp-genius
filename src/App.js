import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Componenta pentru Homepage
function Home() {
  return (
    <div className="App">
      <header>
        <h1 className="logo">BTP Genius</h1>
        <p className="slogan">Créez vos devis intelligents en quelques clics</p>
      </header>

      <div className="buttons">
        <Link to="/creer-devis" className="btn btn-primary">Créer un devis</Link>
        <Link to="/connexion" className="btn btn-secondary">Connexion</Link>
      </div>
    </div>
  );
}

// Componenta pentru pagina Connexion
function Connexion() {
  return (
    <div className="connexion-container">
      <h2>Connexion à BTP Genius</h2>

      <form className="connexion-form">
        <label>Email :</label>
        <input type="email" placeholder="Entrez votre email" />

        <label>Mot de passe :</label>
        <input type="password" placeholder="Entrez votre mot de passe" />

        <button type="submit" className="btn btn-primary">Se connecter</button>

        <p className="forgot-password">Mot de passe oublié ?</p>
      </form>

      <p className="signup-link">Pas encore inscrit ? <a href="#">Créez un compte</a></p>
    </div>
  );
}

// Componenta pentru pagina CreerDevis
function CreerDevis() {
  return (
    <div className="creer-devis-container">
      <h2>Créer un nouveau devis</h2>

      <form className="devis-form">
        <label>Nom du client :</label>
        <input type="text" placeholder="Entrez le nom du client" />

        <label>Adresse du chantier :</label>
        <input type="text" placeholder="Entrez l'adresse du chantier" />

        <label>Date du devis :</label>
        <input type="date" />

        <label>Description des travaux :</label>
        <textarea placeholder="Décrivez les travaux à réaliser"></textarea>

        <label>Prix estimatif (€) :</label>
        <input type="number" placeholder="Entrez le prix estimatif" />

        <button type="submit" className="btn btn-primary">Générer le devis</button>
      </form>
    </div>
  );
}

// Componenta principala App
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/creer-devis" element={<CreerDevis />} />
      </Routes>
    </div>
  );
}

export default App;
