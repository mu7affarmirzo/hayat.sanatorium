import { Checkbox, Typography } from '@mui/material';
import { EditIcon } from 'assets/icons/icons';
import { IColumnType } from 'components/CollapseTable/CollapseTable';
import { GetMyPatients } from 'features/DoctorsRoleService/types';

export const GetDocPatientsColDef: IColumnType<GetMyPatients>[] = [
  {
    key: '',
    title: '',
    width: 30,
  },
  {
    key: 'checkbox',
    title: '',
    width: 45,
    renderHeaderCell: (column) => {
      return <input type="checkbox" />;
    },
    render: (column, item) => {
      return (
        <div className=" flex items-center justify-center">
          <Checkbox size="small" sx={{ padding: 0 }} />
        </div>
      );
    },
  },
  {
    key: 'edit',
    title: '',
    width: 35,
    render: (column, item) => {
      return <EditIcon />;
    },
  },
  {
    key: 'id',
    title: 'N:',
    width: 120,
  },
  {
    key: 'name',
    title: 'Пациент',
    render: (column, item) => {
      return (
        <Typography className="font-roboto text-sm font-medium text-blue-400">
          {item.name}
        </Typography>
      );
    },
    width: 250,
  },
  {
    key: 'age',
    title: 'Возраст',
    width: 80,
  },
  {
    key: 'room',
    title: 'Комната',
    width: 200,
  },
  {
    key: 'diagnosis',
    title: 'Основной диагноз',
    width: 250,
  },
  {
    key: 'start_data',
    title: 'Дата приезда',
    width: 120,
  },
  {
    key: 'end_date',
    title: 'Дата отъезда',
    width: 120,
  },
];
