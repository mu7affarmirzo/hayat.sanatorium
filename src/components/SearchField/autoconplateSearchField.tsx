import { Autocomplete, CircularProgress, TextField } from '@mui/material';
import React, { FC, useCallback } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { Category } from 'components/diagnosticCeckboxItem/hook';
import { InitAppointmentTypes } from 'types/patientTypes';

interface SearchSelectFieldProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  options: Category[];
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  fieldValue: any;
  setFieldValue: React.Dispatch<React.SetStateAction<any>>;
  fieldname: keyof InitAppointmentTypes;
  methods: UseFormReturn<InitAppointmentTypes, any, InitAppointmentTypes>;
}

const SearchSelectField: FC<SearchSelectFieldProps> = ({
  open,
  setOpen,
  options,
  loading,
  setLoading,
  fieldValue, // Receiving the fieldValue prop from the parent
  setFieldValue,
  fieldname,
  methods,
}) => {
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
