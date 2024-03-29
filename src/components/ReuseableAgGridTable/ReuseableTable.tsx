import { Box } from '@mui/material';
import { ColDef, RowClickedEvent } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';
import { FC } from 'react';

interface propsType {
  columnDefs: ColDef[];
  rowData: any;
  height: string;
  handleClicedRow: (event: RowClickedEvent) => void;
}

export const ReuseableAgGridTable: FC<Partial<propsType>> = (props) => {
  return (
    <Box
      className={`${props.height ? props.height : 'h-[15vh]'}  w-full `}
      style={{ height: '400px' }}>
      <Box
        style={{ height: '100%', width: '100%' }}
        className="ag-theme-alpine">
        <AgGridReact
          rowSelection="multiple"
          onRowClicked={props.handleClicedRow}
          suppressRowClickSelection
          columnDefs={props?.columnDefs}
          rowData={props.rowData}
          enableRangeSelection
          animateRows
        />
      </Box>
    </Box>
  );
};
