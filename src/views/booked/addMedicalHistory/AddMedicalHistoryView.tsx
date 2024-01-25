/* eslint-disable react/style-prop-object */
import { Grid } from "@mui/material";
import { CoinsAltIcon, VuesaxLinearPrinterIcon } from "assets/icons/icons";
import SelectButton from "components/buttons/SelectButton";
import DefaultButton from "components/deafultButton/DefaultButton";
import SideBar, { TabsItem } from "components/sideBar/SideBar";
import changelog from "../changelog";
import frontPage from "../frontPage";
import invoicesDocuments from "../invoicesDocuments";
import mainAssignmentSheet from "../mainAssignmentSheet";
import nutrition from "../nutrition";
import consultationTechniques from "../consultationTechniques";
import researchSummaryTable from "../researchSummaryTable";
import measuredParameters from "../measuredParameters";
import treatmentSchedule from "../treatmentSchedule";
import useAddMediceHistoryHook from "./hook";

const content: TabsItem[] = [
    {
        title: "Титульная страница",
        component: frontPage,
        chiled: [
            { id: 0, title: "Диагнозы", link: "/#frontPage" },
            { id: 2, title: "Особые отметки", link: "/#frontPage" },
        ],
        activBtnType: "panel1",
    },
    {
        title: "Документы",
        component: invoicesDocuments,
    },
    {
        title: "Питание",
        component: nutrition,
    },
    {
        title: "Консультации и повторные приемы",
        component: consultationTechniques,
        activBtnType: "panel1",
        chiled: [
            {
                id: 0,
                title: "Прием дежурного врача",
                link: "#frontPage",
            },
            {
                id: 1,
                title: "Жалобы/анамнез",
            },
            {
                id: 2,
                title: "Объективные данные",
            },
            {
                id: 3,
                title: "Диагноз",
            },
            {
                id: 4,
                title: "Заключение",
            },
            {
                id: 5,
                title: "Назначения",
            },
        ],
    },
    {
        title: "Основной лист назначений",
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
    {
        title: "Сводная таблица исследований",
        component: researchSummaryTable,
    },
    {
        title: "Измеряемые параметры",
        component: measuredParameters,
        activBtnType: "panel1",
        chiled: [
            {
                id: 0,
                title: "Артериальное давление",
            },
            {
                id: 1,
                title: "Глюкоза крови (глюкометр)",
            },
            {
                id: 3,
                title: "Пульс",
            },
            {
                id: 4,
                title: "Сатурация",
            },

            {
                id: 5,
                title: "Температура",
            },
        ],
    },
    {
        title: "Расписание лечения",
        component: treatmentSchedule,
    },
    {
        title: "Журнал изменений",
        component: changelog,
    },
];

const selectData = [
    {
        id: 0,
        title: "Начало приёма",
    },
    {
        id: 1,
        title: "Начало приём2",
    },
];

const selectData2 = [
    {
        id: 0,
        title: "Осмотр дежурного врача при поступлении",
    },
    {
        id: 1,
        title: "Прием дежурного врача",
    },
];

const DiseaseHistoryTopTabs = () => {
    return (
        <Grid
            container
            className="min-h-[70px] flex justify-between flex-wrap py-[5px]"
        >
            <Grid
                item
                xs={12}
                md={12}
                className="flex  items-center justify-between flex-wrap "
            >
                <div className="flex  justify-between items-center py-[10px]  ">
                    <DefaultButton
                        title="Сохранить"
                        style="bg-[#4CAF50] h-[46px] text-[#fff] mr-[10px]  "
                    />
                    <SelectButton
                        data={selectData}
                        defaultValue="Начало приёма"
                        icon={<VuesaxLinearPrinterIcon />}
                    />
                    <SelectButton
                        data={selectData2}
                        defaultValue="Экспортировать документы"
                    />
                    <DefaultButton
                        title="Закрыть историю болезни"
                        style="bg-[#2196F3] h-[46px] text-[#fff] mr-[10px] "
                    />
                    <DefaultButton
                        title="Удалить историю болезни"
                        style="bg-[#2196F3] h-[46px] text-[#fff] mr-[10px] "
                    />
                    <DefaultButton
                        title="Диспечеризовать все"
                        style="bg-[#2196F3] h-[46px] text-[#fff] mr-[10px] "
                    />
                    <DefaultButton
                        title="Отменить все диспетчеризации"
                        style="bg-[#2196F3] h-[46px] text-[#fff] mr-[10px] "
                    />
                </div>
                <DefaultButton
                    icon={<CoinsAltIcon stroke="black" />}
                    title="  0,00 сум"
                    style="bg-[#F5F5F5] h-[46px] text-[#000]  py-[10px]"
                    variant={"none"}
                />
            </Grid>
        </Grid>
    );
};

const AddMedicalHistoryView = () => {
    const { register, PatientData, onSubmit, handleSubmit } =
        useAddMediceHistoryHook();

    return (
        <div className=" overflow-hidden relative max-h-[calc(100vh-142px)]   ">
            <DiseaseHistoryTopTabs />
            <div className="overflow-hidden relative max-h-[calc(100vh-150px)] bg-[#f5f5f5]">
                <SideBar content={content} />
            </div>
        </div>
    );
};

export default AddMedicalHistoryView;
