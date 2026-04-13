import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function CharacterCard({ character }) {
  return (
    <Card class = 'characterContainer'>
      <Card.Img src={character.image} />
      <Card.Body>
        <Card.Title>{character.name}</Card.Title>

        <Card.Text>
          <div>
            <ul>
              <li>Status: {character.status}</li>
              <li>Species: {character.species}</li>
              <li>Gender: {character.gender}</li>
            </ul>
          </div>
        </Card.Text>

        <Link to={"/character/" + character.id}>
          <Button>Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default CharacterCard;