import { Box, Typography } from '@mui/material';
import AutocompleteInput from 'components/AutoCompleteInput/autocompleteInput';
import DefaultInput from 'components/DefaultInput/DefaultInput';
import { UseFormRegister } from 'react-hook-form';
import { Patient } from 'types/booked';
type propsType = {
  avtoCaplektData: any;
  register: UseFormRegister<Patient>;
};
const HomeAddressForm = (props: propsType) => {
  let { avtoCaplektData, register } = props;

  return (
    <Box className="flex flex-col border mt-[10px] p-[5px] ">
      <Typography className=" text-[14px] text-[text-[#000]] ">
        Домашний адрес
      </Typography>
      <DefaultInput
        label="Быстрый ввод адреса"
        register={register}
        inputType={'patient.address'}
        containerStile="w-[100%] flex-col  mt-[10px] "
        inputStyle="w-[100%]"
      />

      <Box className="w-full flex flex-row items-center justify-between  gap-1 mt-[10px]">
        <DefaultInput
          label="Страна"
          register={register}
          inputType={'patient.country'}
          containerStile="w-[32%] flex-col"
          inputStyle="w-[100%]"
        />
        <DefaultInput
          label="Область"
          register={register}
          inputType={'appeal'}
          containerStile="w-[32%] flex-col"
          inputStyle="w-[100%]"
        />
        <DefaultInput
          label="Район"
          register={register}
          inputType={'appeal'}
          containerStile="w-[32%] flex-col"
          inputStyle="w-[100%]"
        />
      </Box>
      <Box className="w-full flex flex-row items-center justify-between  gap-1 mt-[10px]">
        <DefaultInput
          label="Тип нас. пункта"
          register={register}
          inputType={'appeal'}
          containerStile="w-[32%] flex-col"
          inputStyle="w-[100%]"
        />
        <DefaultInput
          label="Название нас"
          register={register}
          inputType={'appeal'}
          containerStile="w-[32%] flex-col"
          inputStyle="w-[100%]"
        />
        <DefaultInput
          label="Улица"
          register={register}
          inputType={'appeal'}
          containerStile="w-[32%] flex-col"
          inputStyle="w-[100%]"
        />
      </Box>
      <Box className="w-full flex flex-row items-center justify-between  gap-1 mt-[10px]">
        <DefaultInput
          label="Дом"
          register={register}
          inputType={'appeal'}
          containerStile="w-[32%] flex-col"
          inputStyle="w-[100%]"
        />
        <DefaultInput
          label="Корпус"
          register={register}
          inputType={'appeal'}
          containerStile="w-[32%] flex-col"
          inputStyle="w-[100%]"
        />
        <DefaultInput
          label="Квартира"
          register={register}
          inputType={'appeal'}
          containerStile="w-[32%] flex-col"
          inputStyle="w-[100%]"
        />
      </Box>
    </Box>
  );
};

export default HomeAddressForm;
