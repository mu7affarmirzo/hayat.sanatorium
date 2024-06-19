import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  LabResearchesTypes,
  MedServiceCategoryTypes,
} from 'features/ConsultingAndResearch/model/types';

interface ConsultingAndResearchState {
  selectedResearchItems: LabResearchesTypes;
  selectedConsultingItems: MedServiceCategoryTypes;
}

const initialState: ConsultingAndResearchState = {
  selectedResearchItems: [],
  selectedConsultingItems: [],
};

const consultingAndResearchSlice = createSlice({
  name: 'consultingAndResearch',
  initialState,
  reducers: {
    setSelectedResearchItems: (
      state,
      action: PayloadAction<LabResearchesTypes>,
    ) => {
      state.selectedResearchItems = action.payload;
    },
    setSelectedConsultingItems: (
      state,
      action: PayloadAction<MedServiceCategoryTypes>,
    ) => {
      state.selectedConsultingItems = action.payload;
    },
  },
});

export const { setSelectedResearchItems, setSelectedConsultingItems } =
  consultingAndResearchSlice.actions;

export default consultingAndResearchSlice.reducer;
