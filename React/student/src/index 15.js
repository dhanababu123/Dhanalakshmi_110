import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



//working with forms

class Form extends React.Component{
  constructor(props){
    super(props);
    this.state = {stname:'',lname:'',email:'',password:'',isPass:true, noOfAttempts:5};
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
    alert('Are you sure you want to submit your Form? '+this.state.stname+" "+ this.state.isPass+" "+this.state.noOfAttempts);
    event.preventDefault();
  }


  render(){
    return(
      <form onSubmit={this.handleSubmit}><fieldset>
       <div><h1><center><button type="button" class="btn btn-lg">SIGNUP FORM</button></center></h1></div>
       <center><h3><label>
         Name:
          <input name="stname" type="text" value={this.state.stname} onChange={this.handleChange}/>
        </label></h3><br/>
        <h3><label>
          Last Name: 
          <input name="lname" type="text" value={this.state.lname} onChange={this.handleChange}/>
        </label> </h3><br/><br/>
        <h3><label>
          Email: 
          <input name="email" type="text" value={this.state.email} onChange={this.handleChange}/>
        </label> </h3> <br/> <br/>
        <h3><label>
          password: 
          <input name="password" type="text" value={this.state.password} onChange={this.handleChange}/>
        </label> </h3><br/>
        <h3><label>
          IsPass?
          <input name="isPass" type="checkbox" checked={this.state.isPass} onChange={this.handleChange}/>
        </label></h3><br/>
       <h3> <label> 
         No of attempts:
          <input name="noOfAttempts" type="number" value={this.state.noOfAttempts} onChange={this.handleChange}/>
        </label></h3><br/></center>
      <center>  <input type="Submit" value="Submit" /></center>
      </fieldset> </form>
    );
  }
}

ReactDOM.render(  
  <Form /> ,
document.getElementById('root')
);
