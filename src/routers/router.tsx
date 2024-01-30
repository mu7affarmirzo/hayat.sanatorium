import { Navigate } from "react-router-dom";
import BookedDoctors from "views/doctors/bookedDoctors";
import MainDoctorsView from "views/doctors/mainDoctors/main";
import BookedReception from "views/reception/bookedReception";
import LoginView from "views/auth/LoginView";
import Patientreception from "views/reception/patientReception";
import EventsReception from "views/reception/eventsReception";
import DispatchingReception from "views/reception/dispatchingReception";

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
            component: <BookedReception />,
        },
        {
            path: "reception/patients",
            component: <Patientreception />,
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
    Nurses: [],
    ProcedureWorkers: [],
};
