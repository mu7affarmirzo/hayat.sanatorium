import {
    Box,
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
} from '@mui/material';
import DefaultText from './defaultText/DefaultText';
type propsType = {
    data?: any;
};
const RadioForm = (props: propsType) => {
    console.log(props.data);

    return (
        <Box className=" w-[100%] ">
            <RadioGroup
                defaultValue={props.data[0]?.value}
                name="radio-buttons-group"
                className="flex flex-wrap "
                row
            >
                {props.data !== undefined
                    ? props.data.map((item: any, index: number) => {
                          return (
                              <FormControlLabel
                                  key={index}
                                  value={item.value}
                                  control={<Radio />}
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
