export default function Card(props) {
    return(
    <div className="cardlst">
        <div className="listimg">
            <img src="https://picsum.photos/id/100/150/220" />
        </div>
        <div>
            <p>* 5.0 (6) || USA || {props.value}</p>
            <p>life lessons with Katie zaferes</p>
            <p>{props.frm}{props.amount} / person</p>
        </div>
    </div>
    )
}