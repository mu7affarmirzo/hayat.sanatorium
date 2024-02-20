import { SvgProps } from '../types/types';

interface IDropdownItem {
    icon?: React.ComponentType<SvgProps>;
    text: string;
    sideBarText?: string;
    active?: boolean;
    path: string;
}

interface ITab {
    name: string;
    title: string;
    path: string;
    mainPath: string;
    dropdown?: IDropdownItem[];
    subMenu?: any[]; //
}
interface IRoleNavs {
    [key: string]: ITab[];
}

export const NavBarDropdowns: IRoleNavs = {
    Reception: [
        {
            name: 'Забронированные',
            title: 'Забронированные',
            path: '/reception/booked',
            mainPath: 'reception',
        },
        {
            name: 'Пациенты',
            title: 'Пациенты',
            path: '/reception/patients',
            mainPath: 'reception',
        },
        {
            name: 'События',
            title: 'События',
            path: '/reception/events',
            mainPath: 'reception',
        },
        {
            name: 'Диспетчеризация',
            title: 'Диспетчеризация',
            path: '/reception/dispatching',
            mainPath: 'reception',
        },
        // {
        //     name: "Пациенты",
        //     title: "Пациенты",
        //     path: "/dashboard/patients/patients",
        //     mainPath: "patients",
        //     subMenu: [
        //         {
        //             sectionName: "Пациенты",
        //             sectionItems: [
        //                 {
        //                     name: "Дежурный врач",
        //                     mainPath: "/patients",
        //                     path: "/dashboard/patients/doctor-duty",
        //                 },
        //                 {
        //                     name: "Дежурная медсестра",
        //                     mainPath: "/patients",
        //                     path: "/dashboard/patients/nurse-duty",
        //                 },
        //                 {
        //                     name: "Мои пациенты",
        //                     mainPath: "/patients",
        //                     path: "/dashboard/patients/patients",
        //                 },
        //                 {
        //                     name: "Счета",
        //                     mainPath: "/accounts",
        //                     path: "/dashboard/patients/accounts",
        //                 },
        //                 {
        //                     name: "Договоры и счета",
        //                     mainPath: "/patients",
        //                     path: "/dashboard/patients/contact-account",
        //                 },
        //                 {
        //                     name: "Поиск пациентов",
        //                     mainPath: "/search-patients",
        //                     path: "/dashboard/patients/search-patients",
        //                 },
        //                 {
        //                     name: "919/2022 Холматов У.",
        //                     mainPath: "/add-patients",
        //                     path: "/dashboard/patients/add-patients",
        //                 },
        //             ],
        //         },
        //     ],
        // },
        // {
        //     name: "События",
        //     title: "События",
        //     path: "/dashboard/events/events",
        //     mainPath: "events",
        //     subMenu: [],
        // },
        // {
        //     name: "Диспетчеризация",
        //     title: "Диспетчеризация",
        //     path: "/dashboard/dispatching/dispatching",
        //     mainPath: "dispatching",
        //     subMenu: [],
        // },
    ],
    Doctors: [
        {
            name: 'Забронированные',
            title: 'Забронированные',
            path: '/doctors/booked',
            mainPath: 'doctors',
        },
        {
            name: 'Пациенты',
            title: 'Пациенты',
            path: '/doctors/patients',
            mainPath: 'doctors',
        },
        {
            name: 'События',
            title: 'События',
            path: '/doctors/events',
            mainPath: 'doctors',
        },
        {
            name: 'Диспетчеризация',
            title: 'Диспетчеризация',
            path: '/doctors/dispatching',
            mainPath: 'doctors',
        },
    ],
};
