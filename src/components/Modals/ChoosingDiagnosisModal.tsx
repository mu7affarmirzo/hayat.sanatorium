import { Box, Button, Grid, IconButton, Typography } from '@mui/material';
import { CloseCircleIcon } from 'assets/icons/icons';
import DefaultText from 'components/defaultText/DefaultText';
import SearchInput from 'components/search/SearchInput';
import { useEscapeKey } from 'hooks/useEscapeKey';
import { useCallback, useState } from 'react';
import { CreatePaymentNowContainer } from './Modals.styles';
import { useAppModals } from './ModalsProvider';
import ICDItem from 'components/ICDItem';
import OftenUsed from 'components/OftenUsed';
import { useForm } from 'react-hook-form';
const btnData = [
    {
        id: 0,
        title: 'МКБ-10',
    },
    {
        id: 1,
        title: 'Часто используемые',
    },
];
interface IFormInput {
    lastName: string;
    name: string;
    surName: string;
    appeal: string;
}
const ChoosingDiagnosisModal = () => {
    const appModals = useAppModals();
    const onCloseModal = useCallback(() => {
        appModals?.hide('choosingDiagnosis');
    }, [appModals]);

    useEscapeKey({
        callback: onCloseModal,
    });
    const [activeTab, setActiveTab] = useState<number>(0);
    const { register, handleSubmit } = useForm<IFormInput>();

    return (
        <CreatePaymentNowContainer
            className={
                appModals?.state.choosingDiagnosis.active &&
                !appModals?.state.choosingDiagnosis.neverWork
                    ? 'active'
                    : 'none '
            }
        >
            <Box className="container bg-[#fff]  ">
                <Grid container className="p-[20px]">
                    <Grid
                        item
                        xs={12}
                        md={12}
                        className="  flex justify-between items-center  "
                    >
                        <DefaultText style="  text-[20px]  font-normal text-[#000] ">
                            Выбор диагноза
                        </DefaultText>
                        <IconButton
                            className="border  w-[35px] h-[35px] border-[#000] p-[5px] "
                            onClick={() => onCloseModal()}
                        >
                            <CloseCircleIcon />
                        </IconButton>
                    </Grid>
                    <Box className="w-[100%] flex justify-between bg-[#F5F5F5] border border-[rgba(0, 0, 0, 0.23)]">
                        <Box className="w-[60%] overflow-hidden">
                            <Grid
                                item
                                xs={12}
                                md={12}
                                className="mt-[10px]  p-[4px]"
                            >
                                <DefaultText style={'text-[20px] text-[#000]'}>
                                    Диагнозы:
                                </DefaultText>
                            </Grid>
                            <Box className="flex p-[5px]">
                                {btnData.map((item) => {
                                    return (
                                        <Button
                                            onClick={() =>
                                                setActiveTab(item.id)
                                            }
                                            className={` flex  flex-row  gap-2 h-[48px]  px-[20px]
                                                   rounded-tl-lg  rounded-tr-lg  rounded-none  normal-case   box-border  ${
                                                       activeTab === item.id
                                                           ? 'bg-[#3397FF] text-gray-100'
                                                           : 'bg-[#fff]  text-gray-700'
                                                   }`}
                                        >
                                            <Box className="flex , flex-col , box-border ">
                                                <Typography className="text-sm , text-start">
                                                    {item.title}
                                                </Typography>
                                            </Box>
                                        </Button>
                                    );
                                })}
                            </Box>

                            <Grid
                                item
                                xs={12}
                                md={12}
                                className=" bg-[#F5F5F5] p-[4px] max-w-[100%] w-[100%]  max-h-[400px]  h-[400px] overflow-scroll "
                            >
                                {activeTab === 0 ? (
                                    <ICDItem register={register} />
                                ) : (
                                    <OftenUsed />
                                )}
                            </Grid>
                        </Box>

                        <Box className="w-[40%]  flex flex-col pt-[14px]  ">
                            <DefaultText style={'text-[20px] text-[#000] '}>
                                Рекомендованные назначения
                            </DefaultText>

                            <Grid item xs={12} md={12}>
                                <SearchInput placeholder="Искать в таблице" />
                                <Box className="  border h-[75%] bg-[#fff] "></Box>
                                <Box className="flex mt-[5px]">
                                    <Typography
                                        className={'text-[14px] text-[#000] '}
                                    >
                                        Стоимость выбранного:
                                    </Typography>
                                    <Typography
                                        className={'text-[14px] text-[#000] '}
                                    >
                                        0
                                    </Typography>
                                </Box>
                            </Grid>
                        </Box>
                    </Box>
                    <Box className="h-[90px] w-[100%] bg-[#F5F5F5] flex flex-col gap-1 pt-[10px] px-[5px] mt-[10px]">
                        <DefaultText style={'text-[#20px] text-[#000]'}>
                            Выбранные диагнозы
                        </DefaultText>
                        <DefaultText>
                            Чтобы добавить диагноз отметьте галочкой нужный код
                            МКБ
                        </DefaultText>
                    </Box>
                    <Grid
                        item
                        xs={12}
                        md={12}
                        className=" px-[20px] py-[10px]  flex justify-end "
                    >
                        <Button
                            variant="contained"
                            className=" bg-[#4CAF50] h-[46px] text-[#fff] text-[14px]  capitalize "
                        >
                            Добавить
                        </Button>
                        <Button
                            onClick={() => onCloseModal()}
                            variant="contained"
                            className=" bg-[#F5F5F5] h-[46px] text-[#000] text-[14px]  capitalize  ml-[20px]"
                        >
                            Отменить
                        </Button>
                    </Grid>
                </Grid>
            </Box>

            <div className="cancel_window" onClick={onCloseModal} />
        </CreatePaymentNowContainer>
    );
};
export default ChoosingDiagnosisModal;
