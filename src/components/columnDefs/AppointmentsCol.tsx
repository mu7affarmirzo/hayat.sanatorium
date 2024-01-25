import { ColDef } from 'ag-grid-community';

export const AppointmentsCol: ColDef[] = [
    {
        headerName: 'суббота',
        field: 'name',
        width: 350,
        editable: true,
        cellStyle: {
            border: '.5px solid #e0e0e0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'start ',
            padding: '0px',
            paddingLeft: '10px',
        },
    },
];
