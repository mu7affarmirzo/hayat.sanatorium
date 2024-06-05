import { useReduxSelector } from 'hooks/useReduxHook';
import BookedReceptionContainer from './BookedReceptionContainer';
import { TopTabsItemType } from 'components/Tabs/doctorsViewTabs/doctorsViewTabs';
import BookedTab from 'views/BookedTab';

export const useRecaptionContainerHook = () => {
  const { broneData } = useReduxSelector((dynamicTabs) => dynamicTabs.booked);

  const recBookedDynamicTabs: TopTabsItemType[] = broneData?.map((item) => ({
    itemId: item.id,
    title: item.name,
    component: BookedReceptionContainer,
    isUserIcon: true,
    isRemove: true,
  }));

  const staticContentTabs: TopTabsItemType[] = [
    {
      title: 'Забронированные',
      component: BookedTab,
      isUserIcon: false,
    },
  ];

  const dynamicContent: TopTabsItemType[] = [
    ...staticContentTabs,
    ...recBookedDynamicTabs,
  ];

  return {
    dynamicContent,
  };
};
