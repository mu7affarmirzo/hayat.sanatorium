import { Box, Grid, Typography } from "@mui/material";
import { useAppModals } from "components/Modals";
import SelectButton from "components/Buttons/SelectButton";
import AutocompleteInput from "components/AutoCompleteInput/AutocompleteInput";
import DefaultCheckbox from "components/Checkbox/DefaultCheckbox";
import DefaultButton from "components/DeafultButton/DefaultButton";
import DefaultInput from "components/defaultInput/DefaultInput";
import DefaultText from "components/DefaultText/DefaultText";
import DiagnosticCeckboxItem from "components/diagnosticCeckboxItem/DiagnosticCeckboxItem";
import ReceptionTable from "components/receptionTable/ReceptionTable";

import React from "react";
import DiagnostikaItem from "components/DiagnostikaItem";
import { ColData, rowData } from "./Coldata";

const data = [
    {
        id: 1,
        title: "Осмотр дежурного врача при поступлении",
    },
    {
        id: 2,
        title: "Прием дежурного врача",
    },
];
const top100Films = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
    { label: "The Dark Knight", year: 2008 },
    { label: "12 Angry Men", year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: "Pulp Fiction", year: 1994 },
];

const ConsultationTechniquesInPatients = () => {
    const appModals = useAppModals();

    return (
        <Box className="border border-[rgba(0, 0, 0, 0.23)] h-[calc(100vh-220px)]  p-[10px] overflow-hidden">
            <Box className=" flex h-[60px] items-center justify-between  ">
                <Box className="">
                    <DefaultText style={"text-[#000] "}>
                        Прием дежурного врача, Очилов Ибрагим Азамович
                    </DefaultText>
                </Box>
                <Box className=" flex items-center w-[80%]  justify-end ">
                    <AutocompleteInput
                        lable="время:"
                        data={top100Films}
                        lableStyle="text-[#000]"
                        containerStyle={
                            "w-[20%]  flex-row items-center  h-[35px] mr-[10px]"
                        }
                        inputStyle="w-[100%]"
                    />
                    <DefaultButton
                        title="Разблокировать"
                        classStyle="h-[38px] bg-[#2196F3] text-[#fff] mr-[8px]"
                    />
                    <DefaultButton
                        title="Отменить начатый приём"
                        classStyle="h-[38px] bg-[#2196F3] text-[#fff] mr-[8px]"
                        disabled={true}
                    />
                    <SelectButton
                        data={data}
                        style="h-[38px] bg-[#2196F3]"
                        defaultValue="Шаблоны"
                    />
                    <DefaultButton
                        title="Просмотр документа"
                        classStyle="h-[38px] bg-[#2196F3] text-[#fff] mr-[8px]"
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
                                        padding: "0px",
                                    }}
                                    style="text-[#2196F3]"
                                />
                            </Grid>
                            <DiagnostikaItem
                                message=" "
                                style="border-[0px] py-0 px-0"
                                titleStyle="mb-[0px] text-[#5d5c5c] "
                                messageStyle="min-h-[40px] h-[40px] w-[calc(100%-100px)]"
                                messageIconStyle={"flex felx-row "}
                            />
                            <DiagnosticCeckboxItem
                                lable="Контакт с больными гриппом, ОРВИ:"
                                checkBoxStle={"w-[360px]"}
                                children={<DefaultCheckbox label="нет," />}
                                description=" "
                                titleStyle="w-[100%] border p-[10px] rounded-[4px]"
                            />
                            <DiagnosticCeckboxItem
                                lable="Выезд за пределы населенного пункта за 2 месяца ДО настоящего заболевания:"
                                checkBoxStle={"w-[710px]"}
                                children={<DefaultCheckbox label="нет," />}
                                description=" "
                                titleStyle="w-[100%] border p-[10px] rounded-[4px]"
                            />
                            <DiagnosticCeckboxItem
                                lable="Перенесенные инфекционные заболевания:"
                                checkBoxStle={"w-[420px]"}
                                children={<DefaultCheckbox label="нет," />}
                                description=" "
                                titleStyle="w-[100%] border p-[10px] rounded-[4px]"
                            />
                            <DiagnosticCeckboxItem
                                lable="Нахождение на стационарном лечении:"
                                checkBoxStle={"w-[380px]"}
                                children={<DefaultCheckbox label="нет," />}
                                description=" "
                                titleStyle="w-[100%] border p-[10px] rounded-[4px]"
                            />
                            <DiagnosticCeckboxItem
                                lable="Получение гемотрансфузий (крови и ее компонентов):"
                                children={<DefaultCheckbox label="нет," />}
                                checkBoxStle={"w-[500px]"}
                                description=" "
                                titleStyle="w-[100%] border p-[10px] rounded-[4px]"
                            />
                            <DiagnosticCeckboxItem
                                lable="Оперативные и массивные вмешательства за последние 6 месяцев:"
                                children={<DefaultCheckbox label="нет," />}
                                checkBoxStle={"w-[610px]"}
                                description=" "
                                titleStyle="w-[100%] border p-[10px] rounded-[4px]"
                            />
                            <DiagnosticCeckboxItem
                                lable="Посещение стоматолога за последние 6 месяцев:"
                                children={<DefaultCheckbox label="нет," />}
                                description=" "
                                checkBoxStle={"w-[460px]"}
                                titleStyle="w-[100%] border p-[10px] rounded-[4px]"
                            />
                            <DiagnosticCeckboxItem
                                lable=" Профессия с подробным указанием
                                    профессиональных вредностей и др.
                                    особенностей (например, контакт с
                                    животными):"
                                description=" "
                                checkBoxStle={"w-[100%]"}
                                style="flex flex-col"
                                titleStyle="w-[100%] border p-[10px] rounded-[4px]"
                                boxStyle="w-[100%]"
                            />

                            <DiagnosticCeckboxItem
                                lable="Дополнительная информация:"
                                checkBoxStle={"w-[1060px]"}
                                children={
                                    <Box className="flex">
                                        <DefaultCheckbox label="педикюр," />
                                        <DefaultCheckbox label="маникюр," />
                                        <DefaultCheckbox label="татуировка," />
                                        <DefaultCheckbox label="пирсинг," />
                                        <DefaultCheckbox label="иглоукалывание," />
                                        <DefaultCheckbox label="иглоукалывание," />
                                    </Box>
                                }
                                description=" "
                                titleStyle="w-[100%] border p-[10px] rounded-[4px]"
                                style="mt-[5px]"
                            />
                            <DiagnostikaItem
                                message=" "
                                style="border-[0px] py-0 px-0"
                                titleStyle="mb-[0px] text-[#5d5c5c]"
                                messageStyle="min-h-[80px]"
                            />
                        </Grid>
                    }
                />

                <Box className="border w-full px-[10px] pt-[10px] mt-[10px]">
                    <DiagnostikaItem
                        title="Status praesens objectivus"
                        style="border-0 px-0 py-0"
                        children={
                            <DiagnosticCeckboxItem
                                lable="Общее состояние:"
                                boxStyle="w-[100%]"
                                checkBoxStle={"w-[1000px] "}
                                style="flex flex-col items-start border p-[5px]"
                                children={
                                    <Box className="flex">
                                        <DefaultCheckbox label="удовлетворительное," />
                                        <DefaultCheckbox label="относительное удовлетворительное," />
                                        <DefaultCheckbox label="средней тяжести," />
                                        <DefaultCheckbox label="тяжёлое" />
                                    </Box>
                                }
                                description=" "
                                titleStyle="w-[100%] border p-[10px] rounded-[4px]"
                            />
                        }
                    />
                    <DiagnosticCeckboxItem
                        lable="Сознание:"
                        checkBoxStle={"w-[450px]"}
                        children={
                            <Box className={"flex"}>
                                <DefaultCheckbox label="ясное," />
                                <DefaultCheckbox label="ступор," />
                                <DefaultCheckbox label="сопор," />
                                <DefaultCheckbox label="кома," />
                            </Box>
                        }
                        description=" "
                        titleStyle="w-[100%] border p-[10px] rounded-[4px]"
                    />
                    <DiagnosticCeckboxItem
                        lable="Положение:"
                        checkBoxStle={"w-[500px]"}
                        children={
                            <Box className={"flex"}>
                                <DefaultCheckbox label="активное," />
                                <DefaultCheckbox label="пассивное," />
                                <DefaultCheckbox label="вынужденное," />
                            </Box>
                        }
                        description=" "
                        titleStyle="w-[100%] border p-[10px] rounded-[4px]"
                    />
                    <DiagnosticCeckboxItem
                        lable="Конституция:"
                        checkBoxStle={"w-[500px]"}
                        children={
                            <Box className={"flex"}>
                                <DefaultCheckbox label="нормастеник," />
                                <DefaultCheckbox label="астеник," />
                                <DefaultCheckbox label="гиперстеник," />
                            </Box>
                        }
                        description=" "
                        titleStyle="w-[100%] border p-[10px] rounded-[4px]"
                    />
                    <DiagnosticCeckboxItem
                        lable="Кожные покровы:"
                        boxStyle="w-[100%]"
                        checkBoxStle={"w-[100%]  "}
                        style="flex flex-col items-start border p-[5px] "
                        children={
                            <Box className="flex">
                                <DefaultCheckbox label="нормальной окраски," />
                                <DefaultCheckbox label="бледные," />
                                <DefaultCheckbox label="гиперемия," />
                                <DefaultCheckbox label="иктеричные," />
                                <DefaultCheckbox label="субиктеричные," />
                                <DefaultCheckbox label="акроцианоз," />
                                <DefaultCheckbox label="землистого цвета" />
                            </Box>
                        }
                        description=" "
                        titleStyle="w-[100%] border p-[10px] rounded-[4px]"
                    />

                    <DiagnosticCeckboxItem
                        lable="Пигментация:"
                        children={<DefaultCheckbox label="нет," />}
                        style="mt-[10px]"
                        description=" "
                        titleStyle="w-[100%] border p-[10px] rounded-[4px]"
                    />
                    <DiagnosticCeckboxItem
                        lable="Депигментация:"
                        children={<DefaultCheckbox label="нет," />}
                        description=" "
                        titleStyle="w-[100%] border p-[10px] rounded-[4px]"
                    />
                    <DiagnosticCeckboxItem
                        lable="Высыпания:"
                        children={<DefaultCheckbox label="нет," />}
                        description=" "
                        titleStyle="w-[100%] border p-[10px] rounded-[4px]"
                    />
                    <DiagnosticCeckboxItem
                        lable="Сосудистые изменения:"
                        checkBoxStle={"w-[280px]"}
                        children={<DefaultCheckbox label="нет," />}
                        description=" "
                        titleStyle="w-[100%] border p-[10px] rounded-[4px]"
                    />
                    <DiagnosticCeckboxItem
                        lable="Кровоизлияния:"
                        children={<DefaultCheckbox label="нет," />}
                        description=" "
                        titleStyle="w-[100%] border p-[10px] rounded-[4px]"
                    />
                    <DiagnosticCeckboxItem
                        lable="Рубцы"
                        children={<DefaultCheckbox label="нет," />}
                        description=" "
                        titleStyle="w-[100%] border p-[10px] rounded-[4px]"
                    />
                    <DiagnosticCeckboxItem
                        lable="Трофические изменения:"
                        checkBoxStle={"w-[280px]"}
                        children={<DefaultCheckbox label="нет," />}
                        description=" "
                        titleStyle="w-[100%] border p-[10px] rounded-[4px]"
                    />
                    <DiagnosticCeckboxItem
                        lable="Видимые опухоли:"
                        children={<DefaultCheckbox label="нет," />}
                        checkBoxStle={"w-[250px]"}
                        description=" "
                        titleStyle="w-[100%] border p-[10px] rounded-[4px]"
                    />
                    <DiagnosticCeckboxItem
                        lable="Влажность кожи:"
                        checkBoxStle={"w-[500px]"}
                        children={
                            <Box className="flex">
                                <DefaultCheckbox label="обычная," />
                                <DefaultCheckbox label="влажная," />
                                <DefaultCheckbox label="сухая," />
                            </Box>
                        }
                        description=" "
                        titleStyle="w-[100%] border p-[10px] rounded-[4px]"
                    />
                    <DiagnosticCeckboxItem
                        lable="Влажность кожи:"
                        checkBoxStle={"w-[400px]"}
                        children={
                            <Box className="flex">
                                <DefaultCheckbox label="в норме," />
                                <DefaultCheckbox label="снижет," />
                            </Box>
                        }
                        description=" "
                        titleStyle="w-[100%] border p-[10px] rounded-[4px]"
                    />
                    <DiagnosticCeckboxItem
                        lable="Подкожно-жировая клетчатка:"
                        checkBoxStle={"w-[800px]"}
                        children={
                            <Box className="flex">
                                <DefaultCheckbox label="развита умеренно," />
                                <DefaultCheckbox label="развита слабо," />
                                <DefaultCheckbox label="развита чрезмерно," />
                            </Box>
                        }
                        description=" "
                        titleStyle="w-[100%] border p-[10px] rounded-[4px]"
                        boxStyle=" w-[55%]"
                    />
                    <Box className="">
                        <Typography>Рост</Typography>
                        <DefaultText style={" border"} children={"158"} />
                        <Typography>см,</Typography>
                    </Box>
                    <DiagnosticCeckboxItem
                        lable="Отеки, пастозность:"
                        checkBoxStle={"w-[250px]"}
                        children={
                            <Box className="flex">
                                <DefaultCheckbox label="нет," />
                            </Box>
                        }
                        description=" "
                        titleStyle="w-[100%] border p-[10px] rounded-[4px]"
                    />
                    <DiagnosticCeckboxItem
                        lable="Лимфатические узлы:"
                        checkBoxStle={"w-[700px]"}
                        children={
                            <Box className="flex">
                                <DefaultCheckbox label="не увеличены," />
                                <DefaultCheckbox label="мягкие," />
                                <DefaultCheckbox label="плотные," />
                                <DefaultCheckbox label="эластичные," />
                            </Box>
                        }
                        description=" "
                        titleStyle="w-[100%] border p-[10px] rounded-[4px]"
                        boxStyle=" w-[55%]"
                    />
                    <DiagnostikaItem
                        style="border-0 px-0 py-0"
                        message=" "
                        messageStyle=" min-h-[80px] h-[80px]"
                    />
                </Box>
                <Box className="border w-full px-[10px] pt-[10px] mt-[10px]">
                    <Typography className="mb-[10px] text-[14px]  font-normal text-[#000]">
                        Конно—мышечная система
                    </Typography>
                    <DiagnosticCeckboxItem
                        lable="Деформации:"
                        checkBoxStle={"w-[210px]"}
                        children={<DefaultCheckbox label="нет" />}
                        description=" "
                        titleStyle="w-[100%] border p-[10px] rounded-[4px]"
                        style="mt-[5px]"
                    />
                    <DiagnosticCeckboxItem
                        lable="Контрактуры:"
                        checkBoxStle={"w-[210px]"}
                        children={<DefaultCheckbox label="нет," />}
                        description=" "
                        titleStyle="w-[100%] border p-[10px] rounded-[4px]"
                        style="mt-[5px]"
                    />
                    <DiagnosticCeckboxItem
                        lable="Ограничения движений:"
                        checkBoxStle={"w-[280px]"}
                        children={<DefaultCheckbox label="нет," />}
                        description=" "
                        titleStyle="w-[100%] border p-[10px] rounded-[4px]"
                        style="mt-[5px]"
                    />
                    <DiagnostikaItem
                        style="border-0 px-0 py-0 "
                        message=" "
                        messageStyle=" min-h-[80px] h-[80px]"
                    />
                </Box>
                <Box className="border w-full px-[10px] pt-[10px] mt-[10px]">
                    <Typography className="mb-[10px] text-[14px]  font-normal text-[#000]">
                        Дыхательная система
                    </Typography>
                    <Box className=" flex gap-2 items-center">
                        <Typography className=" text-[14px]  font-normal text-[#000]">
                            ЧДД
                        </Typography>
                        <Box className=" border rounded-[4px] p-[10px] pr-[30px] items-center">
                            <Typography className=" pr-[20px] text-[#007DFF]">
                                1
                            </Typography>
                        </Box>
                        <Typography className=" text-[14px]  font-normal text-[#000]">
                            в 1 минуту
                        </Typography>
                    </Box>
                    <DiagnosticCeckboxItem
                        lable="Тип дыхания:"
                        checkBoxStle={"w-[450px]"}
                        children={
                            <Box className="flex">
                                <DefaultCheckbox label="нет," />
                                <DefaultCheckbox label="брюшной," />
                                <DefaultCheckbox label="смешанный," />
                            </Box>
                        }
                        description=" "
                        titleStyle="w-[100%] border p-[10px] rounded-[4px]"
                        style="mt-[5px]"
                    />
                    <DiagnosticCeckboxItem
                        lable="В легких аускультативно дыхание:"
                        checkBoxStle={"w-[700px]"}
                        children={
                            <Box className="flex">
                                <DefaultCheckbox label="везикулярное," />
                                <DefaultCheckbox label="жесткое," />
                                <DefaultCheckbox label="ослабленное," />
                            </Box>
                        }
                        description=" "
                        titleStyle="w-[100%] border p-[10px] rounded-[4px]"
                        style="mt-[5px]"
                    />
                    <DiagnosticCeckboxItem
                        lable="Хрипы:"
                        checkBoxStle={"w-[280px]"}
                        children={
                            <Box className="flex">
                                <DefaultCheckbox label="сухие," />
                                <DefaultCheckbox label="влажные," />
                            </Box>
                        }
                        description=" "
                        titleStyle="w-[100%] border p-[10px] rounded-[4px]"
                        style="mt-[5px]"
                    />
                    <DiagnosticCeckboxItem
                        lable="Кашель:"
                        checkBoxStle={"w-[280px]"}
                        children={
                            <Box className="flex">
                                <DefaultCheckbox label="сухой," />
                                <DefaultCheckbox label="мокрый," />
                            </Box>
                        }
                        description=" "
                        titleStyle="w-[100%] border p-[10px] rounded-[4px]"
                        style="mt-[5px]"
                    />
                    <DiagnosticCeckboxItem
                        lable="Мокрота:"
                        checkBoxStle={"w-[150px]"}
                        children={
                            <Box className="flex">
                                <DefaultCheckbox label="нет," />
                            </Box>
                        }
                        description=" "
                        titleStyle="w-[100%] border p-[10px] rounded-[4px]"
                        style="mt-[5px]"
                    />
                    <DiagnosticCeckboxItem
                        lable="Крепитация:"
                        checkBoxStle={"w-[750px]"}
                        children={
                            <Box className="flex">
                                <DefaultCheckbox label="верхняя часть," />
                                <DefaultCheckbox label="средняя часть," />
                                <DefaultCheckbox label="нижняя часть," />
                                <DefaultCheckbox label="слева," />
                                <DefaultCheckbox label="справа," />
                            </Box>
                        }
                        description=" "
                        titleStyle="w-[100%] border p-[10px] rounded-[4px]"
                        style="mt-[5px]"
                    />
                    <DiagnosticCeckboxItem
                        lable="Перкуторно в легких звук:"
                        boxStyle="w-[100%]"
                        checkBoxStle={"w-[100%] "}
                        style="flex flex-col items-start border p-[5px]"
                        children={
                            <Box className="flex">
                                <DefaultCheckbox label="ясный," />
                                <DefaultCheckbox label="легочный," />
                                <DefaultCheckbox label="притупленный," />
                                <DefaultCheckbox label="тупой," />
                                <DefaultCheckbox label="коробочный," />
                                <DefaultCheckbox label="тимпанический," />
                                <DefaultCheckbox label="притупленно-тимпанический," />
                                <DefaultCheckbox label="слева," />
                                <DefaultCheckbox label="справа" />
                            </Box>
                        }
                        description=" "
                        titleStyle="w-[100%] border p-[10px] rounded-[4px]"
                    />
                    <DiagnostikaItem
                        message=" "
                        style="border-[0px] py-0 px-0"
                        titleStyle="mb-[0px] text-[#5d5c5c]"
                        messageStyle="min-h-[80px]"
                    />
                </Box>
                <Box className="border w-full px-[10px] pt-[10px] mt-[10px]">
                    <Typography className="mb-[10px] text-[14px]  font-normal text-[#000]">
                        Органы пищеварения
                    </Typography>
                    <DiagnosticCeckboxItem
                        lable="Аппетит:"
                        checkBoxStle={"w-[630px]"}
                        children={
                            <Box className="flex">
                                <DefaultCheckbox label="удовлетворительный," />
                                <DefaultCheckbox label="снижен," />
                                <DefaultCheckbox label="повышен," />
                                <DefaultCheckbox label="анорексия," />
                            </Box>
                        }
                        description=" "
                        titleStyle="w-[100%] border p-[10px] rounded-[4px]"
                        style="mt-[5px]"
                    />
                    <DiagnosticCeckboxItem
                        lable="Язык:"
                        checkBoxStle={"w-[620px]"}
                        children={
                            <Box className="flex">
                                <DefaultCheckbox label="чистый," />
                                <DefaultCheckbox label="влажный," />
                                <DefaultCheckbox label="географически й," />
                                <DefaultCheckbox label="обложен налетом," />
                            </Box>
                        }
                        description=" "
                        titleStyle="w-[100%] border p-[10px] rounded-[4px]"
                        style="mt-[5px]"
                    />
                    <DiagnosticCeckboxItem
                        lable="Трещины, язвы в полости рта:"
                        checkBoxStle={"w-[380px]"}
                        children={
                            <Box className="flex">
                                <DefaultCheckbox label="нет," />
                                <DefaultCheckbox label="есть," />
                            </Box>
                        }
                        description=" "
                        titleStyle="w-[100%] border p-[10px] rounded-[4px]"
                        style="mt-[5px]"
                    />
                    <DiagnosticCeckboxItem
                        boxStyle="w-[100%]"
                        checkBoxStle={"w-[100%] "}
                        style="flex flex-col items-start border p-[5px]"
                        children={
                            <Box>
                                <Box className="flex items-center">
                                    <Typography className="text-[14px]  font-normal text-[#000]">
                                        Живот:
                                    </Typography>
                                    <DefaultCheckbox label="мягкий," />
                                    <DefaultCheckbox label="вздутый," />
                                    <DefaultCheckbox label="впавший," />
                                </Box>
                                <Box className="flex items-center">
                                    <Typography className="text-[14px]  font-normal text-[#000]">
                                        болезненный
                                    </Typography>
                                    <DefaultCheckbox label="в правом подреберье," />
                                    <DefaultCheckbox label="в гипогастрии," />
                                    <DefaultCheckbox label="по ходу толстого кишечника," />
                                    <DefaultCheckbox label="по ходу тонкого кишечника," />
                                    <DefaultCheckbox label="вокруг пупка" />
                                </Box>
                            </Box>
                        }
                        description=" "
                        titleStyle="w-[100%] border p-[10px] rounded-[4px]"
                    />
                    <DiagnosticCeckboxItem
                        lable="Печень:"
                        checkBoxStle={"w-[500px]"}
                        children={
                            <Box className="flex">
                                <DefaultCheckbox label="не увеличена," />
                                <DefaultCheckbox label="увеличена на" />
                                <Box className=" flex gap-2 items-center">
                                    <Box className=" border rounded-[4px] p-[20px] pr-[30px] items-center">
                                        <Typography className=" pr-[20px] text-[#007DFF]"></Typography>
                                    </Box>
                                    <Typography className=" text-[14px]  font-normal text-[#000]">
                                        см.,
                                    </Typography>
                                </Box>
                            </Box>
                        }
                        description=" "
                        titleStyle="w-[100%] border p-[10px] rounded-[4px]"
                        style="mt-[5px]"
                    />
                    <DiagnosticCeckboxItem
                        lable="Край печени:"
                        checkBoxStle={"w-[600px]"}
                        children={
                            <Box className="flex">
                                <DefaultCheckbox label="острый," />
                                <DefaultCheckbox label="закругленный," />
                                <DefaultCheckbox label="мягкий," />
                                <DefaultCheckbox label="плотный," />
                            </Box>
                        }
                        description=" "
                        titleStyle="w-[100%] border p-[10px] rounded-[4px]"
                        style="mt-[5px]"
                    />
                    <DiagnosticCeckboxItem
                        lable="Селезенка:"
                        checkBoxStle={"w-[500px]"}
                        children={
                            <Box className="flex">
                                <DefaultCheckbox label="не увеличена," />
                                <DefaultCheckbox label="увеличена на" />
                                <Box className=" flex gap-2 items-center">
                                    <Box className=" border rounded-[4px] p-[20px] pr-[30px] items-center">
                                        <Typography className=" pr-[20px] text-[#007DFF]"></Typography>
                                    </Box>
                                    <Typography className=" text-[14px]  font-normal text-[#000]">
                                        см.,
                                    </Typography>
                                </Box>
                            </Box>
                        }
                        description=" "
                        titleStyle="w-[100%] border p-[10px] rounded-[4px]"
                        style="mt-[5px]"
                    />
                    <DiagnosticCeckboxItem
                        lable="Край селезенки:"
                        checkBoxStle={"w-[600px]"}
                        children={
                            <Box className="flex">
                                <DefaultCheckbox label="острый," />
                                <DefaultCheckbox label="закругленный," />
                                <DefaultCheckbox label="мягкий," />
                                <DefaultCheckbox label="плотный," />
                            </Box>
                        }
                        description=" "
                        titleStyle="w-[100%] border p-[10px] rounded-[4px]"
                        style="mt-[5px]"
                    />
                    <DiagnosticCeckboxItem
                        lable="Стул:"
                        checkBoxStle={"w-[700px]"}
                        children={
                            <Box className="flex">
                                <DefaultCheckbox label="жидкий," />
                                <DefaultCheckbox label="кашицеобразный," />
                                <DefaultCheckbox label="оформленный," />
                                <DefaultCheckbox label="запоры," />
                                <DefaultCheckbox label="диарея," />
                            </Box>
                        }
                        description=" "
                        titleStyle="w-[100%] border p-[10px] rounded-[4px]"
                        style="mt-[5px]"
                    />
                    <Box className=" flex gap-2 items-center">
                        <Typography className=" text-[14px]  font-normal text-[#000]">
                            Частота стула:
                        </Typography>
                        <Box className=" border rounded-[4px] p-[10px] pr-[30px] items-center">
                            <Typography className=" pr-[20px] text-[#007DFF]">
                                1
                            </Typography>
                        </Box>
                        <Typography className=" text-[14px]  font-normal text-[#000]">
                            раз в день
                        </Typography>
                    </Box>
                    <DiagnostikaItem
                        message=" "
                        style="border-[0px] py-0 px-0"
                        titleStyle="mb-[0px] text-[#5d5c5c]"
                        messageStyle="min-h-[80px]"
                    />
                </Box>
                <Box className="border w-full px-[10px] pt-[10px] mt-[10px]">
                    <Typography className="mb-[10px] text-[14px]  font-normal text-[#000]">
                        Мочевыделительная система
                    </Typography>
                    <DiagnosticCeckboxItem
                        lable="Симптом поколачивания:"
                        checkBoxStle={"w-[700px]"}
                        children={
                            <Box className="flex">
                                <DefaultCheckbox label="отрицательный," />
                                <DefaultCheckbox label="положительный," />
                                <DefaultCheckbox label="справа," />
                                <DefaultCheckbox label="слева," />
                            </Box>
                        }
                        description=" "
                        titleStyle="w-[100%] border p-[10px] rounded-[4px]"
                        style="mt-[5px]"
                    />
                    <DiagnostikaItem
                        message=" "
                        style="border-[0px] py-0 px-0"
                        titleStyle="mb-[0px] text-[#5d5c5c]"
                        messageStyle="min-h-[80px]"
                    />
                </Box>
                <Box className="border w-full px-[10px] pt-[10px] mt-[10px]">
                    <Typography className="mb-[10px] text-[14px]  font-normal text-[#000]">
                        Эндокринная система
                    </Typography>
                    <DiagnosticCeckboxItem
                        lable="Щитовидная железа:"
                        checkBoxStle={"w-[730px]"}
                        children={
                            <Box className="flex">
                                <DefaultCheckbox label="без изменений," />
                                <DefaultCheckbox label="увеличена," />
                                <DefaultCheckbox label="болезненна," />
                                <DefaultCheckbox label="консистенция," />
                            </Box>
                        }
                        description=" "
                        titleStyle="w-[100%] border p-[10px] rounded-[4px]"
                        style="mt-[5px]"
                    />
                    <DiagnostikaItem
                        message="СД "
                        style="border-[0px] py-0 px-0"
                        titleStyle="mb-[0px] text-[#5d5c5c]"
                        messageStyle="min-h-[80px]"
                    />
                </Box>
                <Box className="border w-full px-[10px] pt-[10px] mt-[10px]">
                    <Typography className=" text-[14px]  font-normal text-[#000]">
                        Нервная система
                    </Typography>
                    <DiagnostikaItem
                        message="Сознание ясное, адекватно, овечает на вапросы, обаняние, Острота зрения OD=OS зрачки D=S, фотореаксия сохранена. Глазные щели D=S. Лицо симметричное,
 Голос и голоточные рефлекс сохранено, потологические рефлексы нет. "
                        style="border-[0px] py-0 px-0"
                        titleStyle="mb-[0px] text-[#5d5c5c]"
                        messageStyle="min-h-[80px]"
                    />
                </Box>
                <Box className="border w-full px-[10px] pt-[10px] mt-[10px]">
                    <Typography className=" text-[14px]  font-normal text-[#000]">
                        Диагноз
                    </Typography>
                    <Box className="flex gap-2 my-[10px]">
                        <DefaultButton
                            classStyle="bg-[#4CAF50] text-[#fff]"
                            title="Добавить диагноз"
                        />
                        <DefaultButton
                            classStyle="bg-[#64B6F7] text-[#fff]"
                            title="Утвердить"
                        />
                        <DefaultButton
                            classStyle="bg-[#64B6F7] text-[#fff]"
                            title="Отменить"
                        />
                        <DefaultButton
                            classStyle="bg-[#64B6F7] text-[#fff]"
                            title="Удалить"
                        />
                    </Box>
                    <Box>
                        <ReceptionTable
                            columnDefs={ColData}
                            rowData={rowData}
                            height="h-[20vh]"
                        />
                    </Box>
                </Box>
                <Box className="border w-full px-[10px] pt-[10px] mt-[10px]">
                    <Typography className=" text-[14px]  font-normal text-[#000]">
                        Заключение
                    </Typography>
                    <DefaultCheckbox label="Cito!" />
                    <Typography className=" text-[14px]  font-normal text-[#000]">
                        Заключение:
                    </Typography>
                    <DiagnostikaItem
                        message=" "
                        style="border-[0px] py-0 px-0"
                        titleStyle="mb-[0px] text-[#5d5c5c]"
                        messageStyle="min-h-[80px]"
                    />
                </Box>
                <DiagnostikaItem
                    title="Назначения"
                    titleStyle="mb-[0px]"
                    btnTitle="Назначить из лечебной программы"
                    btnStyle="ml-[0px] mb-[10px]"
                    disabled={true}
                    style="mt-[10px]"
                    onClick={() => appModals?.show("choosingDiagnosis")}
                    children={
                        <>
                            <DiagnostikaItem
                                title="Консультации и исследования"
                                text="Дополнительные консультации и исследования не требуются"
                                btnTitle="Добавить"
                                onClick={() =>
                                    appModals?.show("choosingDiagnosis")
                                }
                            />
                            <DiagnostikaItem
                                title="Лечебные процедуры"
                                text="Дополнительные лечебные процедуры не требуются"
                                btnTitle="Добавить"
                                onClick={() =>
                                    appModals?.show("choosingDiagnosis")
                                }
                            />
                            <DiagnostikaItem
                                title="Медикаменты"
                                text="Дополнительные медикаменты не требуются"
                                btnTitle="Добавить"
                                onClick={() =>
                                    appModals?.show("choosingDiagnosis")
                                }
                            />
                        </>
                    }
                />
            </Box>
        </Box>
    );
};

export default ConsultationTechniquesInPatients;
