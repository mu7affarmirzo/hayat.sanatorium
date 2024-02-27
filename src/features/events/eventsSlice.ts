import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface EventsSliceTYpes {
    countOfEvents: number;
}

const initialState: EventsSliceTYpes = {
    countOfEvents: 0,
};

export const eventsSlice = createSlice({
    name: "events",
    initialState,
    reducers: {
        eventsCount: (state, action: PayloadAction<number>) => {
            state.countOfEvents = action.payload;
        },
    },
});

export const { eventsCount } = eventsSlice.actions;
