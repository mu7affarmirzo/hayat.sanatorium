/* eslint-disable react/style-prop-object */
import { Box, TextField } from "@mui/material";
import DefaultButton from "components/DeafultButton/DefaultButton";
import DefaultText from "components/DefaultText/DefaultText";
import { useAppModals } from "components/Modals";
import RadioForm from "components/RadioForm";

type Props = {
    radioFormData: any;
};

const ModeHandler = ({ radioFormData }: Props) => {
    const appModals = useAppModals();

    return (
        <Box className="flex justify-between">
            <Box className=" border  w-[35%] px-[10px] py-[8px]">
                <DefaultText style={"text-[14px] text-[#000]"}>
                    Режим
                </DefaultText>
                <Box className="flex">
                    <Box className="w-[60%] ">
                        <RadioForm data={radioFormData} />
                    </Box>
                    <Box className=" mt-[5px]">
                        <DefaultButton
                            onClick={() => appModals?.show("add_reason")}
                            title="Добавить причину"
                            classStyle=" bg-[#4CAF50] "
                        />
                    </Box>
                </Box>
            </Box>
            <Box className=" border  w-[64.5%] px-[10px] py-[8px] ">
                <DefaultText style={"text-[14px] text-[#000]"}>
                    Режим
                </DefaultText>
                <Box className="flex  justify-between">
                    <Box className="w-[60%] ">
                        <RadioForm data={radioFormData} />
                    </Box>
                    <Box className=" mt-[5px]">
                        <DefaultButton
                            onClick={() => appModals?.show("add_reason")}
                            title="Добавить причину"
                            classStyle=" bg-[#4CAF50] "
                        />
                    </Box>
                </Box>
                <Box className="mt-[10px]">
                    <TextField
                        id="filled-multiline-static"
                        multiline
                        rows={1}
                        className="w-[100%] bg-[white] "
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default ModeHandler;
