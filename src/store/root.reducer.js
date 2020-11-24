import { combineReducers } from 'redux';
import { CustomReducer } from './custom.reducer';

export const RootReducer = combineReducers({
   custom: CustomReducer
})
