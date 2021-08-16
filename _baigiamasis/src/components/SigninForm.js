import React, {useState} from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

  

function SigninForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history=useHistory()

    
    const submit = async (e) => {
        e.preventDefault()
        
        const formData=new FormData()
        
        formData.append('email', email)
        formData.append('password', password)
        
        axios.post('http://localhost:8000/api/login', formData, {withCredentials: true})
        .then((res) => { 
            localStorage.setItem('jwt', res.data.message)
            history.push('/')
        })
        .catch((err) => {console.log(err)})
        
        
    }
    
    
    return (
        <div>
            <form onSubmit={submit}>
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                <input type="email" className="form-control" placeholder="Email address" required
                onChange={(e)=>setEmail(e.target.value)}></input>

                <input type="password" className="form-control" placeholder="Password" required onChange={(e)=>setPassword(e.target.value)}></input>

                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
            </form>
            <h6 className="mt-3">Don't have an account yet? <a href='http://localhost:3000/register'>Register</a> </h6>
        </div>
    )
}

export default SigninForm
