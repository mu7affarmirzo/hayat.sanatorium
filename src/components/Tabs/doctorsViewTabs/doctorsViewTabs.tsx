import { FC, useState } from 'react';
import { Box } from '@mui/material';

import { removeDoctorPatient } from 'features/doctorsPatient/patientDoctorsSlice';
import { useReduxDispatch } from 'hooks/useReduxHook';

import DoctorsTabBtn from './doctorstopTabsBtn';

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

  const handleActiveTab = (index: number) => {
    setActiveTab(index);
  };

  const removeActiveIB = (index: number) => {
    dispatch(removeDoctorPatient(index));
    setActiveTab(0);
  };

  return (
    <Box className=" w-full ">
      <Box className="flex flex-row gap-1 border-b-[1px] border-[rgba(0, 0, 0, 1)] w-[100vw]">
        {content.map((item, index) => (
          <Box key={index}>
            <DoctorsTabBtn
              index={index}
              title={item?.title}
              activeTab={activeTab}
              subTitle={item?.subTitle}
              handleCloseBtn={() => removeActiveIB(index)}
              isRemove={item?.isRemove || false}
              onClick={() => handleActiveTab(index)}
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
