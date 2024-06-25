import "./Player.css"

const Player = ({image, name, position, primaryColor}) => {
    return (
        <div className="card-container" style={{background: primaryColor}}>
            <div className="card-image">
                <img src={image} alt={"Player " + name } />
            </div>
            <div className="card-text">
                <h4>{name}</h4>
                <h5>{position}</h5>
            </div>
        </div>
    )
}

export default Player
