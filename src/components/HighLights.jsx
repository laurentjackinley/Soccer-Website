import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";

const HighLights = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios(
      `https://www.scorebat.com/video-api/v3/feed/?token=MjU0NjlfMTY2MTk5MTAyMl9kYmNjZWQ1YjA1OTY3N2ZmNGE5ZTdmNGQwMjA5ZWE2M2JhNWMyNDA1`
    )
      .then((res) => {
        console.log(res.data);
        setData(res.data.response);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="video-container">
      <h2>Highlight</h2>
      {data.map((item) => {
        return (
          <div className="itemDiv" key={item.title}>
            <div className="itemHead">
              <h4>{item.title}</h4>
            </div>
            <div className="itemImage">
              <img src={item.thumbnail} alt="The imgs" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HighLights;
