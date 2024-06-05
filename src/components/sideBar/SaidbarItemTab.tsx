import { Box, Button, Typography } from '@mui/material';
import { FC, useCallback, useState } from 'react';

interface Props {
  activeTab: number;
  index: number;
  title: string;
  hanleClicked: (index: number) => void;
  isAccordion?: boolean;
  childItems?: any;
  childItemIsActiveTab?: number;
  childItemIndex?: number;
  handleChangedChildItem?: (index: number) => void;
}

export const SidebarItemTab: FC<Props> = ({
  activeTab,
  index,
  title,
  hanleClicked,
  isAccordion,
  childItems: chiled,
}) => {
  const [activeChildTab, setActiveChildTab] = useState<number>(0);

  const handleChilcTab = useCallback(
    (index: number, item: any) => {
      setActiveChildTab(index);
      console.log(item, ' child items ');
    },
    [setActiveChildTab],
  );

  return (
    <Box
      onClick={() => hanleClicked(index)}
      className={`flex flex-col  min-h-[30px] w-full py-[10px]  pl-[24px] cursor-pointer ${
        activeTab === index
          ? 'bg-[#64B6F7] text-gray-100'
          : 'bg-[#ffffff]  text-gray-700'
      }`}>
      <Typography className="text-xs font-roboto font-normal text-black flex text-start">
        {title}
      </Typography>
      {isAccordion && (
        <ul className="items-start">
          {activeTab === index &&
            chiled.map((item: any, index: number) => (
              <li
                key={index}
                className="text-xs font-roboto items-start mt-[2px] ml-1  ">
                <Button
                  onClick={() => handleChilcTab(index as never, item)}
                  size="small"
                  className={`${
                    activeChildTab === index ? 'bg-[#4ba2ff]' : 'bg-[#a7cef8 ]'
                  } cursor-pointer w-[100%] text-left normal-case items-start justify-start `}>
                  <Typography
                    className={` ${activeChildTab === index ? 'text-white' : 'text-black'} text-xs font-roboto `}>
                    {item.title}
                  </Typography>
                </Button>
              </li>
            ))}
        </ul>
      )}
    </Box>
  );
};
