import { Grid } from '@mui/material';
import EventsAccordion from 'views/Events/eventsAccordion';
import EventsInfoSection from 'views/Events/eventsInfoSection';
import EventsTableContainer from 'views/Events/eventsTableContaner';
import useRecaptionEventsHook from './hook';

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
