import React, {useEffect,useState} from 'react'
import axios from 'axios'
// import useFetchData  from '../hooks/useFetchData'
import {Link} from 'react-router-dom'


const Exercise= props=>(
  <tr>
    <td>
      {props.exercise.username}

    </td>
    <td>
      {props.exercise.description}
    </td>
    <td>
      {props.exercise.duration}
    </td>
    <td>
      {props.exercise.date.substring(0,10)}
    </td>
    <td>
      <Link to={"/edit/"+props.exercise._id}>edit</Link> | <a href="#" onClick={()=>{props.deleteExercise(props.exercise._id)}}>delete</a>
    </td>
  </tr>
)

const ExercisesList = () => {

    const [exercises, setExercises] = useState([]);
    const [loading, setLoading] = useState(false);

      useEffect(() => {
        const fetchData = async () =>{
          setLoading(true);
          try {
            //const exercises= await axios.get('');

            const {data: response} = await axios.get('http://localhost:5000/exercises');

            
            setExercises(response);
            console.log ("exercises+ "+ JSON.stringify(exercises))
          } catch (error) {
            console.error(error.message);
          }
          setLoading(false);
        }
    
        fetchData();
      }, []);   

      const exerciseList =()=>  {
        if(exercises){
          console.log("in exerciseList" + JSON.stringify(exercises))
          return  exercises.map(currentExercise=>{
            return <Exercise exercise={currentExercise}  key={currentExercise._id}/>
          })
        }
        
        else{
            console.log("no exercises found")
        }
      }
    

  return (
    <div>
    <h3>Logged Exercises</h3>
      <table className="table">
        <thead className="thead-light">
          <tr>
             <th>Username</th>
             <th>Description</th>
             <th>Duration</th>
             <th>Date</th>
             <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          { exerciseList()}
        </tbody>
      </table>
  </div>
  )
}

export default ExercisesList