import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App1(props){
  return<h1>hello{props.name}</h1>
}

ReactDOM.render(
  
    <App1 name ="DHANA"/>,
  
  document.getElementById('root')
);

