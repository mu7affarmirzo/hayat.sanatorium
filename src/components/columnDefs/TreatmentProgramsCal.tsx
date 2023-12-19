import { ColDef } from 'ag-grid-community';
import { CloseIcon } from 'assets/icons/icons';
import SelectButton from 'components/SelectButton';

const data = [
    {
        id: 1,
        title: '10.06.2023',
    },
    {
        id: 2,
        title: '10.06.2024',
    },
];
function MyRoomType(params: any) {
    return (
        <div className="flex  items-center justify-center  w-[100%] h-[100%] cursor-pointer  ">
            <div className="w-[20px] h-[20px] rounded-[50%]  flex justify-center items-center bg-[#F79E98]">
                <CloseIcon stroke="white" />
            </div>
        </div>
    );
}
function AutocompleteHandler(params: any) {
    return (
        <SelectButton
            data={data}
            defaultValue="Выберите д"
            style="bg-[#fff] border"
            itemStyle="text-[#000]"
        />
    );
}
export const TreatmentProgramsCOl: ColDef[] = [
    {
        headerName: '',
        field: '',
        cellRenderer: MyRoomType,
        width: 40,
        cellStyle: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: ' start ',
            border: '.5px solid #aaa9a9',
            padding: '0px',
            backgroundColor: '#F8ED8D',
        },
    },
    {
        headerName: 'Название',
        field: 'name',
        width: 1067,
        editable: true,
        cellStyle: {
            border: '.5px solid #9c9c9c',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'start ',
            padding: '0px',
            paddingLeft: '10px',
            backgroundColor: '#F8ED8D',
        },
    },
    {
        headerName: 'Начало',
        field: 'group',
        width: 150,
        cellRenderer: AutocompleteHandler,
        cellStyle: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '.5px solid #e0e0e0',
            padding: '0px',
            paddingLeft: '15px',
            backgroundColor: '#F8ED8D',
        },
    },
    {
        headerName: 'Начало',
        field: 'group',
        width: 150,
        cellRenderer: AutocompleteHandler,
        cellStyle: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '.5px solid #e0e0e0',
            padding: '0px',
            paddingLeft: '15px',
            backgroundColor: '#F8ED8D',
        },
    },
    {
        headerName: 'Лимит',
        field: 'name',
        width: 150,
        editable: true,
        cellStyle: {
            border: '.5px solid #e0e0e0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'start ',
            padding: '0px',
            paddingLeft: '10px',
            backgroundColor: '#F8ED8D',
        },
    },
    {
        headerName: 'Отпусков',
        field: 'name',
        width: 150,
        editable: true,
        cellStyle: {
            border: '.5px solid #e0e0e0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'start ',
            padding: '0px',
            paddingLeft: '10px',
            backgroundColor: '#F8ED8D',
        },
    },
];
