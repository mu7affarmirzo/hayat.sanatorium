import { Autocomplete, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { ColDef } from 'ag-grid-community';
import { GetCellsParams } from 'ag-grid-community/dist/lib/rendering/rowRenderer';
import { CloseIcon } from 'assets/icons/icons';
import AutocompleteInput from 'components/autocompleteInput';
import dayjs from 'dayjs';
const top100Films = [
  { label: 'The Shawshank Redemption', value: 1994 },
  { label: 'The Godfather', value: 1972 },
  { label: 'The Godfather: Part II', value: 1974 },
  { label: 'The Dark Knight', value: 2008 },
  { label: '12 Angry Men', value: 1957 },
  { label: "Schindler's List", value: 1993 },
  { label: 'Pulp Fiction', value: 1994 },
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
  console.log({ params }, 'AutocompleteHandler')
  return (
    <AutocompleteInput
      data={top100Films}
      containerStyle={'w-[100%]'}
      inputStyle="w-[90%]"
    />
  );
}

function AutocompleteHandlerDisabled(params: any) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker sx={{ width: '100%', '& .MuiButtonBase-root': { display: 'none' } }} format='YYYY-MM-DD' defaultValue={dayjs(params?.data?.date ?? '')} />
    </LocalizationProvider>
  );
}

export const columnDefs: ColDef[] = [
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
    field: 'roomType',
    width: 180,
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
    },
  },
  {
    headerName: 'Окончание',
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
    },
  },
];

export const columnDefsDisabled: ColDef[] = [
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
    field: 'roomType',
    width: 180,
    editable: false,
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
    field: 'group',
    width: 150,
    cellRenderer: AutocompleteHandlerDisabled,
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
    headerName: 'Окончание',
    // field: 'group',
    width: 150,
    // cellRenderer: AutocompleteHandlerDisabled,
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
    headerName: 'Лимит',
    field: 'name',
    width: 150,
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
    headerName: 'Отпусков',
    field: 'name',
    width: 150,
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