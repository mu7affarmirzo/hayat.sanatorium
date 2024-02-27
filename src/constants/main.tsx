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
  ],
  Doctors: [
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
