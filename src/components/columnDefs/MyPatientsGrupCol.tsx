import { ColDef } from 'ag-grid-community';

function MyRoomType(params: any) {
    return (
        <a href="" className="">
            link
        </a>
    );
}
export const MyPatientsGrupCol: ColDef[] = [
    { field: 'group', rowGroup: true, hide: true },
    {
        field: '',
        width: 40,
    },
    {
        headerName: '№',
        field: 'number',
        width: 120,
        editable: true,
        cellRenderer: MyRoomType,
        cellStyle: {
            display: 'flex',
            alignItems: 'center',
            border: '.5px solid #e0e0e0',
        },
    },
    {
        headerName: 'Пациент',
        field: 'model',
        width: 250,
        cellStyle: {
            display: 'flex',
            alignItems: 'center',
            border: '.5px solid #e0e0e0',
        },
    },
    {
        headerName: 'Возраст',
        field: 'color',
        width: 100,
        cellStyle: {
            display: 'flex',
            alignItems: 'center',
            border: '.5px solid #e0e0e0',
        },
    },
    {
        headerName: 'Комната',
        field: 'color',
        width: 220,
        cellStyle: {
            display: 'flex',
            alignItems: 'center',
            border: '.5px solid #e0e0e0',
        },
    },
    {
        headerName: 'На диспетчеризацию',
        field: 'color',
        width: 520,
        cellStyle: {
            display: 'flex',
            alignItems: 'center',
            border: '.5px solid #e0e0e0',
        },
    },
    {
        headerName: 'Дата приезда',
        field: 'color',
        width: 130,
        cellStyle: {
            display: 'flex',
            alignItems: 'center',
            border: '.5px solid #e0e0e0',
        },
    },
    {
        headerName: 'Дата отъезда',
        field: 'color',
        width: 130,
        cellStyle: {
            display: 'flex',
            alignItems: 'center',
            border: '.5px solid #e0e0e0',
        },
    },
    {
        headerName: 'Программа',
        field: 'color',
        width: 130,
        cellStyle: {
            display: 'flex',
            alignItems: 'center',
            border: '.5px solid #e0e0e0',
        },
    },
    {
        headerName: '',
        field: '',
        width: 230,
        cellStyle: {
            display: 'flex',
            alignItems: 'center',
            border: '.5px solid #e0e0e0',
        },
    },
];
