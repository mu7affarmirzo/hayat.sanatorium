import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import { FC } from 'react';

interface Props {
  id: number;
  title: string;
  expandedRows: any;
  setExpandedRows: any;
}

export const CollapseTitle: FC<Props> = ({
  id,
  title,
  expandedRows,
  setExpandedRows,
}) => {
  const isExpanded = expandedRows[id];
  const toggleRowLine = (id: number) => {
    setExpandedRows({
      ...expandedRows,
      [id]: !expandedRows[id],
    });
  };
  return (
    <Box
      onClick={() => toggleRowLine(id)}
      className="flex flex-row items-center  ">
      {isExpanded ? <ExpandLess /> : <ExpandMore />}
      <Typography className="text-sm font-roboto text-black font-medium">
        {title}
      </Typography>
    </Box>
  );
};
