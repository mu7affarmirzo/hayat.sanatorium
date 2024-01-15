import { Box, Typography } from '@mui/material';
import { TimePicker } from '@mui/x-date-pickers';
import AutocompleteInput from 'components/autocompleteInput/AutocompleteInput';
import { columnDefs } from 'components/columnDefs/expectedCol';
import DefaultButton from 'components/deafultButton/DefaultButton';
import DefaultText from 'components/defaultText/DefaultText';
import ReceptionTable from 'components/receptionTable/ReceptionTable';
import dayjs from 'dayjs';
type propsType = {
    avtoCaplektData: any;
    register: any;
    rowData?: any;
};
const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    {
        title: 'The Lord of the Rings: The Return of the King',
        year: 2003,
    },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
    { title: 'Fight Club', year: 1999 },
    {
        title: 'The Lord of the Rings: The Fellowship of the Ring',
        year: 2001,
    },
];
const StaySanatorium = (props: propsType) => {
    let { avtoCaplektData, register, rowData } = props;
    return (
        <Box className="flex flex-col  border  p-[5px] ">
            <Typography className=" text-[14px] text-[#000] ">
                Пребывание в санатории
            </Typography>

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
                        height="h-[200px]"
                        rowData={rowData}
                    />
                </Box>
            </Box>
            <Box className="flex w-full items-center mt-[10px]">
                <AutocompleteInput
                    lable="Срок лечения по путевке:"
                    data={avtoCaplektData}
                    containerStyle={
                        'w-[40%]  flex-row items-center  justify-between '
                    }
                    inputStyle="w-[130px]"
                />
                <p className="mx-[10px]">-</p>
                <AutocompleteInput
                    data={avtoCaplektData}
                    containerStyle={
                        'w-[130px]  flex-row items-center  justify-between '
                    }
                    inputStyle="w-[100%]"
                />
                <Typography className="ml-[10px] text-[#8a8a8a] text-[14px]">
                    дней: 8
                </Typography>
            </Box>
            <Box className="flex w-full items-center mt-[10px]">
                <AutocompleteInput
                    lable="Прибыл:"
                    data={avtoCaplektData}
                    containerStyle={
                        'w-[40%]  flex-row items-center  justify-between '
                    }
                    inputStyle="w-[130px]"
                />
            </Box>
            <Box className="flex w-full items-center mt-[10px]">
                <AutocompleteInput
                    lable="Планируемый отъезд:"
                    data={avtoCaplektData}
                    containerStyle={
                        'w-[40%]  flex-row items-center  justify-between '
                    }
                    inputStyle="w-[130px]"
                />

                <Typography className="ml-[10px] text-[#8a8a8a] text-[14px]">
                    время:
                </Typography>
                <TimePicker
                    defaultValue={dayjs('2022-04-17T15:30')}
                    slotProps={{ textField: { size: 'small' } }}
                    className="w-[150px] bg-[white]"
                />
            </Box>
            <Box className="flex w-full items-center mt-[10px]">
                <AutocompleteInput
                    lable="Выбыл:"
                    data={avtoCaplektData}
                    containerStyle={
                        'w-[40%]  flex-row items-center  justify-between '
                    }
                    inputStyle="w-[130px]"
                />
            </Box>
            <Box className="flex w-full items-center mt-[10px]">
                <Typography className=" mr-[70px] text-[#8a8a8a] text-[14px]">
                    Количество к/дней:
                </Typography>
                <Typography className="ml-[10px] text-[#8a8a8a] text-[14px]">
                    8
                </Typography>
            </Box>

            <AutocompleteInput
                lable="Программа лояльности:"
                data={avtoCaplektData}
                containerStyle={
                    'w-[100%] flex-row items-center mt-[10px] justify-between'
                }
                inputStyle="w-[calc(100%-210px)]"
            />
            <AutocompleteInput
                lable="Медсестра:"
                data={top100Films}
                multiple={true}
                containerStyle={
                    'w-[100%] flex-row items-center mt-[10px] justify-between'
                }
                inputStyle="w-[calc(100%-210px)]"
            />
            <Box className="flex w-full items-center mt-[10px]">
                <AutocompleteInput
                    lable="Помещён в комнату:"
                    data={avtoCaplektData}
                    containerStyle={
                        'w-[40%]  flex-row items-center  justify-between '
                    }
                    inputStyle="w-[130px]"
                />

                <Typography className="ml-[10px] text-[#8a8a8a] text-[14px]">
                    Двухместный люкс
                </Typography>
            </Box>
            <AutocompleteInput
                lable="Отделение:"
                data={avtoCaplektData}
                containerStyle={
                    'w-[100%] flex-row items-center mt-[10px] justify-between'
                }
                inputStyle="w-[calc(100%-210px)]"
            />
        </Box>
    );
};

export default StaySanatorium;
