export interface MultiLevelDropdownOption {
  label: string;
  value: string;
  children?: MultiLevelDropdownOption[];
}

export const options: MultiLevelDropdownOption[] = [
  {
    label: 'Option 1',
    value: 'option1',
    children: [
      {
        label: 'Suboption 1',
        value: 'suboption1',
      },
      {
        label: 'Suboption 2',
        value: 'suboption2',
      },
    ],
  },
  {
    label: 'Option 2',
    value: 'option2',
  },
];
