import React from 'react';
import PropTypes from 'prop-types';

import './SplitInfo.css';

// This "curly braces in the argument list" syntax is called
// object destructuring. It will take all the key/value pairs
// and store them in separate variables - very convenient!
// https://medium.freecodecamp.org/the-basics-of-destructuring-props-in-react-a196696f5477
const SplitInfo = ({taxAmount, tipAmount, totalPrice, pricePerHead}) => {
  const buildLi = (text, value) => {
    return (
      <li className="text-box">
        {text}:
        ${(Math.round(value * 100) / 100).toFixed(2)}
      </li>
    );
  };
  return (
    <ul className="split-info">
      {buildLi('Tax Amount', taxAmount)}
      {buildLi('Tip Amount', tipAmount)}
      {buildLi('Total Price', totalPrice)}
      {buildLi('Price Per Head', pricePerHead)}
    </ul>
  );
};

SplitInfo.propTypes = {
  taxAmount: PropTypes.number.isRequired,
  tipAmount: PropTypes.number.isRequired,
  totalPrice: PropTypes.number.isRequired,
  pricePerHead: PropTypes.number.isRequired,
};

export default SplitInfo;
