import { ColDef, RowClickedEvent } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';
import { FC } from 'react';

interface Props {
  tableHeight?: string;
  data: [];
  columnDefs: ColDef[];
  handleClickedTableRow?: (e: RowClickedEvent) => void;
}

const TableComponent: FC<Props> = ({
  tableHeight,
  columnDefs,
  data,
  handleClickedTableRow,
}) => {
  return (
    <div className={`${tableHeight ? tableHeight : 'h-[15vh]'}  w-full `}>
      <div
        style={{ height: '100%', width: '100%' }}
        className="ag-theme-alpine">
        <AgGridReact
          rowSelection="multiple"
          onRowClicked={handleClickedTableRow}
          suppressRowClickSelection
          columnDefs={columnDefs}
          rowData={data}
          enableRangeSelection
          animateRows
        />
      </div>
    </div>
  );
};

export default TableComponent;
