import { Box, Grid, IconButton, Typography } from "@mui/material";
import {
    ArrowLeftIcon,
    ArrowRightIcon,
    NavigationAppIcon,
    PinIcon,
} from "assets/icons/icons";
import AutocompleteInput from "components/autocompleteInput/AutocompleteInput";
import AppointmentsTable from "components/bookingTypeView/AppointmentsTable";
import DefaultButton from "components/deafultButton/DefaultButton";
import { useState } from "react";
const top100Films = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
    { label: "The Dark Knight", year: 2008 },
    { label: "12 Angry Men", year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: "Pulp Fiction", year: 1994 },
];
const data = [
    {
        id: 0,
        title: "10",
    },
    {
        id: 1,
        title: "11",
    },
    {
        id: 2,
        title: "12",
    },
    {
        id: 3,
        title: "13",
    },
    {
        id: 4,
        title: "14",
    },
    {
        id: 5,
        title: "15",
    },
    {
        id: 6,
        title: "16",
    },
];

const Appointments = () => {
    const [active, setActive] = useState(0);
    return (
        <Box className="px-[10px] py-[5px] w-full h-[calc(100vh-230px)] relative bg-[#F5F5F5] overflow-hidden">
            <Box className="p-[5px] w-full relative bg-[#fff] overflow-hidden  h-full">
                <Box className="flex items-center gap-2  my-[10px]">
                    <IconButton className=" border br-[50px] bg-slate-200">
                        <ArrowLeftIcon />
                    </IconButton>
                    <IconButton className=" bg-slate-200 ">
                        <NavigationAppIcon />
                    </IconButton>
                    <IconButton className=" border br-[50px] bg-slate-200">
                        <ArrowRightIcon />
                    </IconButton>
                    <Grid item>
                        <Typography>10.06.2023</Typography>
                    </Grid>
                    <Box className="flex gap-2">
                        <DefaultButton
                            classStyle="bg-[#9FD5A1] text-[#FFFFFF80]"
                            title="Назначить на выделенное время"
                            icon={<PinIcon />}
                        />
                        <DefaultButton
                            title="Назначить вместе"
                            classStyle="bg-[#9FD5A1] text-[#FFFFFF80]"
                            icon={<PinIcon />}
                        />
                        <DefaultButton
                            classStyle="bg-[#64B6F7] text-[#FFFFFF80]"
                            title="Отменить выбранную запись"
                        />
                    </Box>
                </Box>
                <Box className="flex items-center gap-2  w-full ">
                    <Box>
                        <Typography>Специалист:</Typography>
                    </Box>
                    <Box className="w-[50%] ">
                        <AutocompleteInput
                            containerStyle="w-[100%]"
                            inputStyle="w-[100%]"
                            data={top100Films}
                        />
                    </Box>
                    <Box className="flex gap-2">
                        <DefaultButton
                            classStyle=" bg-[#2196F3] text-[#FFFFFF]"
                            title="Отменить выбранную запись"
                        />
                    </Box>
                </Box>
                <Box className=" w-full mt-[10px] flex overflow-hidden h-[calc(100vh-420px)]">
                    <Box className="p-[5px] flex border h-full overflow-scroll">
                        <Box className="flex">
                            <AppointmentsTable id={true} width={"350px"} />
                            <AppointmentsTable width={"350px"} />
                        </Box>
                        <Box className="flex ">
                            <AppointmentsTable id={true} width={"350px"} />
                            <AppointmentsTable width={"350px"} />
                        </Box>
                    </Box>
                </Box>
                <Box className="border w-full h-[56px] mt-[5px] px-[5px]">
                    <Box className="">
                        <Typography className="text-[14px]">
                            Расписание выбранного кабинета на 9:00
                        </Typography>
                    </Box>
                    <Box className="flex">
                        {data.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => setActive(item.id)}
                                className={`${
                                    active === item.id
                                        ? "bg-[#F79E98]"
                                        : "bg-[#F5F5F5]"
                                }  flex justify-center items-center py-[2px] px-[4px] mr-[5px] cursor-pointer`}
                            >
                                {item?.title} июн
                            </button>
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Appointments;
