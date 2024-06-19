import {
  setSelectedConsultingItems,
  setSelectedResearchItems,
} from 'features/ConsultingAndResearch/model/slice/consultingAndResearchSlice';
import {
  LabResearchesTypes,
  MedServiceCategoryTypes,
} from 'features/ConsultingAndResearch/model/types';
import { useReduxDispatch, useReduxSelector } from 'hooks/useReduxHook';
import { useCallback } from 'react';

export const useConsultingResearchSelector = () => {
  const dispatch = useReduxDispatch();

  const { selectedConsultingItems, selectedResearchItems } = useReduxSelector(
    (state) => state.consultingAndResearch,
  );

  const dispatchConsoltingItems = useCallback(
    (items: MedServiceCategoryTypes) => {
      dispatch(setSelectedConsultingItems(items));
    },
    [dispatch],
  );
  const dispatchResearchItems = useCallback(
    (items: LabResearchesTypes) => {
      dispatch(setSelectedResearchItems(items));
    },
    [dispatch],
  );

  return {
    selectedConsultingItems,
    selectedResearchItems,
    dispatchConsoltingItems,
    dispatchResearchItems,
  };
};
