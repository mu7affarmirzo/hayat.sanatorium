import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import BookingScreenTabs, { TabsItem } from "components/bookingTabs";
import addMedicalHistory from "./addMedicalHistory";
import booked from "./bookedChildTab";
import { useMemo } from "react";
import { useReduxSelector } from "hooks/useReduxHook";

const BookedView = () => {
    const { broneData } = useReduxSelector((dynamicTabs) => dynamicTabs.booked);
    const dynamicContent = useMemo(() => {
        const bookedTab: TabsItem = {
            title: "Забронированные",
            component: booked,
        };

        const broneItems =
            broneData?.map((item) => ({
                title: item.name,
                component: addMedicalHistory,
            })) || [];

        return [bookedTab, ...broneItems];
    }, [broneData]);

    return (
        <div className=" w-full  h-full  relative">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <BookingScreenTabs content={dynamicContent} />
            </LocalizationProvider>
        </div>
    );
};

export default BookedView;
