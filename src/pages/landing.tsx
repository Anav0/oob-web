import Proposition, { PropositionModel, PropositionProps } from "components/proposition";
import React, { useEffect, useState } from "react";

function Landing() {
  const propositions: PropositionProps[] = [
    {
      desc: "Find detailed information about units history, composition, battles fought and many more",
      header: "Conflicts",
      img: "Find detailed information about units history, composition, battles fought and many more",
      propositions: [],
    },
    { desc: "adwadw", header: "Units", img: "awdadw", propositions: [] },
  ];

  let propositions_ui = propositions.map((x) => <Proposition {...x} />);

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
