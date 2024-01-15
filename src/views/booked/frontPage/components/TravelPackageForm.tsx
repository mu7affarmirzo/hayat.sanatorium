import { Box, Typography } from '@mui/material';
import { FileAltIcon } from 'assets/icons/icons';
import AutocompleteInput from 'components/autocompleteInput/AutocompleteInput';
import { columnDefs } from 'components/columnDefs/expectedCol';
import DefaultButton from 'components/deafultButton/DefaultButton';
import DefaultInput from 'components/defaultInput/DefaultInput';
import DefaultText from 'components/defaultText/DefaultText';
import ReceptionTable from 'components/receptionTable/ReceptionTable';
type propsType = {
    avtoCaplektData: any;
    register: any;
    rowData?: any;
};
const TravelPackageForm = (props: propsType) => {
    let { avtoCaplektData, register, rowData } = props;
    return (
        <Box className="flex flex-col  border  p-[5px] ">
            <Typography className=" text-[14px] text-[#000] ">
                Путёвка
            </Typography>

            <Box className="w-full flex items-center  mt-[10px] ">
                <AutocompleteInput
                    lable="Дата заказа:"
                    data={avtoCaplektData}
                    containerStyle={'flex-row items-center '}
                    inputStyle="w-[150px]"
                    lableStyle="mr-[30px]"
                />
                <AutocompleteInput
                    lable="Ожидаемое время заезда:"
                    data={avtoCaplektData}
                    containerStyle={' flex-row items-center  ml-[30px]'}
                    inputStyle="w-[150px]"
                />
            </Box>

            <AutocompleteInput
                lable="Программа:"
                data={avtoCaplektData}
                containerStyle={
                    'w-[100%]  flex-row items-center mt-[10px] justify-between '
                }
                inputStyle="w-[80%]"
            />
            <Box className="w-full flex my-[10px]">
                <Box className="w-[20%] ">
                    <DefaultText>Лечебные программы:</DefaultText>
                    <DefaultButton
                        title="Добавить"
                        style="bg-[#4CAF50]  w-[95%] mt-[10px]"
                    />
                </Box>
                <Box className="w-[80%]">
                    <ReceptionTable
                        columnDefs={columnDefs}
                        height="h-[300px]"
                        rowData={rowData}
                    />
                </Box>
            </Box>

            <AutocompleteInput
                lable="Программа лояльности:"
                data={avtoCaplektData}
                containerStyle={
                    'w-[100%] flex-row items-center mt-[10px] justify-between'
                }
                inputStyle="w-[80%]"
            />
            <Box className="flex w-full items-center mt-[10px]">
                <AutocompleteInput
                    lable="Категория путёвки:"
                    data={avtoCaplektData}
                    containerStyle={
                        'w-[40%]  flex-row items-center  justify-between '
                    }
                    inputStyle="w-[50%]"
                />
                <DefaultInput
                    lable="Рекомендации"
                    register={register}
                    inputType={'appeal'}
                    containerStile="w-[60%] flex-row items-center justify-between ml-[10px]"
                    inputStyle="w-[68%]"
                    icon={<FileAltIcon />}
                />
            </Box>
            <Box className="flex w-full items-center mt-[10px]">
                <AutocompleteInput
                    lable="Категория путёвки:"
                    data={avtoCaplektData}
                    containerStyle={
                        'w-[40%]  flex-row items-center  justify-between '
                    }
                    inputStyle="w-[50%]"
                />
                <DefaultInput
                    lable="Стоимость:"
                    register={register}
                    inputType={'appeal'}
                    containerStile="w-[30%] flex-row items-center justify-between ml-[10px]"
                    inputStyle="w-[70%]"
                />
            </Box>
            <Box className="flex w-full items-center mt-[10px]">
                <AutocompleteInput
                    lable="Срок лечения по путёвке:"
                    data={avtoCaplektData}
                    containerStyle={
                        'w-[40%]  flex-row items-center  justify-between '
                    }
                    inputStyle="w-[45%]"
                />
                <AutocompleteInput
                    lable="-"
                    data={avtoCaplektData}
                    containerStyle={'w-[40%]  flex-row items-center  ml-[10px]'}
                    inputStyle="w-[45%]"
                />
            </Box>
        </Box>
    );
};

export default TravelPackageForm;
