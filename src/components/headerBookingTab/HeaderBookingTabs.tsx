import { Box, Button, Typography } from '@mui/material';
import { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const HeaderBookingScreenTabs = ({ content }: any) => {
    const navigate = useNavigate();
    const location = useLocation();
    const isActiveNav = useCallback(
        (path: string) => {
            return location.pathname === path;
        },
        [location]
    );

    return (
        <Box className=" w-full ">
            <Box className="flex  flex-row  gap-1  border-b-[1px] border-[rgba(0, 0, 0, 1)]  ">
                {content?.map((item: any, index: number) => {
                    return (
                        <Box
                            key={index}
                            className="flex w-full  h-full  pt-3 px-3 relative"
                        >
                            {item?.sectionItems?.map((navPath: any) => {
                                return (
                                    <Button
                                        onClick={() => {
                                            navigate(navPath.path);
                                        }}
                                        key={navPath.path}
                                        className={` flex  flex-row  gap-2 h-[48px]  px-[20px] rounded-tl-lg  rounded-tr-lg  rounded-none 
                                         normal-case   box-border  ${
                                             isActiveNav(navPath.path) === true
                                                 ? 'bg-blue-400 text-gray-100'
                                                 : 'bg-[#F5F5F5]  text-gray-700'
                                         } mr-[10px] `}
                                    >
                                        <Box className="flex , flex-col , box-border ">
                                            <Typography className="text-sm , text-start">
                                                {navPath.name}
                                            </Typography>
                                        </Box>
                                    </Button>
                                );
                            })}
                        </Box>
                    );
                })}
            </Box>
        </Box>
    );
};

export default HeaderBookingScreenTabs;
