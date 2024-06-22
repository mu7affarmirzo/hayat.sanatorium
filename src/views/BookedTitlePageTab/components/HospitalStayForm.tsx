/* eslint-disable react/style-prop-object */
import { Box, Typography } from '@mui/material';
import AutocompleteInput from 'components/autocompleteInput';
import DefaultCheckbox from 'components/checkbox/DefaultCheckbox';
import OutlinedNumber from 'components/outlinedNumber/OutlinedNumber';

type propsType = {
  avtoCaplektData: any;
  register: any;
  rowData?: any;
  disabled?: boolean
};
const HospitalStayForm = (props: propsType) => {
  let { avtoCaplektData, disabled } = props;
  return (
    <Box className="flex flex-col  border  p-[5px] mt-[10px] ">
      <Typography className=" text-[14px] text-[#000] ">
        Пребывание в стационаре
      </Typography>
      <Box className="flex items-center mt-[10px] justify-between">
        <OutlinedNumber
          disabled={disabled}
          label="Кол-во"
          containerStyle="flex-col w-[10%]"
          inputStyle="w-[100%]"
        />
        <OutlinedNumber
          disabled={disabled}
          label="Гости и размещение"
          containerStyle="flex-col w-[30%] "
          inputStyle="w-[100%]"
          text="Взрослых:"
          inputBoxStyle="flex-row-reverse"
        />
        <AutocompleteInput
          disabled={disabled}
          label="Период проживания"
          data={avtoCaplektData}
          containerStyle={'w-[18%]  flex-col  '}
          inputStyle="w-[100%]"
          labelStyle="text-[#000]"
        />
        <OutlinedNumber
          disabled={disabled}
          label=" "
          containerStyle="flex-col w-[15%]  mt-[20px]"
          inputStyle="w-[100%]]"
          text="дней"
        />
        <AutocompleteInput
          disabled={disabled}
          label="по"
          data={avtoCaplektData}
          labelStyle="text-[#000]"
          containerStyle={'w-[20%]  flex-row items-center  mt-[20px]'}
          inputStyle="w-[100%]"
        />
      </Box>
      <Box className="flex items-center mt-[10px] justify-between">
        <AutocompleteInput
          disabled={disabled}
          label="Лечащий врач:"
          data={avtoCaplektData}
          containerStyle={'w-[49%]  flex-row justify-between items-center'}
          inputStyle="w-[64%]"
        />
        <AutocompleteInput
          disabled={disabled}
          label="Лечащий врач:"
          data={avtoCaplektData}
          containerStyle={'w-[49%]  flex-row justify-between items-center'}
          inputStyle="w-[64%]"
        />
      </Box>
      <Box className="flex items-center mt-[10px] justify-between">
        <AutocompleteInput
          disabled={disabled}
          label="Помещён в комнату."
          data={avtoCaplektData}
          containerStyle={'w-[49%]  flex-row justify-between items-center'}
          inputStyle="w-[64%]"
        />
        <AutocompleteInput
          disabled={disabled}
          label="Отделение:"
          data={avtoCaplektData}
          containerStyle={'w-[49%]  flex-row justify-between items-center'}
          inputStyle="w-[64%]"
        />
      </Box>
      <Box className="flex items-center mt-[10px]  w-[100%]">
        <DefaultCheckbox disabled={disabled} label="Дополнительное место" />
        <DefaultCheckbox disabled={disabled} label="Член семьи" style="ml-[20px]" />
      </Box>
    </Box>
  );
};

export default HospitalStayForm;
