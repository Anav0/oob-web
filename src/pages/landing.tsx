import Proposition, { PropositionProps } from "components/proposition";
import units from "assets/images/units.png";
import germans from "assets/images/germans.webp";
import { Quick } from "components/quick";

function Landing() {
  const conflictProposition = {
    desc: "Find detailed information about units history, composition, battles fought and many more",
    header: "Conflicts",
    img: germans,
    propositions: [
      { link: "", name: "Second World War" },
      { link: "", name: "The Great War" },
      { link: "", name: "American Civil War" },
      { link: "", name: "Russian Civil War" },
    ],
  };
  const unitsProposition = {
    desc: "Find detailed information about units history, composition, battles fought and many more",
    header: "Units",
    img: units,
    propositions: [
      { link: "", name: "1 Panzer Division" },
      { link: "", name: "7 Panzer Division" },
      { link: "", name: "2 Infantry Division" },
      { link: "", name: "365th Infantry Regiment" },
    ],
  };

  const quickPropositions = [
    { name: "Unit finder", link: "" },
    { name: "Operation-battle finder", link: "" },
    { name: "Order of battle browser", link: "" },
    { name: "Documents and sources", link: "" },
    { name: "Maps, orders, videos", link: "" },
  ];

  return (
    <div className="landing">
      <Proposition className="landing__conflicts" {...conflictProposition} />
      <Proposition className="landing__units" {...unitsProposition} />
      <Quick className="landing__quick" header="Quick" propositions={quickPropositions} />
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
