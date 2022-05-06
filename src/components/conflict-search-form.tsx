import { Formik, Form, Field, FormikErrors } from "formik";
import LoadingButton from "@mui/lab/LoadingButton";
import { TextField } from "formik-mui";
import { DatePicker } from "formik-mui-lab";
import { LocalizationProvider } from "@mui/lab";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import AsyncAutocomplete from "./async-autocomplete";
import { ConflictSearchPayload, Conflict, fixDates, Place } from "models/types";
import api from "api";
import { EuroSymbolTwoTone } from "@mui/icons-material";
import { useState } from "react";

type ConflictSearchComponentProps = {
  callback: (results: Conflict[]) => void;
};

const ConflictSearchComponent = ({ callback }: ConflictSearchComponentProps) => {
  const [errors, setErrors] = useState<FormikErrors<ConflictSearchPayload>>({});

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <Formik
        initialValues={
          {
            name: "",
            placeTypeName: "",
            placeId: undefined,
            parentId: undefined,
            from: new Date(1700, 1, 1),
            until: new Date(),
            limit: 10,
            page: 0,
          } as ConflictSearchPayload
        }
        validate={(values) => {
          setErrors({});
          console.log(values);

          if (values.from && values.until) {
            if (values.from > values.until) {
              errors.from = "From date cannot be after until date";
            }
            if (values.until < values.from) {
              errors.from = "Until date cannot be before from date";
            }
          }

          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          setSubmitting(true);

          if (values.parentId) values.parentId = values.parentId.Id;
          if (values.placeId) values.placeId = values.placeId.Id;

          let result = await api.conflicts.search(values);
          //TODO: fix parsing of dates
          fixDates(result);
          callback(result);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field component={TextField} name="name" label="Conflict Name" />
            <div>
              <Field component={DatePicker} name="from" label="From" />
              <Field component={DatePicker} name="until" label="Until" />
            </div>
            <AsyncAutocomplete
              label="Was part of"
              placeholder="e.g Fall Blau"
              delay={500}
              fieldAttr={{
                name: "parentId",
                id: "parentId",
                getOptionLabel: (option: Conflict) => option.Name,
              }}
              fetch={(phrase) => {
                return api.conflicts.search({ name: phrase, limit: 20, page: 0 });
              }}
            />
            <AsyncAutocomplete
              label="Took place at"
              placeholder="e.g Africa"
              fieldAttr={{
                name: "placeId",
                id: "placeId",
                getOptionLabel: (option: Place) => option.Name,
              }}
              fetch={(phrase) => {
                return api.place.search({ name: phrase, limit: 20, page: 0 });
              }}
            />
            <LoadingButton type="submit" loading={isSubmitting} loadingPosition="center" variant="outlined">
              Search
            </LoadingButton>
          </Form>
        )}
      </Formik>
    </LocalizationProvider>
  );
};

export default ConflictSearchComponent;
