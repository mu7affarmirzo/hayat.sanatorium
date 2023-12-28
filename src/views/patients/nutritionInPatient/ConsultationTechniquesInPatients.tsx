import { Box, Grid, Typography } from '@mui/material'
import { useAppModals } from 'components/Modals';
import SelectButton from 'components/SelectButton';
import AutocompleteInput from 'components/autocompleteInput/AutocompleteInput';
import DefaultCheckbox from 'components/checkbox/DefaultCheckbox';
import DefaultButton from 'components/deafultButton/DefaultButton';
import DefaultText from 'components/defaultText/DefaultText';
import DiagnosticCeckboxItem from 'components/diagnosticCeckboxItem/DiagnosticCeckboxItem';

import React from 'react'
import DiagnostikaItem from 'views/booked/frontPage/components/DiagnostikaItem';

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

const ConsultationTechniquesInPatients = () => {

    const appModals = useAppModals();

    return (
        <Box className="border border-[rgba(0, 0, 0, 0.23)] h-[calc(100vh-220px)]  p-[10px] overflow-hidden">
            <Box className=" flex h-[60px] items-center justify-between  ">
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
                        style="h-[38px] bg-[#2196F3]"
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
                    message="На боли за грудиной, головокружение, повышение АД, сухость во рту, онемение в руках и ногах, боли в шейном отделе позвоночника, частое мочевыделение,
                    чувство опорожнения мочевого пузыря, общую слабость, быструю утомляемость."
                />
                <DiagnostikaItem
                    title="Anamnesis morbi"
                    message="ИБС, ГБ и СД П тип в течении многых лет. Заболевание связывает с психоэмоциональным перенапряжением. Макс. подъемы А/Д до 160/90ммрст, при исходном
                    120/80ммрст. В 2011 годуперенесла ОНМК В 2017 году больной выполнена операция по ХЭК. Регулярно непринимает амбулаторное и стационарный лечение. Дома
                    нерегулярно принимает Стазикс 75мг, Диаприд 1 мг, Сиафор1000 мг, Эмкор 2,5 мг. В связи с усилением вышеуказанных жалоб больная обратилась в НАУАТ HOSPITAL
                    для обследования и лечения."
                />
                <DiagnostikaItem
                    title="Anamnesis vitae"
                    message="В дейтсве частые простудные. Течении многих лет болеет ИБС, ГБ, СД. Наследственность отягощена отрецает. Аллергик анамнез спокоен. Жилищно-битовые условия в настоящее время удовлотворительные, питаютсия регулярно. Курит 1 пачку в два дня ."
                />
                <DiagnostikaItem
                    title="Эпиданамнез"
                    titleStyle="mb-[0px]"
                    children={
                        <Grid item className="border p-2">
                            <Grid item className="flex gap-3">
                                <Typography className="text-[rgba(0, 0, 0, 0.87))]">
                                    Контакт с инфекционными больными
                                </Typography>
                                <DefaultCheckbox
                                    label="на протяжении максимального срока инкубации: не было"
                                    checkboxStyle={{
                                        padding: '0px',
                                    }}
                                    style="text-[#2196F3]"
                                />
                            </Grid>
                            <DiagnostikaItem
                                message=" "
                                style="border-[0px] py-[0px] px-[0px]"
                                titleStyle="mb-[0px] text-[#5d5c5c] mt-[5px]"
                                messageStyle="min-h-[80px]"
                            />
                            <DiagnosticCeckboxItem
                                lable="Контакт с больными гриппом, ОРВИ:"
                                children={
                                    <DefaultCheckbox label='нет,' />
                                }
                                description=" "
                                titleStyle="w-[100%] border p-[10px] rounded-[4px]"
                            />
                            <DiagnosticCeckboxItem
                                lable="Выезд за пределы населенного пункта за 2 месяца ДО настоящего заболевания:"
                                children={
                                    <DefaultCheckbox label='нет,' />
                                }
                                description=" "
                                titleStyle="w-[100%] border p-[10px] rounded-[4px]"
                            />
                            <DiagnosticCeckboxItem
                                lable="Перенесенные инфекционные заболевания:"
                                children={
                                    <DefaultCheckbox label='нет,' />
                                }
                                description=" "
                                titleStyle="w-[100%] border p-[10px] rounded-[4px]"
                            />
                            <DiagnosticCeckboxItem
                                lable="Нахождение на стационарном лечении:"
                                children={
                                    <DefaultCheckbox label='нет,' />
                                }
                                description=" "
                                titleStyle="w-[100%] border p-[10px] rounded-[4px]"
                            />
                            <DiagnosticCeckboxItem
                                lable="Получение гемотрансфузий (крови и ее компонентов):"
                                children={
                                    <DefaultCheckbox label='нет,' />
                                }
                                description=" "
                                titleStyle="w-[100%] border p-[10px] rounded-[4px]"
                            />
                            <DiagnosticCeckboxItem
                                lable="Оперативные и массивные вмешательства за последние 6 месяцев:"
                                children={
                                    <DefaultCheckbox label='нет,' />
                                }
                                description=" "
                                titleStyle="w-[100%] border p-[10px] rounded-[4px]"
                            />
                            <DiagnosticCeckboxItem
                                lable="Посещение стоматолога за последние 6 месяцев:"
                                children={
                                    <DefaultCheckbox label='нет,' />
                                }
                                description=" "
                                titleStyle="w-[100%] border p-[10px] rounded-[4px]"
                            />
                            <DiagnosticCeckboxItem
                                lable="Профессия с подробным указанием профессиональных вредностей и др. особенностей (например, контакт с животными):"
                                description=" "
                                style=" flex flex-col w-[100%] "
                                titleStyle="w-[100%] border p-[10px] rounded-[4px]"
                            />
                            <DiagnosticCeckboxItem
                                lable="Дополнительная информация:"
                                children={
                                    <Box className="flex">
                                        <DefaultCheckbox label='педикюр,' />
                                        <DefaultCheckbox label='маникюр,' />
                                        <DefaultCheckbox label='татуировка,' />
                                        <DefaultCheckbox label='пирсинг,' />
                                        <DefaultCheckbox label='иглоукалывание,' />
                                        <DefaultCheckbox label='иглоукалывание,' />
                                    </Box>
                                }
                                description=" "
                                titleStyle="w-[100%] border p-[10px] rounded-[4px]"
                            />
                        </Grid>
                    }
                />
                <DiagnostikaItem
                    message=" "
                    style="border-[0px] py-[0px] px-[0px]"
                    titleStyle="mb-[0px] text-[#5d5c5c]"
                    messageStyle="min-h-[80px]"
                />
                <DiagnostikaItem
                    title="Status praesens objectivus"
                    children={
                        <Grid item className=''>
                            <DiagnosticCeckboxItem
                                lable="Общее состояние:"
                                children={
                                    <Box className="flex">
                                        <DefaultCheckbox label='удовлетворительное,' />
                                        <DefaultCheckbox label='относительное удовлетворительное,' />
                                        <DefaultCheckbox label='средней тяжести,' />
                                        <DefaultCheckbox label='тяжёлое' />
                                    </Box>
                                }
                                description=" "
                                style=" flex flex-col w-[100%] border p-[5px] rounded-[4px] "
                                titleStyle="w-[100%] border p-[10px] rounded-[4px]"
                            />
                            <DiagnosticCeckboxItem
                                lable="Пигментация:"
                                children={
                                    <DefaultCheckbox label='нет,' />
                                }
                                description=" "
                                titleStyle="w-[100%] border p-[10px] rounded-[4px]"
                            />
                            <DiagnosticCeckboxItem
                                lable="Депигментация:"
                                children={
                                    <DefaultCheckbox label='нет,' />
                                }
                                description=" "
                                titleStyle="w-[100%] border p-[10px] rounded-[4px]"
                            />
                            <DiagnosticCeckboxItem
                                lable="Высыпания:"
                                children={
                                    <DefaultCheckbox label='нет,' />
                                }
                                description=" "
                                titleStyle="w-[100%] border p-[10px] rounded-[4px]"
                            />
                            <DiagnosticCeckboxItem
                                lable="Сосудистые изменения:"
                                children={
                                    <DefaultCheckbox label='нет,' />
                                }
                                description=" "
                                titleStyle="w-[100%] border p-[10px] rounded-[4px]"
                            />
                            <DiagnosticCeckboxItem
                                lable="Кровоизлияния:"
                                children={
                                    <DefaultCheckbox label='нет,' />
                                }
                                description=" "
                                titleStyle="w-[100%] border p-[10px] rounded-[4px]"
                            />
                            <DiagnosticCeckboxItem
                                lable="Рубцы"
                                children={
                                    <DefaultCheckbox label='нет,' />
                                }
                                description=" "
                                titleStyle="w-[100%] border p-[10px] rounded-[4px]"
                            />
                            <DiagnosticCeckboxItem
                                lable="Трофические изменения:"
                                children={
                                    <DefaultCheckbox label='нет,' />
                                }
                                description=" "
                                titleStyle="w-[100%] border p-[10px] rounded-[4px]"
                            />
                            <DiagnosticCeckboxItem
                                lable="Видимые опухоли:"
                                children={
                                    <DefaultCheckbox label='нет,' />
                                }
                                description=" "
                                titleStyle="w-[100%] border p-[10px] rounded-[4px]"
                            />
                            <DiagnosticCeckboxItem
                                lable="Влажность кожи:"
                                children={
                                    <Box className="flex">
                                        <DefaultCheckbox label='обычная,' />
                                        <DefaultCheckbox label='влажная,' />
                                        <DefaultCheckbox label='сухая,' />
                                    </Box>
                                }
                                description=" "
                                titleStyle="w-[100%] border p-[10px] rounded-[4px]"
                            />
                            <DiagnosticCeckboxItem
                                lable="Влажность кожи:"
                                children={
                                    <Box className="flex">
                                        <DefaultCheckbox label='в норме,' />
                                        <DefaultCheckbox label='снижет,' />
                                    </Box>
                                }
                                description=" "
                                titleStyle="w-[100%] border p-[10px] rounded-[4px]"
                            />
                            <DiagnosticCeckboxItem
                                lable="Подкожно-жировая клетчатка:"
                                children={
                                    <Box className="flex">
                                        <DefaultCheckbox style='w-[100%]' label='развита умеренно,' />
                                        <DefaultCheckbox style='w-[100%]' label='развита слабо,' />
                                        <DefaultCheckbox style='w-[100%]' label='развита чрезмерно,' />
                                    </Box>
                                }
                                description=" "
                                titleStyle="w-[100%] border p-[10px] rounded-[4px]"
                                boxStyle=' w-[55%]'
                            />
                            <Box className="">
                                <Typography>
                                    Рост
                                </Typography>
                                <DefaultText
                                    style={" border"}
                                    children={"158"}
                                />
                                <Typography>
                                    см,
                                </Typography>
                            </Box>
                        </Grid>
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

    )
}

export default ConsultationTechniquesInPatients