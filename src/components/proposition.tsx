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
  let x = propositions.map((x) => <span>{x.name}</span>);

  return (
    <div className="proposition">
      <h1 className="proposition__header">{header}</h1>
      <img src={img} alt="nic" className="proposition__img" />
      <p className="proposition__desc">{desc}</p>
      {x}
      <button>Advanced search</button>
    </div>
  );
}

export default Proposition;
