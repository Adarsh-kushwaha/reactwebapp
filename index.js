import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import{BrowserRouter} from 'react-router-dom';
import reactDom from 'react-dom';

//browser router element
reactDom.render(
<>
  <BrowserRouter>
    <App/>
  </BrowserRouter>
</>, 
document.getElementById('root')
);
