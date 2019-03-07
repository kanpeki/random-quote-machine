import React, { Component } from 'react';
import '../styles/QuoteBox.css';

class QuoteBox extends Component {

   render() {

        return (
            <div id="quote-box">
                <p id="text">{this.props.text}</p>
                <p id="author">{this.props.author}</p>
                <a id="tweet-quote" style={{color:this.props.color}} href={this.props.link} target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-twitter-square" aria-hidden="true"></i>
                </a>
                <button id="new-quote" style={{backgroundColor:this.props.color}} onClick={() => this.props.reset()}>New quote</button>
            </div>
        );
    }
}

//export {QuoteBox};
export default QuoteBox;
