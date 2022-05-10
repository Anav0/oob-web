import { AdfScannerTwoTone } from "@mui/icons-material";
import { diffInMonths } from "helpers";
import { TimelineEvent, TimelinePeriod } from "models/types";
import moment, { months } from "moment";
import React, { useMemo, useState } from "react";
import Period from "./period";

type TimelineProps = {
  start: Date;
  end: Date;
  events?: TimelineEvent[];
  periods?: TimelinePeriod[];
  starting_date?: Date;
  onSelection?: (date: Date, period?: TimelinePeriod) => void;
};
export const Timeline = (props: TimelineProps) => {
  const [selectedMonth, setSelectedMonth] = useState<number>(
    props.starting_date ? diffInMonths(props.starting_date, props.start) : 0
  );

  let lines = diffInMonths(props.end, props.start);

  if (lines <= 0) {
    throw new Error("Difference between start and end is less than a month");
  }

  lines++;

  if (selectedMonth > lines || selectedMonth < 0) {
    setSelectedMonth(0);
  }
  const combined = [];
  let columns = "";

  let counter = 0;
  for (let i = 0; i < lines * 2; i += 2) {
    columns += "1fr auto ";

    let opacity = selectedMonth === counter ? 0.5 : 0.0;

    combined.push(
      <div
        onClick={() => {
          if (!props.onSelection || !props.periods) return;

          let selectedMonth = moment(props.start)
            .add(i / 2, "months")
            .toDate();
          let period = props.periods.find((x) => x.start <= selectedMonth && x.end > selectedMonth);

          props.onSelection(selectedMonth, period);
        }}
        className="timeline__month"
        style={{ opacity: opacity, gridColumn: `${i + 1}/${i + 2}` }}
      ></div>
    );
    combined.push(<div style={{ gridColumn: `${i + 2}/${i + 3}` }} className="timeline__divisior"></div>);
    counter += 1;
  }

  let periods = [];
  for (let period of props.periods || []) {
    let start: any = diffInMonths(period.start, props.start);
    start = start * 2;

    if (start < 0) {
      throw new Error(
        `Period start date cannot be sonner then overall start: ${period.start} is sonner than ${props.start}`
      );
    }

    let span = diffInMonths(period.end, period.start) * 2;
    let end = span + start;
    let periodUi = <Period period={period} style={{ gridColumn: `${start + 1}/${end}` }} />;
    periods.push(periodUi);
  }

  return (
    <div className="timeline">
      <div style={{ gridTemplateColumns: columns }} className="timeline__line">
        {combined}
      </div>
      <div style={{ gridTemplateColumns: columns }} className="timeline__periods">
        {periods}
      </div>
    </div>
  );
};
