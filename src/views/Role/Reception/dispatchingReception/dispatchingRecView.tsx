import BroneViewTabs from 'components/Tabs/BookedPageTabs/bookedTabs';
import useDispatchingHook from './hook';

const DispatchingReceptionView = () => {
  const { dynamicContent } = useDispatchingHook();

  return (
    <div className="w-full h-full relative">
      <BroneViewTabs content={dynamicContent} />
    </div>
  );
};

export default DispatchingReceptionView;
