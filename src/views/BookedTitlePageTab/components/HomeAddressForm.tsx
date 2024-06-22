import { Box, Typography } from '@mui/material';
import SectionTitle from 'components/SectionTitle/sectionTitle';
import DefaultInput from 'components/defaultInput/DefaultInput';
import { usePatientDocTPContext } from 'containers/Doctors/PatientDoctors/PatientDoctorTPContainer/module';

import { UseFormRegister } from 'react-hook-form';
import { Patient } from 'types/booked';
type propsType = {
  avtoCaplektData: any;
  register: UseFormRegister<Patient>;
  disabled?: boolean
};
const HomeAddressForm = (props: propsType) => {
  const { disabled } = props
  const { methods: { register },
  } = usePatientDocTPContext();

  return (
    <Box className="flex flex-col border mt-[10px] p-[5px] ">
      <SectionTitle
        title="Домашний адрес"
        className="text-sm font-medium font-roboto"
      />
      <DefaultInput
        disabled={disabled}
        label="Быстрый ввод адреса"
        register={register}
        inputType={'patient.address'}
        inputStyle="w-[98%]"
      />

      <Box className="w-full flex flex-row items-center justify-between  gap-1 mt-[10px]">
        <DefaultInput
          disabled={disabled}
          label="Страна"
          register={register}
          inputType={'patient.country'}
          containerStile="w-[32%] flex-col"
          inputStyle="w-[100%]"
        />
        <DefaultInput
          disabled={disabled}
          label="Область"
          register={register}
          inputType={'appeal'}
          containerStile="w-[32%] flex-col"
          inputStyle="w-[100%]"
        />
        <DefaultInput
          disabled={disabled}
          label="Район"
          register={register}
          inputType={'appeal'}
          containerStile="w-[32%] flex-col"
          inputStyle="w-[100%]"
        />
      </Box>
      <Box className="w-full flex flex-row items-center justify-between  gap-1 mt-[10px]">
        <DefaultInput
          disabled={disabled}
          label="Тип нас. пункта"
          register={register}
          inputType={'patient.appeal'}
          containerStile="w-[32%] flex-col"
          inputStyle="w-[100%]"
        />
        <DefaultInput
          disabled={disabled}
          label="Название нас"
          register={register}
          inputType={'appeal'}
          containerStile="w-[32%] flex-col"
          inputStyle="w-[100%]"
        />
        <DefaultInput
          disabled={disabled}
          label="Улица"
          register={register}
          inputType={'appeal'}
          containerStile="w-[32%] flex-col"
          inputStyle="w-[100%]"
        />
      </Box>
      <Box className="w-full flex flex-row items-center justify-between  gap-1 mt-[10px]">
        <DefaultInput
          disabled={disabled}
          label="Дом"
          register={register}
          inputType={'patient.home'}
          containerStile="w-[32%] flex-col"
          inputStyle="w-[100%]"
        />
        <DefaultInput
          disabled={disabled}
          label="Корпус"
          register={register}
          inputType={'appeal'}
          containerStile="w-[32%] flex-col"
          inputStyle="w-[100%]"
        />
        <DefaultInput
          disabled={disabled}
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
