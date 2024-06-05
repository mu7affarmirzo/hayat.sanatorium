import React from 'react';
import CollapsibleTable from './Dropdown';
import SearchInput from './SearchField/searchInput';
import { Box } from '@mui/material';

const ICDItem = ({ register }: any) => {
  return (
    <Box className="flex flex-col h-full bg-[#fff]">
      <Box>
        <SearchInput placeholder="Искать в таблице" />
      </Box>

      <Box className="border-t-[1px] h-full">
        <CollapsibleTable />
      </Box>
    </Box>
  );
};

export default ICDItem;
