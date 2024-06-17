import { styled } from '@stitches/react';
import get from 'lodash.get';

import { IColumnType } from './CollapseTable';

interface Props<T> {
  item: T;
  column: IColumnType<T>;
}

const TableCell = styled('td', {
  padding: 8,
  fontSize: 14,
  borderCollapse: 'collapse',
  border: '1px solid #c7c7c7ce',
  fontFamily: 'sans-serif',
  // '&:active': {
  //   backgroundColor: '#fc0000',
  // },
});

export function TableRowCell<T>({ item, column }: Props<T>): JSX.Element {
  const value = get(item, column.key);
  return (
    <TableCell className="font-roboto text-black">
      {column.render ? column.render(column, item) : value}
    </TableCell>
  );
}
