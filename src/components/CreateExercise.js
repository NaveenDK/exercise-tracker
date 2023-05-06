import React,{Component,useEffect,useState} from 'react'

import DatePicker from 'react-datepicker'
import axios from 'axios'
import "react-datepicker/dist/react-datepicker.css"

 



const CreateExercise = () => {

    const [users,setUsers] = useState([])
    const [username,setUsername] = useState("")
    const [description,setDescription] = useState("")
    const [duration,setDuration] = useState("")
    const [date,setDate]=useState(new Date())

 
    
    useEffect(()=>{
        axios.get('http://localhost:5000/users/')
        .then(response=>{
            if(response.data.length>0){
                   setUsers(response.data.map(user=>user.username))
                    
                 
            }
        })

    }  ,[users,username])
        
      //  console.log("username in did mount" + this.state.username)
  
  

  
   const onChangeDescription=(e)=>{
       setDescription(e.target.value)
    }

   const onChangeDuration=(e)=>{
       setDuration(e.target.value)
    }

   const onChangeDate=(date)=>{
       setDate(date)

    }


   const onSubmit=(e)=>{
        e.preventDefault();
        const exercise={
            username:username,
            description:description,
            duration:duration,
            date:date,
            
        }
        console.log(exercise)
 
        
        axios.post('http://localhost:5000/exercises/add',exercise)
            .then(res=>console.log("WOW "+res.data))
        window.location = '/'
    }


  return (
    <div>
                <h3>Create New Exercise</h3>
                    <form onSubmit={onSubmit}>
                        <div className="form-group">
                            <label>Username:</label>
                             <select    
                                required
                                className="form-control"
                                value={username}
                                onChange= {(e) => setUsername(e.target.value)}
                             >
                                {

                                    users.map(function(user){
                                        return <option 
                                        key={user}
                                        value={user}>
                                            {user}
                                        </option>
                                    })
                                }
                             </select>
                        </div>
                        <div className="form-group">
                            <label>Description:</label>
                            <input type="text"
                                required
                                className="form-control"
                                value={description}
                                onChange={onChangeDescription}
                            >
                            </input>
                        </div>
                         <div className="form-group">
                         <label>Duration  (in minutes)</label>
                            <input type="text"
                                required
                                className="form-control"
                                value={duration}
                                onChange={onChangeDuration}
                            >
                            </input>
                        </div>       
                        <div className="form-group">
                         <label>Date</label>
                            <div>
                                <DatePicker selected={date}
                                            onChange={onChangeDate}/>
                            </div>
                          </div>
                        <div className="form-group">
                                <input type="submit" value="Create Exercise Logs" className="btn btn-primary"/>    
                        </div>
                    </form>
           </div>
  )
}

export default CreateExercise