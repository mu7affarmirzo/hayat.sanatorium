import { Box, Grid, IconButton } from '@mui/material';
import { CloseIcon, VuesaxLinearNote2Icon } from 'assets/icons/icons';
import SelectButton from 'components/SelectButton';
import DefaulCheckbox from 'components/checkbox/DefaultCheckbox';
import DefaultButton from 'components/deafultButton/DefaultButton';
import DefaultInput from 'components/defaultInput/DefaultInput';
import DefaultText from 'components/defaultText/DefaultText';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import DiagnostikaItem from 'views/booked/frontPage/components/DiagnostikaItem';

const data = [
    {
        id: 1,
        title: 'Экспортировать эпикриз',
    },
    {
        id: 2,
        title: 'История болезни',
    },
];
interface IFormInput {
    lastName: string;
    name: string;
    surName: string;
    appeal: string;
}

const InvoicesDocuments = () => {
    const { register, handleSubmit } = useForm<IFormInput>();
    return (
        <Grid container className="w-full h-full">
            <Grid item xs={12} md={12} className="p-[5px]">
                <DefaultText style={'text-[#000]'}>Документы</DefaultText>
            </Grid>
            <Grid item xs={12} md={12} className="p-[5px] border">
                <DefaultText>Файлы</DefaultText>
                <Box className="flex p-[5px]">
                    <DefaultButton
                        title="Добавить файлы автоматически"
                        style="bg-[#4CAF50] mr-[10px]"
                    />

                    <SelectButton data={data} defaultValue="Добавить файл" />

                    <SelectButton data={data} defaultValue="Сканировать" />
                </Box>
                <Box className="border-b-[1px] border-[#504f4f] w-[100%] pb-[5px]">
                    <DefaultText style={'text-[#000]'}>Анализы</DefaultText>
                </Box>
                <Box className="flex justify-between">
                    <Box className="flex  min-h-[140px] items-center w-[80px] ">
                        <IconButton
                            className="flex justify-center items-center w-[44px] h-[44px] rounded-full bg-[#2196F3] cursor-pointer "
                            color="primary"
                            aria-label="add to shopping cart"
                        >
                            <VuesaxLinearNote2Icon />
                        </IconButton>
                    </Box>
                    <Box className="flex flex-col gap-1  w-[calc(100vw-80px)] py-[10px]">
                        <Box className="flex items-center justify-between  w-[100%]">
                            <Box className="flex items-center w-[70%]">
                                <Link
                                    className="mr-[20px] text-[#007DFF]"
                                    to={''}
                                >
                                    ИшановЛ4.08.23.pdf
                                </Link>
                                <DefaultButton
                                    title="Заменить…"
                                    style="h-[40px] bg-[#2196F3]"
                                />
                                <DefaulCheckbox label="Опубликовать" />
                            </Box>
                            <IconButton
                                className="rounded-full bg-[#F79E98] w-[30px] h-[30px] flex justify-center items-center "
                                color="primary"
                                aria-label="add to shopping cart"
                            >
                                <CloseIcon stroke="#fff" />
                            </IconButton>
                        </Box>
                        <Box>
                            <DefaultText>Урхунова Д.Б.</DefaultText>
                        </Box>
                        <Box>
                            <DefaultText>04.08.2023</DefaultText>
                        </Box>
                        <Box>
                            <DefaultText>Описание:</DefaultText>
                        </Box>
                        <DefaultInput register={register} inputType={'phone'} />
                    </Box>
                </Box>
            </Grid>
            <Box className="flex flex-col w-[100%]">
                <DiagnostikaItem
                    title="Хранимые печатные формы"
                    text="Прикрепленные документы отсутствуют"
                />
                <DiagnostikaItem
                    title="Файлы ЭЦП"
                    text="Прикрепленные документы отсутствуют"
                />
            </Box>
        </Grid>
    );
};

export default InvoicesDocuments;
