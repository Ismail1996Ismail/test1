import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import App from './App';

import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  posts: [ 
    {
      userId: 1,
      id: 'start',
      title: "Первый",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
  ],
  loading: false,
};
const reducer = (state = initialState, action) => {
  switch(action.type){
    case 'loading' : 
      return {
        ...state,
        loading: true
      }
    case 'loadPosts' :
      return {
        ...state,
        posts:  [...state.posts, ...action.payload],
        loading: false
      }        

    default: 
      return state;
  }
}
const store = createStore(reducer, applyMiddleware(thunk))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
