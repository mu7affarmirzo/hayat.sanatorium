import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import LoginView from '../views/auth';
import SearchPatients from 'views/registration/searchPatients';
import MyPatients from 'views/myPatients';
import Registration from 'views/registration';

type IRouting = {
    path: string;
    component: ReactElement;
    global?: boolean;
};

type MyGroupType = {
    [key: string]: Array<IRouting>;
};

export const RoutingData: MyGroupType = {
    NoAuth: [
        {
            path: '/login',
            component: <LoginView />,
            global: true,
        },
    ],
    Admin: [
        {
            path: '/',
            component: <Navigate to="/registration" replace />,
            global: true,
        },
        {
            path: '/registration',
            component: <Registration />,
            global: true,
        },
        {
            path: '/searchpatients',
            component: <SearchPatients />,
            global: true,
        },
        {
            path: '/mypatients',
            component: <MyPatients />,
            global: true,
        },
    ],
};
