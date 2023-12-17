import { CaretRightDownIcon, CaretRightIcon } from 'assets/icons/icons';
import { useState } from 'react';
import DefaulCheckbox from './checkbox/DefaultCheckbox';

const Checkbox = ({ label, checked, onChange }: any) => {
    return (
        <div>
            <input type="checkbox" checked={checked} onChange={onChange} />
            {label}
        </div>
    );
};
const Dropdown = ({ title, children }: any) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="">
            <div className="flex items-center ">
                <div
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex  mr-[5px]  cursor-pointer  "
                >
                    {isOpen ? <CaretRightDownIcon /> : <CaretRightIcon />}
                </div>
                <DefaulCheckbox label={title} />
            </div>

            {isOpen && <div>{children}</div>}
        </div>
    );
};

const CollapsibleTable = () => {
    const [checkedItems, setCheckedItems] = useState<any>({});

    const handleCheckboxChange = (name: any) => {
        setCheckedItems((prev: any) => ({
            ...prev,
            [name]: !prev[name],
        }));
    };

    return (
        <div className="">
            <Dropdown title="Полулюкс">
                <div className="pl-[20px]">
                    <Dropdown title="Инструментальные исследования">
                        <div className="ml-[40px]">
                            <Checkbox
                                label="Kompleks UZI"
                                checked={checkedItems['kompleksUZI'] || false}
                                onChange={() =>
                                    handleCheckboxChange('kompleksUZI')
                                }
                            />
                        </div>
                    </Dropdown>
                </div>
            </Dropdown>
        </div>
    );
};

export default CollapsibleTable;
