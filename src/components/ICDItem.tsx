import React from 'react';
import CollapsibleTable from './Dropdown';
import DefaultInput from './defaultInput/DefaultInput';
import SearchInput from './search/SearchInput';

const ICDItem = ({ register }: any) => {
    return (
        <div>
            <SearchInput placeholder="Искать в таблице" />
            <CollapsibleTable />
        </div>
    );
};

export default ICDItem;
