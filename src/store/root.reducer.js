import { combineReducers } from 'redux';
import { CustomReducer } from './Custom.reducer';

export const RootReducer = combineReducers({
   custom: CustomReducer
})
