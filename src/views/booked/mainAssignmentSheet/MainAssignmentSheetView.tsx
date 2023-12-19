import { Box, Typography } from '@mui/material';
import { useAppModals } from 'components/Modals';
import { TreatmentProgramsCOl } from 'components/columnDefs/TreatmentProgramsCal';
import DefaultButton from 'components/deafultButton/DefaultButton';
import DefaultText from 'components/defaultText/DefaultText';
import ReceptionTable from 'components/receptionTable/ReceptionTable';
import { rowData } from '../frontPage/FrontPageView';
import DefaultCheckbox from 'components/checkbox/DefaultCheckbox';
import ReceptionTableGroup from 'components/receptionTableGroup/ReceptionTableGroup';

const MainAssignmentSheetView = () => {
    const appModals = useAppModals();
    return (
        <Box className="border border-[rgba(0, 0, 0, 0.23)] h-[calc(100vh-225px)]  p-[10px] overflow-hidden ">
            <Box className=" flex h-[35px] items-start  justify-between   ">
                <DefaultText style={'text-[#000] text-[14px]'}>
                    Основной лист назначений
                </DefaultText>
            </Box>
            <Box className="bg-[#fff] w-full p-[5px] overflow-scroll max-h-[calc(100vh-230px)] h-[calc(100vh-280px)] border  ">
                <Box className="border p-[3px] ">
                    <Typography
                        className={'text-[#000] text-[14px] font-medium '}
                    >
                        Лечебные программы
                    </Typography>
                    <Box className="flex mt-[10px]  justify-between">
                        <Box className="flex ">
                            <DefaultButton
                                title="Назначить из лечебной программы"
                                style="bg-[#4CAF50] h-[40px]"
                            />
                            <DefaultButton
                                title="Добавить программу в ИБ"
                                style="bg-[#4CAF50] h-[40px]  ml-[10px]"
                            />
                        </Box>
                        <Box className="flex ">
                            <DefaultCheckbox label="Скрывать неактивные" />
                        </Box>
                    </Box>
                    <Box className="mt-[10px]">
                        <ReceptionTable
                            columnDefs={TreatmentProgramsCOl}
                            height="h-[130px]"
                            rowData={rowData}
                        />
                    </Box>
                </Box>
                <Box className="border p-[3px]  mt-[5px]">
                    <Typography
                        className={'text-[#000] text-[14px] font-medium '}
                    >
                        Консультации и исследования
                    </Typography>
                    <Box className=" py-[10px] ">
                        <DefaultButton
                            title="Добавить"
                            style="h-[35px] bg-[#4CAF50] mr-[5px]"
                        />
                        <DefaultButton
                            title="Приостановить"
                            style="h-[35px] bg-[#2196F3] mr-[5px]"
                            disabled
                        />
                        <DefaultButton
                            title="Возобновить"
                            style="h-[35px] bg-[#2196F3] mr-[5px]"
                            disabled
                        />
                        <DefaultButton
                            title="Отменить"
                            style="h-[35px] bg-[#2196F3] mr-[5px]"
                            disabled
                        />
                        <DefaultButton
                            title="Диспетчеризовать"
                            style="h-[35px] bg-[#2196F3] mr-[5px]"
                            disabled
                        />
                        <DefaultButton
                            title="Удалить"
                            style="h-[35px] bg-[#2196F3] mr-[5px]"
                            disabled
                        />
                    </Box>
                    <ReceptionTableGroup />
                </Box>
                <Box className="border p-[3px]  mt-[5px]">
                    <Typography
                        className={'text-[#000] text-[14px] font-medium '}
                    >
                        Лечебные процедуры
                    </Typography>
                    <Box className=" py-[10px] ">
                        <DefaultButton
                            title="Добавить"
                            style="h-[35px] bg-[#4CAF50] mr-[5px]"
                        />
                        <DefaultButton
                            title="Приостановить"
                            style="h-[35px] bg-[#2196F3] mr-[5px]"
                            disabled
                        />
                        <DefaultButton
                            title="Возобновить"
                            style="h-[35px] bg-[#2196F3] mr-[5px]"
                            disabled
                        />
                        <DefaultButton
                            title="Отменить"
                            style="h-[35px] bg-[#2196F3] mr-[5px]"
                            disabled
                        />
                        <DefaultButton
                            title="Диспетчеризовать"
                            style="h-[35px] bg-[#2196F3] mr-[5px]"
                            disabled
                        />
                        <DefaultButton
                            title="Удалить"
                            style="h-[35px] bg-[#2196F3] mr-[5px]"
                            disabled
                        />
                    </Box>
                    <ReceptionTableGroup />
                </Box>
            </Box>
        </Box>
    );
};

export default MainAssignmentSheetView;
