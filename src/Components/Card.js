const Card = (props) => {

    const {name, rent, area, image, address, rooms, propertyType, moveInDate} = props

    return (
        <>
            <div className={"card"}>
                <div>
                    <img src={image} alt={image} className={"card-img"}/>
                </div>
                <div className={"card-details"}>
                    <strong className={"card-price"}>${rent}</strong>/<span className={"card-month"}>month</span>
                    <h3 className={"card-name"}>{name}</h3>
                    <p className={"card-address"}>{address.street} {address.state} {address.country}</p>
                    <hr className={"card-hr"}/>
                    <div className={"card-info"}>
                        <div>
                            <i className="fa-solid fa-bed"></i> <span className={"card-info-span"}>{rooms.beds}</span>
                        </div>
                        <div>
                            <i className="fa-solid fa-bath"></i> <span
                            className={"card-info-span"}>{rooms.bathroom}</span>
                        </div>
                        <div>
                            <i className="fa-solid fa-layer-group"></i> <span
                            className={"card-info-span area"}>{area} m<sup>2</sup></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;