import React, { Component } from 'react';
import s from './styles';

class WrapperComponent extends Component {
  render() {
    return (
      <s.Wrapper left = {this.props.left}>
       {this.props.seeAllComponentFirst}
       {this.props.componentArray}
       {this.props.seeAllComponentLast}
      </s.Wrapper>
    );
  }
}

export default WrapperComponent;