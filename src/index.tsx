import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './components/App/App';
import reportWebVitals from './reportWebVitals';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

// Initial state of reducer
const initState = {
  feeling: 0,
  understanding: 0,
  support: 0,
  comments: 0,
}

// Reducer type interface
type ACTIONTYPE =
  | { type: 'SET_FEELING'; payload: number }
  | { type: 'SET_UNDERSTANDING'; payload: number }
  | { type: 'SET_SUPPORT'; payload: number }
  | { type: 'SET_COMMENTS'; payload: string }
  | { type: 'CLEAR_FEEDBACK'; payload: any }

const feedbackReducer = (state = initState, action: ACTIONTYPE) => {
  switch (action.type) {
    case 'SET_FEELING':
      return {
        ...state,
        feeling: action.payload
      }
    case 'SET_UNDERSTANDING':
      return {
        ...state,
        understanding: action.payload
      }
    case 'SET_SUPPORT':
      return {
        ...state,
        support: action.payload
      }
    case 'SET_COMMENTS':
      return {
        ...state,
        comments: action.payload
      }
    case 'CLEAR_FEEDBACK':
      return initState;
      
    default:
      return {
        initState
      }
  }
}

const store = createStore(
  combineReducers(
    {
      feedbackReducer,
    }
  )
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();