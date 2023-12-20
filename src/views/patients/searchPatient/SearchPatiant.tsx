import { Box, Grid, Typography } from '@mui/material'
import { CloseIcon, SearchIcon, VuesaxLinear } from 'assets/icons/icons';
import CustomizedAccordions from 'components/CustomizedAccordions'
import AutocompleteInput from 'components/autocompleteInput/AutocompleteInput';
import DefaultCheckbox from 'components/checkbox/DefaultCheckbox';
import { BookedPatientSearch } from 'components/columnDefs/bookedCol';
import DefaultButton from 'components/deafultButton/DefaultButton';
import DefaultInput from 'components/defaultInput/DefaultInput';
import ReceptionTable from 'components/receptionTable/ReceptionTable';
import SearchInput from 'components/search/SearchInput';
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';

interface IFormInput {
    phone: string;
    email: string;
    company: string;
    manager: string;
}

const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },
];

const rowData = [
    {
        number: '776/2023',
        name: "Choriyev Muzaffar",
        Age: "30",
        roomNumber: "311(Корпус1)",
        mainDiagnos: "",
        doctor: "Сулаймонов С.А.",
        dateArrival: "10.06.2023",
        dateLeave: "17.06.2023"
    },
    {
        number: '776/2023',
        name: "Choriyev Muzaffar",
        Age: "30",
        roomNumber: "311(Корпус1)",
        mainDiagnos: "",
        doctor: "Сулаймонов С.А.",
        dateArrival: "10.06.2023",
        dateLeave: "17.06.2023"
    },
    {
        number: '776/2023',
        name: "Choriyev Muzaffar",
        Age: "30",
        roomNumber: "311(Корпус1)",
        mainDiagnos: "",
        doctor: "Сулаймонов С.А.",
        dateArrival: "10.06.2023",
        dateLeave: "17.06.2023"
    },
    {
        number: '776/2023',
        name: "Choriyev Muzaffar",
        Age: "30",
        roomNumber: "311(Корпус1)",
        mainDiagnos: "",
        doctor: "Сулаймонов С.А.",
        dateArrival: "10.06.2023",
        dateLeave: "17.06.2023"
    },
    {
        number: '776/2023',
        name: "Choriyev Muzaffar",
        Age: "30",
        roomNumber: "311(Корпус1)",
        mainDiagnos: "",
        doctor: "Сулаймонов С.А.",
        dateArrival: "10.06.2023",
        dateLeave: "17.06.2023"
    },
    {
        number: '776/2023',
        name: "Choriyev Muzaffar",
        Age: "30",
        roomNumber: "311(Корпус1)",
        mainDiagnos: "",
        doctor: "Сулаймонов С.А.",
        dateArrival: "10.06.2023",
        dateLeave: "17.06.2023"
    },
    {
        number: '776/2023',
        name: "Choriyev Muzaffar",
        Age: "30",
        roomNumber: "311(Корпус1)",
        mainDiagnos: "",
        doctor: "Сулаймонов С.А.",
        dateArrival: "10.06.2023",
        dateLeave: "17.06.2023"
    },
    {
        number: '776/2023',
        name: "Choriyev Muzaffar",
        Age: "30",
        roomNumber: "311(Корпус1)",
        mainDiagnos: "",
        doctor: "Сулаймонов С.А.",
        dateArrival: "10.06.2023",
        dateLeave: "17.06.2023"
    },
    {
        number: '776/2023',
        name: "Choriyev Muzaffar",
        Age: "30",
        roomNumber: "311(Корпус1)",
        mainDiagnos: "",
        doctor: "Сулаймонов С.А.",
        dateArrival: "10.06.2023",
        dateLeave: "17.06.2023"
    },
    {
        number: '776/2023',
        name: "Choriyev Muzaffar",
        Age: "30",
        roomNumber: "311(Корпус1)",
        mainDiagnos: "",
        dateArrival: "10.06.2023",
        dateLeave: "17.06.2023"
    },
    {
        number: '776/2023',
        name: "Choriyev Muzaffar",
        Age: "30",
        roomNumber: "311(Корпус1)",
        mainDiagnos: "",
        dateArrival: "10.06.2023",
        dateLeave: "17.06.2023"
    },
    {
        number: '776/2023',
        name: "Choriyev Muzaffar",
        Age: "30",
        roomNumber: "311(Корпус1)",
        mainDiagnos: "",
        dateArrival: "10.06.2023",
        dateLeave: "17.06.2023"
    },
    {
        number: '776/2023',
        name: "Choriyev Muzaffar",
        Age: "30",
        roomNumber: "311(Корпус1)",
        mainDiagnos: "",
        dateArrival: "10.06.2023",
        dateLeave: "17.06.2023"
    },
    {
        number: '776/2023',
        name: "Choriyev Muzaffar",
        Age: "30",
        roomNumber: "311(Корпус1)",
        mainDiagnos: "",
        dateArrival: "10.06.2023",
        dateLeave: "17.06.2023"
    },
    {
        number: '776/2023',
        name: "Choriyev Muzaffar",
        Age: "30",
        roomNumber: "311(Корпус1)",
        mainDiagnos: "",
        dateArrival: "10.06.2023",
        dateLeave: "17.06.2023"
    },

    {
        number: '776/2023',
        name: "Choriyev Muzaffar",
        Age: "30",
        roomNumber: "311(Корпус1)",
        mainDiagnos: "",
        dateArrival: "10.06.2023",
        dateLeave: "17.06.2023"
    },
    {
        number: '776/2023',
        name: "Choriyev Muzaffar",
        Age: "30",
        roomNumber: "311(Корпус1)",
        mainDiagnos: "",
        doctor: "Сулаймонов С.А.",
        dateArrival: "10.06.2023",
        dateLeave: "17.06.2023"
    },
    {
        number: '776/2023',
        name: "Choriyev Muzaffar",
        Age: "30",
        roomNumber: "311(Корпус1)",
        mainDiagnos: "",
        dateArrival: "10.06.2023",
        dateLeave: "17.06.2023"
    },
    {
        number: '776/2023',
        name: "Choriyev Muzaffar",
        Age: "30",
        roomNumber: "311(Корпус1)",
        mainDiagnos: "",
        dateArrival: "10.06.2023",
        dateLeave: "17.06.2023"
    },
];


const SearchPatiant = () => {

    const { register, handleSubmit } = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

    return (
        <Grid className='' container>
            <CustomizedAccordions title='Параметры поиска:' childrenStyle={{ background: '#F5F5F5' }}>
                <Grid item xs={12} md={12} className="bg-[#F5F5F5]">
                    <form onSubmit={handleSubmit(onSubmit)}
                        className=" flex justify-between items-center gap-[10px] "
                    >
                        <DefaultInput
                            placeholder='ФИО пациента'
                            inputType={'string'}
                            register={register}
                        />
                        <DefaultInput
                            placeholder='№ Истории'
                            inputType={'string'}
                            register={register}
                        />
                        <DefaultInput
                            placeholder='Тип карты'
                            inputType={'string'}
                            register={register}
                        />
                    </form>
                    <Grid className="bg-[#F5F5F5] flex items-center mt-4 gap-[40px]" item xs={12} md={12} >
                        <Grid className="flex">
                            <DefaultCheckbox
                                label='Искать в архиве'
                            />
                            <DefaultCheckbox
                                label='Искать в пациентах моих подчинённых'
                            />
                        </Grid>
                        <Grid className="flex gap-[40px]">
                            <Grid className="flex items-center gap-[10px]">
                                <Typography>
                                    Был в учреждении с:
                                </Typography>
                                <AutocompleteInput
                                    data={top100Films}
                                    containerStyle={'flex-row items-center '}
                                    inputStyle="w-[150px]"
                                />
                            </Grid>
                            <Grid className="flex items-center gap-[10px]">
                                <Typography>
                                    по:
                                </Typography>
                                <AutocompleteInput
                                    data={top100Films}
                                    containerStyle={'flex-row items-center '}
                                    inputStyle="w-[150px]"
                                />
                            </Grid>
                            <Grid className="flex items-center gap-[10px]">
                                <Typography>
                                    Был на приёме:
                                </Typography>
                                <AutocompleteInput
                                    data={top100Films}
                                    containerStyle={'flex-row items-center '}
                                    inputStyle="w-[150px]"
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </CustomizedAccordions>
            <CustomizedAccordions title='Расширенные параметры поиска'>
                <Typography>
                    Samthing
                </Typography>
            </CustomizedAccordions>
            <Grid item xs={12} md={12} className="flex items-center justify-between p-[0, 10px]">
                <Grid item xs={12} md={8} className=' flex items-center gap-[30px]'>
                    <Typography className="text-[#8d8c8c] ">
                        Найдено записей: 373
                    </Typography>
                    <Box className='w-[70%]'>
                        <SearchInput
                            placeholder='Искать в таблице'
                        />
                    </Box>

                </Grid>
                <Grid item xs={12} md={4} className="flex justify-between">
                    <DefaultButton
                        title='Выбор колонок'
                    />
                    <DefaultButton
                        title='Ехсеl'
                        icon={<VuesaxLinear />}
                    />
                    <DefaultButton
                        title='Поиск'
                        icon={<SearchIcon stroke="white" />}
                    />
                    <DefaultButton
                        title='Очистить фильтр'
                        icon={<CloseIcon stroke="white" />}
                    />
                </Grid>
            </Grid>
            <Grid item xs={12} md={12} className=" bg-[#F5F5F5]">
                <ReceptionTable
                    columnDefs={BookedPatientSearch}
                    rowData={rowData}
                    height="h-[50vh]"
                />
            </Grid>
        </Grid>
    )
}

export default SearchPatiant