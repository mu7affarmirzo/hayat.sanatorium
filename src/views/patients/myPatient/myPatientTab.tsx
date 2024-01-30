import { Grid, Typography } from "@mui/material";
import { VuesaxLinear } from "assets/icons/icons";
import { BookedPatiant } from "components/columnDefs/bookedCol";
import DefaultButton from "components/deafultButton/DefaultButton";
import ReceptionTable from "components/receptionTable/ReceptionTable";
import SearchInput from "components/search/SearchInput";

const rowData = [
    {
        number: "776/2023",
        name: "Choriyev Muzaffar",
        Age: "30",
        roomNumber: "311(Корпус1)",
        mainDiagnos:
            "-- - Гипертоническая болезнь III АГIII. риск IV. ИБС-стенокардиянапряжения ФК II.",
        dateArrival: "10.06.2023",
        dateLeave: "17.06.2023",
    },
    {
        number: "776/2023",
        name: "Choriyev Muzaffar",
        Age: "30",
        roomNumber: "311(Корпус1)",
        mainDiagnos:
            "-- - Гипертоническая болезнь III АГIII. риск IV. ИБС-стенокардиянапряжения ФК II.",
        dateArrival: "10.06.2023",
        dateLeave: "17.06.2023",
    },
    {
        number: "776/2023",
        name: "Choriyev Muzaffar",
        Age: "30",
        roomNumber: "311(Корпус1)",
        mainDiagnos:
            "-- - Гипертоническая болезнь III АГIII. риск IV. ИБС-стенокардиянапряжения ФК II.",
        dateArrival: "10.06.2023",
        dateLeave: "17.06.2023",
    },
    {
        number: "776/2023",
        name: "Choriyev Muzaffar",
        Age: "30",
        roomNumber: "311(Корпус1)",
        mainDiagnos:
            "-- - Гипертоническая болезнь III АГIII. риск IV. ИБС-стенокардиянапряжения ФК II.",
        dateArrival: "10.06.2023",
        dateLeave: "17.06.2023",
    },
    {
        number: "776/2023",
        name: "Choriyev Muzaffar",
        Age: "30",
        roomNumber: "311(Корпус1)",
        mainDiagnos:
            "-- - Гипертоническая болезнь III АГIII. риск IV. ИБС-стенокардиянапряжения ФК II.",
        dateArrival: "10.06.2023",
        dateLeave: "17.06.2023",
    },
    {
        number: "776/2023",
        name: "Choriyev Muzaffar",
        Age: "30",
        roomNumber: "311(Корпус1)",
        mainDiagnos:
            "-- - Гипертоническая болезнь III АГIII. риск IV. ИБС-стенокардиянапряжения ФК II.",
        dateArrival: "10.06.2023",
        dateLeave: "17.06.2023",
    },
    {
        number: "776/2023",
        name: "Choriyev Muzaffar",
        Age: "30",
        roomNumber: "311(Корпус1)",
        mainDiagnos:
            "-- - Гипертоническая болезнь III АГIII. риск IV. ИБС-стенокардиянапряжения ФК II.",
        dateArrival: "10.06.2023",
        dateLeave: "17.06.2023",
    },
    {
        number: "776/2023",
        name: "Choriyev Muzaffar",
        Age: "30",
        roomNumber: "311(Корпус1)",
        mainDiagnos:
            "-- - Гипертоническая болезнь III АГIII. риск IV. ИБС-стенокардиянапряжения ФК II.",
        dateArrival: "10.06.2023",
        dateLeave: "17.06.2023",
    },
    {
        number: "776/2023",
        name: "Choriyev Muzaffar",
        Age: "30",
        roomNumber: "311(Корпус1)",
        mainDiagnos:
            "-- - Гипертоническая болезнь III АГIII. риск IV. ИБС-стенокардиянапряжения ФК II.",
        dateArrival: "10.06.2023",
        dateLeave: "17.06.2023",
    },
    {
        number: "776/2023",
        name: "Choriyev Muzaffar",
        Age: "30",
        roomNumber: "311(Корпус1)",
        mainDiagnos:
            "-- - Гипертоническая болезнь III АГIII. риск IV. ИБС-стенокардиянапряжения ФК II.",
        dateArrival: "10.06.2023",
        dateLeave: "17.06.2023",
    },
    {
        number: "776/2023",
        name: "Choriyev Muzaffar",
        Age: "30",
        roomNumber: "311(Корпус1)",
        mainDiagnos:
            "-- - Гипертоническая болезнь III АГIII. риск IV. ИБС-стенокардиянапряжения ФК II.",
        dateArrival: "10.06.2023",
        dateLeave: "17.06.2023",
    },
    {
        number: "776/2023",
        name: "Choriyev Muzaffar",
        Age: "30",
        roomNumber: "311(Корпус1)",
        mainDiagnos:
            "-- - Гипертоническая болезнь III АГIII. риск IV. ИБС-стенокардиянапряжения ФК II.",
        dateArrival: "10.06.2023",
        dateLeave: "17.06.2023",
    },
    {
        number: "776/2023",
        name: "Choriyev Muzaffar",
        Age: "30",
        roomNumber: "311(Корпус1)",
        mainDiagnos:
            "-- - Гипертоническая болезнь III АГIII. риск IV. ИБС-стенокардиянапряжения ФК II.",
        dateArrival: "10.06.2023",
        dateLeave: "17.06.2023",
    },
    {
        number: "776/2023",
        name: "Choriyev Muzaffar",
        Age: "30",
        roomNumber: "311(Корпус1)",
        mainDiagnos:
            "-- - Гипертоническая болезнь III АГIII. риск IV. ИБС-стенокардиянапряжения ФК II.",
        dateArrival: "10.06.2023",
        dateLeave: "17.06.2023",
    },
    {
        number: "776/2023",
        name: "Choriyev Muzaffar",
        Age: "30",
        roomNumber: "311(Корпус1)",
        mainDiagnos:
            "-- - Гипертоническая болезнь III АГIII. риск IV. ИБС-стенокардиянапряжения ФК II.",
        dateArrival: "10.06.2023",
        dateLeave: "17.06.2023",
    },

    {
        number: "776/2023",
        name: "Choriyev Muzaffar",
        Age: "30",
        roomNumber: "311(Корпус1)",
        mainDiagnos:
            "-- - Гипертоническая болезнь III АГIII. риск IV. ИБС-стенокардиянапряжения ФК II.",
        dateArrival: "10.06.2023",
        dateLeave: "17.06.2023",
    },
    {
        number: "776/2023",
        name: "Choriyev Muzaffar",
        Age: "30",
        roomNumber: "311(Корпус1)",
        mainDiagnos:
            "-- - Гипертоническая болезнь III АГIII. риск IV. ИБС-стенокардиянапряжения ФК II.",
        dateArrival: "10.06.2023",
        dateLeave: "17.06.2023",
    },
    {
        number: "776/2023",
        name: "Choriyev Muzaffar",
        Age: "30",
        roomNumber: "311(Корпус1)",
        mainDiagnos:
            "-- - Гипертоническая болезнь III АГIII. риск IV. ИБС-стенокардиянапряжения ФК II.",
        dateArrival: "10.06.2023",
        dateLeave: "17.06.2023",
    },
    {
        number: "776/2023",
        name: "Choriyev Muzaffar",
        Age: "30",
        roomNumber: "311(Корпус1)",
        mainDiagnos:
            "-- - Гипертоническая болезнь III АГIII. риск IV. ИБС-стенокардиянапряжения ФК II.",
        dateArrival: "10.06.2023",
        dateLeave: "17.06.2023",
    },
];

const MyPatientTab = () => {
    return (
        <Grid className="" container>
            <Grid
                className="flex justify-between items-center  my-[10px] "
                item
                xs={12}
                md={12}
            >
                <Grid item xs={12} md={10.5} className=" bg-[#F5F5F5] ">
                    <SearchInput placeholder="Искать в таблице" />
                </Grid>
                <DefaultButton
                    title=" Экспорт в Excel"
                    classStyle="bg-[#2196F3] h-[40px] text-[#fff] text-sm capitalize mr-[10px]"
                    icon={<VuesaxLinear />}
                />
            </Grid>
            <Grid item xs={12} md={12} className=" bg-[#F5F5F5]">
                <ReceptionTable
                    columnDefs={BookedPatiant}
                    rowData={rowData}
                    height="h-[810px]"
                />
            </Grid>
            <Grid>
                <Typography className="">
                    Лечащий врач, количество пациентов: 67
                </Typography>
            </Grid>
        </Grid>
    );
};

export default MyPatientTab;