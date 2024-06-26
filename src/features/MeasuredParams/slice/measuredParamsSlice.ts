import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MeasuredParametersState, MeasuredParamsTab } from '../types/measuredParamsTypes';

const initialState: MeasuredParametersState = {
  tabsList: [
    { id: 0, title: 'Артериальное давление' },
    { id: 1, title: 'Глюкоза крови (глюкометр)' },
    { id: 3, title: 'Пульс' },
    { id: 4, title: 'Сатурация' },
    { id: 5, title: 'Температура' }
  ],
  currentTabId: 0,
  removedTabs: []
};

export const measuredParametersSlice = createSlice({
  name: 'measuredParams',
  initialState,
  reducers: {
    setTabList: (state, action: PayloadAction<MeasuredParamsTab[]>) => {
      state.tabsList = action.payload;
    },
    removeTab: (state, action: PayloadAction<MeasuredParamsTab>) => {
      if (typeof action.payload?.id === 'number') {
        state.tabsList = state.tabsList.filter((tab) => tab.id !== action.payload?.id)
        state.removedTabs.push(action.payload)
        if (state.tabsList.length === 0 || action.payload.id === state.currentTabId) {
          state.currentTabId = -1
        }
      }
    },
    addTab: (state, action: PayloadAction<MeasuredParamsTab>) => {
      if (typeof action.payload?.id === 'number') {
        if (!state.tabsList.find(t => t.id === action.payload.id)) {
          state.tabsList.push(action.payload)
        }
        const tabIndex = state.removedTabs.findIndex((t) => t.id === action.payload?.id)
        // console.log({ state, tabIndex }, 'tabIndex');
        if (tabIndex > -1) {
          state.removedTabs.splice(tabIndex, 1)
        }
      }
    },
    setActiveTab: (state, action: PayloadAction<MeasuredParamsTab>) => {
      if (typeof action.payload?.id === 'number') {
        state.currentTabId = action.payload.id

        if (!state.tabsList.find(t => t.id === action.payload.id)) {
          state.tabsList.push(action.payload)
        }

        const tabIndex = state.removedTabs.findIndex((t) => t.id === action.payload?.id)

        if (tabIndex > -1) {
          state.removedTabs.splice(tabIndex, 1)
        }
      }
    }
  },
});

export const { addTab, removeTab, setActiveTab, setTabList } =
  measuredParametersSlice.actions;
