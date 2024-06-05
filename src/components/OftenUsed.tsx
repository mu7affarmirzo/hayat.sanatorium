import React from 'react';
import CollapsibleTable from './Dropdown';
import SearchInput from './SearchField/searchInput';

const OftenUsed = () => {
  return (
    <div>
      <SearchInput placeholder="Искать в таблице" />
      <CollapsibleTable />
    </div>
  );
};

export default OftenUsed;
