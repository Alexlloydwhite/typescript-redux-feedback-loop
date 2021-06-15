import React from 'react';
import './App.css';
import { Form } from '../Form';

const pages = [
  {name: 'feeling', message: 'How are you feeling today?', dispatch: 'SET_FEELING'},
]

export const App: React.FC = () => {
  return (
    <div>
      {pages.map((page) => (
        <Form name={page.name} message={page.message} dispatchName={page.dispatch} />
      ))}
    </div>
  );
}