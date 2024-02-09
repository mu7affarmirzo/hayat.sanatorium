import { Navigate } from "react-router-dom";
import LoginView from "views/auth/LoginView";

import NotFoundView from "views/NotFound/notFound";
import PatientReception from "views/Role/Reception/patientReception";
import EventsReception from "views/Role/Reception/eventsReception";
import DispatchingReception from "views/Role/Reception/dispatchingReception";
import MainDoctorsView from "views/Role/Doctors/mainDoctors/main";
import BookedDoctors from "views/Role/Doctors/bookedDoctors";
import BookedReceptionView from "views/Role/Reception/bookedReception/bookedRecView";

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
            path: "/login",
            component: <LoginView />,
        },
    ],

    Reception: [
        {
            path: "reception",
            component: <Navigate to="/reception/booked" replace />,
        },
        {
            path: "reception/booked",
            component: <BookedReceptionView />,
        },
        {
            path: "reception/patients",
            component: <PatientReception />,
        },
        {
            path: "reception/events",
            component: <EventsReception />,
        },
        {
            path: "reception/dispatching",
            component: <DispatchingReception />,
        },
    ],

    Doctors: [
        {
            path: "/doctors",
            component: <MainDoctorsView />,
        },

        {
            path: "/doctors/booked",
            component: <BookedDoctors />,
        },
    ],

    404: [
        {
            path: "/404",
            component: <NotFoundView />,
        },
    ],

    Nurses: [],
    ProcedureWorkers: [],
};
