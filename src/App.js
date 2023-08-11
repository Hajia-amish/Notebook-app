// src/App.js
import React from 'react';
import './App.css';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div className="App">
        <h1>Notebook App</h1>
        <Container>
      <Row className="flex-wrap">
        <Col md={6} className='not'>
        <NoteForm />
        </Col>
        <Col md={6}> <NoteList /></Col>
      </Row>
    </Container>
      
        
       
      
    </div>
  );
}

export default App;
