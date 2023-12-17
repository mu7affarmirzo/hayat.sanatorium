import { ColDef } from 'ag-grid-community';
import { CloseIcon } from 'assets/icons/icons';
import DefaulCheckbox from 'components/checkbox/DefaultCheckbox';

function MyRoomType(params: any) {
    return (
        <div className="flex  items-center justify-center  w-[100%] h-[100%] cursor-pointer  ">
            <div className="w-[20px] h-[20px] rounded-[50%]  flex justify-center items-center bg-[#F79E98]">
                <CloseIcon stroke="white" />
            </div>
        </div>
    );
}

export const NutritionCol: ColDef[] = [
    {
        headerName: '',
        field: '',
        cellRenderer: MyRoomType,
        width: 50,
        cellStyle: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: ' start ',
            border: '.5px solid #e0e0e0',
            padding: '0px',
        },
    },
    {
        headerName: 'Диета',
        field: '',
        width: 400,
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
    {
        headerName: 'С',
        field: 'phone',
        width: 190,
        cellStyle: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '.5px solid #e0e0e0',
            padding: '0px',
            paddingLeft: '15px',
        },
    },
    {
        headerName: 'По',
        field: 'group',
        width: 190,

        cellStyle: {
            display: 'flex',
            alignItems: 'center',

            border: '.5px solid #e0e0e0',
            padding: '0px',
            paddingLeft: '15px',
        },
    },
    {
        headerName: 'Назначил',
        field: 'name',
        width: 140,
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
    {
        headerName: 'Дата назначен',
        field: 'name',
        width: 140,
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
    {
        headerName: '',
        field: '',
        width: 400,
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
