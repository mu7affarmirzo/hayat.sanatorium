/* eslint-disable array-callback-return */
import { Box } from '@mui/material';
import { FC, useState } from 'react';
import SideBarBtn from './SideBarBtn';

export type TabsItem = {
  title: string;
  subTitle?: string;
  component: React.FC<any>;
  chiled?: any;
  activBtnType?: any;
  search?: any;
  props?: any;
};

interface TabsProps {
  content: TabsItem[];
}

const SideBar: FC<TabsProps> = ({ content }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleActiveTab = (index: number) => {
    setActiveTab(index);
  };

  return (
    <Box className="flex flex-row min-h-[calc(100vh-76px)] border w-[100vw] h-full overflow-scroll">
      <Box className="flex h-[calc(100vh-230px)] flex-col gap-1 w-[280px] p-[5px] border overflow-scroll">
        {content.map((item, index) => (
          <Box key={index}>
            <SideBarBtn
              index={index}
              title={item?.title}
              subTitle={item?.subTitle}
              activeTab={activeTab}
              onClick={() => handleActiveTab(index)}
              chiled={item.chiled}
              activBtnType={item.activBtnType}
              search={item.search}
            />
          </Box>
        ))}
      </Box>
      <Box className="max-w-[calc(100vw-280px)] w-[calc(100vw-307px)]">
        {content.map(
          (item, index) =>
            index === activeTab && <item.component key={index} />,
        )}
      </Box>
    </Box>
  );
};

export default SideBar;
