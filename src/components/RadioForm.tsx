import { Box, FormControlLabel, Radio, RadioGroup } from '@mui/material';
type propsType = {
  data?: any;
  style?: string;
  disabled?: boolean
};
const RadioForm = (props: propsType) => {
  return (
    <Box className={`${props.style ? props.style : 'w-[100%]'}`}>
      <RadioGroup
        defaultValue={props.data[0]?.value}
        name="radio-buttons-group"
        className="flex flex-wrap "
        row>
        {props.data !== undefined
          ? props.data.map((item: any, index: number) => {
            return (
              <FormControlLabel
                key={index}
                value={item.value}
                control={<Radio disabled={props.disabled} />}
                label={item.label}
              />
            );
          })
          : null}
      </RadioGroup>
    </Box>
  );
};

export default RadioForm;
