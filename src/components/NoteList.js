// src/components/NoteList.js
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateNote, deleteNote } from "../redux/notesActions";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import '../App.css';

const NoteList = () => {
  const notes = useSelector((state) => state);
  const dispatch = useDispatch();
  const [editedNote, setEditedNote] = useState(null);

  const handleEditNote = (note) => {
    setEditedNote(note);
  };

  const handleSaveEdit = () => {
    if (editedNote) {
      dispatch(updateNote(editedNote.id, editedNote));
      setEditedNote(null);
    }
  };

  const handleDeleteNote = (noteId) => {
    dispatch(deleteNote(noteId));
  };

  return (
    <div className="note">
      {notes.map((note) => (
        <div key={note.id}>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Title: {note.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
             Date: {note.date}
              </Card.Subtitle>
              {editedNote === note ? (
            <FloatingLabel controlId="floatingTextarea2" label="Note Text">
              <Form.Control
              as="textarea"
                value={note.text}
                style={{ height: '100px' }}
                onChange={(e) =>
                  setEditedNote({ ...note, text: e.target.value })
                }
              />
              <Button variant="success" onClick={handleSaveEdit} className='mt-4'>Save</Button>
              </FloatingLabel>
          ) : (
            <div>
                            <Card.Text>
              {note.text}
              </Card.Text>
              <Button variant="info" onClick={() => handleEditNote(note)} className='margin'>Edit</Button>
              <Button variant="danger" onClick={() => handleDeleteNote(note.id)} >Delete</Button>
            </div>
          )}
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
