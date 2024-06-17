import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GetMyPatients } from 'features/DoctorsRoleService/types';

export interface DynamicTopPatientTab {
  data: GetMyPatients[];
  loading: boolean;
  error: string | null;
  currentPatient: GetMyPatients | null;
}

const initialState: DynamicTopPatientTab = {
  data: [],
  loading: false,
  error: null,
  currentPatient: null,
};

const selectedPatientsSlice = createSlice({
  name: 'dynamicTopTabs',
  initialState,
  reducers: {
    addPatient: (state, action: PayloadAction<GetMyPatients>) => {
      const newPatient = action.payload;
      const existingPatientIndex = state.data.findIndex(
        (patient) => patient.id === newPatient.id,
      );
      if (existingPatientIndex !== -1) {
        state.data[existingPatientIndex] = newPatient;
      } else {
        state.data.push(newPatient);
      }
      state.currentPatient = newPatient; // Automatically select the newly added patient
    },
    removePatient: (state, action: PayloadAction<number>) => {
      const patientId = action.payload;
      state.data = state.data.filter((patient) => patient.id !== patientId);
      if (state.currentPatient?.id === patientId) {
        state.currentPatient = state.data.length > 0 ? state.data[0] : null; // Deselect if the removed patient was selected
      }
    },
    clearAllPatients: (state) => {
      state.data = [];
      state.currentPatient = null;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    selectPatient: (state, action: PayloadAction<number>) => {
      const patientId = action.payload;
      state.currentPatient =
        state.data.find((patient) => patient.id === patientId) || null;
    },
  },
});

export const {
  addPatient,
  removePatient,
  clearAllPatients,
  setLoading,
  setError,
  selectPatient,
} = selectedPatientsSlice.actions;

export default selectedPatientsSlice.reducer;

// Selector to get the current patient
export const selectCurrentPatient = (state: {
  dynamicTopTabs: DynamicTopPatientTab;
}) => state.dynamicTopTabs.currentPatient;
