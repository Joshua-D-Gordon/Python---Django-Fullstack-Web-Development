export default function Card(props){
    return(
        <div className="card-container">
            <div>
                <img src={props.img}/>
            </div>
            <div className="right">
                <div className="location-link">
                    <h4>{props.location}</h4>
                    <a href={props.link}>{props.link}</a>
                </div>
                <div>
                    <div>
                        <h2>{props.title}</h2>
                    </div>
                    <div>
                        <p><strong>{props.date}</strong></p>
                        <p>{props.discription}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}