import React, { Component } from 'react';

class Random extends Component {
  render() {
    return (
      <div className="random">
       {this.props.text ? this.props.text : "See More"}
      </div>
    );
  }
}

export default Random;