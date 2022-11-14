
function PopUp(props) {
    let lang = "";
    const show = () => props.sethide(!props.hide)
    if (props.popup) {
        let a = props.popup.languages
        for (let i = 0; i < Object.keys(a).length; i++) {
            lang += (a[Object.keys(a)[i]]);
            if (i !== Object.keys(a).length - 1) lang += ", "
        }
    }
    return (

        <>{props.hide &&
            <div className="inner" onClick={show}>
                <img className="inner-img" src={props.popup.flags.png} alt="" onClick={show} />
                <div id="txt-container"> {props.popup.name.common}
                    <div className="pop" onClick={show}> population:
                        <div >{props.popup.population.toLocaleString('en', { useGrouping: true })}</div>
                    </div>
                    <div className="lang" onClick={show}>languages: <div >{lang}</div>
                    </div>
                </div>
            </div>} </>
    )
}

export default PopUp