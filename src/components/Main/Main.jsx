import React from "react";
import PopUp from "../Countries/PopUp";
import "./Main.css"
import Countries from "../Countries/Countries";

function Main(props) {

    const [hide, sethide] = React.useState(false)

    const [popup, setPopup] = React.useState(null)

    const popupping = (e) => { sethide(!hide); setPopup(Countries.find((v) => v.name.common == e)) }


    return (
        < div className="main-container" >
            < div className="country_list" >

                <PopUp popup={popup} popuping={popupping} sethide={sethide} hide={hide} />

                {props.country.map((v) =>
                    <div className="Countries" onClick={() => popupping(v.name.common)} id={v.name.common}>
                        <img className="flag" src={v.flags.png} onClick={() => popupping(v.name.common)}></img>
                        <div > {v.name.common} - {v.capital}
                            <div className="region" onClick={() => popupping(v.name.common)}>{v.region}</div>
                        </div>
                    </div>)}
            </div >
        </div >
    )
}

export default Main

