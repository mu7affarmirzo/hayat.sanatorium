import { lazy } from 'react';
const FrontPage = lazy(() => import('views/registration/frontPage'));
const ROUTES = {
    dashboard: [
        {
            name: 'registration',
            defaultPath: 'registration',
            paths: [
                {
                    path: 'frontPage',
                    element: FrontPage,
                },
            ],
        },
        {
            name: 'mypatients',
            defaultPath: 'search-solution',
            paths: [],
        },
        {
            name: 'addMedicalHistory',
            defaultPath: 'list-of-users',
            paths: [],
        },
        {
            name: 'stats',
            defaultPath: 'dashboard',
            paths: [],
        },
    ],
};

export default ROUTES;
