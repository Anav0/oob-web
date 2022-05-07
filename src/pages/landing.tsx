import Proposition from "components/proposition";
import units from "assets/images/units.png";
import germans from "assets/images/germans.webp";
import { QuickAccess } from "components/quick-access";

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
      <Proposition searchLink="/conflict/search" className="landing__conflicts" {...conflictProposition} />
      <Proposition searchLink="/unit/search" className="landing__units" {...unitsProposition} />
      <QuickAccess className="landing__quick" header="Quick" propositions={quickPropositions} />
    </div>
  );
}

export default Landing;
