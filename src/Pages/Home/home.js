import React, { useState } from "react";
import { Form, Card, Row, Col, Button } from 'react-bootstrap';
import './home.css';
import api from "../../Service/api";
import { setUserData, getUserData } from "../../Service/localStorage";

function Home(props) {
   const [name, setName] = useState('');
   const [error, setError] = useState('');
   const [show, setShow] = useState(false);
   
   const handleSubmit = async (e) => {
      e.preventDefault();

      await api.get(`/users/${name}`).then( res => {
         setUserData(res.data);
      })
      .catch( error => {
         setError('Usuário não encontrado.')
         // handle error
         // console.log(error);
      });
   }

   return (
      <React.Fragment>
         <Row style={{ margin: "auto" }}>
         { getUserData }
            <Col>
               <Card className="rounded border">
                  <Card.Body>
                     <Card.Title className="border-bottom"> Consulte sua conta do GitHub </Card.Title>
                     {/* Mostra mensagem de erro. */}
                     <div>
                        {error && <p>{error}</p>}
                     </div>
                     <Form onSubmit={(e) => handleSubmit(e)}>
                        <label>Nome/Apelido</label><br/>
                        <input className="form-control" type="text" placeholder="Entre com seu nome ou apelido." value={name} onChange={ (e) => setName(e.target.value) }  /> <br/>
                        <Button type="submit" className="float-right">Acessar</Button>
                     </Form>
                  </Card.Body>
               </Card>
            </Col>
         </Row>
      </React.Fragment>
   );
}


export default(Home);
