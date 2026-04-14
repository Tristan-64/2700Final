import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Card } from 'react-bootstrap';

const CharacterDetails = () => {
  
  //https://stackoverflow.com/questions/60998386/using-the-useparams-hook-in-react
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  //https://www.freecodecamp.org/news/how-to-use-axios-with-react/
  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
      .then(response => setCharacter(response.data));
  }, [id]);

  if (!character) {
    return <p>Character not yet retrieved</p>;
  }

  return (
    <Container className = "characterContainer">
      <Card>
        <Card.Img src={character.image} />
        <Card.Body>
          <Card.Title>{character.name}</Card.Title>
          <Card.Text>
              <ul>
                <li>Status: {character.status}</li>
                <li>Species: {character.species}</li>
                <li>Gender: {character.gender}</li>
                <li>Origin: {character.origin.name}</li>
                <li>Location: {character.location.name}</li>
              </ul>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CharacterDetails;