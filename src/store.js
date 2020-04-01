import { createStore } from 'redux';
import usersReducer  from './reducer';

export default createStore(usersReducer);