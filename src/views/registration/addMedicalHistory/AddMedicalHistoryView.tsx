import { Button, Grid } from '@mui/material';
import { CoinsAltIcon, VuesaxLinearPrinterIcon } from 'assets/icons/icons';
import SideBar, { TabsItem } from 'components/sideBar/SideBar';
import frontPage from '../frontPage';
import invoicesDocuments from '../invoicesDocuments';
import treatmentSchedule from '../treatmentSchedule';
import mainAssignmentSheet from '../mainAssignmentSheet';
import changelog from '../changelog';
import DefaultButton from 'components/deafultButton/DefaultButton';
const content: TabsItem[] = [
    {
        title: 'Титульная страница',
        component: frontPage,
    },
    {
        title: 'Счета и документы',
        component: invoicesDocuments,
    },
    {
        title: 'Расписание лечения',
        component: treatmentSchedule,
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
const AddMedicalHistoryView = () => {
    return (
        <div className=" overflow-hidden relative max-h-[calc(100vh-142px)]   ">
            <Grid
                container
                className=" mx-h-[80px] h-[80px] flex justify-between "
            >
                <Grid item xs={12} md={8} className="flex py-[10px] ">
                    <DefaultButton
                        title="Сохранить"
                        style="bg-[#4CAF50] h-[46px] text-[#fff] mr-[10px] "
                    />
                    <DefaultButton
                        title="Сохранить и добавить новую"
                        style="bg-[#4CAF50] h-[46px] text-[#fff] mr-[10px] "
                    />
                    <DefaultButton
                        title="Копировать с предыдущего приезда"
                        style="bg-[#2196F3] h-[46px] text-[#fff] mr-[10px] "
                    />
                    <DefaultButton
                        icon={<VuesaxLinearPrinterIcon />}
                        title="Распецатать"
                        style="bg-[#2196F3] h-[46px] text-[#fff] mr-[10px] "
                    />
                    <DefaultButton
                        title="Действия"
                        style="bg-[#2196F3] h-[46px] text-[#fff] mr-[10px] "
                    />
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={4}
                    className="flex  justify-end py-[10px] "
                >
                    <DefaultButton
                        icon={<CoinsAltIcon stroke="black" />}
                        title="  0,00 сум"
                        style="bg-[#F5F5F5] h-[46px] text-[#000]"
                        variant={'none'}
                    />
                </Grid>
            </Grid>
            <div className="overflow-hidden relative max-h-[calc(100vh-150px)]   bg-[#f5f5f5]">
                <SideBar content={content} />
            </div>
        </div>
    );
};

export default AddMedicalHistoryView;
