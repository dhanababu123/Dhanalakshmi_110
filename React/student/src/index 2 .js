
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Addition(props){
  let result = props.a+ props.b;
  let result1 = props.a - props.b;
  let result2 = props.a * props.b;
  let result3 = props.a / props.b;



  return <h1>Addition of {props.a} and {props.b} add= {result} sub= {result1} mul= {result2} div= {result3}</h1>
}

ReactDOM.render(  
    <Addition a="10" b="20"/> ,
  document.getElementById('root')
);


