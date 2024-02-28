import { TabsItem } from 'components/SideBar/SideBar';
import { useReduxSelector } from 'hooks/useReduxHook';
import { useMemo } from 'react';
import MyPatientsView from 'views/DispatchingMyPatient';
import DispatchingTitlePage from 'views/DispatchingTitlePage';

const useDispatchingHook = () => {
  const { ibsData } = useReduxSelector((state) => state.dispatching);

  const dynamicContent = useMemo(() => {
    const bookedTab: TabsItem = {
      title: 'Забронированные',
      component: MyPatientsView,
    };
    const broneItems =
      ibsData?.map((item) => ({
        title: item.name,
        component: DispatchingTitlePage,
      })) || [];
    return [bookedTab, ...broneItems];
  }, [ibsData]);

  return {
    dynamicContent,
  };
};

export default useDispatchingHook;
