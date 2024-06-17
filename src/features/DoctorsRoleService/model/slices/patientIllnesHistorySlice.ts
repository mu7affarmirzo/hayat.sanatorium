import { createSlice } from '@reduxjs/toolkit';
import { GetPatientIbTypes } from 'features/DoctorsRoleService/types';

const patientIllnesHistorySlice = createSlice({
  name: 'patientIllnesHistory',
  initialState: {
    activePatient: {} as GetPatientIbTypes,
    loading: false,
    error: null,
  },

  reducers: {
    addActivePatient: (state, action) => {
      state.activePatient = { ...state.activePatient, ...action.payload };
    },
    setActivePatientLoading: (state, action) => {
      state.loading = action.payload;
    },
    setActivePatientError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  addActivePatient,
  setActivePatientLoading,
  setActivePatientError,
} = patientIllnesHistorySlice.actions;

export default patientIllnesHistorySlice.reducer;
