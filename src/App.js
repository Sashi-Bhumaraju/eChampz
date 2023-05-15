import { signOut } from 'firebase/auth';
import './App.css';
import RoutesComponent from './routes/RoutesComponent';
import { auth } from './store/firebase-config';

function App() {
  // localStorage.removeItem("user")
  // signOut(auth)
  return (  
    <div className="App">
        <RoutesComponent/>
    </div> 
  );
}

export default App;


