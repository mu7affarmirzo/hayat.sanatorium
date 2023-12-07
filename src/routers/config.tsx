import { ReactElement } from 'react';
import MyPatients from 'views/myPatients';
import Registration from 'views/registration';
import AddMedicalHistory from 'views/registration/addMedicalHistory';

import LoginView from '../views/auth';
import FrontPage from 'views/registration/frontPage';

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
            path: '/registration',
            component: <Registration />,
            global: true,
        },
        {
            path: '/mypatients',
            component: <MyPatients />,
            global: true,
        },
        {
            path: '/addMedicalHistory',
            component: <AddMedicalHistory />,
            global: false,
        },
    ],
};
