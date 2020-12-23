import React from "react";
import "./index.css";
import { Grid } from "@material-ui/core";

export default function ContactContainer() {
  const ppStyle = {
    borderRadius: "100%",
    padding: "10px",
    width: "300px",
  };
  const gitStyle = {
    width: "40px",
  };
  return (
    <Grid item lg={11}>
      <h2 style={{ color: "#410096" }}>Creators</h2>

      <hr />
      <br />
      <div className="creators">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <h3 style={{ color: "#410096" }}>Halit Batur</h3>
          <div>
            <a href="https://www.linkedin.com/in/halit-batur-481253197/">
              <img
                alt="linkedin"
                style={gitStyle}
                src="https://img.pngio.com/banner-black-and-white-download-linkedin-svg-instagram-circle-black-and-white-linkedin-png-880_921.png"
              />
            </a>
            <img
              alt="halit-pp"
              style={ppStyle}
              src="https://avatars1.githubusercontent.com/u/61846570?s=400&u=1a3d2f68487630198ae328f5ce12c57134e6b460&v=4"
            />
            <a href="https://github.com/halit-batur">
              <img
                alt="github"
                style={gitStyle}
                src="https://image.flaticon.com/icons/png/512/37/37318.png"
              />
            </a>{" "}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <h3 style={{ color: "#410096" }}>Bilge Dal</h3>
          <div>
            <a alt="linkedin" href="https://tr.linkedin.com/in/gbilgedal/en-us">
              <img
                alt="github"
                style={gitStyle}
                src="https://img.pngio.com/banner-black-and-white-download-linkedin-svg-instagram-circle-black-and-white-linkedin-png-880_921.png"
              />
            </a>
            <img
              alt="gunsu"
              style={ppStyle}
              src="https://avatars0.githubusercontent.com/u/23294855?s=460&u=c13e9b62ee31e8cee63b3d7de7381c6118894a4a&v=4"
            />
            <a href="https://github.com/gbilgedal">
              <img
                alt="github"
                style={gitStyle}
                src="https://image.flaticon.com/icons/png/512/37/37318.png"
              />
            </a>{" "}
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <h1>
        This was the final project at Re:Coded Front End Development Bootcamp
        2020.
      </h1>
    </Grid>
  );
}
