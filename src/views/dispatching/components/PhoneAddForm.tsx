import { Box, Button, IconButton, Typography } from '@mui/material';
import { FileAltIcon, FilePlusAltIcon } from 'assets/icons/icons';
import AutocompleteInput from 'components/autocompleteInput/AutocompleteInput';
import DefaulCheckbox from 'components/checkbox/DefaultCheckbox';
import DefaultInput from 'components/defaultInput/DefaultInput';
import ReceptionTable from 'components/receptionTable/ReceptionTable';
import { rowData } from '../saidbar/dispatchFrontPage/DispatchFrontPage';

type propsType = {
    avtoCaplektData: any;
    register: any;
    rowData?: any;
    phonePush?: any;
};
const PhoneAddForm = (props: propsType) => {
    let { phonePush, avtoCaplektData, register } = props;

    return (
        <Box className="flex flex-col ">
            <Box className=" border mt-[10px] p-[5px] ">
                <Typography className=" text-[14px] text-[#000] ">
                    Телефоны
                </Typography>
                <Button
                    variant="contained"
                    className={` ${'bg-[#4CAF50] text-[#fff] border border-solid border-[#4CAF50]'}  h-[35px]  text-[14px]  capitalize mr-[5px] px-[8px] py-[5px]  mt-[5px] `}
                >
                    Добавить
                </Button>
                <Box className="mt-[10px]">
                    <ReceptionTable columnDefs={phonePush} rowData={rowData} />
                </Box>
            </Box>

            <Box className="w-full flex items-center justify-between mt-[10px]  ">
                <DefaultInput
                    lable="E-mail:"
                    register={register}
                    inputType={'appeal'}
                    containerStile="w-[49%] flex-row items-center justify-between "
                    inputStyle="w-[75%]"
                />
                <DefaultInput
                    lable="Язык:"
                    register={register}
                    inputType={'appeal'}
                    containerStile="w-[49%] flex-row items-center justify-between "
                    inputStyle="w-[75%]"
                />
            </Box>
            <Box className="w-full flex flex-row items-center justify-between  gap-1 mt-[10px]">
                <DefaultInput
                    lable="Поликлиника:"
                    register={register}
                    inputType={'appeal'}
                    containerStile="w-[75%] flex-row items-center justify-between "
                    inputStyle="w-[70%]"
                />
                <DefaulCheckbox label="Без СКК" style="w-[25%] ml-[5px]" />
            </Box>
            <DefaultInput
                lable="Номер ИБ поликлиники:"
                register={register}
                inputType={'appeal'}
                containerStile="w-[100%] flex-row items-center justify-between mt-[10px]"
                inputStyle="w-[60%]"
            />
            <DefaultInput
                lable="Социальное положение:"
                register={register}
                inputType={'appeal'}
                containerStile="w-[100%] flex-row items-center justify-between mt-[10px]"
                inputStyle="w-[60%]"
            />
        </Box>
    );
};

export default PhoneAddForm;
