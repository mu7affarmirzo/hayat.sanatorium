import { Box, Button, Grid, Typography } from '@mui/material';
import { ActiveDotIcon, NoActiveDotIcon } from 'assets/icons/icons';
import AutocompleteInput from 'components/autocompleteInput/AutocompleteInput';
import DefaultCheckbox from 'components/checkbox/DefaultCheckbox';
import OutlinedNumber from 'components/outlinedNumber/OutlinedNumber';
import { useState } from 'react';
import { Item } from 'themes/customItems';
const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },
];
const polData = [
    {
        id: 0,
        name: '[М] Мужской',
    },
    {
        id: 1,
        name: '[Ж] Женский',
    },
];
const AdvancedSearchOptions = () => {
    const [activeBtn, setActiveBtn] = useState(0);
    return (
        <Grid container className="">
            <Grid item xs={12} className="min-h-[200px]">
                <Grid container className="flex justify-between h-[100%]">
                    <Grid
                        item
                        xs={5.9}
                        className="bg-[#fff]  p-[5px] h-[100%] w-full"
                    >
                        <Typography className="text-[14px] text-[#000]">
                            Пациент
                        </Typography>
                        <Box className="w-[100%] pt-[10px] ">
                            <Box className="flex w-[100%]">
                                <Box className="flex w-[45%] ">
                                    <OutlinedNumber
                                        containerStyle="flex w-[200px] justify-between"
                                        inputStyle="w-[70px]"
                                        text="Возраст от:"
                                        inputBoxStyle="flex-row-reverse  justify-between w-[100%]"
                                    />
                                    <OutlinedNumber
                                        containerStyle="flex w-[100px] justify-between  ml-[10px] "
                                        inputStyle="w-[70px]"
                                        text="до:"
                                        inputBoxStyle="flex-row-reverse  justify-between w-[100%]"
                                    />
                                </Box>
                                <Box className="flex w-[55%] ">
                                    <AutocompleteInput
                                        lable="Приезд с:"
                                        data={top100Films}
                                        lableStyle=" text-black "
                                        containerStyle={
                                            'w-[50%]  flex-row items-center  '
                                        }
                                        inputStyle="w-[130px]"
                                    />
                                    <AutocompleteInput
                                        lable="по:"
                                        data={top100Films}
                                        lableStyle="text-black"
                                        containerStyle={
                                            'w-[50%]  flex-row items-center  '
                                        }
                                        inputStyle="w-[130px]"
                                    />
                                </Box>
                            </Box>
                            <Box className="flex w-[100%] mt-[10px]">
                                <Box className="flex w-[45%] ">
                                    <OutlinedNumber
                                        containerStyle="flex w-[200px] justify-between"
                                        inputStyle="w-[70px]"
                                        text="Вес(кг) от:"
                                        inputBoxStyle="flex-row-reverse  justify-between w-[100%]"
                                    />
                                    <OutlinedNumber
                                        containerStyle="flex w-[100px] justify-between  ml-[10px] "
                                        inputStyle="w-[70px]"
                                        text="до:"
                                        inputBoxStyle="flex-row-reverse  justify-between w-[100%]"
                                    />
                                </Box>
                                <Box className="flex w-[55%] ">
                                    <AutocompleteInput
                                        lable="Отъезд с:"
                                        data={top100Films}
                                        lableStyle=" text-black "
                                        containerStyle={
                                            'w-[50%]  flex-row items-center  '
                                        }
                                        inputStyle="w-[130px]"
                                    />
                                    <AutocompleteInput
                                        lable="по:"
                                        data={top100Films}
                                        lableStyle="text-black"
                                        containerStyle={
                                            'w-[50%]  flex-row items-center  '
                                        }
                                        inputStyle="w-[130px]"
                                    />
                                </Box>
                            </Box>
                            <Box className="flex w-[100%] mt-[10px]">
                                <Box className="flex w-[45%] ">
                                    <OutlinedNumber
                                        containerStyle="flex w-[200px] justify-between"
                                        inputStyle="w-[70px]"
                                        text="Рост(см) от."
                                        inputBoxStyle="flex-row-reverse  justify-between w-[100%]"
                                    />
                                    <OutlinedNumber
                                        containerStyle="flex w-[100px] justify-between  ml-[10px] "
                                        inputStyle="w-[70px]"
                                        text="до:"
                                        inputBoxStyle="flex-row-reverse  justify-between w-[100%]"
                                    />
                                </Box>
                            </Box>
                            <Box className="w-full flex flex-row items-center  gap-1 my-[10px]">
                                <Typography className="text-[14px] text-black mr-[58px] ml-[5px] ">
                                    Пол:
                                </Typography>
                                {polData.map((item: any) => (
                                    <Button
                                        onClick={() => setActiveBtn(item.id)}
                                        key={item?.id}
                                        variant="contained"
                                        startIcon={
                                            item.id === activeBtn ? (
                                                <ActiveDotIcon />
                                            ) : (
                                                <NoActiveDotIcon />
                                            )
                                        }
                                        className={` ${
                                            item.id === activeBtn
                                                ? 'bg-[#4CAF50] text-[#fff] border border-solid border-[#4CAF50]'
                                                : 'bg-[#fff] text-[#000] border border-solid border-[#c4c2c2]'
                                        }  h-[40px]  text-[14px]  capitalize mr-[5px] px-[8px] py-[5px]  `}
                                    >
                                        {item?.name}
                                    </Button>
                                ))}
                            </Box>
                        </Box>
                    </Grid>
                    <Grid
                        item
                        xs={6}
                        className="h-[100%] flex flex-col gap-1 w-full"
                    >
                        <Box className="bg-[#fff] w-full p-[5px] h-[50%]">
                            <Typography className="text-[14px] text-[#000]">
                                Медицинский персонал
                            </Typography>
                            <Box className="bg-[#fff] w-full flex mt-[10px]">
                                <AutocompleteInput
                                    lable="Лечащий врач:"
                                    data={top100Films}
                                    lableStyle=" text-black "
                                    containerStyle={
                                        'w-[50%] flex-row items-center  pr-[5px]  '
                                    }
                                    inputStyle="w-[calc(100%-115px)]"
                                />
                                <AutocompleteInput
                                    lable="Палатная сестра:"
                                    data={top100Films}
                                    lableStyle=" text-black "
                                    containerStyle={
                                        'w-[50%]  flex-row items-center  pl-[5px] '
                                    }
                                    inputStyle="w-[calc(100%-135px)]"
                                />
                            </Box>
                        </Box>
                        <Box className="bg-[#fff] w-full p-[5px] h-[50%]">
                            <Typography className="text-[14px] text-[#000]">
                                Программа
                            </Typography>
                            <Box className="bg-[#fff] w-full flex mt-[10px]">
                                <AutocompleteInput
                                    lable="Санаторная программа:"
                                    data={top100Films}
                                    lableStyle=" text-black "
                                    containerStyle={
                                        'w-[50%] flex-row items-center  pr-[5px]  '
                                    }
                                    inputStyle="w-[calc(100%-175px)]"
                                />
                                <AutocompleteInput
                                    lable="Лечебная программа:"
                                    data={top100Films}
                                    lableStyle=" text-black "
                                    containerStyle={
                                        'w-[50%]  flex-row items-center  pl-[5px] '
                                    }
                                    inputStyle="w-[calc(100%-155px)]"
                                />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
            <Grid
                item
                xs={12}
                className="bg-[#fff] min-h-[100px] mt-[10px] p-[5px]"
            >
                <Typography className="text-[14px] text-[#000]">
                    Диагностика/ Методы лечения
                </Typography>
                <Grid item xs={12}>
                    <Grid container className="mt-[15px]">
                        <Grid item xs={6} className="  justify-between">
                            <AutocompleteInput
                                lable="Метки:"
                                data={top100Films}
                                lableStyle=" text-black "
                                containerStyle={
                                    'w-[99%]  flex-row items-center  justify-between'
                                }
                                inputStyle="w-[calc(100%-155px)]"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <AutocompleteInput
                                lable="Консультации"
                                data={top100Films}
                                lableStyle=" text-black "
                                containerStyle={
                                    'w-[99%]  flex-row items-center  justify-between '
                                }
                                inputStyle="w-[calc(100%-155px)]"
                            />
                        </Grid>
                    </Grid>
                    <Grid container className="mt-[5px]">
                        <Grid item xs={6} className="  justify-between">
                            <AutocompleteInput
                                lable="Диагноз:"
                                data={top100Films}
                                lableStyle=" text-black "
                                containerStyle={
                                    'w-[99%]  flex-row items-center  justify-between'
                                }
                                inputStyle="w-[calc(100%-155px)]"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <AutocompleteInput
                                lable="Исследования"
                                data={top100Films}
                                lableStyle=" text-black "
                                containerStyle={
                                    'w-[99%]  flex-row items-center  justify-between '
                                }
                                inputStyle="w-[calc(100%-155px)]"
                            />
                        </Grid>
                    </Grid>
                    <Grid container className="mt-[5px]">
                        <Grid item xs={6} className="  justify-between">
                            <AutocompleteInput
                                lable="Медикаменты"
                                data={top100Films}
                                lableStyle=" text-black "
                                containerStyle={
                                    'w-[99%]  flex-row items-center  justify-between'
                                }
                                inputStyle="w-[calc(100%-155px)]"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <AutocompleteInput
                                lable="Лечебные процедуры"
                                data={top100Films}
                                lableStyle=" text-black "
                                containerStyle={
                                    'w-[99%]  flex-row items-center  justify-between '
                                }
                                inputStyle="w-[calc(100%-155px)]"
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid
                item
                md={12}
                className="bg-[#fff] min-h-[50px] mt-[10px] p-[5px]"
            >
                <Typography className="text-[14px] text-[#000]">
                    Для санаторно—курортного лечения
                </Typography>
                <Box className="flex items-center w-[100%]">
                    <DefaultCheckbox
                        label="Показан"
                        checkboxStyle={{ padding: 0, marginRight: '10px' }}
                    />
                    <DefaultCheckbox label="Не показан" />
                    <DefaultCheckbox label="Противопоказан" />
                </Box>
            </Grid>
        </Grid>
    );
};

export default AdvancedSearchOptions;
