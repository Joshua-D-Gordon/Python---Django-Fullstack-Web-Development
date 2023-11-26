export default function Navbar(props){
    return(
        <div className="navbar">
            <div className="navbar-left">
                <img src={props.img} />
            </div>
            <div className="navbar-mid">
                <div>{props.menuitem}</div>
                <div>{props.menuitem}</div>
                <div>{props.menuitem}</div>
                <div>{props.menuitem}</div>
            </div>
            <div className="navbar-right">
                <button>{props.btn}</button>
            </div>
        </div>
    )
}