import { Box, Typography } from "@mui/material";
import { CommonProps } from "@mui/material/OverridableComponent";
import { FC } from "react";

interface Props {
    title: string;
    className?: CommonProps;
}

const SectionTitle: FC<Props> = ({ title, className }) => {
    return (
        <Box className="w-full flex flex-row justify-start font-roboto">
            <Typography
                className={`${className} text-sm font-medium items-center`}
            >
                {title}
            </Typography>
        </Box>
    );
};

export default SectionTitle;
