import { styled } from '@stitches/react';

import { IColumnType } from './CollapseTable';
import { Checkbox } from '@mui/material';

interface Props<T> {
  columns: IColumnType<T>[];
}

const TableHeaderCell = styled('th', {
  padding: 8,
  fontWeight: 500,
  textAlign: 'left',
  fontSize: 14,
  color: '#2c3e50',
  borderCollapse: 'collapse',
  border: '1px solid #c7c7c7',
});

export function TableHeader<T>({ columns }: Props<T>): JSX.Element {
  return (
    <tr>
      {columns.map((column, columnIndex) => (
        <TableHeaderCell
          key={`table-head-cell-${columnIndex}`}
          className="sticky top-0 bg-[#64B6F7] font-roboto"
          style={{ width: column.width }}>
          {column.renderHeaderCell ? (
            <div className=" flex items-center justify-center">
              <Checkbox size="small" sx={{ padding: 0 }} />
            </div>
          ) : (
            column.title
          )}
        </TableHeaderCell>
      ))}
    </tr>
  );
}
