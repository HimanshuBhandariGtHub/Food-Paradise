import React from "react";
import ReactDOM from "react-dom/client";

const heading=<h1>Food Paradise App</h1>;

const Heading =()=>{
    return (
        <div className="firstDiv">
            {heading}
        </div>
    )
}
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading/>);
