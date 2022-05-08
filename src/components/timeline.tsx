import { AdfScannerTwoTone } from "@mui/icons-material";
import { TimelineEvent, TimelinePeriod } from "models/types";
import moment, { months } from "moment";
import React, { useState } from "react";
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
  const [selectedMonth, setSelectedMonth] = useState<number>(0);

  let s_m = moment(props.start);
  let e_m = moment(props.end);
  let lines = Math.round(moment.duration(e_m.diff(s_m)).asMonths());

  if (lines <= 0) {
    console.error("Difference between start and end is less than a month");
  }
  lines++;

  const combined = [];
  let columns = "";
  for (let i = 0; i < lines * 2; i += 2) {
    columns += "1fr auto ";
    const opacity = selectedMonth === i ? 0.5 : 0.0;

    combined.push(
      <div
        onClick={() => {
          setSelectedMonth(i);

          if (!props.onSelection) return;

          if (!props.periods) return;
          let selectedMonth = s_m.add(i / 2, "months").toDate();
          let period = props.periods.find((x) => x.start <= selectedMonth && x.end > selectedMonth);

          props.onSelection(selectedMonth, period);
        }}
        className="timeline__month"
        style={{ opacity: opacity, gridColumn: `${i + 1}/${i + 2}` }}
      ></div>
    );
    combined.push(<div style={{ gridColumn: `${i + 2}/${i + 3}` }} className="timeline__divisior"></div>);
  }

  let periods = [];
  for (let period of props.periods || []) {
    let start: any = Math.round(moment.duration(moment(period.start).diff(s_m)).asMonths());
    start = start * 2;

    if (start < 0) {
      throw new Error(`Period start date cannot be sonner then overall start: ${period.start} is sonner than ${s_m}`);
    }
    let span = Math.round(moment.duration(moment(period.end).diff(moment(period.start))).asMonths()) * 2;
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
