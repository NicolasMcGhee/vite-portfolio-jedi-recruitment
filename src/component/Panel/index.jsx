import React from "react";
import './index.css'
export default function Panel(props) {
  return (
    <div className="Panel_Container">
      
      <div>
        <img src={props.image} alt="" width={100}/>
      </div>
      <div className="Panel_Text">
        <h3>Work/Life Balance</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni beatae at ex veritatis quis. Ea quod reiciendis dolores repudiandae. Porro mollitia sint esse eligendi laboriosam.</p>
      </div>
    </div>
  );
}
