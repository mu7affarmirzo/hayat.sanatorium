import { CaretRightDownIcon, CaretRightIcon } from 'assets/icons/icons';
import { FC, useState } from 'react';

interface Props {
  options: any;
  handleSelect: (item: any) => void;
  selectedItems: any[];
}

const NestedCollapseDropdownCheckbox: FC<Props> = ({
  options,
  handleSelect,
  selectedItems,
}) => {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>(
    {},
  );

  const toggleSection = (sectionId: any) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [sectionId]: !prevState[sectionId],
    }));
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
                checked={selectedItems?.some(
                  (selectedItem) => selectedItem.id === item.id,
                )}
                onChange={() => handleSelect(item)}
              />
              {item.name}
            </label>
          </li>
        ))}
      </ul>
    );
  };

  const renderSections = (sections: any) => {
    return sections?.map((section: any) => (
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
            {section.branch}
          </button>
        </div>
        {openSections[section.id] &&
          section.sections &&
          renderSections(section.sections)}
        {openSections[section.id] && section.med_service_specialty && (
          <div style={{ padding: '0 20px' }}>
            {renderItems(section.med_service_specialty)}
          </div>
        )}
      </div>
    ));
  };

  return <div>{renderSections(options as never)}</div>;
};

export default NestedCollapseDropdownCheckbox;
