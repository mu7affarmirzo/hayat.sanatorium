import { Box, Checkbox, FormControlLabel } from '@mui/material';
import DefaultText from 'components/defaultText/DefaultText';

type propsType = {
  style: string;
  label: string;
  leftLabel: string;
  checkboxStyle: any;
  setValue: any;
  defaultChecked: boolean;
  inputType: string;
};

const DefaultCheckbox = (props: Partial<propsType>) => {
  let { style, label, leftLabel, defaultChecked, setValue, inputType } = props;

  return (
    <Box className={`${style} flex items-center justify-between `}>
      {leftLabel ? (
        <DefaultText style={`${style} text-[#000] text-[14px]`}>
          {leftLabel}
        </DefaultText>
      ) : null}
      <FormControlLabel
        sx={{ padding: 0 }}
        control={
          <Checkbox
            sx={props.checkboxStyle}
            defaultChecked={defaultChecked}
            size="small"
            onChange={(e) => setValue(inputType, e.target.checked)}
          />
        }
        label={label}
        className="text-[#000000DE] text-[14px] leading-5 tracking-[0.15px] p-0 m-0"
      />
    </Box>
  );
};

export default DefaultCheckbox;
