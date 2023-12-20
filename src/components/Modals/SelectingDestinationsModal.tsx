import { Box, Button, Grid, IconButton } from '@mui/material';
import { CloseCircleIcon } from 'assets/icons/icons';
import DefaultText from 'components/defaultText/DefaultText';
import { useEscapeKey } from 'hooks/useEscapeKey';
import { useCallback, useState } from 'react';
import { CreatePaymentNowContainer } from './Modals.styles';
import { useAppModals } from './ModalsProvider';

import { useForm } from 'react-hook-form';
import SearchInput from 'components/search/SearchInput';
import CollapsibleTable from 'components/Dropdown';
import ICDItem from 'components/ICDItem';
import DefaultCheckbox from 'components/checkbox/DefaultCheckbox';
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
const SelectingDestinationsModal = () => {
    const appModals = useAppModals();
    const onCloseModal = useCallback(() => {
        appModals?.hide('selecting_destination');
    }, [appModals]);

    useEscapeKey({
        callback: onCloseModal,
    });
    const [activeTab, setActiveTab] = useState<number>(0);
    const { register, handleSubmit } = useForm<IFormInput>();

    return (
        <CreatePaymentNowContainer
            className={
                appModals?.state.selecting_destination.active &&
                !appModals?.state.selecting_destination.neverWork
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
                        <DefaultText style="text-[20px]  font-normal text-[#000] ">
                            Выбор назначений
                        </DefaultText>
                        <IconButton
                            className="border  w-[35px] h-[35px] border-[#000] p-[5px] "
                            onClick={() => onCloseModal()}
                        >
                            <CloseCircleIcon />
                        </IconButton>
                    </Grid>
                    <Box className="w-[100%]  bg-[#F5F5F5] border border-[rgba(0, 0, 0, 0.23)] overflow-hidden">
                        <Grid
                            item
                            xs={12}
                            md={12}
                            className="mt-[10px]  p-[4px]"
                        >
                            <DefaultText style={'text-[20px] text-[#000]'}>
                                Доступные назначения
                            </DefaultText>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            md={12}
                            className="mb-[10px] mt-[6px] "
                        >
                            <DefaultCheckbox
                                label="Скрывать сделанные назначения"
                                checkboxStyle={{
                                    padding: '0px',
                                    marginRight: '5px',
                                }}
                            />
                        </Grid>

                        <Grid
                            item
                            xs={12}
                            md={12}
                            className=" bg-[#F5F5F5]  max-w-[100%] w-[100%]  max-h-[400px]  h-[400px] overflow-scroll px-[5px] pb-[5px]"
                        >
                            <ICDItem register={register} />
                        </Grid>
                    </Box>

                    <Grid
                        item
                        xs={12}
                        md={12}
                        className=" px-[20px] py-[10px]  flex justify-end "
                    >
                        <Button variant="contained">ОК</Button>
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
export default SelectingDestinationsModal;
