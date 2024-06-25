import "./Team.css"
import Player from '../Player'

const Team = ({name, players, primaryColor, secundaryColor}) => {
  return (
    players.length > 0 && 
    <section className='team-container' style={{ backgroundColor: secundaryColor}}>
      <h3 className="team-title">
        {name}
        <hr className="team-title-boder" style={{ borderColor: primaryColor}}/>
      </h3>
      <div className="team-player-content">
        {players.map(player => (
          <Player key={player.name} name={player.name} position={player.position} image={player.image} primaryColor={primaryColor}></Player>
        ))}
        </div>
    </section>
  )
}

export default Team
