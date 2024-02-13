import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface DispatchStoreType {
    id: number;
    name: string;
}

export interface DispatchingTypes {
    ibsData: DispatchStoreType[];
    selectedIb: number | null;
}

const initialState: DispatchingTypes = {
    ibsData: [],
    selectedIb: null,
};

export const dispatchingSlice = createSlice({
    name: "dispatch",
    initialState,
    reducers: {
        addInfoNewIb: (state, action: PayloadAction<DispatchStoreType>) => {
            const newIB = action.payload;
            const existingPatientIndex = state.ibsData.findIndex(
                (patient) => patient.id === newIB.id
            );
            if (existingPatientIndex !== -1) {
                state.ibsData = state.ibsData.filter(
                    (patient) => patient.id !== newIB.id
                );
            }
            state.ibsData.push(newIB);
            state.selectedIb = newIB.id;
        },
        removeInfoIB: (state, action: PayloadAction<number>) => {
            const idToRemove = action.payload;
            state.ibsData = state.ibsData.filter(
                (patient) => patient.id !== idToRemove
            );
            state.selectedIb = null;
        },
        cleareAllIB: (state) => {
            state.ibsData = [];
            state.selectedIb = null;
        },
    },
});

export const { addInfoNewIb, removeInfoIB, cleareAllIB } =
    dispatchingSlice.actions;

export default dispatchingSlice.reducer;
