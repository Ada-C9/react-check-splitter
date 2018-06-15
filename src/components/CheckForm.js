import React from 'react';
import PropTypes from 'prop-types';

import './CheckForm.css';

class CheckForm extends React.Component {
  static propTypes = {
    subtotal: PropTypes.string,
    tax: PropTypes.string,
    tip: PropTypes.string,
    split: PropTypes.string,
    updateCheckCallback: PropTypes.func.isRequired,
  }

  // Commented out because we're now defining a separate
  // function for each input element
  // onInputChange = (event) => {
  //   const key = event.target.name;
  //   const value = event.target.value;
  //   this.props.updateCheckCallback(key, value);
  // }

  // Inputs all look pretty much the same, so we'll
  // use a helepr method to construct them.
  buildInput(name, text) {
    const inputClosure = (event) => {
      // Referencing 'name', which comes in from outside,
      // makes this a closure. We end up building a
      // sparate function for each input, each of which
      // has the same code but a different name to work with.
      this.props.updateCheckCallback(name, event.target.value)
    }
    return (
      <div>
        <label htmlFor={name} className="text-box">
          {text}
        </label>
        <input
          name={name}
          value={this.props[name]}
          onChange={inputClosure}
          />
      </div>
    );
  }

  render() {
    return (
      <form className="check-form">
        {this.buildInput('subtotal', 'Price before tax / tip')}
        {this.buildInput('tip', 'Tip percentage')}
        {this.buildInput('tax', 'Tax percentage')}
        {this.buildInput('split', 'Split how many ways')}
      </form>
    )
  }
}


export default CheckForm;
