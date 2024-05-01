import { Box, Typography } from '@mui/material';
import { UserIconForTabs } from 'assets/icons/icons';
import { CloseIconBoxView } from 'components/CloseBoxWithIcon/closeIconBoxView';
import { FC } from 'react';

interface BookingProps {
  index: number;
  title: string;
  activeTab: number;
  subTitle?: string;
  onClick?: () => void;
  handleCloseBtn?: () => void;
  isRemove: boolean;
  isUserIcon: boolean;
}

const DoctorsTabBtn: FC<BookingProps> = ({
  title,
  subTitle,
  onClick,
  activeTab,
  index,
  handleCloseBtn,
  isRemove,
  isUserIcon,
}) => {
  return (
    <Box
      onClick={onClick}
      className={`flex flex-row gap-2 h-[48px] px-[20px] cursor-pointer
             rounded-tl-lg rounded-tr-lg rounded-none normal-case box-border ${
               activeTab === index
                 ? 'bg-[#3397FF] text-gray-100'
                 : 'bg-[#F5F5F5] text-gray-700'
             }`}>
      <Box className="flex gap-2 justify-between items-center w-full">
        {isUserIcon ? (
          <Box className="flex justify-center items-center w-[24px] h-[24px] rounded-full ">
            <UserIconForTabs
              stroke={activeTab === index ? '#fff' : '#707070'}
            />
          </Box>
        ) : null}
        <Box className="flex flex-col box-border">
          <Typography
            className={`text-sm text-start font-roboto font-medium ${activeTab === index ? 'text-[#fff]' : 'text-[#6a6a6a]'}`}>
            {title}
          </Typography>
          {subTitle && (
            <Typography className="text-xs text-start opacity-50">
              {subTitle}
            </Typography>
          )}
        </Box>
        {isRemove && activeTab === index && (
          <CloseIconBoxView handleCloseBtn={handleCloseBtn as never} />
        )}
      </Box>
    </Box>
  );
};

export default DoctorsTabBtn;
