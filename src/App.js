import { signOut } from 'firebase/auth';
import './App.css';
import RoutesComponent from './routes/RoutesComponent';
import { auth } from './store/firebase-config';
import TournamentCard from './components/widgets/TournmentCard';
import TournamentsList from './components/widgets/TournamentsList';

function App() {

 
  // localStorage.removeItem("echampz.user")
  // signOut(auth)
  return (  
    <div className="App">
        <RoutesComponent/>
      {/* <TournamentsList></TournamentsList> */}
    </div> 
  );
}

export default App;


