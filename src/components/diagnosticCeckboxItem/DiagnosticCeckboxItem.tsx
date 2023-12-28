import { Box, Grid, IconButton } from '@mui/material'
import { FileAltIcon, FilePlusAltIcon } from 'assets/icons/icons'
import DefaultText from 'components/defaultText/DefaultText'
import React from 'react'

type Props = {
    style?: string,
    titleStyle?: string,
    lable?: string,
    children?: any,
    description?: string,
    boxStyle?: string
}

const DiagnosticCeckboxItem = ({ style, titleStyle, lable, children, description, boxStyle }: Props) => {
    return (
        <Box
            className={` ${style} flex gap-1 items-center justify-between w-[100%]`}
        >
            <Box className="flex items-center w-[100%]">
                <Box>
                    <DefaultText style={"text-[#000] w-[100%] "}>
                        {lable}
                    </DefaultText>
                </Box>
                <Box className=" w-[100%]">
                    {children}
                </Box>
            </Box>
            <Box className={`${boxStyle} flex w-[100%] gap-3`}>
                <DefaultText style={`${titleStyle} text-[#000]`}>
                    {description}
                </DefaultText>
                <Grid item className={` flex items-center gap-2`}>
                    <IconButton
                        color="primary"
                        aria-label="add to shopping cart"
                        className=" bg-[#64B6F7] rounded-none"
                    >
                        <FileAltIcon stroke="white" />
                    </IconButton>
                    <IconButton
                        color="primary"
                        aria-label="add to shopping cart"
                        className=" bg-[#64B6F7] rounded-none  "
                    >
                        <FilePlusAltIcon />
                    </IconButton>
                </Grid>
            </Box>
        </Box>
    )
}

export default DiagnosticCeckboxItem