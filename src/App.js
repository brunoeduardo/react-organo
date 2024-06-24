import './App.css'
import Form from './components/Form'
import Header from './components/Header'
import Team from './components/Team'
import { useState } from "react"

function App () {
  const teams = [
    {
      name: 'New York Knicks'
    },
    {
      name: 'Boston Celtics'
    },
    {
      name: 'Miami Heat'
    },
    {
      name: 'Orlando Magic'
    },
    {
      name: 'Dallas Mavericks'
    },
    {
      name: 'Los Angeles Lakers'
    },
    {
      name: 'Denver Nuggets'
    }
  ]

  const positions = [
    'Point guard',
    'Shooting guard',
    'Small forward',
    'Power forward',
    'Center'
  ]

  const [players, setPlayers] = useState([
    {name: 'bruno', image: 'url/image', position: 'pointer guard', team: 'New York Knicks'}
    ]);

  const setNewPlayer = (newPlayer) => {
    setPlayers([...players,newPlayer])
  }

  return (
    <div className='App'>
      <Header></Header>
      <Form teams={teams.map(team => team.name)} positions={positions} setNewPlayer={newPlayer => setNewPlayer(newPlayer)}></Form>

      {teams.map(team => (
        <Team key={team.name} name={team.name} players={players.filter(player => player.team === team.name)}></Team>
      ))}
    </div>
  )
}

export default App
