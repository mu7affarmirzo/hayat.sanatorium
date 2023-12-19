import { Typography } from '@mui/material';

const DefaultText = ({
    children,
    style,
}: {
    children?: any;
    style?: any;
}): JSX.Element => {
    return (
        <Typography
            className={`${
                style ? style : 'text-[14px] text-[#8d8c8c] font-normal'
            } `}
        >
            {children}
        </Typography>
    );
};

export default DefaultText;
