// eslint-disable-next-line
import React, { Component } from 'react';
import axios from 'axios';
import jsonResponse from './fakedata';

class Advice extends Component {
  constructor () {
    super()

    this.state = {
      pending: false,
      error: false,
      complete: false,
      num: null,
      messages: jsonResponse
    }
  }

  getNum = (response) => {
    const distance = response.data.directions[0].distance
    console.log(distance % 8)
    return distance % 8
  }

  handleClick = () => {
    axios.get('https://api.noopschallenge.com/directbot?count=1')
      .then(response => this.getNum(response))
      .then(num => this.setState({
        pending: false,
        error: false,
        complete: true,
        num: num
      }))
  }

  render() {
    const isComplete = this.state.complete;
    const messages = this.state.messages;
    let content;

    if (isComplete) {
      content = <h2 className="advice__message">{messages.advice[this.state.num].content}</h2>
    } else {
      content = <h2 className="advice__message">Advice will appear here</h2>
    }
    return (
      <div className="advice">
        <button 
          className="advice__button" 
          onClick={this.handleClick}>
          the button
        </button>
        <article className="advice__article">
          {content}
        </article>
      </div>
    )
  }
}

export default Advice;



