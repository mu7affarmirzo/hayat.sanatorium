/* eslint-disable array-callback-return */
import { Box } from '@mui/material';
import { FC, useCallback, useState } from 'react';
import BroneTabBtn from './bookedTabItmeBtn';

export type TabsItem = {
  title: string;
  subTitle?: string;
  icon?: any;
  component: React.FC;
};

interface TabsProps {
  content: TabsItem[];
  // setDynamicTabs?: React.Dispatch<React.SetStateAction<TabsItem[]>>
}

const BroneViewTabs: FC<TabsProps> = ({ content }) => {
  // const { selectBroneId } = useReduxSelector((brone) => brone.booked);
  // const dispatch = useReduxDispatch();
  const [dynamicTabs, setDynamicTabs] = useState(content);
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleActiveTab = (index: number) => {
    setActiveTab(index);
  };

  const removeActiveIB = useCallback(
    (title?: string) => {
      // dispatch(removePatient(activeTab));
      const newDynamicContent = dynamicTabs.filter(
        (tab) => tab.title !== title,
      );
      setDynamicTabs(newDynamicContent);
      // setActiveTab(0);
    },
    [dynamicTabs],
  );

  console.log({ activeTab });
  return (
    <Box className=" w-full ">
      <Box className="flex flex-row gap-1 border-b-[1px] border-[rgba(0, 0, 0, 1)] ">
        {dynamicTabs.map((item, index) => {
          return (
            <Box key={item.title}>
              <BroneTabBtn
                index={index}
                Icon={item?.icon}
                title={item?.title}
                activeTab={activeTab}
                subTitle={item?.subTitle}
                handleCloseBtn={removeActiveIB}
                onClick={() => handleActiveTab(index)}
              />
            </Box>
          );
        })}
      </Box>
      <Box className="w-full">
        {dynamicTabs.map((item, index) => {
          if (index === activeTab) {
            return <item.component key={index} />;
          }
        })}
      </Box>
    </Box>
  );
};

export default BroneViewTabs;
