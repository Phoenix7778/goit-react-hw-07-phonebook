import { combineReducers } from 'redux';
import { contactsSlice } from './contactsSlice';
import { filterSlice } from './filterSlice';

export const reducer = combineReducers({
  contacts: contactsSlice.reducer,
  filter: filterSlice.reducer,
});
