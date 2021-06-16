import React from 'react';
import './App.css';
import { Form } from '../Form/Form';
import { Review } from '../Review/Review';
import { HashRouter as Router, Route } from 'react-router-dom';

const pages = [
  {
    name: 'feeling',
    message: 'How are you feeling today?',
    dispatch: 'SET_FEELING',
  },
  {
    name: 'support',
    message: 'How well are you being supported?',
    dispatch: 'SET_SUPPORT',
  },
  {
    name: 'understanding',
    message: 'How well are you understanding the content?',
    dispatch: 'SET_UNDERSTANDING',
  },
  {
    name: 'comments',
    message: 'Any comments you want to leave?',
    dispatch: 'SET_COMMENTS',
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
        {
          pages.map((page: any, idx: number) => (
            <Route exact path={`/${idx}`} key={idx}>
              <Form
                name={page.name}
                message={page.message}
                dispatchName={page.dispatch}
                idx={idx}
                length={pages.length}
              />
            </Route>
          ))
        }
        <Route exact path='/review'>
          <Review />
        </Route>
      </Router>
    </div>
  );
}

