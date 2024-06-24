import "./Team.css"
import Player from '../Player'

const Team = ({name, players}) => {
  return (
    players.length > 0 && 
    <section className='team-container'>
      <h3>{name}</h3>
      {players.map(player => (
        <Player key={player.name} name={player.name} position={player.position} image={player.image}></Player>
      ))}
    </section>
  )
}

export default Team
