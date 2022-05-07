/* eslint-disable react-hooks/exhaustive-deps */
import { CircularProgress, TextField } from "@mui/material";
import { Field } from "formik";
import { Autocomplete } from "formik-mui";
import debounce from "lodash.debounce";
import React, { useMemo } from "react";
import { useEffect, useState } from "react";

export default function AsyncAutocomplete<T>({ label, placeholder, delay, fetch, ...rest }: any) {
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
      {...rest}
      options={options}
      loading={loading}
      renderInput={(params: any) => (
        <TextField
          placeholder={placeholder}
          {...params}
          label={label}
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
