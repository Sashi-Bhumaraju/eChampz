import { signOut } from 'firebase/auth';
import './App.css';
import RoutesComponent from './routes/RoutesComponent';
import { auth } from './store/firebase-config';
import TournamentCard from './components/widgets/TournmentCard';
import TournamentsList from './components/widgets/TournamentsList';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { GetAllTournaments } from './store/index';
import UseThunk from './hooks/UseThunk';

function App() {

//   window.addEventListener('click', () => {
//     const element = document.documentElement;
//     if (element.requestFullscreen) {
//         element.requestFullscreen();
//     } else if (element.mozRequestFullScreen) {
//         element.mozRequestFullScreen();
//     } else if (element.webkitRequestFullscreen) {
//         element.webkitRequestFullscreen();
//     } else if (element.msRequestFullscreen) {
//         element.msRequestFullscreen();
//     }
// });

  const [RunGetAllTournaments, data, isLoading, iseroor] = UseThunk(GetAllTournaments);
 useEffect(()=>{
  RunGetAllTournaments()
 },[])
  const t = useSelector((state)=>{
     return state.tournaments.data;
  })
 
  // localStorage.removeItem("echampz.user")
  // signOut(auth)
  return (  
    <div className="App">
      {/* {JSON.stringify(t)}; */}
        <RoutesComponent/>
      {/* <TournamentsList></TournamentsList> */}
    </div> 
  );
}

export default App;


