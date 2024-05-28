import { Box } from '@mui/material';
import { FC, useCallback, useState } from 'react';
import { SidebarDoctorsTabBtn } from './SidebarDoctorsTabBtn';
import { SidebarDoctorsChildTabBtn } from './SidebarDoctorsChildItemTabBtn';

interface ChildItemProps {
  id: number;
  title: string;
  data?: ChildItemProps[];
}

export type SidebarDoctorProps = {
  component: React.FC<any>;
  title: string;
  chiled?: ChildItemProps[];
  statusAppointment?: string;
};

interface SidebarDoctorsTypes {
  content: SidebarDoctorProps[];
}

export type SidebarDoctorsBtnProps = {
  content: SidebarDoctorProps;
  activeTab: number;
  index: number;
  onClick: () => void;
};

export const SidebarDoctors: FC<SidebarDoctorsTypes> = (props) => {
  const [activeSidebarItem, setActiveSidebarItem] = useState<number>(0);

  const hanleSelectSidebarItem = useCallback((index: number) => {
    setActiveSidebarItem(index);
  }, []);

  return (
    <Box className="flex flex-row min-h-[calc(100vh-76px)] border w-[100vw] h-full overflow-scroll">
      <Box className="flex h-[calc(100vh-230px)] flex-col gap-1 w-[280px] p-[5px] border overflow-scroll">
        {props.content.map((item, index) => {
          if (item.chiled) {
            return (
              <Box key={index}>
                <SidebarDoctorsChildTabBtn
                  activeTab={activeSidebarItem}
                  content={item}
                  index={index}
                  onClick={() => hanleSelectSidebarItem(index)}
                />
              </Box>
            );
          } else {
            return (
              <Box key={index}>
                <SidebarDoctorsTabBtn
                  activeTab={activeSidebarItem}
                  content={item}
                  index={index}
                  onClick={() => hanleSelectSidebarItem(index)}
                />
              </Box>
            );
          }
        })}
      </Box>
      <Box className="max-w-[calc(100vw-280px)] w-[calc(100vw-307px)]">
        {props.content.map(
          (item, index) =>
            index === activeSidebarItem && <item.component key={index} />,
        )}
      </Box>
    </Box>
  );
};
