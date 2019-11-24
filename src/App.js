import React , { Component } from 'react';
import { BrowserRouter , Route } from 'react-router-dom'
import './App.css';

import Navbar from './Components/Navbar'
import Contact from './Components/Contact/ContactForm'
import Index from './Components/Index'
import Profile from './Components/Profile'
import Work from './Components/Work'
import About from './Components/About'
import Portfolio from './Components/Portfolio'



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Route exact path='/' component={Index} />
        <Route path='/contact' component={Contact} />
        <Route path='/profile' component={Profile} />
        <Route path='/work' component={Work} />
        <Route path='/about' component={About} />
        <Route path='/portfolio' component={Portfolio} />
      </BrowserRouter>
    )
  }
}

export default App;
