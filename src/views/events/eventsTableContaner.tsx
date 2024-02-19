import { Grid } from "@mui/material";
import EventsTableGroup from "./components/EventsTableGroup";
import { ColData } from "./components/ColData";
import { InfoCircle } from "assets/icons/icons";
import { GetAllEventTypes } from "types/eventsTypes";

type Props = {
    rowData: GetAllEventTypes[];
};

const EventsTableContainer = ({ rowData }: Props) => {
    return (
        <Grid item xs={12} md={12} className=" bg-[#F5F5F5]">
            <EventsTableGroup
                columnDefs={ColData}
                rowData={rowData}
                height="h-[73vh]"
                icons={<InfoCircle />}
            />
        </Grid>
    );
};

export default EventsTableContainer;
