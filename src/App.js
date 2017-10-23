import React, { Component } from 'react';
import Carousel from './Carousel';
import Random from './randomComponent';
import './App.css'

class App extends Component {
  constructor(props){
    super(props);
    this.dataToRender = [
      { id : 1, text : "Hello One!"},
      { id : 2, text : "Hello Two!"},
      { id : 3, text : "Hello Three!"},
      { id : 4, text : "Hello Four!"},
      { id : 5, text : "Hello Five!"},
      { id : 6, text : "Hello Six!"},
      { id : 7, text : "Hello Seven!"},
      { id : 8, text : "Hello Eight!"}]

    this.componentArray = this.dataToRender.map((elem) => 
      <Random key={elem.id} {...elem}/>
    )
    this.SAFirst = <Random key="blah11" />
    this.SALast = <Random key="blah12" />
  }

  render() {
    return (
      <div className="App">
        <Carousel width={1000} maxComponentsInFrame={3} height={300}>
          {this.SAFirst}
          {this.componentArray}
        </Carousel>
      </div>
    );
  }
}

export default App;
