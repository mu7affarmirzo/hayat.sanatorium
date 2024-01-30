import { Box } from "@mui/material";
import { FC, useCallback, useEffect, useState } from "react";
import { useReduxDispatch, useReduxSelector } from "hooks/useReduxHook";
import { removePatient } from "features/booked/bookedSlice";
import BroneTabBtn from "./broneTabBtn";

export type TabsItem = {
    title: string;
    subTitle?: string;
    icon?: any;
    component: React.FC;
};

interface TabsProps {
    content: TabsItem[];
}

const BroneViewTabs: FC<TabsProps> = ({ content }) => {
    const { selectBroneId } = useReduxSelector((brone) => brone.booked);
    const dispatch = useReduxDispatch();
    const [activeTab, setActiveTab] = useState<number>(0);

    const handleActiveTab = (index: number) => {
        setActiveTab(index);
    };

    const removeActiveIB = useCallback(() => {
        dispatch(removePatient(activeTab));
        setActiveTab(0);
    }, [activeTab, dispatch]);

    useEffect(() => {
        if (selectBroneId !== null) {
            setActiveTab(selectBroneId);
        }
    }, [selectBroneId]);

    return (
        <Box className=" w-full ">
            <Box className="flex  flex-row  gap-1  border-b-[1px] border-[rgba(0, 0, 0, 1)]  ">
                {content.map((item, index) => {
                    return (
                        <Box key={index}>
                            <BroneTabBtn
                                index={index}
                                Icon={item?.icon}
                                title={item?.title}
                                subTitle={item?.subTitle}
                                activeTab={activeTab}
                                onClick={() => handleActiveTab(index)}
                                handleCloseBtn={removeActiveIB}
                            />
                        </Box>
                    );
                })}
            </Box>
            <Box className="w-full  ">
                {content.map((item, index) => {
                    if (index === activeTab) {
                        return <item.component key={index} />;
                    }
                })}
            </Box>
        </Box>
    );
};

export default BroneViewTabs;
