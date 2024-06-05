import DoctorsViewTabs, {
  TopTabsItemType,
} from 'components/Tabs/doctorsViewTabs/doctorsViewTabs';
import DispatchingMyPatient from 'views/DispatchingMyPatient';

const content: TopTabsItemType[] = [
  {
    title: 'Мои пациенты',
    component: DispatchingMyPatient,
    isUserIcon: false,
  },
];

const DispatchingDoctors = () => {
  return (
    <div className="w-[100%] h-full relative">
      <DoctorsViewTabs content={content} />
    </div>
  );
};

export default DispatchingDoctors;
