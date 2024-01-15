import { Grid } from '@mui/material';
import { CoinsAltIcon, VuesaxLinearPrinterIcon } from 'assets/icons/icons';
import SelectButton from 'components/SelectButton';
import DefaultButton from 'components/deafultButton/DefaultButton';
import SideBar, { TabsItem } from 'components/sideBar/SideBar';
import AutomaticDispatch from '../saidbar/automaticDispatch/AutomaticDispatch';
import DispatchFrontPage from '../saidbar/dispatchFrontPage/DispatchFrontPage';
import Appointments from '../saidbar/appointments/Appointments';

const content: TabsItem[] = [
    {
        title: 'Титульная страница',
        component: DispatchFrontPage,
    },
    {
        title: 'Расписание лечения',
        component: AutomaticDispatch,
    },

    {
        title: 'Назначения',
        component: Appointments,
        chiled: [
            {
                id: 0,
                title: 'Диагнозы',
                data: [
                    { id: 1, title: 'Гидрованны', link: '/#frontPage' },
                    { id: 2, title: 'Гидроколонотерапия', link: '/#frontPage' },
                    {
                        id: 3,
                        title: '(орошение кишечника)',
                        link: '/#frontPage',
                    },
                ],
            },
        ],
        search: true,
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

const FrontPageView = () => {
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
    );
};

export default FrontPageView;
