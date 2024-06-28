import "./Player.css"
import { AiFillCloseCircle } from "react-icons/ai";

const Player = ({id, image, name, position, color, onDelete}) => {
    return (
        <div className="player-container" style={{background: color}}>
            <AiFillCloseCircle size={25} className="player-delete" onClick={() => onDelete(id)}/>
            <div className="player-image">
                <img src={image} alt={"Player " + name } />
            </div>
            <div className="player-text">
                <h4>{name}</h4>
                <h5>{position}</h5>
            </div>
        </div>
    )
}

export default Player
