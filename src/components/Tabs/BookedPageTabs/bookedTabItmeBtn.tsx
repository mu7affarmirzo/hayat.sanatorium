import { Box, Button, IconButton, Typography } from "@mui/material";
import { CloseIcon } from "assets/icons/icons";
import { FC } from "react";
import { SvgProps } from "types/types";

interface BookingProps {
    index: number;
    title: string;
    Icon?: (props: SvgProps) => JSX.Element;
    color?: string;
    bgColor?: string;
    subTitle?: string;
    activeTab: number;
    onClick?: () => void;
    handleCloseBtn?: (title?: string) => void;
}

const RenderCloseBtn: FC<BookingProps> = (props) => {
    const { title, activeTab, index, handleCloseBtn } =
        props;

    return (
        <IconButton
            onClick={() => { handleCloseBtn && handleCloseBtn(title) }}
            className="bg-[#F79E98] z-[1000] w-[24px] h-[24px] rounded-full flex justify-center items-center ml-[0px] p-0"
        >
            <CloseIcon
                color="red"
                stroke={activeTab === index ? "#fff" : "#000"}
                fill={activeTab === index ? "#fff" : "#000"}
            />
        </IconButton>
    );
};

const BroneTabBtn: FC<BookingProps> = (props) => {
    const { title, subTitle, onClick, activeTab, index } =
        props;
    const isFirstElement = index === 0;

    return (
        <Button
            onClick={onClick}
            className={` flex  flex-row  gap-2 h-[48px]  px-[20px]
             rounded-tl-lg  rounded-tr-lg  rounded-none  normal-case   box-border  ${activeTab === index
                    ? "bg-[#3397FF] text-gray-100"
                    : "bg-[#F5F5F5]  text-gray-700"
                }`}
        >
            <Box className="flex gap-2 justify-between items-center">
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
                {
                    // !isFirstElement &&
                    <RenderCloseBtn {...props} />}
            </Box>
        </Button>
    );
};

export default BroneTabBtn;
