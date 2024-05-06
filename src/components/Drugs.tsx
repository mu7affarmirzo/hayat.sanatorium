import { Box, IconButton, Stack, Typography } from '@mui/material';
import React from 'react';
import DefaultCheckbox from './checkbox/DefaultCheckbox';
import SelectButton from './buttons/SelectButton';
import OutlinedNumber from './outlinedNumber/OutlinedNumber';
import { FileAltIcon, FilePlusAltIcon } from 'assets/icons/icons';

const data = [
  {
    id: 1,
    title: '10.06.2023',
  },
  {
    id: 2,
    title: '10.06.2024',
  },
];

const Drugs = () => {
  return (
    <Box className="w-[480px] bg-[#F5F5F5] border flex flex-col gap-[2px] px-2 py-1 mb-5">
      <Typography className="text-[14px] leading-[22px] tracking-[0.1px] text-[#000] font-medium mb-[10px]">
        Алоэ экстракт жидкий р-р 1мл амп.
      </Typography>
      <Box className="flex items-center gap-[10px]">
        <Typography className="text-[14px] w-[180px] text-[#000]  font-normal">
          Требует отпуска
        </Typography>
        <DefaultCheckbox
          style="!h-6 !p-0"
          checkboxStyle={{ padding: '0 !important' }}
        />
      </Box>
      <Box className="flex items-center gap-[10px]">
        <Typography className="text-[14px] w-[180px] text-[#000]  font-normal">
          Дата начала
        </Typography>
        <SelectButton
          defaultValue="10.06.2023"
          data={data}
          style={`bg-[#fff] rounded-1 w-[80px] h-6 !text-[12px] border-[#0000003B] border-[1px]`}
          itemStyle="!text-[#000000DE] !font-roboto !text-[12px] !w-[80px] leading-6"
        />
      </Box>
      <Box className="flex w-[100%] items-center gap-[10px]">
        <Typography className="text-[14px] w-[180px] text-[#000]  font-normal">
          Длительность приёма, дн.
        </Typography>

        <OutlinedNumber
          customvariant="outlined-sm"
          containerStyle="flex !h-[24px]"
          inputStyle="w-[70px] !h-[24px]"
        />
        <Typography className="text-[14px] text-[#000]  font-normal">
          по
        </Typography>
        <SelectButton
          defaultValue="Каждый день"
          data={data}
          style={`bg-[#fff] rounded-1 h-6 !text-[12px] border-[#0000003B] border-[1px]`}
          itemStyle="!text-[#000000DE] !font-roboto  !text-[12px] w-[105px] leading-6"
        />
      </Box>
      <Box className="flex items-center gap-[10px]">
        <Typography className="text-[14px] w-[180px] text-[#000]  font-normal">
          Количество всего
        </Typography>
        <OutlinedNumber
          customvariant="outlined-sm"
          containerStyle="flex !h-[24px]"
          inputStyle="w-[50px] !h-[24px]"
        />
        <DefaultCheckbox
          style={'!h-[24px] !text-[#00000061]'}
          label="постаянно"
        />
      </Box>
      <Box className="flex w-[100%] items-center gap-[10px]">
        <Typography className="text-[14px] w-[180px] text-[#000]  font-normal">
          Способ приема
        </Typography>
        <SelectButton
          defaultValue=""
          data={data}
          style={`bg-[#fff] rounded-1 h-6 w-[250px] !text-[12px] border-[#0000003B] border-[1px]`}
          itemStyle="!text-[#000000DE] !font-roboto  !text-[12px] w-[210px] leading-6"
        />
      </Box>
      <Typography className="text-[14px] text-[#000]  font-normal">
        Особые указания:
      </Typography>
      <Stack direction={'row'} className={'items-stretch'}>
        <textarea
          className={`w-full outline-none
                      border-[1px] border-[#0000003B] 
                      rounded-[4px] resize-none font-roboto
                      text-[14px] p-2 h-[72px]`}
        />
        <Stack>
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
        </Stack>
      </Stack>
      <Typography className="text-[14px] text-[#000]  font-normal">
        Назначил Мухитдинов Ж.К. 10.06.2023
      </Typography>
    </Box>
  );
};

export default Drugs;
