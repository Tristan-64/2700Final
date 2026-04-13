import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CharacterCard = ({ character }) => (
  <Card>
    <Card.Img src={character.image} />
    <Card.Body>
      <Card.Title>{character.name}</Card.Title>
      <Card.Text>
        Status: {character.status}<br/>
        Species: {character.species}<br/>
        Gender: {character.gender}
      </Card.Text>
      <Link to={"/character/" + character.id}>
        <Button>Details</Button>
      </Link>
    </Card.Body>
  </Card>
);

export default CharacterCard;