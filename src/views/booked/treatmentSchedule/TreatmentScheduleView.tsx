import { Box } from '@mui/material';
import {
    VuesaxLinearNote2Icon,
    VuesaxLinearPrinterIcon,
    VuesaxLinearSave2Icon,
} from 'assets/icons/icons';
import DefaultButton from 'components/deafultButton/DefaultButton';

const TreatmentScheduleView = () => {
    return (
        <Box className=" h-[calc(100vh-225px)]  p-[10px] overflow-hidden  ">
            <Box className="border border-[rgba(0, 0, 0, 0.23)] flex  p-[10px] bg-[#fff]">
                <DefaultButton
                    title="Print"
                    icon={<VuesaxLinearPrinterIcon stroke="#000" />}
                    style="bg-[#F5F5F5] text-[#000] mr-[10px]"
                />
                <DefaultButton
                    title="Save"
                    icon={<VuesaxLinearSave2Icon stroke="#000" />}
                    style="bg-[#F5F5F5] text-[#000]"
                />
            </Box>
            <Box
                className={
                    'bg-[#9d9a9a] h-[calc(100%-200px)] w-[100%] overflow-scroll border mt-[10px]'
                }
            ></Box>
        </Box>
    );
};

export default TreatmentScheduleView;
