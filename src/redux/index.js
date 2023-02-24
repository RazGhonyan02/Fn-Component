import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { counterReducer } from "./reducers/CounterReducer";
import { LoginReducer } from "./reducers/LoginReducer";

export const store = configureStore(
  {
    reducer: combineReducers(
      { counter: counterReducer, token: LoginReducer }
    )
  }
);
