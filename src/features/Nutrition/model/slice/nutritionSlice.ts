import { createSlice } from '@reduxjs/toolkit';
import { NutritionState } from '../types/nutritionTypes';

const initialState: NutritionState = {
  nutritionList: [],
  nutritionSupplements: [],
  nutritionExceptions: [],
};

export const nutritionSlice = createSlice({
  name: 'nutrition',
  initialState,
  reducers: {
    setNutritionList: (state, action) => {
      state.nutritionList = action.payload;
    },
    setNutritionSupplements: (state, action) => {
      state.nutritionSupplements = action.payload;
    },
    setNutritionExceptions: (state, action) => {
      state.nutritionExceptions = action.payload;
    },
  },
});

export const { setNutritionList, setNutritionSupplements, setNutritionExceptions } =
  nutritionSlice.actions;
