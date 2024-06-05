import { Patient } from 'types/booked';
import { FileAltIcon, FilePlusAltIcon } from 'assets/icons/icons';
import { UseFormRegister } from 'react-hook-form';
import { Box, Button, IconButton, Typography } from '@mui/material';
import { useAppModals } from 'components/Modals';
import AutocompleteInput from 'components/autocompleteInput';
import DefaultInput from 'components/defaultInput/DefaultInput';
import DefaultCheckbox from 'components/checkbox/DefaultCheckbox';
import ReceptionTable from 'components/receptionTable';

type propsType = {
  avtoCaplektData: any;
  register: UseFormRegister<Patient>;
  rowData?: any;
  phonePush?: any;
};

const PhonePushForm = (props: propsType) => {
  let { avtoCaplektData, register, phonePush, rowData } = props;
  const appModals = useAppModals();
  const openMola = () => {
    appModals?.show('choosingDiagnosis');
  };

  return (
    <Box className="flex flex-col ">
      <Box className=" border mt-[10px] p-[5px] ">
        <Typography className=" text-[14px] text-[#000] ">Телефоны</Typography>
        <Button
          variant="contained"
          className={` ${'bg-[#4CAF50] text-[#fff] border border-solid border-[#4CAF50]'}  h-[35px]  text-[14px]  capitalize mr-[5px] px-[8px] py-[5px]  mt-[5px] `}>
          Добавить
        </Button>
        <Box className="mt-[10px]">
          <ReceptionTable columnDefs={phonePush} rowData={rowData} />
        </Box>
      </Box>

      <Box className="w-full flex items-center justify-between mt-[10px]  ">
        <DefaultInput
          label="E-mail:"
          register={register}
          inputType={'patient.email'}
          containerStile="w-[50%]"
          inputStyle="w-[100%]"
        />
        <DefaultInput
          label="Язык:"
          register={register}
          inputType={'patient.language'}
          containerStile="w-[50%]"
          inputStyle="w-[100%]"
        />
      </Box>

      <Box className="w-full flex flex-row items-center justify-between gap-1 mt-[10px]">
        <DefaultInput
          label="Поликлиника:"
          register={register}
          inputStyle="w-[90%]"
          inputType={'patient.clinic'}
        />
        <DefaultCheckbox label="Без СКК" style="w-[25%] ml-[5px] mt-5" />
      </Box>

      <DefaultInput
        label="Номер ИБ поликлиники:"
        register={register}
        inputType={'patient.INN'}
        inputStyle="w-[98%]"
      />

      <Box className="w-full flex flex-row items-center justify-between  gap-1 mt-[10px]">
        <Typography className="text-[14px] font-normal text-[#8d8c8c] mr-[5px]  w-[40%] ">
          Диагноз из СКК
        </Typography>
        <Box className={'w-[60%]'}>
          <Button
            onClick={openMola}
            variant="contained"
            className={` ${'bg-[#4CAF50] text-[#fff] border border-solid border-[#4CAF50]'}  h-[35px]  text-[14px]  capitalize mr-[5px] px-[8px] py-[5px]  mt-[5px] `}>
            Добавить диагноз
          </Button>
        </Box>
      </Box>

      <AutocompleteInput
        label="Диагноз из СКК"
        data={avtoCaplektData}
        containerStyle={
          'w-full  flex-row items-center  mt-[10px] justify-between '
        }
        inputStyle="w-[60%]"
      />

      <Box className="w-full flex flex-row items-center justify-between  gap-1 mt-[10px]">
        <Typography className="text-[14px] font-normal text-[#8d8c8c]  w-[40%] ">
          Комментарии
        </Typography>
        <Box className={'w-[60%] flex'}>
          <DefaultInput
            register={register}
            inputType={'patient.appeal'}
            containerStile="w-[80%] "
          />
          <IconButton
            color="primary"
            aria-label="add to shopping cart"
            className=" bg-[#64B6F7] rounded-none  mx-[3px]">
            <FileAltIcon stroke="white" />
          </IconButton>
          <IconButton
            color="primary"
            aria-label="add to shopping cart"
            className=" bg-[#64B6F7] rounded-none  mx-[3px]">
            <FilePlusAltIcon />
          </IconButton>
        </Box>
      </Box>

      <AutocompleteInput
        label="Направление от"
        data={avtoCaplektData}
        containerStyle={
          'w-full  flex-row items-center  mt-[10px] justify-between '
        }
        inputStyle="w-[60%]"
      />

      <Box className="w-full flex flex-row items-center justify-between  gap-1 mt-[10px]">
        <Typography className="text-[14px] font-normal text-[#8d8c8c] w-[40%] ">
          Рекомендации
        </Typography>
        <Box className={'w-[60%] flex'}>
          <DefaultInput
            register={register}
            inputType={'lastName'}
            containerStile="w-[80%] "
          />
          <IconButton
            color="primary"
            aria-label="add to shopping cart"
            className=" bg-[#64B6F7] rounded-none  mx-[3px]">
            <FileAltIcon stroke="white" />
          </IconButton>
          <IconButton
            color="primary"
            aria-label="add to shopping cart"
            className=" bg-[#64B6F7] rounded-none  mx-[3px]">
            <FilePlusAltIcon />
          </IconButton>
        </Box>
      </Box>
      <DefaultInput
        label="Комментарии"
        register={register}
        inputType={'appeal'}
        inputStyle="w-[98%]"
      />
      <DefaultInput
        label="Направление от"
        register={register}
        inputType={'appeal'}
        inputStyle="w-[980%]"
      />
      <DefaultInput
        label="Рекомендации"
        register={register}
        inputType={'appeal'}
        inputStyle="w-[980%]"
      />
    </Box>
  );
};

export default PhonePushForm;
