import { Box, Typography } from '@mui/material';
import AutocompleteInput from 'components/autocompleteInput/AutocompleteInput';
import DefaultInput from 'components/defaultInput/DefaultInput';
type propsType = {
    avtoCaplektData: any;
    register: any;
};
const HomeAddressForm = (props: propsType) => {
    let { avtoCaplektData, register } = props;

    return (
        <Box className="flex flex-col border mt-[10px] p-[5px] ">
            <Typography className=" text-[14px] text-[text-[#000]] ">
                Домашний адрес
            </Typography>
            <DefaultInput
                lable="Быстрый ввод адреса"
                register={register}
                inputType={'appeal'}
                containerStile="w-[100%] flex-col  mt-[10px] "
                inputStyle="w-[100%]"
            />

            <Box className="w-full flex flex-row items-center justify-between  gap-1 mt-[10px]">
                <AutocompleteInput
                    lable="Страна"
                    data={avtoCaplektData}
                    containerStyle={'w-[32%]  flex-col'}
                    inputStyle="w-[100%]"
                />
                <DefaultInput
                    lable="Область"
                    register={register}
                    inputType={'appeal'}
                    containerStile="w-[32%] flex-col"
                    inputStyle="w-[100%]"
                />
                <DefaultInput
                    lable="Район"
                    register={register}
                    inputType={'appeal'}
                    containerStile="w-[32%] flex-col"
                    inputStyle="w-[100%]"
                />
            </Box>
            <Box className="w-full flex flex-row items-center justify-between  gap-1 mt-[10px]">
                <DefaultInput
                    lable="Тип нас. пункта"
                    register={register}
                    inputType={'appeal'}
                    containerStile="w-[32%] flex-col"
                    inputStyle="w-[100%]"
                />
                <DefaultInput
                    lable="Название нас"
                    register={register}
                    inputType={'appeal'}
                    containerStile="w-[32%] flex-col"
                    inputStyle="w-[100%]"
                />
                <DefaultInput
                    lable="Улица"
                    register={register}
                    inputType={'appeal'}
                    containerStile="w-[32%] flex-col"
                    inputStyle="w-[100%]"
                />
            </Box>
            <Box className="w-full flex flex-row items-center justify-between  gap-1 mt-[10px]">
                <DefaultInput
                    lable="Дом"
                    register={register}
                    inputType={'appeal'}
                    containerStile="w-[32%] flex-col"
                    inputStyle="w-[100%]"
                />
                <DefaultInput
                    lable="Корпус"
                    register={register}
                    inputType={'appeal'}
                    containerStile="w-[32%] flex-col"
                    inputStyle="w-[100%]"
                />
                <DefaultInput
                    lable="Квартира"
                    register={register}
                    inputType={'appeal'}
                    containerStile="w-[32%] flex-col"
                    inputStyle="w-[100%]"
                />
            </Box>
        </Box>
    );
};

export default HomeAddressForm;
