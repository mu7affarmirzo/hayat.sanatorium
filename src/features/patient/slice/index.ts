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

export const getIbWithPatientIdSlice = createSlice({
  name: 'patient',
  initialState,
  reducers: {
    addPatientDoctors: (state, action: PayloadAction<PatientType>) => {
      const newPatient = action.payload;
      state.selectBroneId = newPatient.id;

      const existingPatientIndex = state.broneData.findIndex(
        (patient) => patient.id === newPatient.id,
      );
      if (existingPatientIndex !== -1) {
        state.broneData.splice(existingPatientIndex, 1);
      }

      state.broneData.push(newPatient);
    },
    removePatientDoctors: (state, action: PayloadAction<number>) => {
      const patientIdToRemove = action.payload;
      state.broneData = state.broneData.filter(
        (patient) => patient.id !== patientIdToRemove,
      );
      state.selectBroneId = null;
    },

    clearPatientsDoctors: (state) => {
      state.broneData = [];
      state.selectBroneId = null;
    },
  },
});

export const { addPatientDoctors, clearPatientsDoctors, removePatientDoctors } =
  getIbWithPatientIdSlice.actions;
