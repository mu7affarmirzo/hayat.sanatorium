import { Box, Button, IconButton, Typography } from '@mui/material';
import { FC } from 'react';
// import { Link } from 'react-router-dom';
import { SvgProps } from 'types/types';

interface BookingProps {
    index: number;
    title: string;
    Icon?: (props: SvgProps) => JSX.Element;
    color?: string;
    bgColor?: string;
    subTitle?: string;
    activeTab: number;
    onClick?: () => void;
}

const BookingTabBtn: FC<BookingProps> = (props) => {
    const { Icon, title, subTitle, onClick, activeTab, index } = props;

    return (
        <Button
            onClick={onClick}
            className={` flex  flex-row  gap-2 h-[48px]  px-[20px]
             rounded-tl-lg  rounded-tr-lg  rounded-none  normal-case   box-border  ${
                 activeTab === index
                     ? 'bg-[#3397FF] text-gray-100'
                     : 'bg-[#F5F5F5]  text-gray-700'
             }`}
        >
            <Box className="flex justify-between items-center">
                <Box className="flex  flex-col  box-border ">
                    <Typography className="text-sm , text-start">
                        {title}
                    </Typography>
                    {subTitle && (
                        <Typography className=" text-xs , text-start , opacity-50 ">
                            {subTitle}
                        </Typography>
                    )}
                </Box>
                {Icon ? (
                    <IconButton className="bg-[#F79E98] z-[1000] w-[30px] h-[30px] rounded-full flex justify-center items-center ml-[10px]">
                        <Icon
                            color="red"
                            stroke={activeTab === index ? '#fff' : '#000'}
                            fill={activeTab === index ? '#fff' : '#000'}
                        />
                    </IconButton>
                ) : null}
            </Box>
        </Button>
    );
};

export default BookingTabBtn;
