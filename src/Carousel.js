import React, { Component } from 'react';
import WrapperComponent from './Wrapper';

class Carousel extends Component {
  constructor(props){
    super(props);
    this.maxComponentsInFrame = props.maxComponentsInFrame ? props.maxComponentsInFrame : 3;
    this.state = {
      activeFrame : 1,
      totalFrames : this.calculateFrames(props),
      left : 0,
      shouldHidePrev : true,
      shouldHideNext : props.componentArray.length > 3 ? false : true
    }
    this.previousFrame = this.previousFrame.bind(this);
    this.nextFrame = this.nextFrame.bind(this);
  }

  calculateFrames(props){
    let length = props.componentArray.length;
    if(props.seeAllComponentFirst){
        length+=1;
    }
    if(props.seeAllComponentLast){
        length+=1
    }
    return (length % this.maxComponentsInFrame === 0) ? Math.floor(length / this.maxComponentsInFrame) : Math.ceil(length / this.maxComponentsInFrame)
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
      <div className="carousel">
        <div style={{"line-height" : `${this.props.height}px`, height : `${this.props.height}px`}} className={`prev ${this.state.shouldHidePrev ? 'hide' : ''}`} > 
         <div onClick={this.previousFrame}>&#60;</div>
        </div>
        <div className="outer-container" style={{height : `${this.props.height}px`, width : `${this.props.width}px`}}>
          <WrapperComponent left={`${this.state.left}px`} componentArray={this.props.componentArray} seeAllComponentFirst = {this.props.seeAllComponentFirst} seeAllComponentLast = {this.props.seeAllComponentLast}/>
        </div>
        <div style={{"line-height" : `${this.props.height}px`, height : `${this.props.height}px`}} className={`next ${this.state.shouldHideNext? 'hide' : ''}`} > 
          <div onClick={this.nextFrame}>&#62;</div>
        </div>
      </div>
    );
  }
}

export default Carousel;
