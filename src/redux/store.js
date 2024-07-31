// redux/store.js

import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../redux/todoSlice'; 

const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

export default store;
