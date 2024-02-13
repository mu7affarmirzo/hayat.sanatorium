/* eslint-disable react/style-prop-object */
import { Box } from "@mui/material";
import DefaultCheckbox from "components/Checkbox/DefaultCheckbox";

const TitlePageBottomCheckbooks = () => {
    return (
        <Box className="border my-[5px] px-[10px] py-[8px]">
            <DefaultCheckbox
                label="нет"
                leftLable="Аллергия:"
                style="w-[350px]"
            />
            <DefaultCheckbox
                label="нет"
                leftLable="Метеолабильность:"
                style="w-[350px]"
            />
            <DefaultCheckbox
                label="нет"
                leftLable="Непереносимость продуктов!"
                style="w-[350px]"
            />
            <DefaultCheckbox
                label="нет"
                leftLable="Нарушения стула:"
                style="w-[350px]"
            />
            <DefaultCheckbox
                label="нет"
                leftLable="Получает постоянно медикаменты:"
                style="w-[350px]"
            />
        </Box>
    );
};

export default TitlePageBottomCheckbooks;
