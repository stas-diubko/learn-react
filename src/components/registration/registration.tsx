import React from 'react';
import './registration.css';
import { func } from 'prop-types';
import { addUser } from '../../redux/actions';
import { connect } from "react-redux";
import { Dispatch } from 'redux';

class Registr extends React.Component  {

  state:any = {
    name: '',
    pass: '',
    email: '',
  }

  handle = (event: any) =>
    this.setState({ [event.target.name]: event.target.value 
    } as any)

  handleSubmit = () => {
      fetch('http://localhost:3000/users', {
        method: 'POST', 
        body: JSON.stringify(this.state), 
        headers:{
          'Content-Type': 'application/json'
        }
      })
  }
   
  render () {
    return (
      <div className="Registr">
          <h3>Registration</h3>
          <form onSubmit={this.handleSubmit}>
              <input type="text" name="name" placeholder="Your Name" onChange={this.handle} value={this.state.name}/>
              <div className="form-error">{this.state.nameError }</div>
              <input type="email" name="email" placeholder="Your Email" onChange={this.handle} value={this.state.email}/>
              <div className="form-error">{this.state.emailError }</div>
              <input type="password" name="pass" placeholder="Your Pass" onChange={this.handle} value={this.state.pass}/>
              <div className="form-error">{this.state.passError }</div>
              <button>Send</button>
          </form>
          {/* <button onClick={() => this.state.dispatch(addUser())}>click</button>          */}
      </div>
    );
  }
  
 
}

export default Registr;


