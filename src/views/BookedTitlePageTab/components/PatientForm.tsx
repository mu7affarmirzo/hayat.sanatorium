import { Box, Button, Typography } from '@mui/material';
import { ActiveDotIcon, NoActiveDotIcon } from 'assets/icons/icons';
import DefaultInput from 'components/DefaultInput/DefaultInput';
import { SetStateAction, memo, useEffect, useState } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { Patient } from 'types/booked';
type propsType = {
  polData: any;
  avtoCaplektData: any;
  register: UseFormRegister<Patient>;
  setValue?: any;
  defaultValues?: any;
};
const PatientForm = (props: propsType) => {
  let { polData, avtoCaplektData, register, setValue, defaultValues } = props;

  const [activeBtn, setActiveBtn] = useState(0);
  const [isMale, setIsMale] = useState(defaultValues?.patient.gender);

  const activeButtin = (
    index: SetStateAction<number>,
    id: SetStateAction<number>,
  ) => {
    setActiveBtn(id);
    setIsMale(index === 0);
  };

  useEffect(() => {
    const genderValue = isMale ? '[М] Мужской' : '[Ж] Женский';

    setValue('patient.gender', genderValue);
  }, [isMale, polData, setValue]);

  return (
    <Box className="flex flex-col ">
      <Typography>Пациент</Typography>
      <Box className="w-full flex items-center justify-between ">
        <DefaultInput
          register={register}
          inputType={'patient.l_name'}
          label="Фамилия"
          containerStile="w-[32%] flex-col "
          inputStyle="70%"
        />
        <DefaultInput
          register={register}
          inputType={'patient.f_name'}
          label="Имя"
          containerStile="w-[32%] flex-col "
          inputStyle="70%"
        />
        <DefaultInput
          register={register}
          inputType={'patient.mid_name'}
          label="Отчество"
          containerStile="w-[32%] flex-col "
          inputStyle="70%"
        />
      </Box>

      <DefaultInput
        label="Обращение:"
        register={register}
        inputType={'patient.appeal'}
        containerStile="w-[100%] flex-row justify-between items-center mt-[10px] "
        inputStyle="w-[70%]"
      />

      <Box className="w-full flex flex-row items-center  gap-1 mt-[10px]">
        <Typography className="text-[14px] text-[#858585] mr-[58px] ">
          Пол:
        </Typography>
        {polData.map((item: any, index: number) => (
          <Button
            onClick={() => activeButtin(index, item.id)}
            key={item?.id}
            variant="contained"
            startIcon={
              item.id === activeBtn ? <ActiveDotIcon /> : <NoActiveDotIcon />
            }
            className={` ${
              index === 0
                ? isMale
                  ? 'bg-[#4CAF50] text-[#fff] border border-solid border-[#4CAF50]'
                  : 'bg-[#fff] text-[#000] border border-solid border-[#c4c2c2]'
                : !isMale
                  ? 'bg-[#4CAF50] text-[#fff] border border-solid border-[#4CAF50]'
                  : 'bg-[#fff] text-[#000] border border-solid border-[#c4c2c2]'
            }  h-[40px]  text-[14px]  capitalize mr-[5px] px-[8px] py-[5px]  `}>
            {item?.name}
          </Button>
        ))}
      </Box>
      <DefaultInput
        label="Дата рождения"
        register={register}
        inputType={'patient.date_of_birth'}
        containerStile="w-[100%] flex-row justify-between items-center mt-[10px] "
        inputStyle="w-[62%]"
      />

      <DefaultInput
        label="Место работы:"
        register={register}
        inputType={'patient.work_place'}
        containerStile="w-[100%] flex-row justify-between items-center mt-[10px] "
        inputStyle="w-[62%]"
      />
      <DefaultInput
        label="Занимаемая должность:"
        register={register}
        inputType={'patient.work_position'}
        containerStile="w-[100%] flex-row justify-between items-center mt-[10px] "
        inputStyle="w-[62%]"
      />
    </Box>
  );
};

export default memo(PatientForm);
