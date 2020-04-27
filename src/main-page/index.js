import React, { Component } from 'react';
import '../header/header.css';
import '../login/login-form.css'
import Header from '../header/header';
import Footer from '../footer/footer';
import ValidatedLoginForm from "../login/ValidatedLoginForm";


class App extends Component{
  state = {}

  render(){
    return(
      <div className="container"> 
      <Header/>
      <h1>Please Login to Proceed</h1>
      <ValidatedLoginForm />
      <Footer/>
      </div>
    );
  }
}

export default App;
