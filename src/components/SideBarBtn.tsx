import { Button, Typography } from '@mui/material';
import { FC } from 'react';
import { SvgProps } from 'types/types';
import SaidBarCustomizedAccordions from './sideBar/SaidBarCustomizedAccordions';

interface BookingProps {
    index: number;
    title: string;
    Icon?: (props: SvgProps) => JSX.Element;
    color?: string;
    bgColor?: string;
    subTitle?: string;
    activeTab: number;
    onClick?: () => void;
    chiled?: any;
    activBtnType?: any;
}

const SideBarBtn: FC<BookingProps> = (props) => {
    const { title, onClick, activeTab, index, chiled, activBtnType } = props;

    return (
        <>
            {chiled ? (
                <SaidBarCustomizedAccordions
                    onClick={onClick}
                    title={title}
                    activBtnType={activeTab === index ? activBtnType : ''}
                    childrenStyle={{
                        background: '#fff',
                        display: 'block',
                        justifyContent: 'space-between',
                        paddingLeft: '40px',
                    }}
                    topBoxStyle={{
                        background: activeTab === index ? '#3397FF' : '#fff',
                        color: activeTab === index ? 'white' : '#636363',
                        paddingLeft: '15px',
                        borderRadius: '5px',
                    }}
                >
                    {chiled.map((item: any) => {
                        return (
                            <button
                                key={item?.id}
                                className=" block cursor-pointer py-[5px] w-[100%] text-left"
                            >
                                <Typography className="text-sm text-[#7a7a7a] my-[3px] text-[12px]">
                                    {item?.title}
                                </Typography>
                            </button>
                        );
                    })}
                </SaidBarCustomizedAccordions>
            ) : (
                <Button
                    onClick={onClick}
                    className={` flex  min-h-[30px]  w-full py-[10px] items-center justify-start pl-[24px]
              normal-case   ${
                  activeTab === index
                      ? 'bg-[#3397FF] text-gray-100'
                      : 'bg-[#fff]  text-gray-700'
              }`}
                >
                    <Typography className="text-[12px] flex  text-start">
                        {title}
                    </Typography>
                </Button>
            )}
        </>
    );
};

export default SideBarBtn;
