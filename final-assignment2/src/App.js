import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Characters from './components/Characters';
import Footer from './components/Footer';
import CharacterDetails from './pages/CharacterDetails';
import Navigation from './components/Nav';
import Header from './components/Header';
import Info from './pages/Info';
//import Search from './components/Search';
//import SearchResults from './components/SearchResults';


function App() {
  return (
    <Router>
      <Header />
      <Navigation />
      <div>
        <Routes>
          <Route path="/" element={<Characters />} />
          <Route path="/character/:id" element={<CharacterDetails />} />
          <Route path="/pages/Info" element={<Info />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;