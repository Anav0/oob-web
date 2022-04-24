import { PropositionModel } from "./proposition";

function ListEntry(props: PropositionModel) {
  return (
    <li className="entry">
      <a href={props.link}>{props.name}</a>
      <div className="entry__arrow"></div>
    </li>
  );
}

export default ListEntry;
