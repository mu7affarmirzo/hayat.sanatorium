import { AirplaneIcon } from 'assets/icons/icons';
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
                active: true,
                path: '/searchpatients',
            },
        ],
    },
    {
        button: 'Пациенты',
        title: 'Пациенты',
        path: '/mypatients',
        dropdown: [
            {
                icon: AirplaneIcon,
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
                icon: AirplaneIcon,
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
                icon: AirplaneIcon,
                text: 'Ожидаемый заезд',
                sideBarText: 'Ожидаемый заезд',
                active: true,
                path: '/searchpatients',
            },
        ],
    },
];
