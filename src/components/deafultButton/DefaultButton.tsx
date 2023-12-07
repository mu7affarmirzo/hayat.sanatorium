import { Button } from '@mui/material';

type propsType = {
    style?: string;
    title?: string;
    icon?: any;
    variant?: any;
    onClick?: any;
};
const DefaultButton = (props: propsType) => {
    let { style, title, icon, variant, onClick } = props;
    return (
        <Button
            onClick={onClick}
            variant={variant ? variant : 'contained'}
            startIcon={icon}
            className={`${
                style ? style : ' bg-[#2196F3] h-[46px] text-[#fff]'
            }  text-[14px]  capitalize`}
        >
            {title}
        </Button>
    );
};

export default DefaultButton;
