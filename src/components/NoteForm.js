// src/components/NoteForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../redux/notesActions';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

const NoteForm = () => {
  const [note, setNote] = useState({ title: '', date: '', text: '' });
  const dispatch = useDispatch();

  const handleAddNote = () => {
    if (note.title && note.date && note.text) {
      dispatch(addNote({ ...note, id: Date.now() }));
      setNote({ title: '', date: '', text: '' });
    }
  };

  return (
    <div className='form'>

      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control 
        type="text" 
        placeholder="Enter Title"  
        value={note.title} 
        onChange={(e) => setNote({ ...note, title: e.target.value })}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control 
        type="date" 
        placeholder="Select Date"  
        value={note.date} 
        onChange={(e) => setNote({ ...note, date: e.target.value })}
        />
      </Form.Group>

      <FloatingLabel controlId="floatingTextarea2" label="Note Text">
        <Form.Control
          as="textarea"
          placeholder="Leave a note here"
          value={note.text}
          onChange={(e) => setNote({ ...note, text: e.target.value })}
          style={{ height: '100px' }}
        />
      </FloatingLabel>
      <Button variant="primary"onClick={handleAddNote} className='mt-4'>
        Add Note
      </Button>
    </Form>
    </div>
  );
};

export default NoteForm;
