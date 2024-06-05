import { Box, Typography } from '@mui/material';
import SectionTitle from 'components/SectionTitle/sectionTitle';
import DefaultInput from 'components/defaultInput/DefaultInput';

import { UseFormRegister } from 'react-hook-form';
import { Patient } from 'types/booked';
type propsType = {
  avtoCaplektData: any;
  register: UseFormRegister<Patient>;
};
const HomeAddressForm = (props: propsType) => {
  let { register } = props;

  return (
    <Box className="flex flex-col border mt-[10px] p-[5px] ">
      <SectionTitle
        title="Домашний адрес"
        className="text-sm font-medium font-roboto"
      />
      <DefaultInput
        label="Быстрый ввод адреса"
        register={register}
        inputType={'patient.address'}
        inputStyle="w-[98%]"
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
          inputType={'patient.appeal'}
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
          inputType={'patient.home'}
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
          inputType={'patient.home_number'}
          containerStile="w-[32%] flex-col"
          inputStyle="w-[100%]"
        />
      </Box>
    </Box>
  );
};

export default HomeAddressForm;
