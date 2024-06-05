import { Button, Typography } from '@mui/material';
import { FC, useState } from 'react';
import { SvgProps } from 'types/types';
import SaidBarCustomizedAccordions from './SaidBarCustomizedAccordions';

interface ChildItem {
  id: number;
  title: string;
  data?: ChildItem[];
}

interface BookingProps {
  search?: any;
  index: number;
  title: string;
  color?: string;
  bgColor?: string;
  subTitle?: string;
  activeTab: number;
  activBtnType?: any;
  onClick?: () => void;
  chiled?: ChildItem[];
  Icon?: (props: SvgProps) => JSX.Element;
}

const SideBarBtn: FC<BookingProps> = (props) => {
  const { title, onClick, activeTab, index, chiled, activBtnType, search } =
    props;
  const [activeBtn, setActiveBtn] = useState(0);

  const handleItemClick = (itemId: number) => {
    setActiveBtn(itemId);
  };

  return (
    <div>
      {chiled ? (
        <SaidBarCustomizedAccordions
          onClick={onClick}
          title={title}
          status="done"
          activBtnType={activeTab === index ? activBtnType : ''}
          isActive={activeTab === index}
          childrenStyle={{
            display: 'block',
            justifyContent: 'space-between',
            gap: '5px',
          }}
          topBoxStyle={{
            color: activeTab === index ? 'white' : '#636363',
            padding: '5px 8px 5px 8px',
            display: 'flex',
            alignItems: 'center',
            height: 'min-content',
            minHeight: 'min-content',
          }}>
          {chiled.map((item: ChildItem, itemIndex: number) => (
            <div key={itemIndex}>
              {item.data ? (
                <SaidBarCustomizedAccordions
                  title={item.title}
                  activBtnType={activeTab === index ? activBtnType : ''}
                  isActive={activeTab === index}
                  childrenStyle={{
                    display: 'block',
                    justifyContent: 'space-between',
                    fontSize: '12px !important',
                    paddingBottom: '5px',
                  }}
                  topBoxStyle={{
                    display: 'flex',
                    alignItems: 'center',
                    margin: 0,
                  }}>
                  {item.data.map((childItem: ChildItem) => (
                    <button
                      key={childItem.id}
                      onClick={() => handleItemClick(childItem.id)}
                      className={`${
                        activeBtn === childItem.id
                          ? 'bg-[#268cf8]'
                          : 'bg-[#3397FF ]'
                      } cursor-pointer w-[100%] text-left`}>
                      <Typography className="text-xs font-roboto text-black my-1">
                        {childItem.title}
                      </Typography>
                    </button>
                  ))}
                </SaidBarCustomizedAccordions>
              ) : (
                <button className="cursor-pointer py-1 pl-8 w-[100%] text-left  ">
                  <Typography className="text-xs text-[#2121218a] font-roboto">
                    {item.title}
                  </Typography>
                </button>
              )}
            </div>
          ))}
        </SaidBarCustomizedAccordions>
      ) : (
        <Button
          onClick={onClick}
          className={`flex min-h-[30px] w-full py-[10px] items-center justify-start pl-[24px] 
          normal-case ${
            activeTab === index
              ? 'bg-[#64B6F7] text-gray-100'
              : 'bg-[#ffffff]  text-gray-700'
          }`}>
          <Typography className="text-xs font-roboto font-normal text-black flex text-start">
            {title}
          </Typography>
        </Button>
      )}
    </div>
  );
};
export default SideBarBtn;
