import React, { Component } from 'react';
import Navbar from "./Navbar/Navbar";
import TourList from "./TourList/TourList";
import "./App.scss";


 class App extends Component {
  render() {
    return (
      <h1>
     <Navbar></Navbar>
      <TourList></TourList>
      </h1>
    )
  }
}

export default App
