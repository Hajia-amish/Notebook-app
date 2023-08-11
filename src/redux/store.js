// src/redux/store.js
import { createStore } from 'redux';
import notesReducer from './notesReducer';

const store = createStore(notesReducer);

export default store;
