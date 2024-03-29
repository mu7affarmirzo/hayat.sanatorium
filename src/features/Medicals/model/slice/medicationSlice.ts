import { createSlice } from '@reduxjs/toolkit';

interface MedicationState {
  medications: any[];
  selectedMedications: any[];
}

const initialState: MedicationState = {
  medications: [],
  selectedMedications: [],
};

export const medicationSlice = createSlice({
  name: 'medication',
  initialState,
  reducers: {
    setMedications: (state, action) => {
      state.medications = action.payload;
    },
    setSelectedMedications: (state, action) => {
      state.selectedMedications = action.payload;
    },
  },
});
