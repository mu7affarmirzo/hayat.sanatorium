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
export const ChangelolCol: ColDef[] = [
    { field: 'group', rowGroup: true, hide: true },
    {
        field: '',
        width: 40,
    },
    // {
    //     headerName: '',
    //     field: '',
    //     width: 70,
    //     cellRenderer: MyRoomType,
    //     editable: true,
    //     cellStyle: {
    //         display: 'flex',
    //         alignItems: 'center',
    //         border: '.5px solid #e0e0e0',
    //     },
    // },
    {
        headerName: 'Изменение',
        field: 'model',
        width: 1030,
        cellStyle: {
            display: 'flex',
            alignItems: 'center',
            border: '.5px solid #e0e0e0',
        },
    },
    {
        headerName: 'Пользователь',
        field: 'color',
        width: 290,
        cellStyle: {
            display: 'flex',
            alignItems: 'center',
            border: '.5px solid #e0e0e0',
        },
    },
    {
        headerName: 'Дата',
        field: 'color',
        width: 190,
        cellStyle: {
            display: 'flex',
            alignItems: 'center',
            border: '.5px solid #e0e0e0',
        },
    },
];
