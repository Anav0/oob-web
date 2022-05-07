/* eslint-disable react-hooks/exhaustive-deps */
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  CircularProgress,
  Collapse,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { Conflict, UnitsInConflict } from "models/types";
import React, { useEffect, useState } from "react";

import { ArticleOutlined } from "@mui/icons-material/";
import api from "api";
import { UnitSmall } from "./unit-small";

type ConflictListProps = {
  results: Conflict[];
  level?: number;
};

const MyListItem = ({ level = 1, x }: any) => {
  const [open, setOpen] = useState(level <= 1);
  const [units, setUnits] = useState<UnitsInConflict[]>([]);
  const [fetched, setFetched] = useState(false);
  const [loadingUnits, setLoadingUnits] = useState(false);

  const getVariant = () => {
    if (level >= 0 && level <= 4) {
      return `h${level + 2}`;
    }
    return "body2";
  };

  const getConflictModifier = (conflict: Conflict) => {
    if (conflict.Children) {
      return "operation";
    }
    return "battle";
  };

  useEffect(() => {
    const fetchUnits = async () => {
      setLoadingUnits(true);
      let details = await api.conflicts.detail(x.Id);
      setUnits(details.UnitsInConflicts);
      setFetched(true);
      setLoadingUnits(false);
    };
    if (open && !fetched) {
      fetchUnits();
    }
  }, [open]);

  useEffect(() => {
    for (let x of units) {
      console.log(x);
    }
  }, [units]);

  const variant: any = getVariant();
  const btn = open ? <ExpandLess /> : <ExpandMore />;
  let unitsUi;

  if (open && loadingUnits) {
    unitsUi = <CircularProgress className="unitsLoading" color="inherit" size={20} />;
  }
  if (open && !loadingUnits && fetched && units.length > 0) {
    const bySide: any = units.reduce((groups: any, item: any) => {
      const group: any = groups[item.UnitInfo.SideId] || [];
      group.push(item);
      groups[item.UnitInfo.SideId] = group;
      return groups;
    }, {});
    console.log(bySide);

    //TODO: add colors for sides
    unitsUi = Object.entries(bySide).map((pair: any) => {
      let sideColor = "transparent";
      let units: UnitsInConflict[] = pair[1];
      const lis = units.map((x) => <UnitSmall unit={x} />);
      return (
        <ul style={{ backgroundColor: sideColor }} className="conflict-list__units conflict-list__units--">
          {lis}
        </ul>
      );
    });
  }
  return (
    <>
      <ListItem
        sx={{ pl: 4 * level }}
        className={`conflict-item conflict-item--${getConflictModifier(x)}`}
        secondaryAction={
          <IconButton onClick={() => setOpen(!open)} edge="end">
            {btn}
          </IconButton>
        }
        key={`${x.name}_${x.id}`}
      >
        <ListItemIcon>
          <IconButton>
            <ArticleOutlined />
          </IconButton>
        </ListItemIcon>
        <ListItemButton onClick={() => setOpen(!open)}>
          <ListItemText
            primary={
              <React.Fragment>
                <Typography variant={variant} color="text.primary">
                  {x.Name}
                </Typography>
              </React.Fragment>
            }
            secondary={
              <React.Fragment>
                <Typography sx={{ display: "inline" }} component="span" variant="body2" color="text.secondary">
                  {x.From.toDateString()} - {x.Until == null ? "present" : x.Until.toDateString()}
                </Typography>
              </React.Fragment>
            }
          />
        </ListItemButton>
      </ListItem>
      <Collapse in={open}>
        {unitsUi}
        <NestedList level={level + 1} results={x.Children} />
      </Collapse>
    </>
  );
};

const NestedList = ({ level = 1, results: conflicts }: ConflictListProps) => {
  const items = conflicts.map((x) => <MyListItem level={level + 1} x={x} />);
  return <List className="conflict-list">{items}</List>;
};

export default NestedList;
