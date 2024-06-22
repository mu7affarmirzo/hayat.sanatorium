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
function chackBoxHandler(params: any) {
  return <DefaulCheckbox />;
}
function chackBoxHandlerDisabled(params: any) {
  return <DefaulCheckbox disabled />;
}
export const PhonePushColDefs: ColDef[] = [
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
    field: 'name',
    width: 220,
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
    headerName: 'Телефоны',
    field: 'phone_number',
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
    field: 'basic',
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
    headerName: '',
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
];

export const PhonePushColDefsDisabled: ColDef[] = [
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
    field: 'name',
    width: 220,
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
    headerName: 'Телефоны',
    field: 'phone_number',
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
    field: 'basic',
    width: 120,
    cellRenderer: chackBoxHandlerDisabled,
    cellStyle: {
      display: 'flex',
      alignItems: 'center',

      border: '.5px solid #e0e0e0',
      padding: '0px',
      paddingLeft: '15px',
    },
  },
  {
    headerName: '',
    field: '',
    width: 120,
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