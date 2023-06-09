import React, { Component ,useState} from 'react';
import axios from 'axios';




const CreateUser = ()=>{

  const [username,setUsername]=useState("")
 
  const onSubmit= (e)=> {
    e.preventDefault();

    const user = {
      username:  username
    }

    console.log(user);

    axios.post('http://localhost:5000/users/add', user)
      .then(res => console.log(res.data));

      window.location = '/'
    
  }

  const onChangeUsername = (e)=>{
    setUsername(e.target.value)
  }

  return (
    <div>
      <h3>Create New User TEST</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group"> 
          <label>Username: </label>
          <input  type="text"
              required
              className="form-control"
              value={username}
              onChange={onChangeUsername}
              />
        </div>
        <div className="form-group">
          <input type="submit" value="Create User" className="btn btn-primary" />
        </div>
      </form>
    </div>
  )
}

export default CreateUser

 