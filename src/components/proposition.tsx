import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import ListEntry from "./list-entry";

export class PropositionModel {
  link: string;
  name: string;
  constructor(name: string, link: string) {
    this.link = link;
    this.name = name;
  }
}

export type PropositionProps = {
  header: string;
  img: string;
  desc: string;
  propositions: PropositionModel[];
};

function Proposition({ img, header, desc, propositions }: PropositionProps) {
  let entries = propositions.map((x) => <ListEntry {...x} />);
  let options = ["A", "B"];

  return (
    <div className="proposition">
      <div className="proposition__header_wrapper">
        <h1 className="proposition__header">{header}</h1>
        <Autocomplete
          placeholder="Search..."
          options={options}
          renderInput={(params) => <TextField {...params} label="Movie" />}
        />
      </div>
      <img src={img} alt="nic" className="proposition__img" />
      <p className="proposition__desc">{desc}</p>
      {entries}
      <Button size="large" variant="outlined">
        Advanced search
      </Button>
    </div>
  );
}

export default Proposition;
