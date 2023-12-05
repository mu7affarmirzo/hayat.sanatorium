import React, { FC, useCallback, useEffect } from 'react';
import styled from 'styled-components';

import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';
import { Button, Menu, MenuItem, Typography } from '@mui/material';
import { ArrowDropDownIcon } from '@mui/x-date-pickers';

import { LogoSanatarumIcon } from '../../assets/icons/icons';
import { NavBarDropdowns } from '../../constants/main';
import { useNavigate } from 'react-router-dom';

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 30px;
    padding-right: 30px;
    height: 8vh;
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

interface HeaderProps {
    setChangeTopTab: (index: number) => void;
    activeTab: number;
}

const Headers: FC<HeaderProps> = ({ setChangeTopTab, activeTab }) => {
    const [anchorEl, setAnchorEl] = React.useState<number>(0);
    const [profileOpen, setProfileOpen] = React.useState<null | HTMLElement>(
        null
    );
    const navigate = useNavigate();

    const handleClick = (index: number) => {
        setAnchorEl(index);
        setChangeTopTab(index);
    };

    const changeHeaderTab = useCallback(() => {
        //@ts-ignore
        navigate(NavBarDropdowns[activeTab]?.path);
    }, [anchorEl]);
    useEffect(() => {
        changeHeaderTab();
    }, [changeHeaderTab]);

    return (
        <HeaderContainer className=" border-b  border-gray-300 ">
            <LeftSection>
                <div className=" mr-10 ">
                    <LogoSanatarumIcon />
                </div>

                <nav>
                    {NavBarDropdowns.map((item, i) => {
                        return (
                            <React.Fragment key={i}>
                                <Button
                                    id="basic-button"
                                    aria-controls={
                                        anchorEl === i
                                            ? 'basic-menu'
                                            : undefined
                                    }
                                    aria-haspopup="true"
                                    aria-expanded={
                                        anchorEl === i ? 'true' : undefined
                                    }
                                    onClick={() => handleClick(i)}
                                    sx={{
                                        height: '8vh',
                                    }}
                                    className={` h-full, rounded-none , px-5 , text-sm  , font-semibold  , align-middle  , cursor-pointer , normal-case ${
                                        activeTab === i
                                            ? 'bg-blue-400 text-gray-100'
                                            : 'bg-white  text-gray-700'
                                    }`}
                                >
                                    <Typography className="text-sm , font-medium ">
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
    );
};

export default Headers;
