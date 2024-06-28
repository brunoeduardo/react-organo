import "./Player.css"
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart} from "react-icons/ai";

const Player = ({id, image, name, position, color, onDelete, playerFavorite, onFavorite}) => {
    return (
        <div className="player-container" style={{background: color}}>
            <AiFillCloseCircle size={25} className="player-delete" onClick={() => onDelete(id)}/>
            <div className="player-image">
                <img src={image} alt={"Player " + name } />
            </div>
            <div className="player-text">
                <h4>{name}</h4>
                <h5>{position}</h5>
                <div className="player-favorite">
                    {playerFavorite ? <AiFillHeart color="#ff0000" onClick={() => onFavorite(id)} /> : <AiOutlineHeart onClick={() => onFavorite(id)}/>}
                </div>
            </div>
        </div>
    )
}

export default Player
