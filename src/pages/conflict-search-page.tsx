import { Typography } from "@mui/material";
import NestedList from "components/conflict-list";
import ConflictSearchComponent from "components/conflict-search-form";
import { Conflict } from "models/types";
import React, { useState } from "react";

export const ConflictSearchPage = () => {
  const [results, setResults] = useState<Conflict[]>([]);
  return (
    <div className="cs-page">
      <div className="cs-page__search">
        <h2>Advance conflict search</h2>
        <ConflictSearchComponent callback={(conflicts) => setResults(conflicts)} />
      </div>
      <div className="cs-page__results">
        <h2> Found conflicts</h2>
        {results.length > 0 && <NestedList results={results} />}
        {results.length === 0 && (
          <Typography variant="h4" sx={{ mt: 2 }}>
            No results
          </Typography>
        )}
      </div>
    </div>
  );
};
