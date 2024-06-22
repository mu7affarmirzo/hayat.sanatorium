import {
  Autocomplete,
  Box,
  CircularProgress,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';

type propsType = {
  data?: any;
  label?: string;
  containerStyle?: string;
  inputStyle?: string;
  labelStyle?: string;
  placeholder?: string;
  multiple?: boolean;
  optionsData?: [];
  disabled?: boolean
};

function sleep(duration: number): Promise<void> {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}
const AutocompleteInput = (props: propsType) => {
  let { label, containerStyle, inputStyle, labelStyle, multiple, optionsData, disabled } =
    props;

  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState<readonly any[]>([]);
  const loading = open && options?.length === 0;

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      await sleep(1e3);

      if (active) {
        setOptions([...(optionsData || [])]);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
    <Box
      className={`${containerStyle ? containerStyle : 'flex-row w-[100%]'
        } flex  gap-1 z-[100]  `}>
      {label ? (
        <Box className={` ${labelStyle} text-[#8d8c8c]`}>
          <Typography className="text-[14px] font-normal  mr-[5px]">
            {label}
          </Typography>
        </Box>
      ) : null}
      {multiple ? (
        <Autocomplete
          multiple
          id="asynchronous-demo"
          size="small"
          open={open}
          onOpen={() => {
            setOpen(true);
          }}
          onClose={() => {
            setOpen(false);
          }}
          disabled={disabled}
          loading={loading}
          options={options || []}
          isOptionEqualToValue={(option, value) =>
            option?.username === value?.username
          }
          getOptionLabel={(option: any) => option?.username}
          renderInput={(params) => (
            <TextField
              {...params}
              InputProps={{
                ...params?.InputProps,
                endAdornment: (
                  <React.Fragment>
                    {loading ? (
                      <CircularProgress color="inherit" size={20} />
                    ) : null}
                    {params?.InputProps?.endAdornment}
                  </React.Fragment>
                ),
              }}
            />
          )}
          className={`${inputStyle ? inputStyle : ' w-[70%] '} `}
          limitTags={3}
        />
      ) : (
        <Autocomplete
          disabled={disabled}
          size="small"
          id="free-solo-2-demo"
          disableClearable
          options={options || []}
          renderInput={(params) => <TextField {...params} />}
          className={`${inputStyle ? inputStyle : ' w-[70%] '} `}
          getOptionLabel={(option: any) => option?.username}
        />
      )}
    </Box>
  );
};

export default AutocompleteInput;
