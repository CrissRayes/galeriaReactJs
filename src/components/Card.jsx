import React from 'react';
import { Button, Card as BootCard } from 'react-bootstrap';

const Card = (props) => {
  const { src, title, description } = props;
  return (
    <BootCard style={{ width: '20rem' }}>
      <BootCard.Img
        variant='top'
        src={src}
      />
      <BootCard.Body>
        <BootCard.Title>{title}</BootCard.Title>
        <BootCard.Text>{description}</BootCard.Text>
        <Button variant='primary'>Mas info...</Button>
      </BootCard.Body>
    </BootCard>
  );
};

export default Card;
