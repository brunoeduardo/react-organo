const Player = ({image, name, position}) => {
    return (
        <div>
            <div>
                <img src={image} alt={"Player " + name } />
            </div>
            <div>
                <h4>{name}</h4>
                <h5>{position}</h5>
            </div>
        </div>
    )
}

export default Player


// https://cdn.nba.com/headshots/nba/latest/1040x760/1626164.png