import { Box, Button, Grid, IconButton } from "@mui/material";
import { CloseCircleIcon } from "assets/icons/icons";
import CollapsibleTable from "components/Dropdown";
import DefaultText from "components/DefaultText/DefaultText";
import { useEscapeKey } from "hooks/useEscapeKey";
import { useCallback } from "react";
import { CreatePaymentNowContainer } from "./Modals.styles";
import { useAppModals } from "./ModalsProvider";
import DefaulCheckbox from "components/Checkbox/DefaultCheckbox";

const AddReasonModal = () => {
    const appModals = useAppModals();
    const onCloseModal = useCallback(() => {
        appModals?.hide("add_reason");
    }, [appModals]);

    useEscapeKey({
        callback: onCloseModal,
    });

    return (
        <CreatePaymentNowContainer
            className={
                appModals?.state.add_reason.active &&
                !appModals?.state.add_reason.neverWork
                    ? "active"
                    : "none "
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
                            Добавление причины противопоказанности лечения
                        </DefaultText>
                        <IconButton
                            className="border  w-[35px] h-[35px] border-[#000] p-[5px] "
                            onClick={() => onCloseModal()}
                        >
                            <CloseCircleIcon />
                        </IconButton>
                    </Grid>

                    <Grid
                        item
                        xs={12}
                        md={12}
                        className="mt-[10px] bg-[#F5F5F5] p-[4px]"
                    >
                        <DefaultText style={"text-[20px] text-[#000]"}>
                            Возможные диагнозы
                        </DefaultText>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={12}
                        className=" bg-[#F5F5F5] h-[300px]"
                    >
                        <Box className="flex bg-[#64B6F7] w-full border items-center z-0">
                            <Box className="w-[30px] h-[30px]"></Box>
                            <Box className=" border-l-[1px] border-r-[1px] border-[#605e5e] w-[30px] h-[30px] flex justify-center items-center">
                                <DefaulCheckbox style="z-[100]" />
                            </Box>

                            <DefaultText
                                style={"text-[14px] text-[#000] ml-[10px]"}
                            >
                                Диагноз
                            </DefaultText>
                        </Box>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={12}
                        className=" px-[20px] py-[10px]  flex justify-end "
                    >
                        <Button variant="contained">Выбрать</Button>
                        <Button
                            onClick={() => onCloseModal()}
                            variant="contained"
                            className=" bg-[#F5F5F5] h-[46px] text-[#000] text-[14px]  capitalize  ml-[20px]"
                        >
                            Закрыть
                        </Button>
                    </Grid>
                </Grid>
            </Box>

            <div className="cancel_window" onClick={onCloseModal} />
        </CreatePaymentNowContainer>
    );
};
export default AddReasonModal;
