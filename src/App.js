import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import Login from './components/Login'
import Welcome from './components/Welcome'
import FetchUserData from './components/FetchUserData'
import UserResults from './components/UserResults'
import PlaylistForm from './components/PlaylistForm'
// import { Header } from 'semantic-ui-react'

// const failureMessage = () => { return <Header as="h1">Something went wrong logging into Spotify...</Header> }

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={Welcome}/>
        <Route exact path='/success' component={Login}/>
        <Route exact path='/fetch-user-data' component={FetchUserData}/>
        <Route exact path='/user-results' component={UserResults}/>
        <Route exact path='/playlist-form'component={PlaylistForm}/>

      </div>
    );
  }
}

export default App;
