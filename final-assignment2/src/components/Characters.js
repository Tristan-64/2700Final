import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Card, Button } from 'react-bootstrap';

const Characters = () => {
  
  //https://www.freecodecamp.org/news/how-to-use-axios-with-react/
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then(response => setCharacters(response.data.results));
  }, []);

  //https://reactnative.dev/docs/button

  return (
    <Container className="characterContainer">
      {characters.map(character => (
        <Card key={character.id}>
          <Card.Img src={character.image} />
          <Card.Body>
            <Card.Title>{character.name}</Card.Title>

            <Card.Text>
              <ul>
                <li>Status: {character.status}</li>
                <li>Species: {character.species}</li>
                <li>Gender: {character.gender}</li>
              </ul>
            </Card.Text>

            <a href={`/character/${character.id}`}>
              <Button>Details</Button>
            </a>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default Characters;