import { CaretRightDownIcon, CaretRightIcon } from 'assets/icons/icons';
import React, { FC, useState } from 'react';

interface Props {
  option: any;
  selectedItems: number[];
  handleCheckboxChange: (itemId: number) => void;
}

const CollapseCheckBoxField: FC<Props> = ({ option }) => {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>(
    {},
  );
  const [selectedItems, setSelectedItems] = useState<any>([]);

  const toggleSection = (sectionId: any) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [sectionId]: !prevState[sectionId],
    }));
  };

  console.log(selectedItems, 'select item');

  const handleCheckboxChange = (itemId: any) => {
    const index = selectedItems.indexOf(itemId);
    if (index === -1) {
      setSelectedItems([...selectedItems, itemId]);
    } else {
      setSelectedItems(selectedItems.filter((id: number) => id !== itemId));
    }
  };

  const renderItems = (items: any) => {
    return (
      <ul>
        {items?.map((item: any) => (
          <li key={item.id}>
            <label
              style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <input
                type="checkbox"
                checked={selectedItems.includes(item.id)}
                onChange={() => handleCheckboxChange(item.id)}
              />
              {item.name}
            </label>
          </li>
        ))}
      </ul>
    );
  };

  const renderSections = (sections: any) => {
    return sections.map((section: any) => (
      <div key={section.id}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div
            onClick={() => toggleSection(section.id)}
            className="flex  cursor-pointer  ">
            {openSections[section.id] ? (
              <CaretRightDownIcon />
            ) : (
              <CaretRightIcon />
            )}
          </div>
          <button onClick={() => toggleSection(section.id)}>
            {section.name}
          </button>
        </div>
        {openSections[section.id] &&
          section.sections &&
          renderSections(section.sections)}
        {openSections[section.id] && section.lab_research && (
          <div style={{ padding: '0 20px' }}>
            {renderItems(section.lab_research)}
          </div>
        )}
      </div>
    ));
  };

  return <div>{renderSections(option as never)}</div>;
};

export default CollapseCheckBoxField;
