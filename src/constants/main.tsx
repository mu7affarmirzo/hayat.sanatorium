import { SvgProps } from '../types/types';

interface INav {
    name?: string;
    title: string;
    path?: string;
    mainPath?: string;
    firtsItemTitle?: string;
    lastItemTitle?: string;
    lastItemPath?: string;
    lastItemIcon?: (props: SvgProps) => JSX.Element;

    subMenu?: Array<{
        sectionName?: string;
        sectionItems?: Array<any>;
    }>;
}
export const NavBarDropdowns: Array<INav> = [
    {
        name: 'Забронированные',
        title: 'Забронированные',
        path: '/dashboard/booked',
        mainPath: 'booked',
        subMenu: [],
    },
    {
        name: 'Пациенты',
        title: 'Пациенты',
        path: '/dashboard/patients/patients',
        mainPath: 'patients',
        subMenu: [
            {
                sectionName: 'Пациенты',
                sectionItems: [
                    {
                        name: 'Дежурный врач',
                        mainPath: '/patients',
                        path: '/dashboard/patients/doctor-duty',
                    },
                    {
                        name: 'Дежурная медсестра',
                        mainPath: '/patients',
                        path: '/dashboard/patients/nurse-duty',
                    },
                    {
                        name: 'Мои пациенты',
                        mainPath: '/patients',
                        path: '/dashboard/patients/patients',
                    },
                    {
                        name: 'Счета',
                        mainPath: '/accounts',
                        path: '/dashboard/patients/accounts',
                    },
                    {
                        name: 'Договоры и счета',
                        mainPath: '/patients',
                        path: '/dashboard/patients/contact-account',
                    },
                    {
                        name: 'Поиск пациентов',
                        mainPath: '/search-patients',
                        path: '/dashboard/patients/search-patients',
                    },
                    {
                        name: '919/2022 Холматов У.',
                        mainPath: '/add-patients',
                        path: '/dashboard/patients/add-patients',
                    },
                ],
            },
        ],
    },
    {
        name: 'События',
        title: 'События',
        path: '/dashboard/events/events',
        mainPath: 'events',
        subMenu: [],
    },
    {
        name: 'Диспетчеризация',
        title: 'Диспетчеризация',
        path: '/dashboard/dispatching/dispatching',
        mainPath: 'dispatching',
        subMenu: [],
    },
];
