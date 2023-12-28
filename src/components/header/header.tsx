import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';
import { Button, Menu, MenuItem, Typography } from '@mui/material';
import { ArrowDropDownIcon } from '@mui/x-date-pickers';
import HeaderBookingScreenTabs from 'components/headerBookingTab/HeaderBookingTabs';
import React, { useCallback, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { LogoSanatarumIcon } from '../../assets/icons/icons';
import { NavBarDropdowns } from '../../constants/main';
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

const Headers = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const subNavList = useMemo(() => {
        return (
            NavBarDropdowns.find((el) =>
                location.pathname.includes(`${el.mainPath}`)
            )?.subMenu ?? NavBarDropdowns[0].subMenu
        );
    }, [location]);

    const isActiveNav = useCallback(
        (path: string) => {
            return location.pathname.includes(path);
        },
        [location]
    );
    const [profileOpen, setProfileOpen] = React.useState<null | HTMLElement>(
        null
    );

    return (
        <div className="">
            <HeaderContainer className=" border-b  border-gray-300 h-[80px]">
                <LeftSection>
                    <div className=" mr-10 ">
                        <LogoSanatarumIcon />
                    </div>

                    <nav className="h-[100%]">
                        {NavBarDropdowns.map((item: any) => {
                            return (
                                <React.Fragment key={item.path}>
                                    <Button
                                        id="basic-button"
                                        aria-haspopup="true"
                                        onClick={() => {
                                            navigate(item.path);
                                        }}
                                        className={`  rounded-none  px-[20px] h-[100%] text-sm   font-semibold  align-middle   cursor-pointer  normal-case ${
                                            isActiveNav(item.mainPath)
                                                ? 'bg-blue-400 text-gray-100'
                                                : 'bg-white  text-gray-700'
                                        } `}
                                    >
                                        <Typography className="text-sm  font-medium ">
                                            {item.title}
                                        </Typography>
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
                            aria-controls={
                                Boolean(profileOpen) ? 'fade-menu' : undefined
                            }
                            aria-haspopup="true"
                            aria-expanded={
                                Boolean(profileOpen) ? 'true' : undefined
                            }
                            onClick={(e) => setProfileOpen(e.currentTarget)}
                        >
                            <Typography
                                sx={{ color: 'rgba(0, 0, 0, 0.36)' }}
                                className="text-sm , leading-5 , tracking-tighter , mr-10 , capitalize"
                            >
                                Mухиддинов
                            </Typography>
                            <ArrowDropDownIcon
                                sx={{ fill: 'rgba(0, 0, 0, 0.54)' }}
                            />
                        </Button>
                        <Menu
                            id="fade-menu"
                            anchorEl={profileOpen}
                            open={Boolean(profileOpen)}
                            onClose={() => setProfileOpen(null)}
                            className="hidden_profile_block"
                        >
                            <MenuItem>
                                <LogoutTwoToneIcon sx={{ mr: '12px' }} />
                                Logout
                            </MenuItem>
                        </Menu>
                    </>
                </RightSection>
            </HeaderContainer>
            {/* <HeaderBookingScreenTabs content={subNavList} /> */}
        </div>
    );
};

export default Headers;
