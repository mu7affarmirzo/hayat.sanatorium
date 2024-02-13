import { ColDef, RowClickedEvent } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { useRef } from "react";

import "./style.css";
type propsType = {
    columnDefs?: ColDef[];
    rowData?: any;
    height?: string;
    handleClickItem?: (e: RowClickedEvent) => void;
};
const ReceptionTableGroup = (props: propsType) => {
    const gridRef = useRef<AgGridReact>(null);

    return (
        <div className={`${props.height ? props.height : "h-[15vh]"}  w-full `}>
            <div
                style={{ height: "100%", width: "100%" }}
                className="ag-theme-alpine"
            >
                <AgGridReact
                    ref={gridRef}
                    rowData={props.rowData}
                    columnDefs={props.columnDefs}
                    groupDisplayType={"groupRows"}
                    onRowClicked={props.handleClickItem}
                />
            </div>
        </div>
    );
};
export default ReceptionTableGroup;
