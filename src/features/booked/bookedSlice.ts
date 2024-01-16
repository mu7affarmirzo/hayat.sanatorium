import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface PatientBook {
    id: number;
    name: string;
}

export interface BookedTypes {
    patientData: PatientBook[];
}

const initialState: BookedTypes = {
    patientData: [],
};

export const bookedSlice = createSlice({
    name: "booked",
    initialState,
    reducers: {
        addPatient: (state, action: PayloadAction<PatientBook>) => {
            state.patientData.push(action.payload);
        },
        removePatient: (state, action: PayloadAction<number>) => {
            const patientIndex = state.patientData.findIndex(
                (patient) => patient.id === action.payload
            );
            if (patientIndex !== -1) {
                state.patientData.splice(patientIndex, 1);
            }
        },
        clearBookedPatients: (state) => {
            state.patientData = [];
        },
    },
});

export const { addPatient, clearBookedPatients, removePatient } =
    bookedSlice.actions;
