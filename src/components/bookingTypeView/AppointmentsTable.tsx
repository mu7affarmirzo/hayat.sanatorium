import { Box, Typography } from '@mui/material';
import { ColDef } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';
import { AppointmentsCol } from 'components/columnDefs/AppointmentsCol';
import { FC } from 'react';
import { rowData } from 'views/booked/frontPage/FrontPageView';
import './ag-theme-roomstype.css';
type propsType = {
    columnDefs?: ColDef[];
    rowData?: any;
    height?: string;
    id?: any;
    width?: any;
};
const AppointmentsTable = (props: propsType) => {
    return (
        <div style={{ height: '58vh', width: '100%' }} className="flex">
            {props.id ? (
                <div className="pt-[98px] px-[5px]">
                    {rowData.map((item, index) => {
                        return (
                            <div
                                key={index.toString()}
                                className=" w-[47px] h-[47px] border-t-[1px] border-b-[1px] flex justify-center items-center"
                            >
                                <p>{item.discount}</p>
                            </div>
                        );
                    })}
                </div>
            ) : null}

            <div
                style={{
                    height: '100%',
                    width: props?.width ? props?.width : '100%',
                }}
                className={'ag-theme-quartz-dark'}
            >
                <Box className="border flex justify-center items-center w-[150px] h-[50px] bg-[#F5F5F5]  rounded-tr-[20px] rounded-tl-[5px] rounded-bl-[0] rounded-br-[0] cursor-pointer">
                    <Typography className="text-[#007DFF] text-[14px]">
                        122 (Гидрованна)
                    </Typography>
                </Box>
                <AgGridReact
                    rowSelection="single"
                    suppressRowDeselection={false}
                    columnDefs={AppointmentsCol}
                    rowData={rowData}
                    rowHeight={47}
                    headerHeight={47}
                />
            </div>
        </div>
    );
};

export default AppointmentsTable;
