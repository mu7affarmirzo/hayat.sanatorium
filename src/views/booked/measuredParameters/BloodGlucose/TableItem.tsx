import { Box, IconButton } from '@mui/material';
import { CloseIcon } from 'assets/icons/icons';
import { NumberInput } from '../components/NumberInput';
import DefaultText from 'components/defaultText/DefaultText';
import DatePicker from "react-datepicker";
import { toIsoString } from 'utils/utcToISOString';
import "react-datepicker/dist/react-datepicker.css";
import { GlucometerFormFields } from './hook';
import { Control, Controller, UseFormRegister } from 'react-hook-form';

interface ItemProps {
  close: (id: number, index: number) => void;
  id: number;
  index: number
  handleEdit: (id: number) => void
  register: UseFormRegister<GlucometerFormFields>
  control: Control<GlucometerFormFields, GlucometerFormFields>
}

export const TableItem = (props: ItemProps) => {
  const {
    close,
    id,
    register,
    index,
    handleEdit,
    control
  } = props;

  const handleCloseBtn = () => {
    close(id, index);
  };

  return (
    <Box className="flex bg-[#fff] w-full border items-center z-0">
      <Box className="border-r-[1px] border-[#605e5e] w-[30px] h-[30px] flex justify-center items-center">
        <IconButton
          onClick={handleCloseBtn}
          className="bg-[#F79E98] z-[1000] w-[18px] h-[18px] rounded-full flex justify-center items-center ml-[0px] p-0">
          <CloseIcon color="red" stroke={'#fff'} fill={'#fff'} />
        </IconButton>
      </Box>
      <Box className="w-[calc(25%+30px)] h-[30px] px-1 flex flex-col justify-center">
        <NumberInput
          {...register(`bloodGlucose.${index}.blood_glucose` as const, { valueAsNumber: true })}
          onBlur={(e) => {
            handleEdit(id)
          }}
        />
      </Box>
      <Box className="border-l-[1px] border-[#605e5e] w-[30%] h-[30px] px-1 flex flex-col justify-center">
        <Controller
          control={control}
          name={`bloodGlucose.${index}.date`}
          render={({ field }) => (
            <DatePicker
              placeholderText='Select date'
              onChange={(date) => {
                if (date) {
                  field.onChange(toIsoString(new Date(date)))
                  handleEdit(id)
                }
              }}
              onSelect={() => { }}
              className={'w-full px-1 py-[2px] border-[#0000003B] border rounded font-roboto text-[12px]'}
              selected={new Date(field.value)}
              dateFormat="dd/MM/yyyy HH:mm"
              showTimeInput
            />
          )}
        />
      </Box>
      <Box className="border-l-[1px] border-[#605e5e] w-[30%] h-[30px] px-1 flex flex-col justify-center">
        <DefaultText style={'text-[14px] font-medium text-[#000] ml-[10px]'}>
          Хусанов А.С
        </DefaultText>
      </Box>
    </Box>
  );
};
