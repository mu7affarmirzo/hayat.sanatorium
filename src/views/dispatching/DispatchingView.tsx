import BookingScreenTabs, {
  TabsItem,
} from 'components/Tabs/BookedPageTabs/bookedTabs';
import myPatients from '../DispatchingMyPatient';

const content: TabsItem[] = [
  {
    title: 'Мои пациенты',
    component: myPatients,
  },
];

const DispatchingView = () => {
  return (
    <div className=" w-full  h-full  relative">
      <BookingScreenTabs content={content} />
    </div>
  );
};

export default DispatchingView;
