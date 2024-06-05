import { TopTabsItemType } from 'components/Tabs/doctorsViewTabs/doctorsViewTabs';
import { useReduxSelector } from 'hooks/useReduxHook';
import MyPatientsView from 'views/DispatchingMyPatient';
import DispatchingTitlePage from 'views/DispatchingTitlePage';

const useDispatchingHook = () => {
  const { ibsData } = useReduxSelector((state) => state.dispatching);

  const recDispatchDynamicTabs: TopTabsItemType[] = ibsData?.map((item) => ({
    title: item.name,
    component: DispatchingTitlePage,
    isUserIcon: true,
    isRemove: true,
  }));

  const staticTabs: TopTabsItemType[] = [
    {
      title: 'Забронированные',
      component: MyPatientsView,
      isUserIcon: false,
    },
  ];

  const content: TopTabsItemType[] = [...staticTabs, ...recDispatchDynamicTabs];

  return {
    content,
  };
};

export default useDispatchingHook;
