import { Autocomplete, CircularProgress, TextField } from '@mui/material';
import { Category } from 'components/diagnosticCeckboxItem/hook';
import React, { FC, useCallback, useState, useEffect } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { InitAppointmentTypes } from 'types/patientTypes';

interface Props {
  categoryData: Category[];
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  fieldname: keyof InitAppointmentTypes;
  methods: UseFormReturn<InitAppointmentTypes, any, InitAppointmentTypes>;
}

const SearchSelectField: FC<Props> = ({
  open,
  setOpen,
  categoryData,
  fieldname,
  methods,
}) => {
  const [options, setOptions] = useState<readonly Category[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [fieldValue, setFieldValue] = useState<any>(null);

  useEffect(() => {
    let active = true;
    if (open && options.length === 0) {
      setLoading(true);
      (async () => {
        await sleep(1000);
        if (active) {
          setOptions([...categoryData]);
          setLoading(false);
        }
      })();
    }
    return () => {
      active = false;
    };
  }, [open, options.length, categoryData]);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const handleAutocompleteChange = (newValue: Category | null) => {
    const newValueId = newValue ? newValue.name : null;
    setFieldValue(newValue);
    methods.setValue(fieldname, newValueId as never);
  };

  return (
    <Autocomplete
      id="asynchronous-demo"
      sx={{ width: '100%' }}
      open={open}
      value={fieldValue}
      onClose={handleClose}
      onChange={(event, newValue) => handleAutocompleteChange(newValue)}
      size="small"
      loading={loading}
      options={options}
      getOptionLabel={(option) =>
        option && option.name ? option.name.substring(0, 10) : ''
      }
      isOptionEqualToValue={(option, value) => option.id === value.id}
      renderInput={(params) => (
        <TextField
          {...params}
          className="bg-white border "
          InputProps={{
            ...params.InputProps,
            endAdornment: loading ? (
              <CircularProgress color="inherit" size={20} />
            ) : null,
          }}
        />
      )}
    />
  );
};

export default SearchSelectField;

function sleep(duration: number): Promise<void> {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}
