import { createSlice } from '@reduxjs/toolkit';
import { GetMedicationTypes } from '../types/medicationTypes';

interface MedicationState {
  medications: GetMedicationTypes[];
  selectedMedications: GetMedicationTypes;
}

const initialState: MedicationState = {
  medications: [],
  selectedMedications: {} as GetMedicationTypes,
};

export const medicationSlice = createSlice({
  name: 'medication',
  initialState,
  reducers: {
    setMedications: (state, action) => {
      state.medications = action.payload;
    },
    setSelectedMedication: (state, action) => {
      state.selectedMedications = action.payload;
    },
  },
});

export const { setMedications, setSelectedMedication } =
  medicationSlice.actions;
