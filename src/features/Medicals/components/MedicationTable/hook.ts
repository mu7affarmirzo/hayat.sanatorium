import { RowClickedEvent } from 'ag-grid-community';
import { setSelectedMedication } from 'features/Medicals/model/slice/medicationSlice';
import { useGetMedicationsQuery } from 'features/Medicals/service/medicationsService';
import { useReduxDispatch } from 'hooks/useReduxHook';
import { useCallback } from 'react';

export const useMedicationTableHook = () => {
  const dispatch = useReduxDispatch();
  const { data: getMedicationData } = useGetMedicationsQuery({});

  const handleClickedRowItem = useCallback(
    (event: RowClickedEvent) => {
      dispatch(setSelectedMedication(event.data));
    },
    [dispatch],
  );

  return { getMedicationData, handleClickedRowItem };
};
