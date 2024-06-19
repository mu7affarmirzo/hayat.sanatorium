import { useGetMedServiceGroupQuery } from 'features/ConsultingAndResearch/service/consultingAndReseachService';
import { useProceduresSelector } from 'features/Prodcedures/model/selectors/useProceduresSelector';
import {
  ProcedureType,
  ProcedureTypes,
} from 'features/Prodcedures/model/types';
import { useCallback, useState } from 'react';

export const useProceduresModalHook = () => {
  const { data: proceduresData } = useGetMedServiceGroupQuery({}); // getProceduresQuery is renamed to getMedServiceGroupQuery
  const [selectedItems, setSelectedItems] = useState<ProcedureTypes>([]);
  const { dispatchProcedureItems } = useProceduresSelector();

  const handleProceduresSelectItems = useCallback(
    (item: ProcedureType) => {
      setSelectedItems((prevSelectedItems) => {
        const isSelected = prevSelectedItems.some(
          (selectedItem) => selectedItem.id === item.id,
        );

        const updatedSelectedItems = isSelected
          ? prevSelectedItems.filter(
              (selectedItem) => selectedItem.id !== item.id,
            )
          : [...prevSelectedItems, item];
        dispatchProcedureItems(updatedSelectedItems);
        return updatedSelectedItems;
      });
    },
    [dispatchProcedureItems],
  );

  return {
    proceduresData,
    handleProceduresSelectItems,
    selectedItems,
  };
};
