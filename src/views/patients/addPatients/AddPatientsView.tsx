import { Grid } from '@mui/material';
import { CoinsAltIcon, VuesaxLinearPrinterIcon } from 'assets/icons/icons';
import SelectButton from 'components/SelectButton';
import DefaultButton from 'components/deafultButton/DefaultButton';
import SideBar, { TabsItem } from 'components/sideBar/SideBar';
import React from 'react'
import changelog from 'views/booked/changelog';
import frontPage from 'views/booked/frontPage';
import invoicesDocuments from 'views/booked/invoicesDocuments';
import mainAssignmentSheet from 'views/booked/mainAssignmentSheet';
import nutrition from 'views/booked/nutrition';
import ConsultationTechniquesInPatients from '../nutritionInPatient/ConsultationTechniquesInPatients';

const content: TabsItem[] = [
    {
        title: 'Титульная страница',
        component: frontPage,
    },
    {
        title: 'Документы',
        component: invoicesDocuments,
    },
    {
        title: 'Питание',
        component: nutrition,
    },
    {
        title: 'Первичный прием лечащего врача',
        component: ConsultationTechniquesInPatients,
    },
    {
        title: 'Основной лист назначений',
        component: mainAssignmentSheet,
    },
    {
        title: 'Журнал изменений',
        component: changelog,
    },
];

const selectData = [
    {
        id: 0,
        title: 'Начало приёма',
    },
    {
        id: 1,
        title: 'Начало приём2',
    },
];

const selectData2 = [
    {
        id: 0,
        title: 'Осмотр дежурного врача при поступлении',
    },
    {
        id: 1,
        title: 'Прием дежурного врача',
    },
];

const AddPatientsView = () => {
    return (
        <div className=" overflow-hidden relative max-h-[calc(100vh-142px)]   ">
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
                        style="bg-[#F5F5F5] h-[46px] py-[10px]"
                        variant={'none'}
                    />
                </Grid>
            </Grid>
            <div className="overflow-hidden relative max-h-[calc(100vh-150px)]   bg-[#f5f5f5]">
                <SideBar content={content} />
            </div>
        </div>
    )
}

export default AddPatientsView