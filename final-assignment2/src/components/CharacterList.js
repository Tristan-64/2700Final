import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';
import { Container, Row, Col } from 'react-bootstrap';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then(res => setCharacters(res.data.results))
      .catch(err => console.error(err));
  }, []);


  return (
    <Container>
      <h1>Rick and Morty Characters</h1>
      <Row>
        {characters.map(character => (
          <Col key={character.id}>
            <CharacterCard character={character} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CharacterList;