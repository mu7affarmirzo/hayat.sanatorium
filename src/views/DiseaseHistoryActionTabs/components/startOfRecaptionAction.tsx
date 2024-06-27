import { Box } from '@mui/material';
import { ArrowDropDownIcon } from '@mui/x-date-pickers';
import { VuesaxLinearPrinterIcon } from 'assets/icons/icons';
import Dropdown from 'components/NestedDropdownMenu/ReuseableDropdown';
import { addAppointment } from 'features/Appointments/slice/appointmentsSlice';
import { useReduxDispatch, useReduxSelector } from 'hooks/useReduxHook';
import { useCallback, useMemo } from 'react';
import { DropdownAppointmentMenuItem } from '../diseaseHistoryTabs';
import { appointmentObject, StartOfReceptionDataType, StartOfReceptionNameType } from '../diseaseHistoryTabs.constants';

interface Props {
  data: DropdownAppointmentMenuItem[];
}

export const StartOfReceptionButton = ({ data }: Props) => {
  const dispatch = useReduxDispatch();
  const appointment = useReduxSelector((s) => s.appointments.appointments)

  const {
    cardiologist,
    ekg_appointment,
    final_appointment,
    initial,
    neurologist,
    on_duty_doctor,
    on_duty_doctor_on_arrival,
    repeated_appointment
  } = appointment

  const menuData = useMemo(() => {
    let newArr: DropdownAppointmentMenuItem[] = [{ title: data[0].title, subMenu: [] }]
    data.forEach((menu) => {
      menu.subMenu?.forEach((subMenu) => {
        // @ts-expect-error
        if (appointment[appointmentObject?.[subMenu.title]]?.length > 0) {
          newArr.push(subMenu)
        } else {
          newArr[0].subMenu?.push(subMenu)
        }
      })
    })
    return newArr
  }, [
    cardiologist?.length,
    ekg_appointment?.length,
    final_appointment?.length,
    initial?.length,
    neurologist?.length,
    on_duty_doctor?.length,
    on_duty_doctor_on_arrival?.length,
    repeated_appointment?.length,
    JSON.stringify(data[0].subMenu)
  ])

  const handleClicked = useCallback(
    (item: any) => {
      console.log({ item }, 'clicked')
      // @ts-expect-error
      dispatch(addAppointment({ type: appointmentObject?.[item.title], appointment: {} }));
    },
    [dispatch],
  );

  return (
    <Box>
      <Dropdown
        title="Начало приёма"
        handleClicked={(item) => handleClicked(item)}
        data={menuData}
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
