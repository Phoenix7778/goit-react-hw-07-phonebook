import { configureStore } from '@reduxjs/toolkit';
import { fetchContacts } from './operations';
import { reducer } from './reducer';

export const store = configureStore({
  reducer: reducer,
});

store.dispatch(fetchContacts());
