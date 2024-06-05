import { setSelectedConsultingItems } from 'features/ConsultingAndResearch/model/slice/consultingAndResearchSlice';
import { useGetMedServiceGroupQuery } from 'features/ConsultingAndResearch/service/consultingAndReseachService';
import { useReduxDispatch } from 'hooks/useReduxHook';
import { useCallback, useState } from 'react';
import { MedServiceSpecialty } from 'types/appointmentTypes';

export const useConsultingHook = () => {
  const { data: researchData } = useGetMedServiceGroupQuery({});
  const dispatch = useReduxDispatch();
  const [selectedItems, setSelectedItems] = useState<MedServiceSpecialty[]>([]);

  const handleMedServiceChechboxChange = useCallback(
    (item: MedServiceSpecialty) => {
      const updatedSelectedItems = selectedItems.includes(item)
        ? selectedItems.filter((selectedItem) => selectedItem.id !== item.id)
        : [...selectedItems, item];

      setSelectedItems(updatedSelectedItems);
      dispatch(setSelectedConsultingItems(updatedSelectedItems));
    },
    [dispatch, selectedItems],
  );

  return { researchData, handleMedServiceChechboxChange, selectedItems };
};
