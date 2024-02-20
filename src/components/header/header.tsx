import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';
import { Button, Menu, MenuItem, Typography } from '@mui/material';
import { ArrowDropDownIcon } from '@mui/x-date-pickers';
import React, { FC, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { LogoSanatarumIcon } from '../../assets/icons/icons';
import { NavBarDropdowns } from '../../constants/main';
import { useReduxDispatch } from 'hooks/useReduxHook';
import { logout } from 'features/login/AuthSlice';
import { storageService } from 'features/api/storageService';

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 30px;
  padding-right: 30px;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

type Props = {
  role: 'NoAuth' | 'Reception' | 'Doctors';
};

interface HeaderProps {
  setChangeTopTab: (index: number) => void;
  activeTab: number;
}

const Headers: FC<HeaderProps> = ({ activeTab, setChangeTopTab }) => {
  const navigate = useNavigate();
  // const location = useLocation();
  const dispatch = useReduxDispatch();
  // const [activeTabHeader, setActiveTabHeader] = useState<number>(0);
  const [anchorEl, setAnchorEl] = React.useState<number>(0);
  // const [activeData, setActiveData] = useState<any>();
  // const [itemStyle, setItemStyle] = useState(false);
  const [profileOpen, setProfileOpen] = React.useState<null | HTMLElement>(
    null,
  );
  // const { countOfEvents } = useReduxSelector((state) => state.events);

  const [role, setRole] = useState<Props['role']>('Doctors');

  // const SelectedNavbarDropDown = NavBarDropdowns[role];

  // const changeHeaderTab = useCallback(() => {
  //     setActiveData(SelectedNavbarDropDown[activeTab]);
  //     if (SelectedNavbarDropDown[activeTab].dropdown?.length === 1) {
  //         setItemStyle(true);
  //     } else {
  //         setItemStyle(false);
  //     }
  //     setActiveTabHeader(0);
  // }, [SelectedNavbarDropDown, activeTab]);

  const handleClick = (index: number, item: any) => {
    setAnchorEl(index);
    setChangeTopTab(index);
    navigate(item.path as never);
  };

  // const isActiveNav = useCallback(
  //     (path: string) => {
  //         return location.pathname.includes(path);
  //     },
  //     [location]
  // );

  const handleLogOut = useCallback(() => {
    dispatch(logout());
    storageService.remove('token');
  }, [dispatch]);

  const IsEventsBox = (path: string) => {
    if (path === '/reception/events') {
      return (
        <div className="w-[24px] h-[24px] border border-white bg-red-300 rounded-full mx-2 flex items-center justify-center">
          <Typography className="text-white">5</Typography>
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="">
      <HeaderContainer className="h-[76px] border-b border-gray-300">
        <LeftSection>
          <div className=" mr-10 ">
            <LogoSanatarumIcon />
          </div>
          <nav className="h-[100%]">
            {NavBarDropdowns[role].map((item, i) => {
              return (
                <React.Fragment key={item.path}>
                  <Button
                    id="basic-button"
                    aria-controls={anchorEl === i ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={anchorEl === i ? 'true' : undefined}
                    onClick={() => handleClick(i, item)}
                    className={`rounded-none  px-[20px] h-[100%] text-sm   font-semibold  align-middle   cursor-pointer  normal-case ${
                      activeTab === i
                        ? 'bg-blue-400 text-gray-100'
                        : 'bg-white  text-gray-400'
                    } `}>
                    <Typography className="text-sm  font-medium  normal-case ">
                      {item.title}
                    </Typography>

                    {IsEventsBox(item.path)}
                  </Button>
                </React.Fragment>
              );
            })}
          </nav>
        </LeftSection>
        <RightSection>
          <>
            <Button
              id="fade-button"
              aria-controls={profileOpen ? 'fade-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={profileOpen ? 'true' : undefined}
              onClick={(e) => setProfileOpen(e.currentTarget)}>
              <Typography
                sx={{ color: 'rgba(0, 0, 0, 0.36)' }}
                className="text-sm , leading-5 , tracking-tighter , mr-10 , capitalize">
                Mухиддинов
              </Typography>
              <ArrowDropDownIcon sx={{ fill: 'rgba(0, 0, 0, 0.54)' }} />
            </Button>
            <Menu
              id="fade-menu"
              anchorEl={profileOpen}
              open={Boolean(profileOpen)}
              onClose={() => setProfileOpen(null)}
              className="hidden_profile_block">
              <MenuItem onClick={handleLogOut}>
                <LogoutTwoToneIcon sx={{ mr: '12px' }} />
                Logout
              </MenuItem>
            </Menu>
          </>
        </RightSection>
      </HeaderContainer>
    </div>
  );
};

export default Headers;
