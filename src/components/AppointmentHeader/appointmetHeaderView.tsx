/* eslint-disable react/style-prop-object */
import { Box, Typography } from '@mui/material';
import { CencelStatedAppointmentModal } from 'components/Modals/ReuseableModal/cencelStatedAppointmentModal/cencelAppointmentView';
import AutocompleteInput from 'components/autocompleteInput';
import SelectButton from 'components/buttons/SelectButton';
import DefaultCheckbox from 'components/checkbox/DefaultCheckbox';
import DefaultButton from 'components/deafultButton/DefaultButton';
import { AppointmentStatus } from 'features/Appointments/types';
import { useAppointmentStateHandler } from 'helper/appointmentStateHandler';
import { FC } from 'react';
import { UseFormReturn } from 'react-hook-form';

const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 },
];

type AppointmentHeaderViewProps = {
  doctor: string;
  appointmentID: number;
  methods?: UseFormReturn<any>
  appointmentState?: AppointmentStatus
};

const AppointmentHeaderView: FC<AppointmentHeaderViewProps> = ({
  doctor,
  appointmentID,
  methods,
  appointmentState
}) => {
  const { appointmentStatus, handleChangeStatus } =
    useAppointmentStateHandler({
      id: appointmentID,
      methods,
      appointmentState
    });

  return (
    <Box className=" flex flex-col justify-around sticky top-0 bg-[#F5F5F5] z-10 pt-[10px]">
      <Box className="flex items-center flex-wrap justify-between h-[35%] my-3">
        <Box className="">
          <Typography className={'text-[#000] '}>{doctor}</Typography>
        </Box>
        <Box className=" flex items-center w-[80%]  justify-end ">
          <AutocompleteInput
            label="время:"
            data={top100Films}
            labelStyle="text-[#000]"
            containerStyle={
              'w-[20%]  flex-row items-center  h-[35px] mr-[10px]'
            }
            inputStyle="w-[100%]"
          />
          <DefaultButton
            title="Разблокировать"
            classStyle="h-[38px] bg-[#2196F3] text-[#fff] mr-[8px]"
          />
          <CencelStatedAppointmentModal />
          <SelectButton
            data={[]}
            style="h-[38px] bg-[#2196F3]"
            defaultValue="Шаблоны"
          />
          <DefaultButton
            title="Просмотр документа"
            classStyle="h-[38px] bg-[#2196F3] text-[#fff] mr-[8px]"
          />
          <DefaultButton
            title="Сохранить"
            classStyle="h-[38px] text-[#fff] mr-[10px] bg-green-500  "
            submitType="submit"
          />
        </Box>
      </Box>
      <hr />
      {appointmentID && appointmentStatus === 'Не завершено' && (
        <Box className={`px-3 flex flex-row justify-between items-center`}>
          <Typography className="text-red-500 text-sm font-bold ">
            Не завершено
          </Typography>
          <Box className="flex flex-row gap-2">
            <DefaultCheckbox
              label="Приём завершён"
              inputType="appointment_completed"
              setValue={handleChangeStatus}
            />
            <DefaultCheckbox
              label="Пациент на прием не явился"
              inputType="appointment_cancelled"
              setValue={handleChangeStatus}
            />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default AppointmentHeaderView;
