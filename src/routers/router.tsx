import { Navigate } from 'react-router-dom';
import LoginView from 'views/auth/LoginView';
import NotFoundView from 'views/NotFound/notFound';
import PatientDoctors from 'containers/Doctors/PatientDoctors';
import EventsDoctors from 'containers/Doctors/EventsDoctors';
import DispatchingDoctors from 'containers/Doctors/DispatchingDoctors';

import BookedReceptionView from 'containers/Reception/BookedReception/bookedRecView';
import PatientReception from 'containers/Reception/PatientReception';
import EventsReception from 'containers/Reception/EventsReception';
import DispatchingReception from 'containers/Reception/DispatchingReception';

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
