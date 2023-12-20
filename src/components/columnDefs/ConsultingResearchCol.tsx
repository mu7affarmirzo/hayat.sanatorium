import { ColDef } from 'ag-grid-community';
function MyRoomType(params: any) {
    return (
        <div className="flex  items-center justify-center  w-[100%] h-[100%] cursor-pointer  bordert ">
            <div className="w-[5px] h-[15px]  flex justify-center items-center bg-[#4CAF50] mx-[1.5px]"></div>
            <div className="w-[5px] h-[15px]  flex justify-center items-center bg-[#E0E0E0] mx-[1.5px]"></div>
            <div className="w-[5px] h-[15px]  flex justify-center items-center bg-[#E0E0E0] mx-[1.5px]"></div>
            <div className="w-[5px] h-[15px]  flex justify-center items-center bg-[#E0E0E0] mx-[1.5px]"></div>
        </div>
    );
}
export const ConsultingResearchCol: ColDef[] = [
    { field: 'group', rowGroup: true, hide: true },
    {
        field: '',
        width: 30,
    },
    {
        headerName: '',
        field: '',
        width: 70,
        cellRenderer: MyRoomType,
        editable: true,
        cellStyle: {
            display: 'flex',
            alignItems: 'center',
            border: '.5px solid #e0e0e0',
        },
    },
    {
        headerName: 'Назначение',
        field: 'model',
        width: 500,
        cellStyle: {
            display: 'flex',
            alignItems: 'center',
            border: '.5px solid #e0e0e0',
        },
    },
    {
        headerName: 'К врачу',
        field: 'color',
        width: 130,
        cellStyle: {
            display: 'flex',
            alignItems: 'center',
            border: '.5px solid #e0e0e0',
        },
    },
    {
        headerName: 'Cito?',
        field: 'color',
        width: 100,
        cellStyle: {
            display: 'flex',
            alignItems: 'center',
            border: '.5px solid #e0e0e0',
        },
    },
    {
        headerName: 'Назначил',
        field: 'price',
        valueFormatter: "'$' + value.toLocaleString()",
        width: 130,
        cellStyle: {
            display: 'flex',
            alignItems: 'center',
            border: '.5px solid #e0e0e0',
        },
    },
    {
        headerName: 'Дата',
        field: 'year',
        width: 90,
        cellStyle: {
            display: 'flex',
            alignItems: 'center',
            border: '.5px solid #e0e0e0',
        },
    },
    {
        headerName: 'Способ оплаты',
        field: 'country',
        width: 150,
        cellStyle: {
            display: 'flex',
            alignItems: 'center',
            border: '.5px solid #e0e0e0',
        },
    },
    {
        headerName: 'Цена',
        field: 'country',
        width: 110,
        cellStyle: {
            display: 'flex',
            alignItems: 'center',
            border: '.5px solid #e0e0e0',
        },
    },
    {
        headerName: 'Комментарий (цель исследования/',
        field: 'country',
        width: 250,
        cellStyle: {
            display: 'flex',
            alignItems: 'center',
            border: '.5px solid #e0e0e0',
        },
    },
];
