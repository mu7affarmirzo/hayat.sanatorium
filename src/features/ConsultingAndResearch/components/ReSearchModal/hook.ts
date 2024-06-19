import { useConsultingResearchSelector } from 'features/ConsultingAndResearch/model/selectors/consultingReserchSelector';
import {
  LabResearchesType,
  LabResearchesTypes,
} from 'features/ConsultingAndResearch/model/types';
import { useGetLabsGroupByCategoryQuery } from 'features/ConsultingAndResearch/service/consultingAndReseachService';
import { useCallback, useState } from 'react';

export const useReSearchHook = () => {
  const [selectedItems, setSelectedItems] = useState<LabResearchesTypes>([]);
  const { data: researchData } = useGetLabsGroupByCategoryQuery({});
  const { dispatchResearchItems } = useConsultingResearchSelector();

  const handleLabResearchCheckboxChange = useCallback(
    (item: LabResearchesType) => {
      const updatedSelectedLabResearch = selectedItems.includes(item)
        ? selectedItems.filter(
            (selectedLabResearchItem) => selectedLabResearchItem.id !== item.id,
          )
        : [...selectedItems, item];

      dispatchResearchItems(updatedSelectedLabResearch);
      setSelectedItems(updatedSelectedLabResearch);
    },
    [dispatchResearchItems, selectedItems],
  );
  return { researchData, handleLabResearchCheckboxChange, selectedItems };
};
