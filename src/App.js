import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'

import Navbar from "./components/NavbarComponent"
import ExercisesList from './components/ExercisesList.js'
import EditExercise from './components/EditExercise'
import CreateExercise from './components/CreateExercise'
import CreateUser from './components/CreateUser'



function App() {
  return (
    <Router>
      <Navbar/>
       <Routes>
       <Route index element ={<ExercisesList/>}/>
        <Route path="edit/:id"  element ={<EditExercise/>}/>
        <Route path="create"   element ={<CreateExercise/>}/>
        <Route path="user" element ={<CreateUser/>}/>
       </Routes>
       
 
    </Router>
  );
}

export default App;
