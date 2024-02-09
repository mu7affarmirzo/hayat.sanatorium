import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import BroneViewTabs from "components/Tabs/broneViewTabs/broneTabs";
import { useRecaptionContainerHook } from "./hook";

const BookedReceptionView = () => {
    const { dynamicContent } = useRecaptionContainerHook();
    return (
        <div className=" w-full  h-full  relative">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <BroneViewTabs content={dynamicContent} />
            </LocalizationProvider>
        </div>
    );
};

export default BookedReceptionView;
