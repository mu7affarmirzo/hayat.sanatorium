import { Box } from '@mui/material';
import { FC } from 'react';

export type ProcedurStatusBoxProps = {
  status: 'accept' | 'pending' | 'inProgress' | 'completed';
};

const ProcedurStatusBox: FC<ProcedurStatusBoxProps> = ({ status }) => {
  let numBoxesToColor = 0;
  switch (status) {
    case 'accept':
      numBoxesToColor = 1;
      break;
    case 'pending':
      numBoxesToColor = 2;
      break;
    case 'inProgress':
      numBoxesToColor = 3;
      break;
    case 'completed':
      numBoxesToColor = 4;
      break;
    default:
      numBoxesToColor = 0;
  }

  return (
    <Box className="flex flex-row items-center gap-1 p-2 ">
      {[...Array(4)].map((_, index) => (
        <Box
          key={index}
          className={`w-[5px] h-[10px] ${
            index < numBoxesToColor ? 'bg-green-500' : 'bg-gray-200'
          }`}></Box>
      ))}
    </Box>
  );
};

export default ProcedurStatusBox;
