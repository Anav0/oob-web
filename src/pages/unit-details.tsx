import { Select, MenuItem, Typography } from "@mui/material";
import { Timeline } from "components/timeline";
import { TimelinePeriod } from "models/types";
import React, { Component, useState } from "react";
import { useParams } from "react-router-dom";

const UnitDetails = () => {
  const { id } = useParams();
  const [selectedSection, setSelectedSection] = useState("oob");

  const getSectionUi = (sectionName: string) => {
    if (sectionName == "oob") {
      return <span>OOB</span>;
    }
    if (sectionName == "map") {
      return <span>map</span>;
    }
  };

  //@Info: JS months are zero based
  const start = new Date(1940, 0, 1);
  const end = new Date(1944, 0, 1);
  const periods: TimelinePeriod[] = [
    {
      name: "Wallon Legion",
      sub: "Created",
      color: "#FDDA24",
      border: "#FDDA24",
      start: new Date(1940, 0, 1),
      end: new Date(1941, 0, 1),
    },
    {
      name: "Infanterie Battalion 373",
      sub: "Joined Wermaht",
      color: "#2C342A",
      border: "#2c342a",
      start: new Date(1941, 0, 1),
      end: new Date(1942, 6, 1),
    },
    {
      name: "SS-SturmBrigade Wallonien",
      sub: "Joined SS",
      color: "#0000",
      border: "#ffff",
      start: new Date(1942, 6, 1),
      end: new Date(1944, 0, 1),
    },
  ];

  const url =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/28._SS-Freiwilligen-Grenadier-Division%2C_%E2%80%9EWallonien%E2%80%9D.svg/1920px-28._SS-Freiwilligen-Grenadier-Division%2C_%E2%80%9EWallonien%E2%80%9D.svg.png";

  return (
    <div className="up">
      <div className="up__header">
        <img className="up__insignia" alt="Image showcasing units insignia" src={url}></img>
        <div>
          <Typography variant="h1">28th SS Division</Typography>
          <Typography variant="subtitle1">28th March 1941 - 14th May 1944</Typography>
        </div>
      </div>
      <Typography className="up__desc" paragraph>
        The Walloon Legion (French: Légion Wallonie, lit. "Wallonia Legion") was a unit of the German Army (Wehrmacht)
        and later of the Waffen-SS recruited among French-speaking collaborationists in German-occupied Belgium during
        World War II. It was formed in the aftermath of the German invasion of the Soviet Union and fought on the
        Eastern Front alongside similar formations from other parts of German-occupied Western Europe.
      </Typography>
      <section className="up__section">
        <Select
          sx={{ width: 150 }}
          value={selectedSection}
          onChange={(x) => {
            setSelectedSection(x.target.value);
          }}
        >
          <MenuItem selected value="oob">
            Order of battle
          </MenuItem>
          <MenuItem value="map">Map</MenuItem>
        </Select>
        {getSectionUi(selectedSection)}
      </section>
      <Timeline
        onSelection={(date, period) => {
          console.log(date, period);
        }}
        periods={periods}
        start={start}
        end={end}
      />
    </div>
  );
};
export default UnitDetails;
