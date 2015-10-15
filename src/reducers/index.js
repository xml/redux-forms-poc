import { combineReducers } from 'redux';
import counter from './counter';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  formReducer,
  counter
});
