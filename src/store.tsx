// src/store.ts
import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./features/basketSlice";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

