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
        headerName: 'Код',
        field: 'number',
        width: 120,
        cellStyle: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: ' start ',
            border: '.5px solid #e0e0e0',
            paddingLeft: '10px',
        },
    },
    {
        headerName: 'Название',
        field: 'name',
        width: 1200,
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
