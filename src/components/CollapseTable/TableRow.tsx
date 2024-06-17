// TableRow.tsx
import { styled } from '@stitches/react';
import { IColumnType } from 'components/CollapseTable/CollapseTable';
import { TableRowCell } from './TableRowCell';

interface Props<T> {
  data: T[];
  columns: IColumnType<T>[];
  expandedRows?: Record<number, boolean>;
  toggleRow?: (id: number) => void;
  handleRowClicked?: (item: T) => void;
}

const TableRowItem = styled('tr', {
  cursor: 'pointer', // Changed to pointer to indicate clickable rows
  height: '30px',
  backgroundColor: '#ffffff',
  '&:hover': {
    backgroundColor: '#dcdcdc',
  },
});

export function TableRow<T>({
  data,
  columns,
  handleRowClicked,
}: Props<T>): JSX.Element {
  return (
    <>
      {data.map((item, itemIndex) => (
        <TableRowItem
          key={`table-body-${itemIndex}`}
          onClick={() => handleRowClicked && handleRowClicked(item)}>
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
