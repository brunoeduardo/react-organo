import './App.css'
import Footer from './components/Footer'
import Form from './components/Form'
import Header from './components/Header'
import Team from './components/Team'
import { useState } from "react"

function App () {
  const teams = [
    {
      name: 'New York Knicks',
      primaryColor: '#ff8a29',
      secundaryColor: '#ffeedf'
    },
    {
      name: 'Boston Celtics',
      primaryColor: '#008248',
      secundaryColor: '#66cb9e'
    },
    {
      name: 'Miami Heat',
      primaryColor: '#98002e',
      secundaryColor: '#fa5d8c'
    },
    {
      name: 'Orlando Magic',
      primaryColor: '#0075bd',
      secundaryColor: '#44aced'
    },
    {
      name: 'Dallas Mavericks',
      primaryColor: '#007ec6',
      secundaryColor: '#419dd1'
    },
    {
      name: 'Los Angeles Lakers',
      primaryColor: '#fdb927',
      secundaryColor: '#fedc92'
    },
    {
      name: 'Denver Nuggets',
      primaryColor: '#051c3e',
      secundaryColor: '#5685c9'
    }
  ]

  const positions = [
    'Point guard',
    'Shooting guard',
    'Small forward',
    'Power forward',
    'Center'
  ]

  const [players, setPlayers] = useState([]);

  const setNewPlayer = (newPlayer) => {
    setPlayers([...players,newPlayer])
  }

  return (
    <div className='app-container'>
      <div className='app-content'>
      <Header></Header>
      <Form teams={teams.map(team => team.name)} positions={positions} setNewPlayer={newPlayer => setNewPlayer(newPlayer)}></Form>

      
      {players.length > 0 ? 
      <div>
        {teams.map(team => (
          <Team key={team.name} name={team.name} primaryColor={team.primaryColor} secundaryColor={team.secundaryColor} players={players.filter(player => player.team === team.name)}></Team>
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
