import { Box, Grid, IconButton, Typography } from '@mui/material';
import { FileAltIcon, FilePlusAltIcon } from 'assets/icons/icons';
import SearchSelectField from 'components/SearchField/searchSelectField';
import useCategoryFetcher from './hook';
import { UseFormReturn } from 'react-hook-form';
import { NewDefaultCheckbox } from 'components/checkbox/NewDefaultCheckbox';

interface Props<T extends {}> {
  label: string;
  children?: any;
  defaultCheckbox?: boolean;
  isSearchAction?: boolean;
  isGetAction?: boolean;
  formMethods: UseFormReturn<T, any, T>;
  categoryName: keyof T;
  fieldStyle?: string;
  containerStyle?: string;
}

const AutoComplateCategoryBoxView = <T extends {}>({
  label,
  children,
  defaultCheckbox,
  isGetAction,
  isSearchAction,
  formMethods,
  categoryName,
  fieldStyle,
  containerStyle,
}: Props<T>) => {
  const { categories, fetchCategories, open, setOpen } = useCategoryFetcher();

  const changeContainerStyle = containerStyle
    ? containerStyle
    : 'flex flex-row items-center';

  const changeFieldStyle = fieldStyle ? fieldStyle : 'w-[400px]';

  return (
    <Box className={`${changeContainerStyle} my-[6px] gap-2 justify-between`}>
      <Box className="flex flex-row gap-2 items-center ">
        <Typography className="font-roboto text-sm font-normal">
          {label}:
        </Typography>
        {defaultCheckbox && (
          <NewDefaultCheckbox
            methods={formMethods}
            name={categoryName as never}
          />
        )}
        {children}
      </Box>
      <Box
        className={`${changeFieldStyle} flex flex-row items-center gap-2 min-w-[300px]`}>
        {isSearchAction && formMethods && (
          <SearchSelectField
            open={open}
            setOpen={setOpen}
            categoryData={categories}
            fieldname={categoryName as never}
            methods={formMethods}
          />
        )}
        {isGetAction && (
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
    </Box>
  );
};

export default AutoComplateCategoryBoxView;
