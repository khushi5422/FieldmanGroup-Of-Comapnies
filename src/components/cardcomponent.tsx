import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <Card className="" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="frp-washers.jpg/" />
      <Card.Body>
        <Card.Title>Furnace Stanchion Assembly</Card.Title>
        <Card.Text>
          We offer Magnetic Yoke/ shunt for Steel shall induction furnace with highest 15MT capacity of furnace.
          We are having in-house manufacturing capacity for all induction furnace spare parts.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;