import { Box, Typography } from '@mui/material';
import CustomizedAccordions from 'components/CustomizedAccordions';
import AutocompleteInput from 'components/autocompleteInput/AutocompleteInput';
import DefaultInput from 'components/defaultInput/DefaultInput';
type propsType = {
    avtoCaplektData: any;
    register: any;
};
const DocumentationForm = (props: propsType) => {
    let { avtoCaplektData, register } = props;
    return (
        <CustomizedAccordions
            title="Документы"
            childrenStyle={{
                background: '#fff',
                display: 'flex',
            }}
            topBoxStyle={{ background: '#F5F5F5', marginTop: '10px' }}
        >
            <Box className="flex flex-col  ">
                <Box className="w-full flex items-center justify-between mt-[10px] ">
                    <AutocompleteInput
                        lable="Страна"
                        data={avtoCaplektData}
                        containerStyle={
                            'w-[49%] flex flex-col   justify-between '
                        }
                        inputStyle="w-[100%]"
                    />
                    <AutocompleteInput
                        lable="Тип документа"
                        data={avtoCaplektData}
                        containerStyle={
                            'w-[49%] flex flex-col   justify-between '
                        }
                        inputStyle="w-[100%]"
                    />
                </Box>
                <Box className="w-full flex flex-row items-center  gap-1 mt-[10px]">
                    <DefaultInput
                        lable="Серия"
                        register={register}
                        inputType={'series'}
                        containerStile="w-[20%] flex-col"
                        inputStyle="w-[100%]"
                    />

                    <DefaultInput
                        lable="Номер"
                        register={register}
                        inputType={'number'}
                        containerStile="w-[20%] flex-col"
                        inputStyle="w-[100%]"
                    />
                    <AutocompleteInput
                        lable="Дата выдачи"
                        data={avtoCaplektData}
                        containerStyle={'w-[24%] flex flex-col'}
                        inputStyle="w-[100%]"
                    />
                    <DefaultInput
                        lable="Код подразделения"
                        register={register}
                        inputType={'number'}
                        containerStile="w-[35%] flex-col"
                        inputStyle="w-[100%]"
                    />
                </Box>
                <DefaultInput
                    lable="Кем выдан"
                    register={register}
                    inputType={'appeal'}
                    containerStile="w-[100%] flex-row items-center justify-between mt-[10px]"
                    inputStyle="w-[80%]"
                />
                <DefaultInput
                    lable="СНИЛС"
                    register={register}
                    inputType={'appeal'}
                    containerStile="w-[100%] flex-row items-center justify-between mt-[10px]"
                    inputStyle="w-[80%]"
                />

                <Box className="flex flex-col  border mt-[10px] p-[5px]">
                    <Typography className=" text-[14px] text-[#000] ">
                        Данные полиса
                    </Typography>
                    <Box className="w-full flex items-center justify-between mt-[10px] ">
                        <AutocompleteInput
                            lable="Тип полиса"
                            data={avtoCaplektData}
                            containerStyle={'w-[33%]  flex-col'}
                            inputStyle="w-[100%]"
                        />

                        <DefaultInput
                            lable="Серия"
                            register={register}
                            inputType={'number'}
                            containerStile="w-[32%] flex-col"
                            inputStyle="w-[100%]"
                        />
                        <DefaultInput
                            lable="Номер"
                            register={register}
                            inputType={'number'}
                            containerStile="w-[32%] flex-col"
                            inputStyle="w-[100%]"
                        />
                    </Box>
                    <DefaultInput
                        lable="Наименование СМО"
                        register={register}
                        inputType={'number'}
                        containerStile="w-[100%] flex-col mt-[10px]"
                        inputStyle="w-[100%]"
                    />
                </Box>
            </Box>
        </CustomizedAccordions>
    );
};

export default DocumentationForm;
