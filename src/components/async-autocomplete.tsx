import { CircularProgress, TextField } from "@mui/material";
import { ErrorMessage, Field } from "formik";
import { Autocomplete, AutocompleteProps } from "formik-mui";
import debounce from "lodash.debounce";
import React, { useMemo } from "react";
import { useEffect, useState } from "react";

type AsyncAutocompleteProps<T> = {
  label: string;
  placeholder?: string;
  delay?: number;
  fetch: (phrase: string) => Promise<T[]>;
  options?: (option: T) => any;
  fieldAttr: any;
};

export default function AsyncAutocomplete<T>({
  label,
  placeholder,
  delay,
  fetch,
  fieldAttr,
}: AsyncAutocompleteProps<T>) {
  const [loading, setLoading] = useState(false);
  const [phrase, setPhrase] = useState("");
  const [options, setOptions] = useState<readonly T[]>([]);
  const [error, setError] = useState("");

  const debounceSearch = useMemo(
    () =>
      debounce(async (phrase: string) => {
        try {
          let options = await fetch(phrase);
          console.log(options);
          setOptions(options);
        } catch (e: any) {
          setError(e.message);
        } finally {
          setLoading(false);
        }
      }, delay || 250),
    []
  );

  useEffect(() => {
    if (phrase.trim() === "" || !phrase) {
      return;
    }
    setError("");
    setLoading(true);
    debounceSearch(phrase.trim().toLowerCase());
  }, [phrase]);

  return (
    <Field
      component={Autocomplete}
      {...fieldAttr}
      options={options}
      loading={loading}
      renderInput={(params: any) => (
        <TextField
          placeholder={placeholder}
          {...params}
          label={label}
          name={fieldAttr.name}
          onChange={(e: any) => {
            setPhrase(e.target.value);
          }}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {error ? <span>{error}</span> : null}
                {loading && !error ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
}
