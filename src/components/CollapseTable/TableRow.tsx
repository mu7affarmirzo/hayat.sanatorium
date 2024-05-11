import { styled } from '@stitches/react';

import { IColumnType } from './CollapseTable';
import { TableRowCell } from './TableRowCell';

interface Props<T> {
  data: T[];
  columns: IColumnType<T>[];
  expandedRows?: Record<number, boolean>;
  toggleRow?: (id: number) => void;
}

const TableRowItem = styled('tr', {
  cursor: 'auto',
  backgroundColor: '#ffffff',
  '&:hover': {
    backgroundColor: '#F8ED8D',
  },
});

export function TableRow<T>({ data, columns }: Props<T>): JSX.Element {
  return (
    <>
      {data.map((item, itemIndex) => (
        <TableRowItem key={`table-body-${itemIndex}`}>
          {columns.map((column, columnIndex) => (
            <TableRowCell
              key={`table-row-cell-${columnIndex}`}
              item={item}
              column={column}
            />
          ))}
        </TableRowItem>
      ))}
    </>
  );
}
