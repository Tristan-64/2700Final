import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Card } from 'react-bootstrap';

const CharacterDetails = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
      .then(res => setCharacter(res.data));
  }, [id]);

  if (!character) return <p>Loading...</p>;

  return (
    <Container>
      <Card>
        <Card.Img src={character.image} />
        <Card.Body>
          <Card.Title>{character.name}</Card.Title>
          <Card.Text>
            Status: {character.status}<br/>
            Species: {character.species}<br/>
            Gender: {character.gender}<br/>
            Origin: {character.origin.name}<br/>
            Location: {character.location.name}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CharacterDetails;