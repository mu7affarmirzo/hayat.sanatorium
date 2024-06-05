import { createSlice } from '@reduxjs/toolkit';
import { LabResearch, MedServiceSpecialty } from 'types/appointmentTypes';

interface ConsultingAndResearchState {
  selectedReSearchItems: LabResearch[];
  selectedConsultingItems: MedServiceSpecialty[];
}

const initialState: ConsultingAndResearchState = {
  selectedReSearchItems: [],
  selectedConsultingItems: [],
};

export const consultingAndResearchSlice = createSlice({
  name: 'consultingAndResearch',
  initialState,
  reducers: {
    setSelectedReSearchItems: (state, action) => {
      state.selectedReSearchItems = action.payload;
    },
    setSelectedConsultingItems: (state, action) => {
      state.selectedConsultingItems = action.payload;
    },
  },
});

export const consultingAndResearchActions = consultingAndResearchSlice.actions;

export const { setSelectedReSearchItems, setSelectedConsultingItems } =
  consultingAndResearchActions;
