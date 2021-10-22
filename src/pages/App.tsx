import { ConflictsList } from "components/conflicts-list";
import { Operation } from "components/operation";
import { BrowserRouter as Router, Route, Switch, useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Conflict } from "api/data-contracts";
import { Api } from "api/Api";
import { useConflicts } from "hooks/conflicts";

function App() {
  const history = useHistory();

  const { wars, operations, campaigns, selectedWar, selectedOperation } = useConflicts((conflict) => {
    history.push(`/operation/${conflict.Id}`);
  });

  return (
    <Switch>
      <Route path="/operation/:slug">
        <Operation />
      </Route>
      <Route path="/">
        {/* Wars */}
        <ConflictsList selectedIndex={selectedWar} title="Conflicts" conflicts={wars} />
        {/* Areas */}
        <ConflictsList selectedIndex={selectedOperation} title="Areas" conflicts={operations} />
        {/* Campaigns */}
        <ConflictsList selectedIndex={null} title="Campaignes" conflicts={campaigns} />
      </Route>
    </Switch>
  );
}

export default App;
