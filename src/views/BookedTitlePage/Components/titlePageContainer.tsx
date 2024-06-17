import { Box, Grid, Typography } from '@mui/material';
import DefaultButton from 'components/deafultButton/DefaultButton';
import { FC } from 'react';

interface Props {
  children: any;
  ibNumber: number;
}

export const TitlePageContainer: FC<Props> = ({ children, ibNumber }) => {
  return (
    <Grid container className="flex">
      <Box className="flex flex-row justify-between items-center w-full my-1">
        <Box className="invisible">dhfjs</Box>
        <Box className="flex flex-row items-center">
          <Typography className="font-roboto text-sm font-medium  ">
            История болезни №
          </Typography>
          <Box className=" w-[60px] ml-[10px] ">
            <input
              className=" bg-[#fff] w-full h-full border-none outline-none pl-[5px] py-1"
              value={ibNumber}
              disabled
            />
          </Box>
        </Box>
        <Box>
          <DefaultButton
            title="ИБ открыта"
            classStyle="h-[35px] bg-[##50a8ef]"
          />
        </Box>
      </Box>
      <Box className="w-full bg-white m-[5px] border min-h-[calc(100vh-280px)] h-[calc(100vh-320px)] overflow-scroll p-[5px]">
        {children}
      </Box>
    </Grid>
  );
};
