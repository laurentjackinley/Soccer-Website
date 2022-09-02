import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

const Standing = () => {
  const [data, setData] = useState([]);
  const [selectedLeague, setSelectedLeague] = useState("eng.1");
  const [selectedYear, setSelectedYear] = useState("2022");

  useEffect(() => {
    axios(
      `https://api-football-standings.azharimm.site/leagues/${selectedLeague}/standings?season=${selectedYear}`
    )
      .then((res) => {
        console.log(res.data);
        console.log(res.data.data.standings[0]);
        console.log(res.data.data.standings[0].stats);
        setData(res.data.data.standings);
      })
      .catch((err) => console.log(err));
  }, [selectedYear, selectedLeague]);
  return (
    <div className="standing-container">
      <div className="select-container">
        <select
          name="select-league"
          id="select-league"
          defaultValue={selectedLeague}
          onChange={(e) => setSelectedLeague(e.target.value)}
        >
          <option value="ned.1">Dutch Eredivisie</option>
          <option value="eng.1">English Premier League</option>
          <option value="fra.1">French Ligue 1</option>
          <option value="ger.1">German Bundesliga</option>
          <option value="ita.1">Italian Serie A</option>
          <option value="esp.1">Spanish Primera División</option>
        </select>
        <select
          name="select-year"
          id="select-year"
          onChange={(e) => setSelectedYear(e.target.value)}
          defaultValue={selectedYear}
        >
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>
      {/* <div className="standing-result">
        {data.map((data, index) => {
          return (
            <div key={data.team.id} className="standing-info-div">
              <span>
                {`${index + 1}.`}
                <img
                  src={data.team.logos[0].href}
                  alt="the logo"
                  style={{ width: "30px" }}
                />
                <h3>{data.team.shortDisplayName}</h3>
              </span>
              <p>{data.team.name}</p>
              <p>{data.stats[3].value}</p>
              <p>{data.stats[0].value}</p>
              <p>{data.stats[2].value}</p>
              <p>{data.stats[3].value}</p>
              <p>{data.stats[4].value}</p>
              <p>{data.stats[5].value}</p>
              <p>{data.stats[9].value}</p>
              <p>{data.stats[6].value}</p>
            </div>
          );
        })}
      </div> */}

      <table>
        <tr>
          <th>Club</th>
          <th>MP</th>
          <th>W</th>
          <th>D</th>
          <th>L</th>
          <th>GF</th>
          <th>GA</th>
          <th>GD</th>
          <th>Pts</th>
        </tr>
        {data.map((data, index) => {
          return (
            <tr key={data.team.id} className="standing-info-div">
              <td>
                {`${index + 1}.`}
                <img
                  src={data.team.logos[0].href}
                  alt="the logo"
                  style={{ width: "30px" }}
                />
                <h3>{data.team.shortDisplayName}</h3>
              </td>
              {/* <td>{data.team.name}</td> */}
              <td>{data.stats[3].value}</td>
              <td>{data.stats[0].value}</td>
              <td>{data.stats[2].value}</td>
              <td>{data.stats[1].value}</td>
              <td>{data.stats[4].value}</td>
              <td>{data.stats[5].value}</td>
              <td>{data.stats[9].value}</td>
              <td>{data.stats[6].value}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Standing;
