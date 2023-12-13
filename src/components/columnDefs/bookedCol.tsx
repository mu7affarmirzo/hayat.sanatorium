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
