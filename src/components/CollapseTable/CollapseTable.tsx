import { styled } from '@stitches/react';

import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';
import { useState } from 'react';
import { CollapseTitle } from './CollapseTitle';

export interface IColumnType<T> {
  key: string;
  title: string;
  width?: number;
  render?: (column: IColumnType<T>, item: T) => void;
  renderHeaderCell?: (column: IColumnType<T>) => void;
}

interface Props<T> {
  data: T[];
  secondData?: T[];
  columns: IColumnType<T>[];
  isCollapsible?: boolean;
  cito?: any;
}

const TableWrapper = styled('table', {
  borderCollapse: 'collapse',
  border: 'none',
  fontFamily: 'Anek Telugu',
  backgroundColor: '#F5F5F5',
});

export function Table<T>({
  data,
  columns,
  isCollapsible,
  cito,
}: Props<T>): JSX.Element {
  const [expandedRows, setExpandedRows] = useState<Record<number, boolean>>({});

  return (
    <TableWrapper>
      <thead>
        <TableHeader columns={columns} />
        <tr>
          <td colSpan={columns.length + 1}>
            {isCollapsible && (
              <CollapseTitle
                title={`На этой неделе`}
                id={cito}
                expandedRows={expandedRows}
                setExpandedRows={setExpandedRows}
              />
            )}
          </td>
        </tr>
      </thead>

      {expandedRows[cito] && (
        <tbody>
          <TableRow data={data} columns={columns} />
        </tbody>
      )}
    </TableWrapper>
  );
}
