import { Button } from "@mui/material";

type propsType = {
    classStyle?: string;
    title?: string;
    icon?: any;
    variant?: any;
    onClick?: any;
    disabled?: boolean;
};
const DefaultButton = (props: propsType) => {
    let { classStyle, title, icon, variant, onClick, disabled } = props;
    return (
        <Button
            onClick={onClick}
            variant={variant ? variant : "contained"}
            startIcon={icon}
            disabled={disabled}
            className={`${
                classStyle ? classStyle : " bg-[#2196F3] h-[46px] text-[#fff]"
            } ${
                disabled ? "opacity-50" : "opacity-100"
            } text-[14px]  capitalize text-[#000]`}
        >
            {title}
        </Button>
    );
};

export default DefaultButton;
