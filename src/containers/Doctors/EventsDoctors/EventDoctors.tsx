import { Grid } from '@mui/material';
import React from 'react';
import useDoctorsEventsHook from './hook';
import EventsAccordion from 'views/events/eventsAccordion';
import EventsInfoSection from 'views/events/eventsInfoSection';
import EventsTableContainer from 'views/events/eventsTableContaner';

const EventsReception = () => {
  const { data, handleSubmit, onSubmit, register } = useDoctorsEventsHook();
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

export default EventsReception;
