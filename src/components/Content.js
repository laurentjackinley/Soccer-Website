import React, { useState } from "react";
import "../App.css";
import League from "./League";
import Standing from "./Standing";
import HighLight from "./HighLights";

const Content = () => {
  const [active, setActive] = useState(true);
  const [highlight, setHighLight] = useState(false);

  function leagueClick() {
    setHighLight(false);
    setActive(true);
  }

  function standingClick() {
    setActive(false);
    setHighLight(false);
  }

  function highlightClick() {
    setHighLight(true);
    setActive(false);
  }
  return (
    <div className="content-container">
      <div className="tabs">
        <div className="tab-leagues" onClick={leagueClick}>
          <h2 style={{ color: active ? "red" : null }}>Leagues</h2>
        </div>
        <div className="tab-standings" onClick={standingClick}>
          <h2 style={{ color: !active ? "red" : null }}>Standings</h2>
        </div>
        <div className="tab-highlights" onClick={highlightClick}>
          <h2 style={{ color: !active ? "red" : null }}>HighLight</h2>
        </div>
      </div>
      {highlight ? <HighLight /> : active ? <League /> : <Standing />}
    </div>
  );
};

export default Content;
