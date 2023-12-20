import { Box, Grid, Typography } from '@mui/material'
import { CloseIcon, SearchAltIcon, VuesaxLinear } from 'assets/icons/icons';
import SelectButton from 'components/SelectButton';
import DefaultCheckbox from 'components/checkbox/DefaultCheckbox'
import DefaultButton from 'components/deafultButton/DefaultButton';
import DefaultInput from 'components/defaultInput/DefaultInput';
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
interface IFormInput {
    phone: string;
    email: string;
    company: string;
    manager: string;
}

const selectData2 = [
    {
        id: 0,
        title: 'Оплатить',
    },
];

const AccountsView = () => {

    const { register, handleSubmit } = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

    return (
        <Grid className='' container>
            <Grid item xs={12} md={12} className="flex items-center bg-[#F5F5F5] mt-[10px]">
                <Box>
                    <DefaultCheckbox
                        label='Зачёт авансовых платежей'
                    />
                </Box>
                <Grid className=" flex justify-between items-center gap-5 pl-14">
                    <Typography>
                        Фильтрация по статусу счёта:
                    </Typography>
                    <Grid className="flex justify-between items-center gap-5" >
                        <DefaultCheckbox
                            label='Создан'
                        />
                        <DefaultCheckbox
                            label='Оплачен'
                        />
                        <DefaultCheckbox
                            label='Распечатан'
                        />
                        <DefaultCheckbox
                            label='Отменен'
                        />
                        <DefaultCheckbox
                            label='Ожидает онлайн оплаты'
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid className="flex justify-between items-center" item xs={12} md={12}>
                <form
                    className="flex w-[80%] justify-between items-start my-[10px]"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <DefaultInput
                        register={register}
                        inputType={'string'}
                        placeholder="Пациент (ФИО)"
                        containerStile="w-[32%]"
                    />
                    <DefaultInput
                        register={register}
                        inputType={'string'}
                        placeholder="Номер ИБ"
                        containerStile="w-[32%]"
                    />
                    <DefaultInput
                        register={register}
                        inputType={'string'}
                        placeholder="Номер счёта"
                        containerStile="w-[32%]"
                    />
                </form>
                <Grid className="flex">
                    <Box>
                        <DefaultButton
                            title=" Поиск"
                            icon={<SearchAltIcon stroke="white" />}
                            style="bg-[#2196F3] h-[46px] text-[#fff] text-[14px]  capitalize  mr-[10px]"
                        />
                        <DefaultButton
                            title=" Очистить фильтр"
                            icon={<CloseIcon stroke="white" />}
                        />
                    </Box>
                </Grid>
            </Grid>
            <Grid item xs={12} md={12} className=" flex gap-[10px]">
                <DefaultButton
                    title='Распечатать'
                    style="bg-[#64B6F7]"
                />
                <DefaultButton
                    title='Отменить'
                    style="bg-[#64B6F7]"
                />
                <SelectButton
                    defaultValue='Оплатить'
                    data={selectData2}
                />
                <DefaultButton
                    title='Чек зачёта аванса'
                    style="bg-[#64B6F7]"
                />
                <DefaultButton
                    title='Отменить оплату'
                    style="bg-[#64B6F7]"
                />
                <DefaultButton
                    title="Выбор колонок"
                    style="ml-[30px] bg-[#2196F3]"
                />
                <DefaultButton
                    title="Ехсеl"
                    icon={<VuesaxLinear />}
                    style="bg-[#2196F3]"
                />
            </Grid>
            <Grid item xs={12} md={12} className="border border-[rgba(0, 0, 0, 0.23)] mt-3 h-[60vh] text-center">
                <Typography className=" ">
                    Поиск не дал результатов.
                </Typography>
            </Grid>
        </Grid>
    )
}

export default AccountsView