import booked from 'views/booked/booked';
import addMedicalHistory from 'views/booked/addMedicalHistory';
import dispatching from 'views/dispatching';
import events from 'views/events';
import patients from 'views/patients';

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
                {
                    path: 'organ-affairs',
                    element: addMedicalHistory,
                },
            ],
        },
        {
            name: 'patients',
            defaultPath: 'patients',
            paths: [
                {
                    path: 'patients',
                    element: patients,
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
