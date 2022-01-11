import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//working with forms
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class SIGNUP extends React.Component{
  constructor(props){
    super(props);
    this.state = {email:'',password:'',};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event){
    alert('Are you sure you want to submit your form? '+this.state.email+" "+ this.state.password+" ");
    event.preventDefault();
  }
 
   
     handleChange(event){
      const target = event.target;
      const name = target.email;
    }
    handleChange(event){
      this.setState({value: event.target.value});
    }
  
    
    this.setState({[email]:value});
  }