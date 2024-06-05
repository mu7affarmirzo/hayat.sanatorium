import { FC, useCallback, useState } from 'react';
import { Box } from '@mui/material';

import DoctorsTabBtn from './doctorstopTabsBtn';
import { useReduxDispatch, useReduxSelector } from 'hooks/useReduxHook';
import { selectPatient } from 'features/DoctorsRoleService/model/slices/selectedPatientsSlice';
import { removePatient } from 'features/booked/bookedSlice';

export type TopTabsItemType = {
  title: string;
  component: React.FC;
  subTitle?: string;
  isRemove?: boolean;
  isUserIcon: boolean;
};

interface TabsProps {
  content: TopTabsItemType[];
}

const DoctorsViewTabs: FC<TabsProps> = ({ content }) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const dispatch = useReduxDispatch();

  const { data } = useReduxSelector((state) => state.dynamicTopTabs);

  const handleActiveTab = useCallback(
    (index: number, tabName: string) => {
      const curItem = data.find(({ name }) => name === tabName);
      dispatch(selectPatient(curItem?.id as never));
      setActiveTab(index);
    },
    [data, dispatch],
  );

  const removeActiveTab = useCallback(
    (tabName: string) => {
      const curItem = data.find(({ name }) => name === tabName);
      dispatch(removePatient(curItem?.id as never));
      setActiveTab(0);
    },
    [data, dispatch],
  );

  return (
    <Box className="w-full">
      <Box className="flex flex-row gap-1 border-b-[1px] border-[rgba(0, 0, 0, 1)] w-full">
        {content.map((item, index) => (
          <Box key={index}>
            <DoctorsTabBtn
              index={index}
              title={item.title}
              activeTab={activeTab}
              subTitle={item.subTitle}
              handleCloseBtn={() => removeActiveTab(item.title)}
              isRemove={item.isRemove || false}
              onClick={() => handleActiveTab(index, item.title)}
              isUserIcon={item.isUserIcon}
            />
          </Box>
        ))}
      </Box>
      <Box className="w-full">
        {content.map((item, index) => {
          if (index === activeTab) {
            const Component = item.component;
            return <Component key={index} />;
          }
          return null;
        })}
      </Box>
    </Box>
  );
};

export default DoctorsViewTabs;
