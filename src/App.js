import React, { Component } from 'react';
import './App.css';
import PhotoCarousel from './Components/carousel'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <div>
            <PhotoCarousel />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
