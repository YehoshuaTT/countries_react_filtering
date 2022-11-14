import React from "react";
import "./Header.css"
function Header(props) {

    return (
        <div id="header"><p>Countries: ({props.country.length})</p>
            <div className="passcontainer">
                <input type="text" id="pass" onChange={props.inp}></input>
            </div>
        </div>
    )
}
export default Header
