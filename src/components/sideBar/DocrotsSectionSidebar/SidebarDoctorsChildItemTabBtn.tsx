import { FC } from 'react';
import { SidebarDoctorsBtnProps } from './SidebarDoctors';
import { SidebarItemTab } from '../SaidbarItemTab';
import { Box } from '@mui/material';

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
        childItems={props.content.chiled}
      />
    </Box>
  );
};
