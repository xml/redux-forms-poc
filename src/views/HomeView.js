import React       from 'react';
import { connect } from 'react-redux';
import {initialize} from 'redux-form';

import ContactForm from '../components/contact-form/ContactForm.js';

const mapStateToProps = (state) => ({
  counter : state.counter
});
export class HomeView extends React.Component {
  static propTypes = {
    dispatch : React.PropTypes.func.isRequired,
    counter  : React.PropTypes.number
  }

  constructor () {
    super();
  }
  handleSubmit(data) {
    console.log('Submission received!', data);
    this.props.dispatch(initialize('contact', {})); // clear form: THIS works
  }

  _increment () {
    this.props.dispatch({ type : 'COUNTER_INCREMENT' });
  }


  render () {
    return (
      <div className='container text-center'>
        <h1>Welcome to the React Redux Starter Kit</h1>
        <h2>Sample Counter: {this.props.counter}</h2>
        <button className='btn btn-default'
                onClick={::this._increment}>
          Increment
        </button>
        <ContactForm onSubmit={this.handleSubmit.bind(this)} />
      </div>
    );
  }
}

export default connect(mapStateToProps)(HomeView);
