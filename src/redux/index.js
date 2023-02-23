import { configureStore } from "@reduxjs/toolkit";
import { counterRreducer } from "./reducers/CounterReducer";

export const store = configureStore({ reducer: counterRreducer });
