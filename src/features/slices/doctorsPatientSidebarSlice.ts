import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { StartOfReceptionDataType } from 'views/DiseaseHistoryActionTabs/diseaseHistoryTabs.constants';

interface DynamicSidebarItem {
  id: number;
  title: StartOfReceptionDataType | string;
  child?: {
    id: number;
    title: string;
  }[];
}

interface DoctorsPatientSidebarState {
  dynamicSidebarItems: DynamicSidebarItem[];
}

const initialState: DoctorsPatientSidebarState = {
  dynamicSidebarItems: [],
};

export const doctorsPatientSidebarSlice = createSlice({
  name: 'doctorsPatientSidebar',
  initialState,
  reducers: {
    setDynamicSidebar: (state, action: PayloadAction<DynamicSidebarItem>) => {
      const newItem = action.payload;

      const existingItem = state.dynamicSidebarItems.find(
        (item) => item.id === newItem.id,
      );

      if (existingItem) {
        existingItem.title = newItem.title;
        existingItem.child = newItem.child;
      } else {
        state.dynamicSidebarItems.push(newItem);
      }
    },
  },
});

export const { setDynamicSidebar } = doctorsPatientSidebarSlice.actions;
