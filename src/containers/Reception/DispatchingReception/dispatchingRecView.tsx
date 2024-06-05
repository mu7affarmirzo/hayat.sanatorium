import useDispatchingHook from './hook';
import DoctorsViewTabs from 'components/Tabs/doctorsViewTabs/doctorsViewTabs';

const DispatchingReceptionView = () => {
  const { content } = useDispatchingHook();

  return (
    <div className="w-full h-full relative">
      <DoctorsViewTabs content={content} />
    </div>
  );
};

export default DispatchingReceptionView;
