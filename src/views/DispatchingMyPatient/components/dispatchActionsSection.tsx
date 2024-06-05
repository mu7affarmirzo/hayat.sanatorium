import { Grid } from '@mui/material';
import {
  VuesaxLinearDocumentIcon,
  SearchAltIcon,
  CloseIcon,
} from 'assets/icons/icons';
import DefaultButton from 'components/deafultButton/DefaultButton';
import SearchInput from 'components/SearchField/searchInput';

export const DispatchActionsSection = () => {
  return (
    <Grid item xs={12} className="flex justify-between my-[10px]">
      <Grid item xs={12} md={7}>
        <SearchInput />
      </Grid>
      <Grid item xs={12} md={5} className="flex justify-end ">
        <DefaultButton
          title="Выбор колонок"
          classStyle="bg-[#2196F3] h-[40px] text-[#fff] mr-[10px]"
        />
        <DefaultButton
          title="Ехсеl"
          icon={<VuesaxLinearDocumentIcon />}
          classStyle="bg-[#2196F3] h-[40px] text-[#fff] mr-[10px]"
        />
        <DefaultButton
          title="Поиск"
          icon={<SearchAltIcon />}
          classStyle="bg-[#2196F3] h-[40px] text-[#fff] mr-[10px]"
          submitType="submit"
        />
        <DefaultButton
          title="Очистить фильтр"
          icon={<CloseIcon stroke="#fff" />}
          classStyle="bg-[#2196F3] h-[40px] text-[#fff] "
          submitType="reset"
        />
      </Grid>
    </Grid>
  );
};
