import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import { Box } from '@mui/material';

export default function TablePaginationDemo() {
    const [page, setPage] = React.useState(2);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    return <Pagination count={10} showFirstButton showLastButton />;
}
