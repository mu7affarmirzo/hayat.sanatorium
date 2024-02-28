import { TabsItem } from 'components/sideBar/SideBar';
import { useReduxSelector } from 'hooks/useReduxHook';
import { useMemo } from 'react';
import bookedChildTab from 'views/BookedTab';
import BookedDoctorsContainer from './BookedDoctorsContainer';

export const useDoctorsContainerHook = () => {
  const { broneData } = useReduxSelector((dynamicTabs) => dynamicTabs.booked);
  const dynamicContent = useMemo(() => {
    const bookedTab: TabsItem = {
      title: 'Забронированные',
      component: bookedChildTab,
    };

    const broneItems =
      broneData?.map((item) => ({
        title: item.name,
        component: BookedDoctorsContainer,
      })) || [];
    return [bookedTab, ...broneItems];
  }, [broneData]);

  return {
    dynamicContent,
  };
};
