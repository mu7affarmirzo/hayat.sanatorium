import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface PatientBook {
    id: number;
    name: string;
}
export interface BookedTypes {
    broneData: PatientBook[];
    selectBroneId: number | null;
}

const initialState: BookedTypes = {
    broneData: [],
    selectBroneId: null,
};

export const bookedSlice = createSlice({
    name: "booked",
    initialState,
    reducers: {
        addPatient: (state, action: PayloadAction<PatientBook>) => {
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
        removePatient: (state, action: PayloadAction<number>) => {
            const patientIndex = state.broneData.findIndex(
                (patient) => patient.id === action.payload
            );
            if (patientIndex !== -1) {
                state.broneData.splice(patientIndex, 1);
                state.selectBroneId = null;
            }
        },
        clearBookedPatients: (state) => {
            state.broneData = [];
        },
    },
});

export const { addPatient, clearBookedPatients, removePatient } =
    bookedSlice.actions;
