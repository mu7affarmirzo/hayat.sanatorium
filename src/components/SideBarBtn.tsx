import { Button, Typography } from "@mui/material";
import { FC, useState } from "react";
import { SvgProps } from "types/types";
import SaidBarCustomizedAccordions from "./sideBar/SaidBarCustomizedAccordions";

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
    search?: any;
}

const SideBarBtn: FC<BookingProps> = (props) => {
    const { title, onClick, activeTab, index, chiled, activBtnType, search } =
        props;
    const [actibeBtn, setActiveBtn] = useState(0);

    return (
        <div
            className="rounded"
            style={{
                borderRadius: "10px",
                backgroundColor:
                    activeTab === index ? "#64B6F7 !important" : "#fff",
            }}
        >
            {chiled ? (
                <SaidBarCustomizedAccordions
                    onClick={onClick}
                    title={title}
                    activBtnType={activeTab === index ? activBtnType : ""}
                    search={search}
                    isActive={activeTab === index}
                    childrenStyle={{
                        display: "block",
                        justifyContent: "space-between",
                    }}
                    topBoxStyle={{
                        color: activeTab === index ? "white" : "#636363",
                        paddingLeft: "15px",
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    {chiled.map((item: any) => {
                        return (
                            <>
                                {item.data ? (
                                    <SaidBarCustomizedAccordions
                                        title={item.title}
                                        activBtnType={
                                            activeTab === index
                                                ? activBtnType
                                                : ""
                                        }
                                        isActive={activeTab === index}
                                        childrenStyle={{
                                            color:
                                                activeTab === index
                                                    ? "white"
                                                    : "#636363",
                                            display: "block",
                                            justifyContent: "space-between",
                                            paddingLeft: "30px",
                                        }}
                                        topBoxStyle={{
                                            color:
                                                activeTab === index
                                                    ? "white"
                                                    : "#636363",
                                            display: "flex",
                                            alignItems: "center",
                                            margin: 0,
                                        }}
                                    >
                                        {item.data.map((itemChiled: any) => {
                                            return (
                                                <button
                                                    onClick={() =>
                                                        setActiveBtn(
                                                            itemChiled.id
                                                        )
                                                    }
                                                    key={itemChiled?.id}
                                                    className={`${
                                                        actibeBtn ===
                                                        itemChiled.id
                                                            ? "bg-[#30a0fc]"
                                                            : "bg-[#64B6F7 ]"
                                                    }  cursor-pointer w-[100%] text-left `}
                                                >
                                                    <Typography className=" text-[#000] my-[3px] text-[12px]">
                                                        {itemChiled?.title}
                                                    </Typography>
                                                </button>
                                            );
                                        })}
                                    </SaidBarCustomizedAccordions>
                                ) : (
                                    <button
                                        key={item?.id}
                                        className=" block cursor-pointer py-[5px] w-[100%] text-left"
                                    >
                                        <Typography className="text-sm text-[#7a7a7a] my-[3px] text-[12px]">
                                            {item?.title}
                                        </Typography>
                                    </button>
                                )}
                            </>
                        );
                    })}
                </SaidBarCustomizedAccordions>
            ) : (
                <Button
                    onClick={onClick}
                    className={` flex  min-h-[30px]  w-full py-[10px] items-center justify-start pl-[24px] 
              normal-case   ${
                  activeTab === index
                      ? "bg-[#3397FF] text-gray-100"
                      : "bg-[#fff]  text-gray-700"
              }`}
                >
                    <Typography className="text-[12px] flex  text-start">
                        {title}
                    </Typography>
                </Button>
            )}
        </div>
    );
};

export default SideBarBtn;
