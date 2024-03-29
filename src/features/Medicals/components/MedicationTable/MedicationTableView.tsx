import { Box } from '@mui/material';
import { MedicationColumnDefs } from './colDefsForMedicationTable';
import { useMedicationTableHook } from './hook';
import { ReuseableAgGridTable } from 'components/ReuseableAgGridTable';

export const MedicationTableView = () => {
  const { getMedicationData, handleClickedRowItem } = useMedicationTableHook();
  return (
    <Box className="bg-red-500">
      <ReuseableAgGridTable
        columnDefs={MedicationColumnDefs}
        rowData={getMedicationData}
        handleClicedRow={handleClickedRowItem}
      />
    </Box>
  );
};
