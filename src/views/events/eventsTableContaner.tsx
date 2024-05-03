import { Checkbox, Grid } from '@mui/material';
import { GetAllEventTypes } from 'types/eventsTypes';
import { IColumnType, Table } from 'components/CollapseTable/CollapseTable';
import { InfoCircle } from 'assets/icons/icons';

type Props = {
  rowData: GetAllEventTypes[];
};

const columns: IColumnType<GetAllEventTypes>[] = [
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
    key: 'cito',
    title: '',
    width: 45,
    render: (column, item) => {
      return <InfoCircle />;
    },
  },
  {
    key: 'event',
    title: 'Событие',
    width: 700,
  },
  {
    key: 'patient',
    title: 'Пациент',
    width: 250,
  },
  {
    key: 'date',
    title: 'Дата/Время',
    width: 200,
  },
  {
    key: 'room',
    title: 'Комната',
    width: 160,
  },
  {
    key: 'start_date',
    title: 'Дата заезда',
    width: 170,
  },
  {
    key: 'end_date',
    title: 'Дата выезда',
    width: 170,
  },
];

const EventsTableContainer = ({ rowData }: Props) => {
  const groupedData: Record<string, GetAllEventTypes[]> = {};
  rowData?.forEach((item) => {
    const cito = item.cito || 'No Cito'; // Handle cases where "Cito" value is null or undefined
    if (!groupedData[cito]) {
      groupedData[cito] = [];
    }
    groupedData[cito].push(item);
  });

  return (
    <Grid item xs={12} md={12} className="bg-[#F5F5F5]">
      {Object.entries(groupedData).map(([cito, data], index) => (
        <Table
          key={index}
          isCollapsible
          data={data}
          columns={columns}
          cito={cito}
        />
      ))}
    </Grid>
  );
};

export default EventsTableContainer;
