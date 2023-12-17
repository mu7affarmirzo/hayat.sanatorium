import { ColDef } from 'ag-grid-community';

export const ConnectionCol: ColDef[] = [
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
        headerName: 'Группа/Квота',
        field: 'group',
        width: 130,
        editable: true,
        cellStyle: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: ' start ',
            border: '.5px solid #e0e0e0',
        },
    },
    {
        headerName: 'Дата заезда',
        field: 'arrivalData',
        width: 130,
        cellStyle: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: ' start ',
            border: '.5px solid #e0e0e0',
        },
    },
    {
        headerName: 'Дата заезда',
        field: 'arrivalData',
        width: 130,
        cellStyle: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: ' start ',
            border: '.5px solid #e0e0e0',
        },
    },
    {
        headerName: 'Дата заезда',
        field: 'arrivalData',
        width: 130,
        cellStyle: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: ' start ',
            border: '.5px solid #e0e0e0',
        },
    },
];
