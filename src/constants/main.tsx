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
        path: '/dashboard/booked/booked',
        mainPath: 'booked',
        subMenu: [
            {
                sectionName: 'Забронированные',
                sectionItems: [
                    {
                        name: 'Забронированные',
                        mainPath: '/booked',
                        path: '/dashboard/booked/booked',
                    },
                    {
                        name: 'Новая ИБ',
                        mainPath: '/organ-affairs',
                        path: '/dashboard/booked/organ-affairs',
                    },
                ],
            },
        ],
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
                        name: 'Пациенты',
                        mainPath: '/patients',
                        path: '/dashboard/patients/patients',
                    },
                ],
            },
        ],
    },
    {
        name: 'События',
        title: 'События',
        path: '/dashboard/events/events',
        mainPath: 'patients',
        subMenu: [
            {
                sectionName: 'События',
                sectionItems: [
                    {
                        name: 'События',
                        mainPath: '/events',
                        path: '/dashboard/events/events',
                    },
                ],
            },
        ],
    },
    {
        name: 'Диспетчеризация',
        title: 'Диспетчеризация',
        path: '/dashboard/dispatching/dispatching',
        mainPath: 'dispatching',
        subMenu: [
            {
                sectionName: 'Диспетчеризация',
                sectionItems: [
                    {
                        name: 'Диспетчеризация',
                        mainPath: '/dispatching',
                        path: '/dashboard/dispatching/dispatching',
                    },
                ],
            },
        ],
    },
];
