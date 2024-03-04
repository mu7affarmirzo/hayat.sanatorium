import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface PatientType {
  id: number;
  name: string;
}
export interface PatientTypes {
  broneData: PatientType[];
  selectBroneId: number | null;
}

const initialState: PatientTypes = {
  broneData: [],
  selectBroneId: null,
};

export const patientSlice = createSlice({
  name: 'patient',
  initialState,
  reducers: {
    addPatientDoctors: (state, action: PayloadAction<PatientType>) => {
      const newPatient = action.payload;
      const existingPatientIndex = state.broneData.findIndex(
        (patient) => patient.id === newPatient.id,
      );
      state.selectBroneId = action?.payload?.id;

      if (existingPatientIndex !== -1) {
        state.broneData.splice(existingPatientIndex, 1);
      }
      if (action.payload) {
        state.selectBroneId = action?.payload?.id;
      }
      state.broneData.push(newPatient);
      // state.selectBroneId = newPatient.id;
    },
    removePatientDoctors: (state, action: PayloadAction<number>) => {
      const patientIndex = state.broneData.findIndex(
        (patient) => patient.id === action.payload,
      );
      if (patientIndex !== -1) {
        state.broneData.splice(patientIndex, 1);
        state.selectBroneId = null;
      }
    },
    clearPatientsDoctors: (state) => {
      state.broneData = [];
    },
  },
});

export const { addPatientDoctors, clearPatientsDoctors, removePatientDoctors } =
  patientSlice.actions;
