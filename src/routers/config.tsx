import { ReactElement, lazy } from 'react';
import MyPatients from 'views/myPatients';
import Registration from 'views/registration';
import AddMedicalHistory from 'views/registration/addMedicalHistory';
import LoginView from '../views/auth';
const FrontPage = lazy(() => import('views/registration/frontPage'));

type IRouting = {
    path: string;
    component: ReactElement;
    global?: boolean;
    paths?: any;
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
            paths: [
                {
                    path: 'my-affairs',
                    element: FrontPage,
                },
            ],
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
        {
            path: '/registration/searchPatients',
            component: <AddMedicalHistory />,
            global: false,
        },
    ],
};
