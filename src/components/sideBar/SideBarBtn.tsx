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
  index: number;
  title: string;
  Icon?: (props: SvgProps) => JSX.Element;
  color?: string;
  bgColor?: string;
  subTitle?: string;
  activeTab: number;
  onClick?: () => void;
  chiled?: ChildItem[];
  activBtnType?: any;
  search?: any;
}

const SideBarBtn: FC<BookingProps> = (props) => {
  const { title, onClick, activeTab, index, chiled, activBtnType, search } =
    props;
  const [activeBtn, setActiveBtn] = useState(0);

  const handleItemClick = (itemId: number) => {
    setActiveBtn(itemId);
  };

  return (
    <div
      className="rounded"
      style={{
        borderRadius: '10px',
        backgroundColor: activeTab === index ? '#64B6F7 !important' : '#fff',
      }}>
      {chiled ? (
        <SaidBarCustomizedAccordions
          onClick={onClick}
          title={title}
          status="idle"
          activBtnType={activeTab === index ? activBtnType : ''}
          search={search}
          isActive={activeTab === index}
          childrenStyle={{
            display: 'block',
            justifyContent: 'space-between',
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
                          ? 'bg-[#30a0fc]'
                          : 'bg-[#64B6F7 ]'
                      } cursor-pointer w-[100%] text-left`}>
                      <Typography className="text-[#000] my-[3px] text-[12px]">
                        {childItem.title}
                      </Typography>
                    </button>
                  ))}
                </SaidBarCustomizedAccordions>
              ) : (
                <button className="cursor-pointer py-0 pl-8 w-[100%] text-left">
                  <Typography className="text-sm text-[#0000008A] !text-[12px]">
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
              ? 'bg-[#3397FF] text-gray-100'
              : 'bg-[#fff]  text-gray-700'
          }`}>
          <Typography className="text-[12px] flex text-start">
            {title}
          </Typography>
        </Button>
      )}
    </div>
  );
};
export default SideBarBtn;
