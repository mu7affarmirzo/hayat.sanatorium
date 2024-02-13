import { Typography } from "@mui/material";
import { ColDef } from "ag-grid-community";

export const MyPatientsGrupCol: ColDef[] = [
    { field: "group", rowGroup: true, hide: true },
    {
        field: "",
        width: 40,
    },
    {
        headerName: "№",
        field: "no",
        width: 120,
        editable: true,
        cellStyle: {
            display: "flex",
            alignItems: "center",
            border: ".5px solid #e0e0e0",
        },
    },
    {
        headerName: "Пациент",
        field: "name",
        width: 250,
        editable: true,
        cellRenderer: (params: any) => {
            const handleItemClick = (fullName: string) => {
                console.log("Tanlangan element ID:", fullName);
            };
            return (
                <div
                    className="border-[0px] cursor-pointer"
                    onClick={() => handleItemClick(params.data.name)}
                >
                    <Typography className="text-sm font-normal text-blue-400">
                        {params.data.name}
                    </Typography>
                </div>
            );
        },
        cellStyle: {
            display: "flex",
            alignItems: "center",
            justifyContent: " start ",
            border: ".5px solid #e0e0e0",
            paddingLeft: "10px",
        },
    },
    {
        headerName: "Возраст",
        field: "age",
        width: 100,
        cellStyle: {
            display: "flex",
            alignItems: "center",
            border: ".5px solid #e0e0e0",
        },
    },
    {
        headerName: "Комната",
        field: "room",
        width: 200,
        editable: true,
        cellRenderer: (params: any) => {
            const roomNumber = params.data.room;
            return (
                <div className="border-[0px]">
                    <Typography className="text-sm font-normal">
                        {roomNumber}
                    </Typography>
                </div>
            );
        },
        cellStyle: {
            display: "flex",
            alignItems: "center",
            justifyContent: " start ",
            border: ".5px solid #e0e0e0",
            paddingLeft: "10px",
        },
    },
    {
        headerName: "На диспетчеризацию",
        field: "dispatch",
        width: 520,
        cellStyle: {
            display: "flex",
            alignItems: "center",
            border: ".5px solid #e0e0e0",
        },
    },
    {
        headerName: "Дата приезда (план)",
        field: "start_date",
        width: 160,
        cellRenderer: (params: any) => {
            return (
                <div className="border-[0px]">
                    <Typography className="text-sm font-normal">
                        {params.data.start_date}
                    </Typography>
                </div>
            );
        },
        cellStyle: {
            display: "flex",
            alignItems: "center",
            justifyContent: " start ",
            border: ".5px solid #e0e0e0",
            paddingLeft: "10px",
        },
    },
    {
        headerName: "Дата отъезда (план)",
        field: "end_date",
        width: 160,
        editable: true,
        cellRenderer: (params: any) => {
            return (
                <div className="border-[0px]">
                    <Typography className="text-sm font-normal">
                        {params.data.end_date}
                    </Typography>
                </div>
            );
        },
        cellStyle: {
            display: "flex",
            alignItems: "center",
            justifyContent: " start ",
            border: ".5px solid #e0e0e0",
            paddingLeft: "10px",
        },
    },
    {
        headerName: "Программа",
        field: "color",
        width: 130,
        cellStyle: {
            display: "flex",
            alignItems: "center",
            border: ".5px solid #e0e0e0",
        },
    },
    {
        headerName: "",
        field: "",
        width: 230,
        cellStyle: {
            display: "flex",
            alignItems: "center",
            border: ".5px solid #e0e0e0",
        },
    },
];
