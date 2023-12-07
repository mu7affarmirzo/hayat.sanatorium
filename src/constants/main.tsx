import { SvgProps } from '../types/types';

interface INav {
    button: string;
    title: string;
    path?: string;
    firtsItemTitle?: string;
    lastItemTitle?: string;
    lastItemPath?: string;
    lastItemIcon?: (props: SvgProps) => JSX.Element;

    dropdown?: Array<{
        icon?: (props: SvgProps) => JSX.Element;
        text?: string;
        sideBarText?: string;
        active?: boolean;
        path: string;
        top?: boolean;
    }>;
}
export const NavBarDropdowns: Array<INav> = [
    {
        button: 'Регистрация',
        title: 'Регистрация',
        path: '/registration',
        dropdown: [
            {
                text: 'Титульная страница',
                sideBarText: 'Титульная страница',
                active: true,
                path: '/frontPage',
            },
            {
                text: 'Счета и документы',
                sideBarText: 'Счета и документы',
                active: true,
                path: '/frontPage',
            },
            {
                text: 'Расписание лечения',
                sideBarText: 'Расписание лечения',
                active: true,
                path: '/frontPage',
            },
            {
                text: 'Основной лист назначений',
                sideBarText: 'Основной лист назначений',
                active: true,
                path: '/frontPage',
            },
            {
                text: 'Журнал изменений',
                sideBarText: 'Журнал изменений',
                active: true,
                path: '/frontPage',
            },
        ],
    },
    {
        button: 'Пациенты',
        title: 'Пациенты',
        path: '/mypatients',
        dropdown: [
            {
                text: 'Ожидаемый заезд',
                sideBarText: 'Ожидаемый заезд',
                active: true,
                path: '/mypatients',
            },
        ],
    },
    {
        button: 'События',
        title: 'События',
        path: '/mypatients',
        dropdown: [
            {
                text: 'Ожидаемый заезд',
                sideBarText: 'Ожидаемый заезд',
                active: true,
                path: '/searchpatients',
            },
        ],
    },
    {
        button: 'Диспетчеризация',
        title: 'Диспетчеризация',
        path: '/registration',
        dropdown: [
            {
                text: 'Ожидаемый заезд',
                sideBarText: 'Ожидаемый заезд',
                active: true,
                path: '/searchpatients',
            },
        ],
    },
];
