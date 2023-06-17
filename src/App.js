import './App.css';
import RoutesComponent from './routes/RoutesComponent';
import UseModal from '.././src/hooks/UseModal'
import Games from './components/widgets/Games';
import Tournaments from './components/screens/Tournaments';

function App() {

 const [showModal,modalBox] =  UseModal(<Tournaments/>)
  //  localStorage.removeItem("echampz.user")
  
  // signOut(auth)
  return (  
    <div className="App">
     
        <RoutesComponent/>
      {/* <button onClick={showModal}>open modal</button> */}

    </div> 
  );
}

export default App;


