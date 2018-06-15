import React from 'react';

import './CheckSplitterContainer.css';

import CheckForm from './CheckForm';
import SplitInfo from './SplitInfo';
import DansButtonList from './DansButtonList';

const FORM_KEYS = ['subtotal', 'tip', 'tax', 'split'];

class CheckSplitterContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      subtotal: '0',
      tip: '20',
      tax: '10',
      split: '1',
    }
  }

  updateCheck = (key, value) => {
    if (!FORM_KEYS.includes(key)) {
      throw new Error(`Invalid key "${key}" passed in to updateCheck (value "${value}")`);
    }
    console.log(`Updating check, ${key}: ${value}`);
    const update = {}
    update[key] = value;
    this.setState(update);
  }

  calculateSplit() {
    const numbers = {
      subtotal: parseFloat(this.state.subtotal),
      tax: parseFloat(this.state.tax) / 100,
      tip: parseFloat(this.state.tip) / 100,
      split: parseInt(this.state.split),
    }
    const split = {
      taxAmount: numbers.subtotal * numbers.tax,
      tipAmount: numbers.subtotal * numbers.tip,
    }
    split.totalPrice = numbers.subtotal + split.taxAmount + split.tipAmount;
    split.pricePerHead = split.totalPrice / numbers.split;

    return split;
  }

  render() {
    // Down below we use the spread operator (...)
    // to break this object out into separate props
    const splitData = this.calculateSplit();
    return(
      <div className="check-splitter-container">
        <CheckForm
          subtotal={this.state.subtotal}
          tip={this.state.tip}
          tax={this.state.tax}
          split={this.state.split}
          updateCheckCallback={this.updateCheck}
          />
        <SplitInfo {...splitData}/>
        <DansButtonList />
      </div>
    );
  }
}

export default CheckSplitterContainer;
