import React, {useEffect} from 'react'
import { useHistory } from 'react-router-dom';
import SigninForm from '../components/SigninForm'
import Navbar from '../components/Navbar'


function Signin() {
    const history=useHistory()
    
    useEffect(()=>{
        if(localStorage.getItem('jwt'))
        {
            history.push('/')
        }
    })

    return (
        <div>
            <Navbar />

            <div className="col-sm-6 col-md-4 col-lg-2 mx-auto pt-5" >
                <SigninForm />
            </div>
        </div>
    )
}

export default Signin
