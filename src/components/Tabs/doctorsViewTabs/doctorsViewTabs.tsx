import { Box } from '@mui/material';
import { FC, useCallback, useEffect, useState } from 'react';
import { useReduxDispatch, useReduxSelector } from 'hooks/useReduxHook';

import DoctorsViewTabBtn from './doctorsViewBtn';
import { removeDoctorPatient } from 'features/doctorsPatient/patientDoctorsSlice';

export type TabsItem = {
    title: string;
    subTitle?: string;
    icon?: any;
    component: React.FC;
};

interface TabsProps {
    content: TabsItem[];
}

const DoctorsViewTabs: FC<TabsProps> = ({ content }) => {
    // const { selectBroneId } = useReduxSelector((brone) => brone.doctors);
    const dispatch = useReduxDispatch();
    const [activeTab, setActiveTab] = useState<number>(0);

    const handleActiveTab = (index: number) => {
        setActiveTab(index);
    };

    const removeActiveIB = () => {
        dispatch(removeDoctorPatient(activeTab - 5));
        setActiveTab(0);
    };

    return (
        <Box className=" w-full ">
            <Box className="flex flex-row gap-1 border-b-[1px] border-[rgba(0, 0, 0, 1)]  ">
                {content.map((item, index) => {
                    return (
                        <Box key={index}>
                            <DoctorsViewTabBtn
                                index={index}
                                Icon={item?.icon}
                                title={item?.title}
                                activeTab={activeTab}
                                subTitle={item?.subTitle}
                                handleCloseBtn={removeActiveIB}
                                onClick={() => handleActiveTab(index)}
                            />
                        </Box>
                    );
                })}
            </Box>
            <Box className="w-full">
                {content.map((item, index) => {
                    if (index === activeTab) {
                        return <item.component key={index} />;
                    }
                })}
            </Box>
        </Box>
    );
};

export default DoctorsViewTabs;
