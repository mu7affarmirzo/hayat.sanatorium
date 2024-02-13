/* eslint-disable react/style-prop-object */
import treatmentSchedule from "../booked/treatmentSchedule";
import SideBar, { TabsItem } from "components/sideBar/SideBar";
import mainAssignmentSheet from "../booked/mainAssignmentSheet";
import researchSummaryTable from "../booked/researchSummaryTable";
import DisTitlePageTab from "views/DisTitlePageTab";

const content: TabsItem[] = [
    {
        title: "Титульная страница",
        component: DisTitlePageTab,
        activBtnType: "panel1",
    },
    {
        title: "Расписание лечения",
        component: treatmentSchedule,
    },

    {
        title: "Автоматическая диспетчеризация",
        component: researchSummaryTable,
    },

    {
        title: "Назначения",
        component: mainAssignmentSheet,
        activBtnType: "panel1",
        chiled: [
            {
                id: 0,
                title: "Консультации и исследования",
            },
            {
                id: 1,
                title: "Лечебные процедуры",
            },
        ],
    },
];

const DispatchingTitleContainer = () => {
    return (
        <div className=" overflow-hidden relative max-h-[calc(100vh-142px)]">
            <div className="overflow-hidden relative max-h-[calc(100vh-50px)] bg-[#f5f5f5]">
                <SideBar content={content} />
            </div>
        </div>
    );
};

export default DispatchingTitleContainer;
