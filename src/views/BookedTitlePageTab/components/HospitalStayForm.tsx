/* eslint-disable react/style-prop-object */
import { Box, Typography } from '@mui/material';
import AutocompleteInput from 'components/AutoCompleteInput/autocompleteInput';
import DefaulCheckbox from 'components/Checkbox/defaultCheckbox';
import OutlinedNumber from 'components/OutlinedNumber/outlinedNumber';
type propsType = {
  avtoCaplektData: any;
  register: any;
  rowData?: any;
};
const HospitalStayForm = (props: propsType) => {
  let { avtoCaplektData } = props;
  return (
    <Box className="flex flex-col  border  p-[5px] mt-[10px] ">
      <Typography className=" text-[14px] text-[#000] ">
        Пребывание в стационаре
      </Typography>
      <Box className="flex items-center mt-[10px] justify-between">
        <OutlinedNumber
          label="Кол-во"
          containerStyle="flex-col w-[10%]"
          inputStyle="w-[100%]"
        />
        <OutlinedNumber
          label="Гости и размещение"
          containerStyle="flex-col w-[30%] "
          inputStyle="w-[100%]"
          text="Взрослых:"
          inputBoxStyle="flex-row-reverse"
        />
        <AutocompleteInput
          label="Период проживания"
          data={avtoCaplektData}
          containerStyle={'w-[18%]  flex-col  '}
          inputStyle="w-[100%]"
          labelStyle="text-[#000]"
        />
        <OutlinedNumber
          label=" "
          containerStyle="flex-col w-[15%]  mt-[20px]"
          inputStyle="w-[100%]]"
          text="дней"
        />
        <AutocompleteInput
          label="по"
          data={avtoCaplektData}
          labelStyle="text-[#000]"
          containerStyle={'w-[20%]  flex-row items-center  mt-[20px]'}
          inputStyle="w-[100%]"
        />
      </Box>
      <Box className="flex items-center mt-[10px] justify-between">
        <AutocompleteInput
          label="Лечащий врач:"
          data={avtoCaplektData}
          containerStyle={'w-[49%]  flex-row justify-between items-center'}
          inputStyle="w-[64%]"
        />
        <AutocompleteInput
          label="Лечащий врач:"
          data={avtoCaplektData}
          containerStyle={'w-[49%]  flex-row justify-between items-center'}
          inputStyle="w-[64%]"
        />
      </Box>
      <Box className="flex items-center mt-[10px] justify-between">
        <AutocompleteInput
          label="Помещён в комнату."
          data={avtoCaplektData}
          containerStyle={'w-[49%]  flex-row justify-between items-center'}
          inputStyle="w-[64%]"
        />
        <AutocompleteInput
          label="Отделение:"
          data={avtoCaplektData}
          containerStyle={'w-[49%]  flex-row justify-between items-center'}
          inputStyle="w-[64%]"
        />
      </Box>
      <Box className="flex items-center mt-[10px]  w-[100%]">
        <DefaulCheckbox label="Дополнительное место" />
        <DefaulCheckbox label="Член семьи" style="ml-[20px]" />
      </Box>
    </Box>
  );
};

export default HospitalStayForm;
