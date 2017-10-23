import React, { Component } from 'react';
import WrapperComponent from './Wrapper';
import s from './styles';

class Carousel extends Component {
  constructor(props){
    super(props);
    this.maxComponentsInFrame = props.maxComponentsInFrame ? props.maxComponentsInFrame : 3;
    this.state = {
      activeFrame : 1,
      totalFrames : this.calculateFrames(props),
      left : 0,
      shouldHidePrev : true,
      shouldHideNext : this.length > 3 ? false : true
    }
    this.previousFrame = this.previousFrame.bind(this);
    this.nextFrame = this.nextFrame.bind(this);
  }

  calculateFrames(props){
    let {children} = props;
    this.length = 0;
    this.length = children.reduce((sum,child)=>{
      if(child.hasOwnProperty("length")){
        sum += child.length;
      } else  {
        sum += 1;
      }
      return sum;
    },0)
    return (this.length % this.maxComponentsInFrame === 0) ? Math.floor(this.length / this.maxComponentsInFrame) : Math.ceil(this.length / this.maxComponentsInFrame)
  }

  previousFrame(){
    let activeFrame = this.state.activeFrame > 1 ? this.state.activeFrame-1 :  this.state.activeFrame
    let shouldHideNext = activeFrame < this.state.totalFrames ? false : true;
    let shouldHidePrev = activeFrame > 1 ? false : true;
    let left = this.state.left + this.props.width;
    this.setState({
      activeFrame,
      left,
      shouldHideNext,
      shouldHidePrev
    })
    console.log(shouldHideNext,shouldHidePrev);
  }

  nextFrame () {
    let activeFrame = this.state.activeFrame < this.state.totalFrames ? (
      this.state.activeFrame + 1) :  this.state.activeFrame
    let left = this.state.left - this.props.width;
    let shouldHideNext = activeFrame < this.state.totalFrames ? false : true;
    let shouldHidePrev = activeFrame > 1 ? false : true;
    this.setState({
      activeFrame,
      left,
      shouldHideNext,
      shouldHidePrev
    })
  }

  render() {
    return (
      <s.Carousel>
        <s.CarouseButton className={this.props.button} height={`${this.props.height}px`}> 
          <s.ButtonText hide ={this.state.shouldHidePrev} onClick={this.previousFrame}>&#60;</s.ButtonText>
        </s.CarouseButton>
        <s.OuterContainer height = {`${this.props.height}px`} width = {`${this.props.width}px`}>
          <WrapperComponent left={`${this.state.left}px`}>
            {this.props.children}
          </WrapperComponent>
        </s.OuterContainer>
        <s.CarouseButton height={`${this.props.height}px`}> 
          <s.ButtonText hide ={this.state.shouldHideNext} onClick={this.nextFrame}>&#62;</s.ButtonText>
        </s.CarouseButton>
      </s.Carousel>
    );
  }
}

export default Carousel;
