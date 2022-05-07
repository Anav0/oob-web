import { TimelinePeriod } from "models/types";
import React from "react";

type PeriodProps = {
  period: TimelinePeriod;
  style?: React.CSSProperties;
};

function Period({ period, style }: PeriodProps) {
  const options: any = {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  };
  const span = `${period.start.toLocaleDateString("pl", options)} - ${period.end.toLocaleDateString("pl", options)}`;
  return (
    <div className="period" style={style}>
      <div
        className="period__line"
        style={{ height: 5, width: "100%", borderColor: period.border, backgroundColor: period.color }}
      ></div>
      <div className="period__text">
        <span className="period_name">{period.name}</span>
        <span className="period__sub">{period.sub}</span>
        <span className="period__dates">{span}</span>
      </div>
    </div>
  );
}

export default Period;
