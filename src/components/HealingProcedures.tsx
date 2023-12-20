import { Box, Typography } from '@mui/material';
import React from 'react';
import OutlinedNumber from './outlinedNumber/OutlinedNumber';
import DefaultCheckbox from './checkbox/DefaultCheckbox';
import SelectButton from './SelectButton';
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
        <Box className="w-[480px] bg-[#F5F5F5] border p-[8px]">
            <Typography className="text-[14px] text-[#000] font-medium">
                Лечебные процедуры
            </Typography>
            <Box className="flex w-[50%] justify-between items-center mt-[10px]">
                <Typography className="text-[14px] text-[#000]  font-normal">
                    Назначил:
                </Typography>
                <Typography className="text-[14px] text-[#000] font-normal">
                    Мухитдинов Ж.К.
                </Typography>
            </Box>
            <Box className="flex w-[100%] justify-between items-center mt-[10px]">
                <Typography className="text-[14px] text-[#000]  font-normal">
                    Количество:
                </Typography>

                <OutlinedNumber
                    containerStyle="flex w-[120px] "
                    inputStyle="w-[100%]"
                />
                <DefaultCheckbox label="На весь срок лечения" />
            </Box>
            <Box className="flex w-[55%]  justify-between items-center my-[10px]">
                <Typography className="text-[14px] text-[#000]  font-normal">
                    Кратность:
                </Typography>
                <SelectButton
                    defaultValue="Каждый день"
                    data={data}
                    style="h-[35px] bg-[#fff] border "
                    itemStyle="text-[#000]"
                />
            </Box>
        </Box>
    );
};

export default HealingProcedures;
