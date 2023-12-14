import { Typography } from '@mui/material';
import { MoneyBillIcon } from 'assets/icons/icons';
import React from 'react';
type propsType = {
    setActiveItem?: any;
    id?: number;
    activeItem?: any;
};
const CreatePaymentItem = (props: propsType) => {
    return (
        <button
            onClick={() => props.setActiveItem(props?.id)}
            className={` ${
                props.id === props.activeItem ? 'bg-[#007DFF]' : 'bg-[#F5F5F5]'
            } rounded-[4px]  p-[8px] w-[100%] border-[1px] border-[rgba(0, 0, 0, 0.23)] cursor-pointer `}
        >
            <div className="flex items-center ">
                <MoneyBillIcon
                    stroke={props.id === props.activeItem ? '#fff' : '#4CAF50'}
                />
                <Typography
                    className={` ${
                        props.id === props.activeItem
                            ? 'text-[#fff]'
                            : 'text-[rgba(0, 0, 0, 0.87)]'
                    } text-[14px]  font-normal  `}
                >
                    100
                </Typography>
            </div>
            <div className=" bg-[#4CAF50] w-[100%] rounded-[2px] h-[4px] mt-[5px] "></div>
            <div className="mt-[5px]  flex items-start ">
                <Typography
                    className={` ${
                        props.id === props.activeItem
                            ? 'text-[#fff]'
                            : 'text-[rgba(0, 0, 0, 0.87)]'
                    } text-[12px]  font-normal  `}
                >
                    Наличные
                </Typography>
            </div>
        </button>
    );
};

export default CreatePaymentItem;
