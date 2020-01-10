import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

function User() {
   return (
      <React.Fragment>
         <Row>
            <Col>
               <Card>
                  <Card.Title>Dados Usuário</Card.Title>
                  <Card.Body>
                     <label>Apelido:  </label>
                  </Card.Body>
               </Card>
            </Col>
         </Row>
      </React.Fragment>
   );
}

export default (User);