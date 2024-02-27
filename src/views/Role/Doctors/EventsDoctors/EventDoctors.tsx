import { Grid } from '@mui/material';
import React from 'react';
import useDoctorsEventsHook from './hook';
import EventsAccordion from 'views/Events/eventsAccordion';
import EventsInfoSection from 'views/Events/eventsInfoSection';
import EventsTableContainer from 'views/Events/eventsTableContaner';

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
