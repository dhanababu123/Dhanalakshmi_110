import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


// calculator with submit

class Calculator extends React.Component{
    constructor(props){
      super(props);
      this.state={ num1: '15', num2: '3', result: '' };
     this.AddHandler = this.AddHandler.bind(this);
    this.SubHandler = this.SubHandler.bind(this);
    this.MultiHandler = this.MultiHandler.bind(this);
      this.DivHandler = this.DivHandler.bind(this);
        }
   AddHandler(){
    this.setState({ result: parseInt(this.state.num1) + parseInt(this.state.num2) })
 }
SubHandler(){
  this.setState({ result: parseInt(this.state.num1) - parseInt(this.state.num2) })
}
   MultiHandler(){
   this.setState({ result: parseInt(this.state.num1) * parseInt(this.state.num2) })
  }
   DivHandler(){
    this.setState({ result: parseInt(this.state.num1) / parseInt(this.state.num2) })
  }
  render() {
    return(
      <div>
       <h1>Answer is: {this.state.result}</h1>

       <button onClick={()=>{this.AddHandler()}} >Addition</button>
     <br/><br/>

      <button onClick={()=>{this.SubHandler()}} >Substraction</button>
         <br/><br/>
        
         <button onClick={()=>{this.MultiHandler()}} >Multiplication</button>
         <br/><br/>
        
        <button onClick={()=>{this.DivHandler()}} >Division</button>
       <br/><br/>
     </div>
    );
   }
 }
 ReactDOM.render
 (  
    <Calculator/> ,
   document.getElementById('root')
);