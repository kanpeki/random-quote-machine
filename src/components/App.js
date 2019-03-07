import React, { Component } from 'react';
//import {QuoteBox} from './QuoteBox';
import QuoteBox from './QuoteBox';
import Footer from './Footer';
import '../styles/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
			initialPos: 0,
      pos: 0,
      color: "",
      text: "",
			author: "",
			link: "https://twitter.com/intent/tweet"
    };
  };

  componentDidMount() {
    this.setQuoteAndColor();
  };

  setQuoteAndColor = () => {
    this.setQuote().then(this.setColor());
  }

  getNumber = (count) => {
    var min = 0;
    var max = count;            
    var newPos = Math.floor(Math.random() * (max - min)) + min;
    if (this.state.previousPos === newPos) {
        newPos = this.getNumber();
    }
    this.setState({previousPos: newPos});
    return newPos;
  }

  setQuote = async () => 
  {
    // const getQuote = async () => {
    //   const response = await fetch('https://cors-anywhere.herokuapp.com/http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en');	
    //   const myJson = await response.json();
    //   var text = myJson.quoteText;
    //   var author = myJson.quoteAuthor.length > 0 ? myJson.quoteAuthor : "Anonymous";
    //   return {text, author};
    // };

    const quotes = [
      {text: "It's the possibility of having a dream come true that makes life interesting.", author: "Paulo Coelho"},
      {text: "No one can make you feel inferior without your consent.No one can make you feel inferior without your consent.", author: "Eleanor Roosevelt"},
      {text: "It is better to remain silent at the risk of being thought a fool, than to talk and remove all doubt of it.", author: "Maurice Switzer"},
      {text: "The fool doth think he is wise, but the wise man knows himself to be a fool.", author: "William Shakespeare"},
      {text: "Whenever you find yourself on the side of the majority, it is time to reform (or pause and reflect).", author: "Mark Twain"},
      {text: "Knowing yourself is the beginning of all wisdom.", author: "Aristotle"},
      {text: "Never let your sense of morals prevent you from doing what is right.", author: "Isaac Asimov"},
      {text: "The only true wisdom is in knowing you know nothing.", author: "Socrates"},
      {text: "The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom.", author: "Isaac Asimov"},
      {text: "Count your age by friends, not years. Count your life by smiles, not tears.", author: "John Lennon"},
      {text: "May you live every day of your life.", author: "Jonathan Swift"},
      {text: "It is the mark of an educated mind to be able to entertain a thought without accepting it.", author: "Aristotle"},
      {text: "The secret of life, though, is to fall seven times and to get up eight times.", author: "Paulo Coelho"},
      {text: "The unexamined life is not worth living.", author: "Socrates"},
      {text: "Think before you speak. Read before you think.", author: "Fran Lebowitz"}
  ];

    let pos = this.getNumber(quotes.length);
    let quote = quotes[pos];

    //let quote = await getQuote();

    this.setState({text: quote.text });
    this.setState({author: quote.author });
    this.setState({link: "https://twitter.com/intent/tweet?text=\"" + quote.text + "\" by " + quote.author });
  }

  setColor = () => {
    var letters = '0123456789ABCDEF';
    var newColor = '#';
    for (var i = 0; i < 6; i++) {
      newColor += letters[Math.floor(Math.random() * 16)];
    }
    this.setState({color: newColor});
  }

  render() {
    return (
      <div className="app-container" style={{color: this.state.color, backgroundColor: this.state.color}}>
        <QuoteBox text={this.state.text} author={this.state.author} link={this.state.link} color={this.state.color} reset={this.setQuoteAndColor} />
				<Footer />
      </div>
    );
  }
}

export default App;
