import { Box } from '@mui/material';
import { SidebarItemTab } from '../SaidbarItemTab';
import { FC } from 'react';
import { SidebarDoctorsBtnProps } from './SidebarDoctors';

export const SidebarDoctorsTabBtn: FC<SidebarDoctorsBtnProps> = (props) => {
  return (
    <Box>
      <SidebarItemTab
        activeTab={props.activeTab}
        index={props.index}
        title={props.content.title}
        hanleClicked={props.onClick}
      />
    </Box>
  );
};
