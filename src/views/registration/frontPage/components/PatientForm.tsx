import { Box, Button, Typography } from '@mui/material';
import { ActiveDotIcon, NoActiveDotIcon } from 'assets/icons/icons';
import AutocompleteInput from 'components/autocompleteInput/AutocompleteInput';
import DefaultInput from 'components/defaultInput/DefaultInput';
import { memo, useState } from 'react';
type propsType = {
    polData: any;
    avtoCaplektData: any;
    register: any;
};
const PatientForm = (props: propsType) => {
    let { polData, avtoCaplektData, register } = props;
    const [activeBtn, setActiveBtn] = useState(0);

    return (
        <Box className="flex flex-col ">
            <Typography>Пациент</Typography>
            <Box className="w-full flex items-center justify-between ">
                <DefaultInput
                    register={register}
                    inputType={'lastName'}
                    lable="Фамилия"
                    containerStile="w-[32%] flex-col "
                    inputStyle="70%"
                />
                <DefaultInput
                    register={register}
                    inputType={'name'}
                    lable="Имя"
                    containerStile="w-[32%] flex-col "
                    inputStyle="70%"
                />
                <DefaultInput
                    register={register}
                    inputType={'surname'}
                    lable="Отчество"
                    containerStile="w-[32%] flex-col "
                    inputStyle="70%"
                />
            </Box>

            <DefaultInput
                lable="Обращение:"
                register={register}
                inputType={'appeal'}
                containerStile="w-[100%] flex-row justify-between items-center mt-[10px] "
                inputStyle="w-[70%]"
            />

            <Box className="w-full flex flex-row items-center  gap-1 mt-[10px]">
                <Typography className="text-[14px] text-[#858585] mr-[58px] ">
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
            <AutocompleteInput
                lable="Дата рождения"
                data={avtoCaplektData}
                containerStyle={
                    'w-full  flex-row items-center  mt-[10px] justify-between'
                }
                inputStyle="w-[62%]"
            />
            <DefaultInput
                lable="Место работы:"
                register={register}
                inputType={'appeal'}
                containerStile="w-[100%] flex-row justify-between items-center mt-[10px] "
                inputStyle="w-[62%]"
            />
            <DefaultInput
                lable="Занимаемая должность:"
                register={register}
                inputType={'appeal'}
                containerStile="w-[100%] flex-row justify-between items-center mt-[10px] "
                inputStyle="w-[62%]"
            />
        </Box>
    );
};

export default memo(PatientForm);
