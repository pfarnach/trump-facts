import React, { PropTypes } from 'react';

const TextCard = ({ currentQuote }) => {
  return (
    <div className="card box-shadow">
      <h1>{ currentQuote.text }</h1>
      <a
        href={ currentQuote.src }
        target="_blank"
        rel="noopener noreferrer"
      >
        [source]
      </a>
    </div>
  );
};

TextCard.propTypes = {
  currentQuote: PropTypes.shape({
    text: PropTypes.string,
    src: PropTypes.string,
  }).isRequired
};

export default TextCard;
