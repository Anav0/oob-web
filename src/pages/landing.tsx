import Proposition, { PropositionProps } from "components/proposition";
import units from "assets/images/units.png";
import germans from "assets/images/germans.webp";

function Landing() {
  const propositions: PropositionProps[] = [
    {
      desc: "Find detailed information about units history, composition, battles fought and many more",
      header: "Conflicts",
      img: germans,
      propositions: [
        { link: "", name: "Second World War" },
        { link: "", name: "The Great War" },
        { link: "", name: "American Civil War" },
        { link: "", name: "Russian Civil War" },
      ],
    },
    {
      desc: "Find detailed information about units history, composition, battles fought and many more",
      header: "Units",
      img: units,
      propositions: [
        { link: "", name: "1 Panzer Division" },
        { link: "", name: "7 Panzer Division" },
        { link: "", name: "2 Infantry Division" },
        { link: "", name: "365th Infantry Regiment" },
      ],
    },
  ];

  let propositions_ui = propositions.map((x, i) => <Proposition key={"proposition_ui_" + i} {...x} />);

  return (
    <div className="landing">
      <div className="landing__propositions">{propositions_ui}</div>
      <div className="landing__dim" />
      <img
        src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/919640/88869b956ebd5f1679678f5ff04dc2bf54e0ff00.jpg"
        className="landing__bg"
        alt="nic"
      />
    </div>
  );
}

export default Landing;
