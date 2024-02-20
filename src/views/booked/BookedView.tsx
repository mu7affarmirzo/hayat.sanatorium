import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import BookingScreenTabs, {
  TabsItem,
} from 'components/Tabs/BookedPageTabs/bookedTabs';

import { useMemo } from 'react';
import { useReduxSelector } from 'hooks/useReduxHook';
import bookedChildTab from '../BookedTab';
import NewTitlePageContainer from 'views/BookedTitlePage/TitlePage';

const BookedView = () => {
  const { broneData } = useReduxSelector((dynamicTabs) => dynamicTabs.booked);
  const dynamicContent = useMemo(() => {
    const bookedTab: TabsItem = {
      title: 'Забронированные',
      component: bookedChildTab,
    };

    const broneItems =
      broneData?.map((item) => ({
        title: item.name,
        component: NewTitlePageContainer,
      })) || [];
    return [bookedTab, ...broneItems];
  }, [broneData]);

  return (
    <div className=" w-full  h-full  relative">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <BookingScreenTabs content={dynamicContent} />
      </LocalizationProvider>
    </div>
  );
};

export default BookedView;
