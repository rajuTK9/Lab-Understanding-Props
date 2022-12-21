import { Component } from "react";
import "./App.css";

export default class AppClass extends Component {
  render() {
    return (
      <>
        <h2> Kalvium Gallery </h2>
        <div id="grid">
          {this.props.data.map((e) => {
            return <img className="image" src={e.img} id={e.id} />;
          })}
        </div>
      </>
    );
  }
}
