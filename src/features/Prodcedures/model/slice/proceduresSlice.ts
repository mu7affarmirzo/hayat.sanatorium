import { createSlice } from '@reduxjs/toolkit';

interface Procedure {
  procedures: any[];
}

const initialState: Procedure = {
  procedures: [],
};

export const proceduresSlice = createSlice({
  name: 'procedures',
  initialState,
  reducers: {
    setProcedures: (state, action) => {
      state.procedures = action.payload;
    },
  },
});

export const { setProcedures } = proceduresSlice.actions;
