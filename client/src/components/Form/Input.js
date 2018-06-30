import React from "react";
import './form.css';

export const Input = props => (
  <div className="input-div">
    <label>{props.label}</label>
    <input  {...props} className="search-input" placeholder={props.placeholder} value={props.value}/>
  </div>
);
