import React, { Component } from 'react';

import tinyHands from '../../assets/angry-donny.png';
import TextCard from '../textCard/TextCard';
import shuffle from '../../utils/shuffle';
import data from '../../data';

const shuffledData = shuffle(data);
const btnText = ['next', 'uff', 'jeez'];
const nextKeycodes = [13, 32, 39];

class App extends Component {
  constructor(props) {
    super(props);

    const [firstQuote, ...remainingQuotes] = shuffledData;

    this.state = {
      remainingQuotes,
      currentQuote: firstQuote,
      currentBtnIdx: 0
    };
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleNextKeyDown.bind(this));
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleNextKeyDown.bind(this));
  }

  // document keydown event to handle advancing cards
  handleNextKeyDown(e) {
    if (nextKeycodes.includes(e.keyCode)) {
      e.preventDefault();
      this.handleNext();
    }
  }


  handleNext() {
    const { remainingQuotes, currentBtnIdx } = this.state;

    if (remainingQuotes.length) {
      const [firstQuote, ...newRemainingQuotes] = remainingQuotes;

      this.setState({
        currentQuote: firstQuote,
        remainingQuotes: newRemainingQuotes,
        currentBtnIdx: currentBtnIdx + 1
      });
    } else {
      const [firstQuote, ...newRemainingQuotes] = shuffledData;

      this.setState({
        currentQuote: firstQuote,
        remainingQuotes: newRemainingQuotes,
        currentBtnIdx: currentBtnIdx + 1
      });
    }
  }

  render() {
    const { currentQuote, currentBtnIdx } = this.state;

    return (
      <div>
        <h1 className="title-text">&quot;Let&apos;s Just Give Him a Chance&quot;</h1>
        <div className="container">
          <img
            src={ tinyHands }
            alt="tiny hands donald trump"
            className="tiny-hands"
          />
          <TextCard currentQuote={ currentQuote } />
          <button className="box-shadow" onClick={ this.handleNext.bind(this) }>
            { btnText[currentBtnIdx % btnText.length] }
          </button>
        </div>
        <footer>
          <a href="mailto:letsjustgivehimachance@gmail.com" target="_top">[contribute]</a>
        </footer>
      </div>
    );
  }
}

export default App;
