import { Box } from '@mui/material';

import SelectButton from 'components/SelectButton';
import AutocompleteInput from 'components/autocompleteInput/AutocompleteInput';
import DefaultButton from 'components/deafultButton/DefaultButton';
import DefaultText from 'components/defaultText/DefaultText';
import DiagnostikaItem from '../frontPage/components/DiagnostikaItem';
import DefaultCheckbox from 'components/checkbox/DefaultCheckbox';
import { useAppModals } from 'components/Modals';
const data = [
    {
        id: 1,
        title: 'Осмотр дежурного врача при поступлении',
    },
    {
        id: 2,
        title: 'Прием дежурного врача',
    },
];
const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },
];
const ConsultationTechniques = () => {
    const appModals = useAppModals();
    return (
        <Box className="border border-[rgba(0, 0, 0, 0.23)] h-[calc(100vh-220px)]  p-[10px] overflow-hidden">
            <div id="frontPage"></div>
            <Box className=" flex h-[60px] items-center  justify-between  ">
                <Box className="">
                    <DefaultText style={'text-[#000] '}>
                        Прием дежурного врача, Очилов Ибрагим Азамович
                    </DefaultText>
                </Box>
                <Box className=" flex items-center w-[80%]  justify-end ">
                    <AutocompleteInput
                        lable="время:"
                        data={top100Films}
                        lableStyle="text-[#000]"
                        containerStyle={
                            'w-[20%]  flex-row items-center  h-[35px] mr-[10px]'
                        }
                        inputStyle="w-[100%]"
                    />
                    <DefaultButton
                        title="Разблокировать"
                        style="h-[38px] bg-[#2196F3] text-[#fff] mr-[8px]"
                    />
                    <DefaultButton
                        title="Отменить начатый приём"
                        style="h-[38px] bg-[#2196F3] text-[#fff] mr-[8px]"
                        disabled={true}
                    />
                    <SelectButton
                        data={data}
                        style="h-[38px]"
                        defaultValue="Шаблоны"
                    />
                    <DefaultButton
                        title="Просмотр документа"
                        style="h-[38px] bg-[#2196F3] text-[#fff] mr-[8px]"
                    />
                </Box>
            </Box>

            <Box className="bg-[#fff] w-full p-[8px] overflow-scroll max-h-[calc(100vh-300px)] h-[calc(100vh-300px)]">
                <DiagnostikaItem
                    title="Жалобы/анамнез"
                    message="Активных жалоб не предъявляет."
                />
                <DiagnostikaItem
                    title="Объективные данные"
                    message="Общее состояние относительно удовлетворительное, положение активное. Кожные покровы чистые. В лёгких выслушивается везикуляное дыхание. Тоны сердца
                     ясные, ритмичные. Живот мягкий, без болезненный. Стул регулярный. Диурез свободный. "
                    text="Артериальное давление (мм рт. ст.):"
                    outline={true}
                />
                <DiagnostikaItem
                    title="Диагноз"
                    text="Диагноз не изменен"
                    btnTitle="Добавить диагноз"
                    onClick={() => appModals?.show('choosingDiagnosis')}
                />
                <DiagnostikaItem
                    title="Диагноз"
                    titleStyle="mb-[0px]"
                    children={
                        <>
                            <DefaultCheckbox
                                label="Cito!"
                                checkboxStyle={{
                                    padding: '0px',
                                }}
                            />
                            <DiagnostikaItem
                                title="Заключение:"
                                message="Продолжать плановое лечение."
                                style="border-[0px] py-[0px] px-[0px]"
                                titleStyle="mb-[0px] text-[#5d5c5c] mt-[5px]"
                                messageStyle="min-h-[80px]"
                            />
                        </>
                    }
                />
                <DiagnostikaItem
                    title="Назначения"
                    titleStyle="mb-[0px]"
                    btnTitle="Назначить из лечебной программы"
                    btnStyle="ml-[0px] mb-[10px]"
                    disabled={true}
                    onClick={() => appModals?.show('choosingDiagnosis')}
                    children={
                        <>
                            <DiagnostikaItem
                                title="Консультации и исследования"
                                text="Дополнительные консультации и исследования не требуются"
                                btnTitle="Добавить"
                                onClick={() =>
                                    appModals?.show('choosingDiagnosis')
                                }
                            />
                            <DiagnostikaItem
                                title="Лечебные процедуры"
                                text="Дополнительные лечебные процедуры не требуются"
                                btnTitle="Добавить"
                                onClick={() =>
                                    appModals?.show('choosingDiagnosis')
                                }
                            />
                            <DiagnostikaItem
                                title="Медикаменты"
                                text="Дополнительные медикаменты не требуются"
                                btnTitle="Добавить"
                                onClick={() =>
                                    appModals?.show('choosingDiagnosis')
                                }
                            />
                        </>
                    }
                />
            </Box>
        </Box>
    );
};

export default ConsultationTechniques;
