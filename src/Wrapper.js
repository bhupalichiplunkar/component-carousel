import React, { Component } from 'react';

class WrapperComponent extends Component {
  render() {
    return (
      <div className="wrapper" style={{left : this.props.left}}>
       {this.props.seeAllComponentFirst}
       {this.props.componentArray}
       {this.props.seeAllComponentLast}
      </div>
    );
  }
}

export default WrapperComponent;