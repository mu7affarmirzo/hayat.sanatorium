import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GetMyPatients } from 'features/DoctorsRoleService/types';

export interface DynamicTopPatientTab {
  data: GetMyPatients[];
  loading: boolean;
  error: string | null;
  selectedId: number | null;
}

const initialState: DynamicTopPatientTab = {
  data: [],
  loading: false,
  error: null,
  selectedId: null,
};

const dynamicTopTabsSlice = createSlice({
  name: 'dynamicTopTabs',
  initialState,
  reducers: {
    addDynamicPatient: (state, action: PayloadAction<GetMyPatients>) => {
      const newPatient = action.payload;
      const existingPatientIndex = state.data.findIndex(
        (patient) => patient.id === newPatient.id,
      );
      if (existingPatientIndex !== -1) {
        state.data.splice(existingPatientIndex, 1);
      }
      state.data.push(newPatient);
      state.selectedId = newPatient.id;
    },
    removeDynamicPatient: (state, action: PayloadAction<number>) => {
      const patientIndex = state.data.findIndex(
        (patient) => patient.id === action.payload,
      );
      if (patientIndex !== -1) {
        state.data.splice(patientIndex, 1);
        state.selectedId = null;
      }
    },
    clearDynamicPatients: (state) => {
      state.data = [];
      state.selectedId = null;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const {
  addDynamicPatient,
  clearDynamicPatients,
  removeDynamicPatient,
  setLoading,
  setError,
} = dynamicTopTabsSlice.actions;

export default dynamicTopTabsSlice.reducer;
