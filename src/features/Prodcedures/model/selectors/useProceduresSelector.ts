import { setProcedures } from 'features/Prodcedures/model/slice/proceduresSlice';
import { ProcedureTypes } from 'features/Prodcedures/model/types';
import { useReduxDispatch, useReduxSelector } from 'hooks/useReduxHook';
import { useCallback } from 'react';

export const useProceduresSelector = () => {
  const dispatch = useReduxDispatch();
  const { procedures: selectedProcedureItems } = useReduxSelector(
    (state) => state.procedures,
  );

  const dispatchProcedureItems = useCallback(
    (items: ProcedureTypes) => {
      dispatch(setProcedures(items));
    },
    [dispatch],
  );

  return {
    selectedProcedureItems,
    dispatchProcedureItems,
  };
};
