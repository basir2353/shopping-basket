// src/features/basketSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface BasketItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string; // New property added
  titel: string; // New property added
}

interface BasketState {
  items: BasketItem[];
}

const initialState: BasketState = {
  items: [],
};

interface BasketState {
  items: BasketItem[];
}



const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action: PayloadAction<BasketItem>) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        newItem.quantity = 1;
        state.items.push(newItem);
      }
    },
    removeFromBasket: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;
export default basketSlice.reducer;
