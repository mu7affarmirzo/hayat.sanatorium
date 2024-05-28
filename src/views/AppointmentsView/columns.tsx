// columns.ts
import { IColumnType } from 'components/CollapseTable/CollapseTable';

export const columns: IColumnType<any>[] = [
  {
    key: 'type',
    title: 'Type',
    render: (column: any, item: any) => <td>{item.type}</td>,
  },
  {
    key: 'date',
    title: 'Date',
    render: (column, item) => <td>{item.date}</td>,
  },
  {
    key: 'doctor',
    title: 'Doctor',
    render: (column, item) => <td>{item.doctor}</td>,
  },
];
