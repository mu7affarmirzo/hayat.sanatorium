import { Box, IconButton, Stack, Typography } from '@mui/material';
import React from 'react';
import DefaultCheckbox from './checkbox/DefaultCheckbox';
import SelectButton from './buttons/SelectButton';
import OutlinedNumber from './outlinedNumber/OutlinedNumber';
import DefaultInput from './defaultInput/DefaultInput';
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

const HealingProcedures = () => {
  return (
    <Box className="w-[480px] bg-[#F5F5F5] border flex flex-col gap-[2px] px-2 py-1 mb-5">
      <Typography className="text-[14px] leading-[22px] tracking-[0.1px] text-[#000] font-medium mb-[10px]">
        Лечебные процедуры
      </Typography>
      <Box className="flex items-center gap-[10px]">
        <Typography className="text-[14px] w-[90px] text-[#000]  font-normal">
          Назначил:
        </Typography>
        <Typography className="text-[14px] w-[120px] text-[#000] font-normal">
          Мухитдинов Ж.К.
        </Typography>
      </Box>
      <Box className="flex w-[100%] items-center gap-[10px]">
        <Typography className="text-[14px] w-[90px] text-[#000]  font-normal">
          Количество:
        </Typography>

        <OutlinedNumber
          customVariant='outlined-sm'
          containerStyle="flex w-[120px] !h-[24px]"
          inputStyle="w-[100%] !h-[24px]"
        />
        <DefaultCheckbox style={"!h-[24px]"} label="На весь срок лечения" />
      </Box>
      <Box className="flex items-center gap-[10px]">
        <Typography className="text-[14px] w-[90px] text-[#000]  font-normal">
          Кратность:
        </Typography>
        <SelectButton
          defaultValue="Каждый день"
          data={data}
          style={`bg-[#fff] rounded-1 h-6 !text-[12px] w-[120px] border-[#0000003B] border-[1px]`}
          itemStyle="!text-[#000000DE] !font-roboto  !text-[12px] w-[80px] leading-6"
        />
      </Box>
      <Box className="flex items-center gap-[10px]">
        <Typography className="text-[14px] w-[90px] text-[#000]  font-normal">
          Начать с:
        </Typography>
        <SelectButton
          defaultValue="10.06.2023"
          data={data}
          style={`bg-[#fff] rounded-1 h-6 !text-[12px] w-[120px] border-[#0000003B] border-[1px]`}
          itemStyle="!text-[#000000DE] !font-roboto !text-[12px] w-[80px] leading-6"
        />
      </Box>
      <Typography className="text-[14px] text-[#000]  font-normal">
        Особые указания:
      </Typography>
      {/* <Box className={'flex'}> */}
      <Stack direction={"row"} className={"items-stretch"}>
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
      {/* </Box> */}
    </Box>
  );
};

export default HealingProcedures;
