import { useConsultingResearchSelector } from 'features/ConsultingAndResearch/model/selectors/consultingReserchSelector';
import {
  MedServiceCategoryType,
  MedServiceCategoryTypes,
} from 'features/ConsultingAndResearch/model/types';
import { useGetMedServiceGroupQuery } from 'features/ConsultingAndResearch/service/consultingAndReseachService';
import { useCallback, useState } from 'react';

export const useConsultingHook = () => {
  const { dispatchConsoltingItems } = useConsultingResearchSelector();
  const { data: researchData } = useGetMedServiceGroupQuery({});
  const [selectedItems, setSelectedItems] = useState<MedServiceCategoryTypes>(
    [],
  );

  const handleMedServiceCheckboxChange = useCallback(
    (item: MedServiceCategoryType) => {
      setSelectedItems((prevSelectedItems) => {
        const isSelected = prevSelectedItems.some(
          (selectedItem) => selectedItem.id === item.id,
        );

        const updatedSelectedItems = isSelected
          ? prevSelectedItems.filter(
              (selectedItem) => selectedItem.id !== item.id,
            )
          : [...prevSelectedItems, item];

        dispatchConsoltingItems(updatedSelectedItems);
        return updatedSelectedItems;
      });
    },
    [dispatchConsoltingItems],
  );

  return { researchData, handleMedServiceCheckboxChange, selectedItems };
};
