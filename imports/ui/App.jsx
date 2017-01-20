import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {browserHistory } from 'react-router';
import AppBar from 'material-ui/AppBar';


const style={
  backgroundColor:'#D32F2F'
}

export default class App extends Component {


  createNewGame() {
    const gameCode = Math.floor(Math.random()*100000);
    browserHistory.push(`game/${gameCode}`)

  }


  render() {
    return (
      <div>
        <header>
          <AppBar
            title="Two Rooms and a Boom"
            style={style}/>
        </header>
        {this.props.children}
      </div>
    );
  }
}
