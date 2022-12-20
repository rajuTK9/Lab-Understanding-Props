import { Component } from "react";
import "./App.css";
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component {
  gridStyle = {
    display: "grid",
    gap: "10px",
    alignContent: "center",
    justifyContent: "center",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "1fr 1fr",
    margin: "0 auto",
  };

  imageStyle = {
    maxHeight: "400px",
    margin: "0 auto",
    minWidth: "100px",
  };

  imageData = () => {
    let data = [
      {
        id: 1,
        img: elephant,
      },
      {
        id: 2,
        img: elephant,
      },
      {
        id: 3,
        img: elephant,
      },
      {
        id: 4,
        img: elephant,
      },
    ];
    return data;
  };

  render() {
    let data = this.imageData();
    return (
      <>
        <h2 style={{ textAlign: "center" }}> Kalvium Gallery </h2>
        <div style={this.gridStyle} id="grid">
          {data.map((e) => {
            return (
              <img
                style={this.imageStyle}
                className="image"
                src={e.img}
                id={e.id}
              />
            );
          })}
        </div>
      </>
    );
  }
}
