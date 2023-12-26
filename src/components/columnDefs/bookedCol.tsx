import { ColDef } from 'ag-grid-community';

export const BookedCol: ColDef[] = [
    {
        headerName: 'Статус',
        field: 'number',
        width: 160,
        cellStyle: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: ' start ',
            border: '.5px solid #e0e0e0',
            paddingLeft: '10px',
        },
    },
    {
        headerName: 'Пациент',
        field: 'name',
        width: 160,
        editable: true,
        cellStyle: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: ' start ',
            border: '.5px solid #e0e0e0',
            paddingLeft: '10px',
        },
    },
    {
        headerName: 'Пол',
        field: 'number',
        width: 160,
        cellStyle: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: ' start ',
            border: '.5px solid #e0e0e0',
            paddingLeft: '10px',
        },
    },
    {
        headerName: 'Комната',
        field: 'name',
        width: 160,
        editable: true,
        cellStyle: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: ' start ',
            border: '.5px solid #e0e0e0',
            paddingLeft: '10px',
        },
    },
    {
        headerName: 'Пол',
        field: 'Тип комнаты',
        width: 160,
        cellStyle: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: ' start ',
            border: '.5px solid #e0e0e0',
            paddingLeft: '10px',
        },
    },
    {
        headerName: 'Программа',
        field: 'name',
        width: 160,
        editable: true,
        cellStyle: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: ' start ',
            border: '.5px solid #e0e0e0',
            paddingLeft: '10px',
        },
    },
    {
        headerName: 'Дата приезда (план)',
        field: 'Тип комнаты',
        width: 160,
        cellStyle: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: ' start ',
            border: '.5px solid #e0e0e0',
            paddingLeft: '10px',
        },
    },
    {
        headerName: 'Дата отъезда (план)',
        field: 'name',
        width: 160,
        editable: true,
        cellStyle: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: ' start ',
            border: '.5px solid #e0e0e0',
            paddingLeft: '10px',
        },
    },
];

export const BookedPatiant: ColDef[] = [
    {
        colId: 'checkbox',
        field: 'occupied',
        width: 40,
        checkboxSelection: true,
        suppressMenu: true,
        headerCheckboxSelection: true,
        cellStyle: {
            padding: '0 ',
        },
    },
    {
        headerName: '',
        field: '',
        width: 67,
        cellStyle: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: ' start ',
            border: '.5px solid #e0e0e0',
            paddingLeft: '10px',
        },
    },
    {
        headerName: '№',
        field: 'number',
        width: 120,
        cellStyle: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: ' end ',
            border: '.5px solid #e0e0e0',
            paddingLeft: '10px',
        },
    },
    {
        headerName: 'Пациент',
        field: 'name',
        width: 250,
        cellStyle: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: ' start ',
            border: '.5px solid #e0e0e0',
            paddingLeft: '10px',
            color: '#0B79D0'
        },
    },
    {
        headerName: 'Возраст',
        field: 'Age',
        width: 100,
        cellStyle: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: ' end ',
            border: '.5px solid #e0e0e0',
            paddingLeft: '10px',
        },
    },
    {
        headerName: 'Комната',
        field: 'roomNumber',
        width: 200,
        cellStyle: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: ' end ',
            border: '.5px solid #e0e0e0',
            paddingLeft: '10px',
        },
    },
    {
        headerName: 'Основной диагноз',
        field: 'mainDiagnos',
        width: 550,
        cellStyle: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: ' start ',
            border: '.5px solid #e0e0e0',
            paddingLeft: '10px',
        },
    },
    {
        headerName: 'Дата приезда',
        field: 'dateArrival',
        width: 140,
        cellStyle: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: ' end ',
            border: '.5px solid #e0e0e0',
            paddingLeft: '10px',
        },
    },
    {
        headerName: 'Дата отъезда',
        field: 'dateLeave',
        width: 140,
        cellStyle: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: ' end ',
            border: '.5px solid #e0e0e0',
            paddingLeft: '10px',
        },
    },
]

export const BookedPatientSearch: ColDef[] = [
    {
        headerName: '',
        field: '',
        width: 40,
        cellStyle: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: ' start ',
            border: '.5px solid #e0e0e0',
            paddingLeft: '10px',
        },
    },
    {
        headerName: '№ ИБ',
        field: 'number',
        width: 120,
        cellStyle: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: ' end ',
            border: '.5px solid #e0e0e0',
            paddingLeft: '10px',
        },
    },
    {
        headerName: 'Пациент',
        field: 'name',
        width: 250,
        cellStyle: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: ' start ',
            border: '.5px solid #e0e0e0',
            paddingLeft: '10px',
            color: '#0B79D0'
        },
    },
    {
        headerName: 'Возраст',
        field: 'Age',
        width: 100,
        cellStyle: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: ' end ',
            border: '.5px solid #e0e0e0',
            paddingLeft: '10px',
        },
    },
    {
        headerName: 'Комната',
        field: 'roomNumber',
        width: 200,
        cellStyle: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: ' end ',
            border: '.5px solid #e0e0e0',
            paddingLeft: '10px',
        },
    },
    {
        headerName: 'Основной диагноз',
        field: 'mainDiagnos',
        width: 310,
        cellStyle: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: ' start ',
            border: '.5px solid #e0e0e0',
            paddingLeft: '10px',
        },
    },
    {
        headerName: 'Лечащий врач',
        field: 'doctor',
        width: 310,
        cellStyle: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: ' start ',
            border: '.5px solid #e0e0e0',
            paddingLeft: '10px',
        },
    },
    {
        headerName: 'Дата приезда',
        field: 'dateArrival',
        width: 140,
        cellStyle: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: ' end ',
            border: '.5px solid #e0e0e0',
            paddingLeft: '10px',
        },
    },
    {
        headerName: 'Дата отъезда',
        field: 'dateLeave',
        width: 140,
        cellStyle: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: ' end ',
            border: '.5px solid #e0e0e0',
            paddingLeft: '10px',
        },
    },
]

export const BookedPatientDoctorDuty: ColDef[] = [
    {
        headerName: '',
        field: '',
        width: 30,
        cellStyle: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: ' start ',
            border: '.5px solid " "',
            paddingLeft: '10px',
        },
    },
    {
        headerName: '№',
        field: 'number',
        width: 120,
        cellStyle: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: ' end',
            border: '.5px solid #e0e0e0',
            paddingLeft: '10px',
        },
    },
    {
        headerName: 'Пациент',
        field: 'name',
        width: 550,
        cellStyle: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: ' start ',
            border: '.5px solid #e0e0e0',
            paddingLeft: '10px',
            color: '#0B79D0'
        },
    },
    {
        headerName: 'Возраст',
        field: 'Age',
        width: 100,
        cellStyle: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: ' end ',
            border: '.5px solid #e0e0e0',
            paddingLeft: '10px',
        },
    },
    {
        headerName: 'Комната',
        field: 'roomNumber',
        width: 150,
        cellStyle: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: ' end ',
            border: '.5px solid #e0e0e0',
            paddingLeft: '10px',
        },
    },
    {
        headerName: 'Основной диагноз',
        field: 'mainDiagnos',
        width: 550,
        cellStyle: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: ' start ',
            border: '.5px solid #e0e0e0',
            paddingLeft: '10px',
        },
    },
    {
        headerName: 'Дата приезда',
        field: 'dateArrival',
        width: 140,
        cellStyle: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: ' end ',
            border: '.5px solid #e0e0e0',
            paddingLeft: '10px',
        },
    },
    {
        headerName: 'Дата отъезда',
        field: 'dateLeave',
        width: 140,
        cellStyle: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: ' end ',
            border: '.5px solid #e0e0e0',
            paddingLeft: '10px',
        },
    },
]

