export default function Header(props){
    return(
        <div className="header">
            <div className="nav">
                <div>
                    <img src={props.img} />
                </div>
                <div>
                    <h3>{props.headertite}</h3>
                </div>
            </div>
        </div>
    )
}