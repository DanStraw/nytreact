import React from "react";
import "./form.css"

export const Button = props => (
  <div className="btn-div">
    <button {...props} style={{ alignSelf: "center", marginBottom: 10 }} className="btn btn-success">
      {props.children}
    </button>
  </div>
);