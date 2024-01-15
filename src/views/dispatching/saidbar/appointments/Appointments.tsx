import { Box, Grid, IconButton, Typography } from '@mui/material';
import {
    ArrowLeftIcon,
    ArrowRightIcon,
    NavigationAppIcon,
    PinIcon,
} from 'assets/icons/icons';
import AutocompleteInput from 'components/autocompleteInput/AutocompleteInput';
import AppointmentsTable from 'components/bookingTypeView/AppointmentsTable';
import DefaultButton from 'components/deafultButton/DefaultButton';

const Appointments = () => {
    return (
        <Box className="px-[10px] py-[5px] w-full h-[calc(100vh-230px)] relative bg-[#F5F5F5] overflow-hidden">
            <Grid
                container
                className=" py-[5px] w-full relative bg-[#fff] overflow-scroll h-full"
            >
                <Grid item xs={12} className="flex items-center gap-2 px-4">
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
                            style="bg-[#9FD5A1] text-[#FFFFFF80]"
                            title="Назначить на выделенное время"
                            icon={<PinIcon />}
                        />
                        <DefaultButton
                            title="Назначить вместе"
                            style="bg-[#9FD5A1] text-[#FFFFFF80]"
                            icon={<PinIcon />}
                        />
                        <DefaultButton
                            style="bg-[#64B6F7] text-[#FFFFFF80]"
                            title="Отменить выбранную запись"
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} className="flex items-center gap-2 px-4 ">
                    <Grid item>
                        <Typography>Специалист:</Typography>
                    </Grid>
                    <Box className=" w-[50%] ">
                        <AutocompleteInput
                            containerStyle="w-[100%]"
                            inputStyle="w-[100%]"
                        />
                    </Box>
                    <Box className="flex gap-2">
                        <DefaultButton
                            style=" bg-[#2196F3] text-[#FFFFFF]"
                            title="Отменить выбранную запись"
                        />
                    </Box>
                </Grid>
                <Grid
                    item
                    xs={12}
                    className="p-[5px] mt-[10px] flex overflow-scroll  "
                >
                    <Box className="flex">
                        <AppointmentsTable id={true} width={'350px'} />
                        <AppointmentsTable width={'350px'} />
                    </Box>
                    <Box className="flex ">
                        <AppointmentsTable id={true} width={'350px'} />
                        <AppointmentsTable width={'350px'} />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Appointments;
