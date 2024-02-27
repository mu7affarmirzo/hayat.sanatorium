import {
  Autocomplete,
  Box,
  CircularProgress,
  TextField,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';

interface AutocompleteInputProps {
  data?: any;
  label?: string;
  containerStyle?: string;
  inputStyle?: string;
  labelStyle?: string;
  placeholder?: string;
  multiple?: boolean;
}

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

const AutocompleteInput: React.FC<AutocompleteInputProps> = ({
  data,
  label,
  containerStyle,
  inputStyle,
  labelStyle,
  placeholder,
  multiple,
}) => {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<readonly Film[]>([]);
  const loading = open && options?.length === 0;

  useEffect(() => {
    let active = true;

    const fetchData = async () => {
      await sleep(1e3);
      if (active) {
        setOptions([...(data || [])]);
      }
    };

    if (loading) {
      fetchData();
    }

    return () => {
      active = false;
    };
  }, [loading, data]);

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
    <Box
      className={`${containerStyle ? containerStyle : 'flex-row w-[100%]'} flex gap-1 z-[100]`}>
      {label && (
        <Box className={` ${labelStyle} text-[#8d8c8c]`}>
          <Typography className="text-[14px] font-normal  mr-[5px]">
            {label}
          </Typography>
        </Box>
      )}
      <Autocomplete
        multiple={multiple}
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        loading={loading}
        options={options}
        isOptionEqualToValue={(option, value) =>
          option?.username === value?.username
        }
        getOptionLabel={(option: any) => option?.username}
        renderInput={(params) => (
          <TextField
            {...params}
            InputProps={{
              ...params?.InputProps,
              endAdornment: loading ? (
                <CircularProgress color="inherit" size={20} />
              ) : null,
            }}
          />
        )}
        className={`${inputStyle ? inputStyle : ' w-[70%] '}`}
        limitTags={3}
      />
    </Box>
  );
};

export default AutocompleteInput;
