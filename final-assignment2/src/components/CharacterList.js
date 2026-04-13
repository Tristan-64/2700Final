import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';
import { Container } from 'react-bootstrap';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then(response => setCharacters(response.data.results))
  }, []);


  return (
    <Container className = 'characterContainer'>
        {characters.map(character => (
          <div key={character.id}>
            <CharacterCard character={character} />
          </div>
        ))}
    </Container>
  );
};

export default CharacterList;