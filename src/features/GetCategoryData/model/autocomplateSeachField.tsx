import { Autocomplete, CircularProgress, TextField } from '@mui/material';
import { Category } from 'components/AutocomplateCategoryBox/hook';
import React, { useCallback, useState, useEffect } from 'react';
import { FieldValues, Path, UseFormReturn } from 'react-hook-form';
import { InitAppointmentTypes } from 'types/patientTypes';

interface Props<T extends FieldValues> {
  categoryData: Category[];
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  fieldname: Path<T>;
  methods: UseFormReturn<any, any, any>;
}

const AutoComplateSearchField = <T extends InitAppointmentTypes>({
  open,
  setOpen,
  categoryData,
  fieldname,
  methods,
}: Props<T>) => {
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

export default AutoComplateSearchField;

function sleep(duration: number): Promise<void> {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}
