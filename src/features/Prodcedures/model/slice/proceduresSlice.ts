import { createSlice } from '@reduxjs/toolkit';
import { ProcedureTypes } from 'features/Prodcedures/model/types';

interface ProcedureSliceTypes {
  procedures: ProcedureTypes;
}

const initialState: ProcedureSliceTypes = {
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
