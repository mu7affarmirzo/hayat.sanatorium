import { Box } from '@mui/material';
import { FC } from 'react';
import { SidebarItemTab } from '../SaidbarItemTab';
import { SidebarDoctorsBtnProps } from './SidebarDoctors';

export const SidebarDoctorsChildTabBtn: FC<SidebarDoctorsBtnProps> = (
  props,
) => {
  return (
    <Box>
      <SidebarItemTab
        activeTab={props.activeTab}
        index={props.index}
        title={props.content.title}
        hanleClicked={props.onClick}
        isAccordion
        childItems={props.content.child}
      />
    </Box>
  );
};
