/* eslint-disable react/style-prop-object */
import { Box, Grid, IconButton } from '@mui/material';
import { FileAltIcon, FilePlusAltIcon } from 'assets/icons/icons';
import SearchSelectField from 'components/SearchField/searchSelectField';
import DefaultText from 'components/defaultText/DefaultText';
import useCategoryFetcher from './hook';
import { UseFormReturn } from 'react-hook-form';

type Props<T extends {}> = {
  style?: string;
  titleStyle?: string;
  label?: string;
  children?: any;
  description?: string;
  boxStyle?: string;
  checkBoxStle?: string;
  actions?: boolean;
  categoryName?: keyof T;
  fieldName?: string;
  formMethods: UseFormReturn<any, any, any>;
};

const DiagnosticCeckboxItem = <T extends {}>({
  style,
  label,
  children,
  description,
  boxStyle,
  checkBoxStle,
  categoryName,
  actions = true,
  formMethods,
}: Partial<Props<T>>) => {
  const { categories, fetchCategories, open, setOpen } = useCategoryFetcher();
  console.log();

  return (
    <Box className={` ${style} flex gap-1  justify-between w-[100%] mt-[3px]`}>
      <Box
        className={`${
          checkBoxStle ? checkBoxStle : 'w-[200px]'
        } flex  items-center `}>
        <DefaultText style={'text-[#000] text-[14px]'}>{label}</DefaultText>
        <Box className="">{children}</Box>
      </Box>
      {description && (
        <Box
          className={`${boxStyle} flex flex-1 gap-3 h-[40px] my-[6px] items-center `}>
          {!!formMethods && (
            <SearchSelectField
              open={open}
              setOpen={setOpen}
              categoryData={categories}
              fieldname={categoryName as never}
              methods={formMethods}
            />
          )}

          {actions && (
            <Grid item className={`flex items-center gap-2`}>
              <IconButton
                onClick={() => fetchCategories(categoryName as never)}
                color="primary"
                aria-label="add to shopping cart"
                className=" bg-[#64B6F7] rounded-none">
                <FileAltIcon stroke="white" />
              </IconButton>
              <IconButton
                onClick={() => console.log('clicked another button')}
                color="primary"
                aria-label="add to shopping cart"
                className=" bg-[#64B6F7] rounded-none  ">
                <FilePlusAltIcon />
              </IconButton>
            </Grid>
          )}
        </Box>
      )}
    </Box>
  );
};

export default DiagnosticCeckboxItem;
