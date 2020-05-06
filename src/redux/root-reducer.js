import { combineReducers } from 'redux';
import {donateReducer } from './donate/donate.reducer';


export default combineReducers({
    donate:donateReducer
});