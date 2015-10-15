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
  handleSubmit(event, data) {
    event.preventDefault();
    console.log(event); // this should be the data, but is an event
    console.log(data); // no data here, either...
    console.log('Submission received!', data);
    this.props.dispatch(initialize('contact', {})); // clear form: THIS works
    return false;
  }

  _increment () {
    this.props.dispatch({ type : 'COUNTER_INCREMENT' });
  }


  render () {
    const fields = {
      name: '',
      address: '',
      phone: ''
    };

    return (
      <div className='container text-center'>
        <h1>Welcome to the React Redux Starter Kit</h1>
        <h2>Sample Counter: {this.props.counter}</h2>
        <button className='btn btn-default'
                onClick={::this._increment}>
          Increment
        </button>
        <ContactForm handleSubmit={this.handleSubmit.bind(this)} fields={fields} />
      </div>
    );
  }
}

export default connect(mapStateToProps)(HomeView);
