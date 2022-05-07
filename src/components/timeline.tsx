import { TimelineEvent, TimelinePeriod } from "models/types";
import moment from "moment";
import React from "react";

type TimelineProps = {
  start: Date;
  end: Date;
  events?: TimelineEvent[];
  periods?: TimelinePeriod[];
  starting_date?: Date;
};
export const Timeline = (props: TimelineProps) => {
  let s_m = moment(props.start);
  let e_m = moment(props.end);
  let lines = Math.round(moment.duration(e_m.diff(s_m)).asMonths());

  if (lines <= 0) {
    console.error("Difference between start and end is less than a month");
  }
  lines++;

  const divisiors = [];
  let columns = "";
  let counter = 0;
  for (let i = 0; i < lines; i++) {
    divisiors[i] = <div style={{ gridColumn: `${counter + 1}/${counter + 2}` }} className="timeline__divisior"></div>;
    columns += "1fr auto ";
    counter += 2;
  }

  return (
    <div className="timeline">
      <div style={{ gridTemplateColumns: columns }} className="timeline__line">
        {divisiors}
      </div>
    </div>
  );
};
