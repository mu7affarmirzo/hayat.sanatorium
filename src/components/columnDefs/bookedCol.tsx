import { Typography } from '@mui/material';
import { ColDef } from 'ag-grid-community';

export const BookedCol: ColDef[] = [
  {
    headerName: 'Статус',
    field: 'status',
    width: 160,
    cellStyle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: ' start ',
      border: '.5px solid #e0e0e0',
      paddingLeft: '10px',
    },
  },
  {
    headerName: 'Пациент',
    field: 'patient',
    width: 250,
    editable: true,
    cellRenderer: (params: any) => {
      const handleItemClick = (fullName: string) => {
        console.log('Tanlangan element ID:', fullName);
      };
      return (
        <div
          className="border-[0px] cursor-pointer"
          onClick={() => handleItemClick(params.data.patient)}>
          <Typography className="text-sm font-normal text-blue-400">
            {params.data.patient}
          </Typography>
        </div>
      );
    },
    cellStyle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: ' start ',
      border: '.5px solid #e0e0e0',
      paddingLeft: '10px',
    },
  },
  {
    headerName: 'Пол',
    field: 'gender',
    width: 160,
    cellRenderer: (params: any) => {
      const getGender = params.data.patient.gender ? 'Мужской' : 'Женский';
      return (
        <div className="border-[0px]">
          <Typography className="text-sm font-normal">{getGender}</Typography>
        </div>
      );
    },
    cellStyle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: ' start ',
      border: '.5px solid #e0e0e0',
      paddingLeft: '10px',
    },
  },
  {
    headerName: 'Комната',
    field: 'room',
    width: 200,
    editable: true,
    cellRenderer: (params: any) => {
      const roomNumber = params.data.room;
      return (
        <div className="border-[0px]">
          <Typography className="text-sm font-normal">{roomNumber}</Typography>
        </div>
      );
    },
    cellStyle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: ' start ',
      border: '.5px solid #e0e0e0',
      paddingLeft: '10px',
    },
  },
  {
    headerName: 'Тип комнаты',
    field: 'room_type',
    width: 330,
    editable: true,
    cellRenderer: (params: any) => {
      const roomType = params.data.room_type;
      return (
        <div className="border-[0px]">
          <Typography className="text-sm font-normal">{roomType}</Typography>
        </div>
      );
    },
    cellStyle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: ' start ',
      border: '.5px solid #e0e0e0',
      paddingLeft: '10px',
    },
  },
  {
    headerName: 'Программа',
    field: 'tariff',
    width: 160,
    editable: true,
    cellStyle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: ' start ',
      border: '.5px solid #e0e0e0',
      paddingLeft: '10px',
    },
  },
  {
    headerName: 'Дата приезда (план)',
    field: 'start_date',
    width: 160,
    cellRenderer: (params: any) => {
      return (
        <div className="border-[0px]">
          <Typography className="text-sm font-normal">
            {params.data.start_date}
          </Typography>
        </div>
      );
    },
    cellStyle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: ' start ',
      border: '.5px solid #e0e0e0',
      paddingLeft: '10px',
    },
  },
  {
    headerName: 'Дата отъезда (план)',
    field: 'end_date',
    width: 160,
    editable: true,
    cellRenderer: (params: any) => {
      return (
        <div className="border-[0px]">
          <Typography className="text-sm font-normal">
            {params.data.end_date}
          </Typography>
        </div>
      );
    },
    cellStyle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: ' start ',
      border: '.5px solid #e0e0e0',
      paddingLeft: '10px',
    },
  },
];

export const BookedPatiant: ColDef[] = [
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
    headerName: '',
    field: 'cito',
    width: 110,
    cellStyle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: ' start ',
      border: '.5px solid #e0e0e0',
      paddingLeft: '10px',
    },
  },
  {
    headerName: '№',
    field: '',
    width: 120,
    cellStyle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: ' end ',
      border: '.5px solid #e0e0e0',
      paddingLeft: '10px',
    },
  },
  {
    headerName: 'Пациент',
    field: 'no',
    width: 250,
    cellStyle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: ' start ',
      border: '.5px solid #e0e0e0',
      paddingLeft: '10px',
      color: '#0B79D0',
    },
  },
  {
    headerName: 'Возраст',
    field: 'age',
    width: 100,
    cellStyle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: ' end ',
      border: '.5px solid #e0e0e0',
      paddingLeft: '10px',
    },
  },
  {
    headerName: 'Комната',
    field: 'room',
    width: 200,
    cellStyle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: ' end ',
      border: '.5px solid #e0e0e0',
      paddingLeft: '10px',
    },
  },
  {
    headerName: 'Основной диагноз',
    field: 'diagnosis',
    width: 550,
    cellStyle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: ' start ',
      border: '.5px solid #e0e0e0',
      paddingLeft: '10px',
    },
  },
  {
    headerName: 'Дата приезда',
    field: 'start_date',
    width: 140,
    cellStyle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: ' end ',
      border: '.5px solid #e0e0e0',
      paddingLeft: '10px',
    },
  },
  {
    headerName: 'Дата отъезда',
    field: 'end_date',
    width: 140,
    cellStyle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: ' end ',
      border: '.5px solid #e0e0e0',
      paddingLeft: '10px',
    },
  },
  {
    headerName: '',
    field: '',
    width: 165,
    cellStyle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: ' end ',
      border: '.5px solid #e0e0e0',
      paddingLeft: '10px',
    },
  },
];

export const BookedPatientSearch: ColDef[] = [
  {
    headerName: '',
    field: '',
    width: 40,
    cellStyle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: ' start ',
      border: '.5px solid #e0e0e0',
      paddingLeft: '10px',
    },
  },
  {
    headerName: '№ ИБ',
    field: 'no',
    width: 120,
    cellStyle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: ' end ',
      border: '.5px solid #e0e0e0',
      paddingLeft: '10px',
    },
  },
  {
    headerName: 'Пациент',
    field: 'name',
    width: 250,
    cellStyle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: ' start ',
      border: '.5px solid #e0e0e0',
      paddingLeft: '10px',
      color: '#0B79D0',
    },
  },
  {
    headerName: 'Возраст',
    field: 'age',
    width: 100,
    cellStyle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: ' end ',
      border: '.5px solid #e0e0e0',
      paddingLeft: '10px',
    },
  },
  {
    headerName: 'Комната',
    field: 'room',
    width: 200,
    cellStyle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: ' end ',
      border: '.5px solid #e0e0e0',
      paddingLeft: '10px',
    },
  },
  {
    headerName: 'Основной диагноз',
    field: 'diagnosis',
    width: 310,
    cellStyle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: ' start ',
      border: '.5px solid #e0e0e0',
      paddingLeft: '10px',
    },
  },
  {
    headerName: 'Лечащий врач',
    field: 'doctor',
    width: 310,
    cellStyle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: ' start ',
      border: '.5px solid #e0e0e0',
      paddingLeft: '10px',
    },
  },
  {
    headerName: 'Дата приезда',
    field: 'start_date',
    width: 140,
    cellStyle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: ' end ',
      border: '.5px solid #e0e0e0',
      paddingLeft: '10px',
    },
  },
  {
    headerName: 'Дата отъезда',
    field: 'end_date',
    width: 140,
    cellStyle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: ' end ',
      border: '.5px solid #e0e0e0',
      paddingLeft: '10px',
    },
  },
];

export const BookedPatientDoctorDuty: ColDef[] = [
  {
    headerName: '',
    field: '',
    width: 30,
    cellStyle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: ' start ',
      border: '.5px solid " "',
      paddingLeft: '10px',
    },
  },
  {
    headerName: '№',
    field: 'number',
    width: 120,
    cellStyle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: ' end',
      border: '.5px solid #e0e0e0',
      paddingLeft: '10px',
    },
  },
  {
    headerName: 'Пациент',
    field: 'name',
    width: 550,
    cellStyle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: ' start ',
      border: '.5px solid #e0e0e0',
      paddingLeft: '10px',
      color: '#0B79D0',
    },
  },
  {
    headerName: 'Возраст',
    field: 'Age',
    width: 100,
    cellStyle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: ' end ',
      border: '.5px solid #e0e0e0',
      paddingLeft: '10px',
    },
  },
  {
    headerName: 'Комната',
    field: 'roomNumber',
    width: 150,
    cellStyle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: ' end ',
      border: '.5px solid #e0e0e0',
      paddingLeft: '10px',
    },
  },
  {
    headerName: 'Основной диагноз',
    field: 'mainDiagnos',
    width: 550,
    cellStyle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: ' start ',
      border: '.5px solid #e0e0e0',
      paddingLeft: '10px',
    },
  },
  {
    headerName: 'Дата приезда',
    field: 'dateArrival',
    width: 140,
    cellStyle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: ' end ',
      border: '.5px solid #e0e0e0',
      paddingLeft: '10px',
    },
  },
  {
    headerName: 'Дата отъезда',
    field: 'dateLeave',
    width: 140,
    cellStyle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: ' end ',
      border: '.5px solid #e0e0e0',
      paddingLeft: '10px',
    },
  },
];
