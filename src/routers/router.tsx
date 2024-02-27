import { Navigate } from 'react-router-dom';
import LoginView from 'views/auth/LoginView';
import NotFoundView from 'views/NotFound/notFound';
import BookedDoctors from 'views/Role/Doctors/BookedDoctors';
import PatientDoctors from 'views/Role/Doctors/PatientDoctors';
import EventsDoctors from 'views/Role/Doctors/EventsDoctors';
import DispatchingDoctors from 'views/Role/Doctors/DispatchingDoctors';

import BookedReceptionView from 'views/Role/Reception/BookedReception/bookedRecView';
import PatientReception from 'views/Role/Reception/PatientReception';
import EventsReception from 'views/Role/Reception/EventsReception';
import DispatchingReception from 'views/Role/Reception/DispatchingReception';

type IRouting = {
  path: string;
  component: React.ReactNode;
  global?: boolean;
};

type MyGroupType = {
  [key: string]: IRouting[];
};

export const RoutingData: MyGroupType = {
  NoAuth: [
    {
      path: '/login',
      component: <LoginView />,
    },
  ],

  Reception: [
    {
      path: 'reception',
      component: <Navigate to="/reception/booked" replace />,
    },
    {
      path: 'reception/booked',
      component: <BookedReceptionView />,
    },
    {
      path: 'reception/patients',
      component: <PatientReception />,
    },
    {
      path: 'reception/events',
      component: <EventsReception />,
    },
    {
      path: 'reception/dispatching',
      component: <DispatchingReception />,
    },
  ],

  Doctors: [
    {
      path: 'doctors',
      component: <Navigate to="/doctors/patients" replace />,
    },
    {
      path: '/doctors/patients',
      component: <PatientDoctors />,
    },
    {
      path: 'doctors/events',
      component: <EventsDoctors />,
    },
    {
      path: 'doctors/dispatching',
      component: <DispatchingDoctors />,
    },
  ],

  404: [
    {
      path: '/404',
      component: <NotFoundView />,
    },
  ],

  Nurses: [],
  ProcedureWorkers: [],
};
