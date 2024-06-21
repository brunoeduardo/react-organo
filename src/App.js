
import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import Team from './components/Team';

function App() {

  const teams = [
        'New York Knicks',
        'Boston Celtics',
        'Miami Heat',
        'Orlando Magic',
        'Dallas Mavericks',
        'Los Angeles Lakers',
        'Denver Nuggets'
  ]

  return (
    <div className="App">
        <Header></Header>
        <Form teams={teams}></Form>
        <Team name='New York Knicks'></Team>
    </div>
  );
}

export default App;
