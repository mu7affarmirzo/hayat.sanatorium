import { Box } from '@mui/material';
import { FC, useState } from 'react';
import BookingTabBtn from './bookingTabBtn';

export type TabsItem = {
    title: string;
    subTitle?: string;
    icon?: any;
    component: React.FC;
};

interface TabsProps {
    content: TabsItem[];
}

const BookingScreenTabs: FC<TabsProps> = ({ content }) => {
    const [activeTab, setActiveTab] = useState<number>(0);

    const handleActiveTab = (index: number) => {
        setActiveTab(index);
    };

    return (
        <Box className=" w-full ">
            <Box className="flex  flex-row  gap-1  border-b-[1px] border-[rgba(0, 0, 0, 1)]  ">
                {content.map((item, index) => {
                    return (
                        <Box key={index}>
                            <BookingTabBtn
                                index={index}
                                Icon={item?.icon}
                                title={item?.title}
                                subTitle={item?.subTitle}
                                activeTab={activeTab}
                                onClick={() => handleActiveTab(index)}
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

export default BookingScreenTabs;
