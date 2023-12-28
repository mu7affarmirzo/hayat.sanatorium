import booked from 'views/booked';
import dispatching from 'views/dispatching';
import events from 'views/events';
import patients from 'views/patients';
import accounts from 'views/patients/accounts';
import addPatients from 'views/patients/addPatients';
import contactAndAccount from 'views/patients/contactAndAccount';
import doctorOnDuty from 'views/patients/doctorOnDuty';
import nurseOnDuty from 'views/patients/nurseOnDuty';
import searchPatient from 'views/patients/searchPatient';

const ROUTES = {
    dashboard: [
        {
            name: 'booked',
            defaultPath: 'booked',
            paths: [
                {
                    path: 'booked',
                    element: booked,
                },
            ],
        },
        {
            name: 'patients',
            defaultPath: 'patients',
            paths: [
                {
                    path: 'doctor-duty',
                    element: doctorOnDuty,
                },
                {
                    path: 'nurse-duty',
                    element: nurseOnDuty,
                },
                {
                    path: 'patients',
                    element: patients,
                },
                {
                    path: 'accounts',
                    element: accounts,
                },
                {
                    path: 'contact-account',
                    element: contactAndAccount,
                },
                {
                    path: 'search-patients',
                    element: searchPatient,
                },
                {
                    path: 'add-patients',
                    element: addPatients,
                },
            ],
        },
        {
            name: 'events',
            defaultPath: 'events',
            paths: [
                {
                    path: 'events',
                    element: events,
                },
            ],
        },
        {
            name: 'dispatching',
            defaultPath: 'dispatching',
            paths: [
                {
                    path: 'dispatching',
                    element: dispatching,
                },
            ],
        },
    ],
};

export default ROUTES;
