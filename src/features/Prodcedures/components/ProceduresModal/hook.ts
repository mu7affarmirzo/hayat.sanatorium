import { useGetMedServiceGroupQuery } from 'features/ConsultingAndResearch/service/consultingAndReseachService';
import { setProcedures } from 'features/Prodcedures/model/slice/proceduresSlice';
// import { useGetProceduresQuery } from 'features/Prodcedures/service/procedureService';
import { useReduxDispatch } from 'hooks/useReduxHook';
import { useCallback, useState } from 'react';
import { MedServiceSpecialty } from 'types/appointmentTypes';

export const useProceduresModalHook = () => {
  const dispatch = useReduxDispatch();
  //   const { data: proceduresData } = useGetProceduresQuery({});
  const [selectedItems, setSelectedItems] = useState<MedServiceSpecialty[]>([]);
  const { data: proceduresData } = useGetMedServiceGroupQuery({});

  const handleMedServiceChechboxChange = useCallback(
    (item: MedServiceSpecialty) => {
      const updatedSelectedItems = selectedItems.includes(item)
        ? selectedItems.filter((selectedItem) => selectedItem.id !== item.id)
        : [...selectedItems, item];

      setSelectedItems(updatedSelectedItems);
      dispatch(setProcedures(updatedSelectedItems));
    },
    [dispatch, selectedItems],
  );

  return {
    proceduresData,
    handleMedServiceChechboxChange,
    selectedItems,
  };
};
