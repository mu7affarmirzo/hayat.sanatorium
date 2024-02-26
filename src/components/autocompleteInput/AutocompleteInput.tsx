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
  lable?: string;
  containerStyle?: string;
  inputStyle?: string;
  lableStyle?: string;
  placeholder?: string;
  multiple?: boolean;
};

interface Film {
  id?: number;
  email?: string;
  username?: string;
  f_name?: string;
  l_name?: string;
  m_name?: string;
  phone_number?: string;
  sex?: boolean;
  organization_id?: number;
  branch_id?: number;
  color?: string;
}
function sleep(duration: number): Promise<void> {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}
const AutocompleteInput = (props: propsType) => {
  let { data, lable, containerStyle, inputStyle, lableStyle, multiple } = props;
  const users = [
    {
      id: 97,
      email: 'dstooke2n@tinyurl.com',
      username: 'dstooke2n',
      f_name: 'Deerdre',
      l_name: 'Pionter',
      m_name: 'Stooke',
      phone_number: '3204783908',
      sex: true,
      organization_id: 65,
      branch_id: 2,
      color: 'Red',
    },
  ];

  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState<readonly Film[]>([]);
  const loading = open && options?.length === 0;

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      await sleep(1e3); // For demo purposes.

      if (active) {
        setOptions([...(data || users)]);
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
      className={`${
        containerStyle ? containerStyle : 'flex-row w-[100%]'
      } flex  gap-1 z-[100]  `}>
      {lable ? (
        <Box className={` ${lableStyle} text-[#8d8c8c]`}>
          <Typography className="text-[14px] font-normal  mr-[5px]">
            {lable}
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
          // placeholder={props.placeholder}
          size="small"
          id="free-solo-2-demo"
          disableClearable
          options={options || []}
          renderInput={(params) => <TextField {...params} />}
          className={`${inputStyle ? inputStyle : ' w-[70%] '} `}
        />
      )}
    </Box>
  );
};

export default AutocompleteInput;
