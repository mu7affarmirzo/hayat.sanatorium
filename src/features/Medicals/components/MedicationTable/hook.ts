import { RowClickedEvent } from 'ag-grid-community';
import { useGetMedicationsQuery } from 'features/Medicals/service/medicationsService';
import { useCallback } from 'react';

export const useMedicationTableHook = () => {
  const { data: getMedicationData } = useGetMedicationsQuery({});

  const handleClickedRowItem = useCallback((event: RowClickedEvent) => {
    console.log(event);
  }, []);

  return { getMedicationData, handleClickedRowItem };
};
