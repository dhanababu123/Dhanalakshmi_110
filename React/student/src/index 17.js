import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//working with forms
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class SIGNUP extends React.Component{
  constructor(props){
    super(props);
    this.state = {stname:'',lname:'',email:'',pass:'',isPass:true, noOfAttempts:5};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    //this.setState({value: event.target.value});
    const target = event.target;
    const value = target.name === "isPass" ? target.checked: target.value;
    const name = target.name;

    console.log(name +" "+ value);
    this.setState({[name]:value});
  }

  handleSubmit(event){
    alert('Are you sure you want to submit your country? '+this.state.stname+" "+ this.state.isPass+" "+this.state.noOfAttempts);
    event.preventDefault();
  }
  handleChange(event){
    this.setState({value: event.target.value});
  }


  render(){
    return(
      <form onSubmit={this.handleSubmit}>
         <div><h1><center><button type="button" class="btn btn-lg">SIGNUP FORM</button></center></h1></div>
      <center><h3> <label>
          Name: 
          <input name="stname" type="text" value={this.state.stname} onChange={this.handleChange}/>
        </label></h3></center><br/>
        <center><h3> <label>
          Last Name: 
          <input name="lname" type="text" value={this.state.lname} onChange={this.handleChange}/>
        </label></h3></center><br/>
        <center><h3><label>
          Email: 
          <input name="email" type="text" value={this.state.email} onChange={this.handleChange}/>
        </label></h3></center><br/>
        <center><h3><label>
          Password: 
          <input name="pass" type="text" value={this.state.pass} onChange={this.handleChange}/>
        </label></h3></center><br/>
       <center><lable><h3>
           Gender: 
          <select value={this.state.value} onChange={this.handleChange}>
            <option value='male'>male</option>
            <option value='female'>female</option>
           </select></h3></lable></center>
       <br/>
        <center><button type="button" class="btn btn-lg">Submit</button></center>
      </form>
    );
  }
}
ReactDOM.render(  
  <SIGNUP /> ,
document.getElementById('root')
);