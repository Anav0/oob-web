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
  className: string;
  searchLink: string;
  propositions: PropositionModel[];
};

function Proposition({ searchLink, img, className, header, desc, propositions }: PropositionProps) {
  let entries = propositions.map((x) => <ListEntry {...x} />);
  let options = ["A", "B"];

  return (
    <div className={`proposition ${className}`}>
      <div className="proposition__header_wrapper">
        <h1 className="proposition__header">{header}</h1>
        <Autocomplete
          fullWidth
          placeholder="Search..."
          options={options}
          renderInput={(params) => <TextField {...params} variant="standard" label="Search..." />}
        />
      </div>
      <img src={img} alt="nic" className="proposition__img" />
      <p className="proposition__desc">{desc}</p>
      {entries}
      <Button href={searchLink} size="large" variant="outlined">
        Advanced search
      </Button>
    </div>
  );
}

export default Proposition;
