import React from 'react';
import '../styles/QuoteBox.css';

const QuoteBox = (props) => {
    const { text, author, color: randomColor, link, reset} = props
    return (
        <div id="quote-box">
            <p id="text">{text}</p>
            <p id="author">{author}</p>
            <a id="tweet-quote" style={{color: randomColor}} href={link} target="_blank" rel="noopener noreferrer">
                <i className="fa fa-twitter-square" aria-hidden="true"></i>
            </a>
            <button id="new-quote" style={{backgroundColor: randomColor}} onClick={() => reset()}>New quote</button>
        </div>
    );
};

export default QuoteBox;