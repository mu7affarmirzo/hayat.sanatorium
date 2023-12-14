import { ColDef } from 'ag-grid-community';

export const BookingTableViewCol: ColDef[] = [
    {
        headerName: 'Комната',
        field: 'roomNumber',
        width: 140,
        cellStyle: {
            border: '.5px solid #e0e0e0',
        },
    },
    {
        headerName: 'Дата выезда',
        field: 'departureDate',
        width: 150,
        editable: true,
        cellStyle: {
            border: '.5px solid #e0e0e0',
        },
    },
    {
        headerName: 'Дата заезда',
        field: 'visitDate',
        width: 150,
        minWidth: 150,
        maxWidth: 200,
        editable: true,
        cellStyle: {
            border: '.5px solid #e0e0e0',
        },
    },
    {
        headerName: 'Пол',
        field: 'gender',
        width: 80,
        cellStyle: {
            border: '.5px solid #e0e0e0',
        },
    },
    {
        headerName: 'Возраст',
        field: 'age',
        width: 90,
        cellStyle: {
            border: '.5px solid #e0e0e0',
        },
    },
    {
        headerName: 'Вид',
        field: 'view',
        width: 100,
        cellStyle: {
            border: '.5px solid #e0e0e0',
        },
    },
    {
        headerName: 'Корпус',
        field: 'section',
        width: 110,
        cellStyle: {
            border: '.5px solid #e0e0e0',
        },
    },
    {
        headerName: 'Этаж',
        field: 'level',
        width: 80,
        cellStyle: {
            border: '.5px solid #e0e0e0',
        },
    },
    {
        headerName: 'Статус уборки',
        field: 'isClean',
        width: 160,
        cellStyle: {
            border: '.5px solid #e0e0e0',
        },
    },
    {
        headerName: 'Вид уборки',
        field: 'cleaningType',
        width: 80,
        cellStyle: {
            border: '.5px solid #e0e0e0',
        },
    },
    {
        headerName: 'Занят?',
        field: 'comments',
        width: 80,
        cellStyle: {
            border: '.5px solid #e0e0e0',
        },
    },
    {
        headerName: 'Комментарии',
        field: 'comments',
        width: 130,
        cellStyle: {
            border: '.5px solid #e0e0e0',
        },
    },
    {
        headerName: 'K-во использований',
        field: 'howManyTimesUsed',
        width: 160,
        cellStyle: {
            border: '.5px solid #e0e0e0',
        },
    },
];
