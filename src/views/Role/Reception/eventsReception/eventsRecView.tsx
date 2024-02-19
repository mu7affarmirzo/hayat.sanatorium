import { Grid } from "@mui/material";
import EventsAccordion from "views/events/eventsAccordion";
import EventsInfoSection from "views/events/eventsInfoSection";
import EventsTableContainer from "views/events/eventsTableContaner";
import useRecaptionEventsHook from "./hook";

const EventsReceptionView = () => {
    const { handleSubmit, onSubmit, register, data } = useRecaptionEventsHook();

    return (
        <Grid container>
            <EventsAccordion
                handleSubmit={handleSubmit}
                onSubmit={onSubmit}
                register={register}
            />
            <EventsInfoSection />
            <EventsTableContainer rowData={data as never} />
        </Grid>
    );
};

export default EventsReceptionView;
