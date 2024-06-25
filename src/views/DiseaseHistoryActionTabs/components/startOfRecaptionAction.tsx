import { Box } from '@mui/material';
import { ArrowDropDownIcon } from '@mui/x-date-pickers';
import { VuesaxLinearPrinterIcon } from 'assets/icons/icons';
import Dropdown from 'components/NestedDropdownMenu/ReuseableDropdown';
import { addAppointment } from 'features/Appointments/slice/appointmentsSlice';
import { useReduxDispatch } from 'hooks/useReduxHook';
import { useCallback } from 'react';

interface Props {
  data: any;
}

export const StartOfReceptionButton = ({ data }: Props) => {
  const dispatch = useReduxDispatch();

  const handleClicked = useCallback(
    (item: any) => {
      dispatch(addAppointment({ type: item.title, appointment: {} }));
    },
    [dispatch],
  );

  return (
    <Box>
      <Dropdown
        title="Начало приёма"
        handleClicked={(item) => handleClicked(item)}
        data={data}
        styles="bg-[#2196F3] max-h-[46px] mx-1 h-[46px] w-[200px] min-w-[120px]"
        startIcon={<VuesaxLinearPrinterIcon />}
        endIcon={<ArrowDropDownIcon fill="white" />}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      />
    </Box>
  );
};
