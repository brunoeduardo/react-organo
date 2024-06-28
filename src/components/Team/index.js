import "./Team.css"
import Player from '../Player'
import hexToRgba from 'hex-to-rgba';


const Team = ({id, name, players, color, onDelete, changeColor}) => {
  return (
    players.length > 0 && 
    <section className='team-container' style={{ backgroundColor: hexToRgba(color, .2)}}>
      <input type="color" className="team-color" value={color} onChange={event => changeColor(event.target.value, id)}></input>
      <h3 className="team-title">
        {name}
        <hr className="team-title-boder" style={{ borderColor: color}}/>
      </h3>
      <div className="team-player-content">
        {players.map(player => (
          <Player key={player.name} id={player.id} name={player.name} position={player.position} image={player.image} color={color} onDelete={onDelete}></Player>
        ))}
        </div>
    </section>
  )
}

export default Team
