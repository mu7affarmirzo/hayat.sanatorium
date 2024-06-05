import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GetMyPatients } from 'features/DoctorsRoleService/types';

export interface DynamicTopPatientTab {
  data: GetMyPatients[];
  loading: boolean;
  error: string | null;
  selectedPatient: GetMyPatients | null; // Changed to store the selected patient
}

const initialState: DynamicTopPatientTab = {
  data: [],
  loading: false,
  error: null,
  selectedPatient: null, // Initialized with null
};

const dynamicTopTabsSlice = createSlice({
  name: 'dynamicTopTabs',
  initialState,
  reducers: {
    addPatient: (state, action: PayloadAction<GetMyPatients>) => {
      const newPatient = action.payload;
      const existingPatientIndex = state.data.findIndex(
        (patient) => patient.id === newPatient.id,
      );
      if (existingPatientIndex !== -1) {
        state.data.splice(existingPatientIndex, 1);
      }
      state.data.push(newPatient);
      state.selectedPatient = newPatient; // Automatically select the newly added patient
    },
    removePatient: (state, action: PayloadAction<number>) => {
      const patientId = action.payload;
      const updatedData = state.data.filter(
        (patient) => patient.id !== patientId,
      );

      state.data = updatedData;

      if (updatedData.length !== state.data.length) {
        state.data = updatedData;
        if (state.selectedPatient?.id === patientId) {
          state.selectedPatient = state.data[0] || null; // Deselect if the removed patient was selected
        }
      } else {
        console.log(`Patient with ID ${patientId} not found.`);
      }
    },
    clearAllSelectedPatients: (state) => {
      state.data = [];
      state.selectedPatient = null;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    selectPatient: (state, action: PayloadAction<number>) => {
      const patientId = action.payload;
      const selectedPatient =
        state.data.find((patient) => patient.id === patientId) || null;
      state.selectedPatient = selectedPatient;
    },
  },
});

export const {
  addPatient,
  removePatient,
  clearAllSelectedPatients,
  setLoading,
  setError,
  selectPatient, // Export the new reducer
} = dynamicTopTabsSlice.actions;

export default dynamicTopTabsSlice.reducer;
