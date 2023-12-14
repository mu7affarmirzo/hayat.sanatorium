import { Button, Typography } from '@mui/material';
import { FC } from 'react';
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

const SideBarBtn: FC<BookingProps> = (props) => {
    const { Icon, title, subTitle, onClick, activeTab, index } = props;

    return (
        <Button
            onClick={onClick}
            className={` flex  min-h-[30px]  w-full py-[10px] items-center justify-start pl-[24px]
              normal-case   ${
                  activeTab === index
                      ? 'bg-[#3397FF] text-gray-100'
                      : 'bg-[#fff]  text-gray-700'
              }`}
        >
            <Typography className="text-sm flex  text-start">
                {title}
            </Typography>
        </Button>
    );
};

export default SideBarBtn;
