import React, {useState} from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

function RegistrationForm() {
   
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history=useHistory()

                  
    const submit = async (e) => {
        e.preventDefault()
     
        const formData=new FormData()
        formData.append('username', username)
        formData.append('email', email)
        formData.append('password', password)
        
        
       axios.post('http://localhost:8000/api/register', formData)
        .then(history.push('/login'))
        .catch((err) => {console.log(err.response.data)})
            
    }

   

    return (
        <div>

            <form onSubmit={submit}>
                <h1 className="h3 mb-3 font-weight-normal">Please register</h1>
                
                <input type="text" name="username"  className="form-control" placeholder="Enter your username" required onChange={(e)=>setUsername(e.target.value)}></input>
                
                <input type="email" name="email" placeholder="Email address"  className="form-control" required onChange={(e)=>setEmail(e.target.value)}></input>
                
                <input type="password" name="password"  className="form-control" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}></input>
                
                <button className="w-100 btn btn-lg btn-primary my-3" >Register</button>
            </form>
            <h6 className="mt-3">Already have an account? <a href='http://localhost:3000/login'>Login</a> </h6>
        </div>
    )
}

export default RegistrationForm
