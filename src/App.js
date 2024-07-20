import './App.css'
import Footer from './components/Footer'
import Form from './components/Form'
import Header from './components/Header'
import Team from './components/Team'
import { useEffect, useState } from "react"
import { v4 as uuidv4 } from 'uuid';

function App () {
  const [teams, setTeams] = useState([
    {
      id: uuidv4(),
      name: 'New York Knicks',
      color: '#ff8a29'
    },
    {
      id: uuidv4(),
      name: 'Boston Celtics',
      color: '#008248'
    },
    {
      id: uuidv4(),
      name: 'Miami Heat',
      color: '#98002e'
    },
    {
      id: uuidv4(),
      name: 'Orlando Magic',
      color: '#0075bd'
    },
    {
      id: uuidv4(),
      name: 'Dallas Mavericks',
      color: '#004973'
    },
    {
      id: uuidv4(),
      name: 'Los Angeles Lakers',
      color: '#fdb927'
    },
    {
      id: uuidv4(),
      name: 'Denver Nuggets',
      color: '#051c3e'
    }
  ])

  const positions = [
    'Guard',
    'Forward',
    'Center'
  ]

  const [players, setPlayers] = useState([]);

  const setNewPlayer = (newPlayer) => {
    newPlayer.id = uuidv4();
    newPlayer.favorite =  false
    setPlayers([...players,newPlayer])
  }

  const deletePLayer = (playerId) => {
    setPlayers(players.filter(element => element.id !== playerId))
  }

  const changeTeamColor = (color, teamId) => {
    setTeams(teams.map((element) => {
      if(element.id === teamId) {
        element.color = color
      }
      return element
    })
    )
  }

  const setNewTeam = (newTeam) => {
    const team = {
      id:  uuidv4(), 
      name: newTeam.teamName,
      color: newTeam.teamColor
    }
    setTeams([...teams,team])
  }

  const changeFavorite = (id) => {
    setPlayers(players.map(player => {
      if(player.id === id) {
        player.favorite = !player.favorite
      }
      return player
    }) )
  }

  useEffect(()=> {
    fetch('https://my-json-server.typicode.com/brunoeduardo/mock-api/organo')
      .then(result => result.json())
      .then(data => {
        setPlayers(data)
      }).catch(() => {
        console.log('Mock Api off')
      })
  }, [])

  return (
    <div className='app-container'>
      <div className='app-content'>
      <Header></Header>
      <Form 
        teams={teams.map(team => team.name)} 
        positions={positions} 
        setNewPlayer={newPlayer => setNewPlayer(newPlayer)}
        setNewTeam={newTeam => setNewTeam(newTeam)}
      ></Form>

      
      {players.length > 0 ? 
      <div>
        {teams.map(team => (
          <Team 
            key={team.id} 
            id={team.id}
            name={team.name} 
            color={team.color} 
            players={players.filter(player => player.team === team.name)} 
            onDelete={deletePLayer}  
            changeColor={changeTeamColor}
            onFavorite={changeFavorite}
          ></Team>
        ))} 
      </div>
      : <div className='app-no-teams-container'>No teams createad</div>
      }
      </div>

        <div className='app-footer'>
          <Footer></Footer>
        </div>
    </div>
  )
}

export default App
