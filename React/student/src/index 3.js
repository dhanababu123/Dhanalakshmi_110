import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Calc(props)
{
  let a = parseInt(props.a);
  let b= parseInt(props.b);
  let c= parseInt(props.c);
  let result=(a+b+c)/3;
  let gradepoint;
  if(result>=90 && result<=100)
    {
      gradepoint="A"
    }
  else if(result>=80 && result<90)
    {
      gradepoint= "B";
    }
  else if(result>=70 && result<=80)
    {
      gradepoint =  "C";
    }
    return <h1>Grade is {gradepoint}</h1>

}
ReactDOM.render(
        <Calc a="90" b="93" c="96" />
       ,
      document.getElementById('root')
    );
