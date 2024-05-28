// AppointmentsView.tsx
import { Box, Grid } from '@mui/material';
import { Table } from 'components/CollapseTable/CollapseTable';
import { useReduxSelector } from 'hooks/useReduxHook';
import { columns } from './columns';

const AppointmentListView = () => {
  const { appointments } = useReduxSelector((state) => state.appointments);

  const appointmentSections = [
    { title: 'Initial Appointments', data: appointments.initial },
    { title: 'Neurologist Appointments', data: appointments.neurologist },
    { title: 'Cardiologist Appointments', data: appointments.cardiologist },
    {
      title: 'On Duty Doctor on Arrival Appointments',
      data: appointments.on_duty_doctor_on_arrival,
    },
    { title: 'On Duty Doctor Appointments', data: appointments.on_duty_doctor },
    { title: 'Repeated Appointments', data: appointments.repeated_appointment },
    { title: 'EKG Appointments', data: appointments.ekg_appointment },
    { title: 'Final Appointments', data: appointments.final_appointment },
  ];

  return (
    <Box>
      <Grid item xs={12} md={12} className="bg-[#F5F5F5]">
        {appointmentSections.map((section, index) => (
          <Table
            key={index}
            columns={columns}
            data={section.data}
            isCollapsible={true}
            collapseTitle={section.title}
            cito={index}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default AppointmentListView;
