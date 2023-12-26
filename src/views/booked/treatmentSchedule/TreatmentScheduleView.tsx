import { Box, IconButton, Slider, Typography } from '@mui/material';
import {
    File2Icon,
    File4Icon,
    FileIcon,
    FileNewIcon,
    VuesaxLinearPrinterIcon,
    VuesaxLinearSave2Icon,
} from 'assets/icons/icons';
import CustomizedAccordions from 'components/CustomizedAccordions';
import TablePaginationDemo from 'components/TablePaginationDemo';
import AutocompleteInput from 'components/autocompleteInput/AutocompleteInput';
import DefaultButton from 'components/deafultButton/DefaultButton';
import { useState } from 'react';
const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },
];
const TreatmentScheduleView = () => {
    const [sliderValue, setSliderValue] = useState<number>(0);
    function valuetext(value: number) {
        setSliderValue(value);
        return `${value}`;
    }
    return (
        <Box className=" h-[calc(100vh-225px)]  p-[10px] overflow-scroll">
            <CustomizedAccordions
                title="Параметры расписания"
                childrenStyle={{
                    backgroundColor: '#fff',
                    padding: '10px',
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
                topBoxStyle={{ backgroundColor: '#fff' }}
            >
                <Box className="flex w-[400px] items-center justify-between">
                    <AutocompleteInput
                        data={top100Films}
                        inputStyle="w-[100%]"
                    />
                    <p className="mx-[5px]">-</p>
                    <AutocompleteInput
                        data={top100Films}
                        inputStyle="w-[100%]"
                    />
                </Box>
                <Box>
                    <DefaultButton
                        title="Обновить расписание"
                        style="bg-[#2196F3] h-[35px]"
                    />
                </Box>
            </CustomizedAccordions>

            <Box className="border border-[rgba(0, 0, 0, 0.23)] flex  p-[10px] bg-[#fff]">
                <DefaultButton
                    title="Print"
                    icon={<VuesaxLinearPrinterIcon stroke="#000" />}
                    style="bg-[#F5F5F5] text-[#000] mr-[10px]"
                />
                <DefaultButton
                    title="Save"
                    icon={<VuesaxLinearSave2Icon stroke="#000" />}
                    style="bg-[#F5F5F5] text-[#000]"
                />
            </Box>
            <Box
                className={
                    'bg-[#9d9a9a] h-[calc(100%-200px)] w-[100%] overflow-scroll border mt-[10px]'
                }
            ></Box>
            <Box className="py-[8px] flex justify-between">
                <Box className="w-[calc(70%-10px)] bg-[#fff] py-[10px]">
                    <TablePaginationDemo />
                </Box>
                <Box className="w-[30%] flex justify-end items-center pr-[15px] bg-[#fff]  ">
                    <Box className="h-[100%]  border-r-2 w-[40%] py-[10px]">
                        <IconButton className=" rounded-none mx-[5px]">
                            <FileNewIcon />
                        </IconButton>
                        <IconButton className=" rounded-none mr-[5px]">
                            <File2Icon />
                        </IconButton>
                        <IconButton className=" rounded-none bg-[#F8ED8D] border border-[#FFB400]">
                            <File4Icon />
                        </IconButton>
                    </Box>
                    <Box className="flex justify-end items-end px-[10px] w-[60%]  py-[10px]">
                        <Typography className="mr-[15px]">
                            {sliderValue}%
                        </Typography>
                        <Slider
                            aria-label="Temperature"
                            defaultValue={30}
                            getAriaValueText={valuetext}
                            className=" w-[150px]"
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default TreatmentScheduleView;
