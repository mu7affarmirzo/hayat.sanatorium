/* eslint-disable array-callback-return */
import { Box } from '@mui/material';
import { FC, useCallback, useEffect, useState } from 'react';
import BroneTabBtn from './bookedTabItmeBtn';

export type TabsItem = {
  title: string;
  subTitle?: string;
  icon?: any;
  component: React.FC;
  id?: number
};

interface TabsProps {
  content: TabsItem[];
  handleClickActive?: (id: number, title: string) => void;
  handleRemove?: (id: number, title: string) => void;
  activeTabId?: number;
  isContentDynamic?: boolean;
  // setDynamicTabs?: React.Dispatch<React.SetStateAction<TabsItem[]>>
}

const BroneViewTabs: FC<TabsProps> = (props) => {
  const {
    content,
    handleClickActive,
    handleRemove,
    activeTabId,
    isContentDynamic = false
  } = props
  // const { selectBroneId } = useReduxSelector((brone) => brone.booked);
  // const dispatch = useReduxDispatch();
  const [dynamicTabs, setDynamicTabs] = useState(content);
  const [activeTab, setActiveTab] = useState<number>(0);

  useEffect(() => {
    if (typeof activeTabId === 'number' && activeTabId !== activeTab) {
      setActiveTab(activeTabId)
    }
  }, [activeTabId, activeTab])

  const handleActiveTab = (index: number, title: string) => {
    setActiveTab(index);
    handleClickActive && handleClickActive(index, title)
  };

  const removeActiveIB = useCallback(
    (title?: string, index?: number) => {
      // dispatch(removePatient(activeTab));
      const newDynamicContent = dynamicTabs.filter(
        (tab) => tab.title !== title,
      );
      if (!isContentDynamic) {
        setDynamicTabs(newDynamicContent);
      }
      if (typeof index === 'number' && !!title) {
        handleRemove && handleRemove(index, title)
      }
      // setActiveTab(0);
    },
    [dynamicTabs],
  );

  return (
    <Box className=" w-full ">
      <Box className="flex flex-row gap-1 border-b-[1px] border-[rgba(0, 0, 0, 1)] ">
        {isContentDynamic ? content?.map((item, index) => {
          return (
            <Box key={item.title}>
              <BroneTabBtn
                index={item?.id ?? index}
                Icon={item?.icon}
                title={item?.title}
                id={item?.id}
                activeTab={activeTabId ?? activeTab}
                subTitle={item?.subTitle}
                handleCloseBtn={removeActiveIB}
                onClick={() => handleActiveTab(item.id ?? index, item.title)}
              />
            </Box>
          );
        }) :
          dynamicTabs.map((item, index) => {
            return (
              <Box key={item.title}>
                <BroneTabBtn
                  index={item?.id ?? index}
                  Icon={item?.icon}
                  title={item?.title}
                  id={item?.id}
                  activeTab={activeTab}
                  subTitle={item?.subTitle}
                  handleCloseBtn={removeActiveIB}
                  onClick={() => handleActiveTab(item.id ?? index, item.title)}
                />
              </Box>
            );
          })}
      </Box>
      <Box className="w-full">
        {dynamicTabs.map((item, index) => {
          if (item?.id === activeTab) {
            return <item.component key={index} />;
          }
        })}
      </Box>
    </Box>
  );
};

export default BroneViewTabs;
