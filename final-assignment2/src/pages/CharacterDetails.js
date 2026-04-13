import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Card } from 'react-bootstrap';

const CharacterDetails = () => {
  const params = useParams();
  const id = params.id;
  const [character, setCharacter] = useState(null);

    useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
      .then(response => setCharacter(response.data));
  }, [id]);

  if (!character) {
    return <p>Character not yet retrieved</p>;
  }

  return (
    <Container>
      <Card>
        <Card.Img src={character.image} />
        <Card.Body>
          <Card.Title>{character.name}</Card.Title>
          <Card.Text>

            <div>
              <ul>
                <li>Status: {character.status}</li>
                <li>Species: {character.species}</li>
                <li>Gender: {character.gender}</li>
                <li>Origin: {character.origin.name}</li>
                <li>Location: {character.location.name}</li>
              </ul>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CharacterDetails;