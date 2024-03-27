/* eslint-disable react/style-prop-object */
import { Box, Typography } from '@mui/material';
import AutocompleteInput from 'components/autocompleteInput';
import SelectButton from 'components/buttons/SelectButton';
import DefaultCheckbox from 'components/checkbox/DefaultCheckbox';
import DefaultButton from 'components/deafultButton/DefaultButton';
import DefaultText from 'components/defaultText/DefaultText';
import { setAppointmentStatus } from 'features/slices/initAppoinmentStatusSlice';
import { useReduxDispatch, useReduxSelector } from 'hooks/useReduxHook';
import { FC, useCallback } from 'react';

interface Props {
  data: {
    label: string;
    year: number;
  }[];
}

const InitialApportmentHeaderSection: FC<Props> = ({ data }) => {
  const dispatch = useReduxDispatch();
  const { status } = useReduxSelector((state) => state.appointmentStatus);
  const handleClickedCheckbox = useCallback(
    (item: any) => {
      console.log('clicked', item);
      if (item === 'appointment_completed') {
        dispatch(setAppointmentStatus({ status: 'completed' }));
      } else if (item === 'appointment_cancelled') {
        dispatch(setAppointmentStatus({ status: 'cancelled' }));
      }
    },
    [dispatch],
  );

  return (
    <Box className=" flex h-[90px] flex-col justify-around">
      <Box className="flex items-center justify-between h-[35%] my-3">
        <Box className="">
          <DefaultText style={'text-[#000] '}>
            Прием дежурного врача, Очилов Ибрагим Азамович
          </DefaultText>
        </Box>
        <Box className=" flex items-center w-[80%]  justify-end ">
          <AutocompleteInput
            label="время:"
            data={data}
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
          <DefaultButton
            title="Отменить начатый приём"
            classStyle="h-[38px] bg-[#2196F3] text-[#fff] mr-[8px]"
            disabled={true}
          />
          <SelectButton
            data={data}
            style="h-[38px] bg-[#2196F3]"
            defaultValue="Шаблоны"
          />
          <DefaultButton
            title="Просмотр документа"
            classStyle="h-[38px] bg-[#2196F3] text-[#fff] mr-[8px]"
          />
        </Box>
      </Box>
      <hr />
      {status.status === 'notCompleted' && (
        <Box className={`px-4 flex flex-row justify-between items-center`}>
          <Typography className="text-red-500 text-sm font-bold ">
            Не завершено
          </Typography>

          <Box className="flex flex-row gap-2">
            <DefaultCheckbox
              label="Приём завершён"
              inputType="appointment_completed"
              setValue={handleClickedCheckbox}
            />
            <DefaultCheckbox
              label="Приём завершён"
              inputType="appointment_cancelled"
              setValue={handleClickedCheckbox}
            />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default InitialApportmentHeaderSection;
