// Table.tsx
import { styled } from '@stitches/react';
import { useState } from 'react';
import { CollapseTitle } from './CollapseTitle';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';

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
  collapseTitle?: string;
  handleRowClicked?: (item: T) => void; // New prop for handling row clicks
}

const TableWrapper = styled('table', {
  borderCollapse: 'collapse',
  border: 'none',
  backgroundColor: '#F5F5F5',
});

export function Table<T>({
  data,
  columns,
  isCollapsible,
  cito,
  collapseTitle,
  handleRowClicked, // Destructure the new prop
}: Props<T>): JSX.Element {
  const [expandedRows, setExpandedRows] = useState<Record<number, boolean>>({});

  return (
    <TableWrapper width={'100%'} className="font-roboto">
      <thead>
        <TableHeader columns={columns} />
        <tr>
          <td colSpan={columns.length + 1}>
            {isCollapsible && (
              <CollapseTitle
                title={collapseTitle as never}
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
          <TableRow
            data={data}
            columns={columns}
            handleRowClicked={handleRowClicked}
          />
        </tbody>
      )}
    </TableWrapper>
  );
}
