import { CaretRightDownIcon, CaretRightIcon } from 'assets/icons/icons';
import { FC, useState } from 'react';

interface Props {
  option: any;
  selectedItems: any[];
  handleCheckboxChange: (item: any) => void;
}

const CollapseCheckBoxField: FC<Props> = ({
  option,
  selectedItems,
  handleCheckboxChange,
}) => {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>(
    {},
  );

  const toggleSection = (sectionId: string) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [sectionId]: !prevState[sectionId],
    }));
  };

  const renderItems = (items: any[]) => (
    <ul>
      {items?.map((item) => (
        <li key={item.id}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <input
              type="checkbox"
              checked={selectedItems.some(
                (selectedItem) => selectedItem.id === item.id,
              )}
              onChange={() => handleCheckboxChange(item)}
            />
            {item.name}
          </label>
        </li>
      ))}
    </ul>
  );

  const renderSections = (sections: any[]) => (
    <div>
      {sections?.map((section) => (
        <div key={section.id}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div
              onClick={() => toggleSection(section.id)}
              className="flex cursor-pointer">
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
          {openSections[section.id] && section.lab_research && (
            <div style={{ padding: '0 20px' }}>
              {renderItems(section.lab_research)}
            </div>
          )}
        </div>
      ))}
    </div>
  );

  return <div>{renderSections(option)}</div>;
};

export default CollapseCheckBoxField;
