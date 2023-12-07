import { ColDef } from 'ag-grid-community';
import { CloseIcon } from 'assets/icons/icons';
import DefaulCheckbox from 'components/checkbox/DefaulCheckbox';
const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },
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
function chackBoxHandler(params: any) {
    return <DefaulCheckbox />;
}
export const PhonePush: ColDef[] = [
    {
        headerName: '',
        field: '',
        cellRenderer: MyRoomType,
        width: 40,
        cellStyle: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: ' start ',
            border: '.5px solid #e0e0e0',
            padding: '0px',
        },
    },
    {
        headerName: 'Название',
        field: '',
        width: 120,
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
        headerName: 'Начало',
        field: 'phone',
        width: 120,
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
        headerName: 'Основной',
        field: 'group',
        width: 120,
        cellRenderer: chackBoxHandler,
        cellStyle: {
            display: 'flex',
            alignItems: 'center',

            border: '.5px solid #e0e0e0',
            padding: '0px',
            paddingLeft: '15px',
        },
    },
    {
        headerName: 'Лимит',
        field: 'name',
        width: 120,
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
