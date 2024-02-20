import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface PatientDoctors {
    id: number;
    name: string;
}
export interface PatientDoctorsTypes {
    broneData: PatientDoctors[];
    selectBroneId: number | null;
}

const initialState: PatientDoctorsTypes = {
    broneData: [],
    selectBroneId: null,
};

export const patientDoctorsSlice = createSlice({
    name: 'doctors',
    initialState,
    reducers: {
        addDoctorsPatient: (state, action: PayloadAction<PatientDoctors>) => {
            const newPatient = action.payload;
            const existingPatientIndex = state.broneData.findIndex(
                (patient) => patient.id === newPatient.id
            );

            if (existingPatientIndex !== -1) {
                state.broneData.splice(existingPatientIndex, 1);
            }
            state.broneData.push(newPatient);
            // state.selectBroneId = newPatient.id;
        },
        removeDoctorPatient: (state, action: PayloadAction<number>) => {
            const patientIndex = state.broneData.findIndex(
                (patient) => patient.id === action.payload
            );
            if (patientIndex !== -1) {
                state.broneData.splice(patientIndex, 5);
                state.selectBroneId = null;
            }
        },
        clearDoctorPatients: (state) => {
            state.broneData = [];
        },
    },
});

export const { addDoctorsPatient, clearDoctorPatients, removeDoctorPatient } =
    patientDoctorsSlice.actions;
