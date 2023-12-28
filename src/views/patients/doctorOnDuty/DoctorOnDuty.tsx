import { Grid } from '@mui/material';
import { BookedPatientDoctorDuty } from 'components/columnDefs/bookedCol';
import ReceptionTable from 'components/receptionTable/ReceptionTable';
import SearchInput from 'components/search/SearchInput';
import React from 'react';

const rowData = [
    {
        number: '776/2023',
        name: 'Choriyev Muzaffar',
        Age: '30',
        roomNumber: '311(Корпус1)',
        mainDiagnos: '',
        doctor: 'Сулаймонов С.А.',
        dateArrival: '10.06.2023',
        dateLeave: '17.06.2023',
    },
    {
        number: '776/2023',
        name: 'Choriyev Muzaffar',
        Age: '30',
        roomNumber: '311(Корпус1)',
        mainDiagnos: '',
        doctor: 'Сулаймонов С.А.',
        dateArrival: '10.06.2023',
        dateLeave: '17.06.2023',
    },
    {
        number: '776/2023',
        name: 'Choriyev Muzaffar',
        Age: '30',
        roomNumber: '311(Корпус1)',
        mainDiagnos: '',
        doctor: 'Сулаймонов С.А.',
        dateArrival: '10.06.2023',
        dateLeave: '17.06.2023',
    },
    {
        number: '776/2023',
        name: 'Choriyev Muzaffar',
        Age: '30',
        roomNumber: '311(Корпус1)',
        mainDiagnos: '',
        doctor: 'Сулаймонов С.А.',
        dateArrival: '10.06.2023',
        dateLeave: '17.06.2023',
    },
    {
        number: '776/2023',
        name: 'Choriyev Muzaffar',
        Age: '30',
        roomNumber: '311(Корпус1)',
        mainDiagnos: '',
        doctor: 'Сулаймонов С.А.',
        dateArrival: '10.06.2023',
        dateLeave: '17.06.2023',
    },
    {
        number: '776/2023',
        name: 'Choriyev Muzaffar',
        Age: '30',
        roomNumber: '311(Корпус1)',
        mainDiagnos: '',
        doctor: 'Сулаймонов С.А.',
        dateArrival: '10.06.2023',
        dateLeave: '17.06.2023',
    },
    {
        number: '776/2023',
        name: 'Choriyev Muzaffar',
        Age: '30',
        roomNumber: '311(Корпус1)',
        mainDiagnos: '',
        doctor: 'Сулаймонов С.А.',
        dateArrival: '10.06.2023',
        dateLeave: '17.06.2023',
    },
    {
        number: '776/2023',
        name: 'Choriyev Muzaffar',
        Age: '30',
        roomNumber: '311(Корпус1)',
        mainDiagnos: '',
        doctor: 'Сулаймонов С.А.',
        dateArrival: '10.06.2023',
        dateLeave: '17.06.2023',
    },
    {
        number: '776/2023',
        name: 'Choriyev Muzaffar',
        Age: '30',
        roomNumber: '311(Корпус1)',
        mainDiagnos: '',
        doctor: 'Сулаймонов С.А.',
        dateArrival: '10.06.2023',
        dateLeave: '17.06.2023',
    },
    {
        number: '776/2023',
        name: 'Choriyev Muzaffar',
        Age: '30',
        roomNumber: '311(Корпус1)',
        mainDiagnos: '',
        dateArrival: '10.06.2023',
        dateLeave: '17.06.2023',
    },
    {
        number: '776/2023',
        name: 'Choriyev Muzaffar',
        Age: '30',
        roomNumber: '311(Корпус1)',
        mainDiagnos: '',
        dateArrival: '10.06.2023',
        dateLeave: '17.06.2023',
    },
    {
        number: '776/2023',
        name: 'Choriyev Muzaffar',
        Age: '30',
        roomNumber: '311(Корпус1)',
        mainDiagnos: '',
        dateArrival: '10.06.2023',
        dateLeave: '17.06.2023',
    },
    {
        number: '776/2023',
        name: 'Choriyev Muzaffar',
        Age: '30',
        roomNumber: '311(Корпус1)',
        mainDiagnos: '',
        dateArrival: '10.06.2023',
        dateLeave: '17.06.2023',
    },
    {
        number: '776/2023',
        name: 'Choriyev Muzaffar',
        Age: '30',
        roomNumber: '311(Корпус1)',
        mainDiagnos: '',
        dateArrival: '10.06.2023',
        dateLeave: '17.06.2023',
    },
    {
        number: '776/2023',
        name: 'Choriyev Muzaffar',
        Age: '30',
        roomNumber: '311(Корпус1)',
        mainDiagnos: '',
        dateArrival: '10.06.2023',
        dateLeave: '17.06.2023',
    },

    {
        number: '776/2023',
        name: 'Choriyev Muzaffar',
        Age: '30',
        roomNumber: '311(Корпус1)',
        mainDiagnos: '',
        dateArrival: '10.06.2023',
        dateLeave: '17.06.2023',
    },
    {
        number: '776/2023',
        name: 'Choriyev Muzaffar',
        Age: '30',
        roomNumber: '311(Корпус1)',
        mainDiagnos: '',
        doctor: 'Сулаймонов С.А.',
        dateArrival: '10.06.2023',
        dateLeave: '17.06.2023',
    },
    {
        number: '776/2023',
        name: 'Choriyev Muzaffar',
        Age: '30',
        roomNumber: '311(Корпус1)',
        mainDiagnos: '',
        dateArrival: '10.06.2023',
        dateLeave: '17.06.2023',
    },
    {
        number: '776/2023',
        name: 'Choriyev Muzaffar',
        Age: '30',
        roomNumber: '311(Корпус1)',
        mainDiagnos: '',
        dateArrival: '10.06.2023',
        dateLeave: '17.06.2023',
    },
];

const DoctorOnDuty = () => {
    return (
        <Grid className="" container>
            <Grid item xs={12} md={12} className="mt-[10px] bg-[#F5F5F5]">
                <SearchInput />
            </Grid>
            <Grid item xs={12} md={12} className=" bg-[#F5F5F5] mt-2">
                <ReceptionTable
                    columnDefs={BookedPatientDoctorDuty}
                    rowData={rowData}
                    height="h-[75vh]"
                />
            </Grid>
        </Grid>
    );
};

export default DoctorOnDuty;
