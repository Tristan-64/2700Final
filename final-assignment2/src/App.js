import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CharacterList from './components/CharacterList';
import Footer from './components/Footer';
import CharacterDetails from './pages/CharacterDetails';
import Navigation from './components/Nav';
import Header from './components/Header';
import Search from './components/Search';
import Info from './pages/Info';


function App() {
  return (
    <Router>
      <Header />
      <Navigation />
      <Search />
      <div>
        <Routes>
          <Route path="/" element={<CharacterList />} />
          <Route path="/character/:id" element={<CharacterDetails />} />
          <Route path="/pages/Info" element={<Info />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;