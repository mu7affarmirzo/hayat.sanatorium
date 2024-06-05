import { setSelectedReSearchItems } from 'features/ConsultingAndResearch/model/slice/consultingAndResearchSlice';
import { useGetLabsGroupByCategoryQuery } from 'features/ConsultingAndResearch/service/consultingAndReseachService';
import { useReduxDispatch } from 'hooks/useReduxHook';
import { useCallback, useState } from 'react';
import { LabResearch } from 'types/appointmentTypes';

export const useReSearchHook = () => {
  const dispatch = useReduxDispatch();
  const [selectedItems, setSelectedItems] = useState<LabResearch[]>([]);
  const { data: researchData } = useGetLabsGroupByCategoryQuery({});

  const handleLabResearchCheckboxChange = useCallback(
    (item: LabResearch) => {
      const updatedSelectedLabResearch = selectedItems.includes(item)
        ? selectedItems.filter(
            (selectedLabResearchItem) => selectedLabResearchItem.id !== item.id,
          )
        : [...selectedItems, item];

      setSelectedItems(updatedSelectedLabResearch);

      dispatch(setSelectedReSearchItems(updatedSelectedLabResearch));
    },
    [dispatch, selectedItems],
  );
  return { researchData, handleLabResearchCheckboxChange, selectedItems };
};
