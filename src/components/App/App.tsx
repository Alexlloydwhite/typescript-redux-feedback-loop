import React from 'react';
import './App.css';
import { Form } from '../Form/Form';
import { HashRouter as Router, Route } from 'react-router-dom';

const pages = [
  {
    name: 'feeling',
    message: 'How are you feeling today?',
    dispatch: 'SET_FEELING',
    next: 'support'
  },
  { 
    name: 'support', 
    message: 'How well are you being supported?', 
    dispatch: 'SET_SUPPORT', 
    next: '/understanding' 
  },
  {
    name: 'understanding',
    message: 'How well are you understanding the content?',
    dispatch: 'SET_UNDERSTANDING',
    next: '/comments'
  }
]

export const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Feedback!</h1>
        <h4>Don't Forget It!</h4>
      </header>
      <Router>
        {pages.map((page, idx) => (
          <Route exact path={`/${page.name}`} key={idx}>
            <Form name={page.name} message={page.message} dispatchName={page.dispatch} next={page.next} />
          </Route>
        ))}
      </Router>
    </div>
  );
}