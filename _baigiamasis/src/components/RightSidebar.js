import React, { useEffect, useState }from 'react'


function RightSidebar() {
    const [username, setUsername] = useState('')
  
    function logOut(){
      localStorage.clear()
   
    }

    useEffect(()=> {
        (
            async () => {
                const res = await fetch('http://localhost:8000/api/user', {
                    headers: {'Content-Type':'application/json'},
                    credentials: 'include', 
            })
                //axios.get('http://localhost:8000/api/user', {withCredentials: true})
                const content = await res.json()
                setUsername(content.username)
            }
        )()
    })
 

    return (

        <div className="card ">
            <div className="card-header text-center">
                {
                    localStorage.getItem('jwt')?
                    <>
                        <h4>Hi, {username}!</h4>
                        <a className="nav-link link-secondary" href="/" onClick={logOut}>Logout</a>
                    </>
                    :
                    <>
                        <a className="nav-link link-secondary" href="http://localhost:3000/login">Login</a>
                        <a className="nav-link link-secondary" href="http://localhost:3000/register">Register</a>
                    </>
                }
                </div>
                    <div className="card-body">
                        <h5 className="card-title">Want to share fake news?</h5>
                        <p className="card-text">Feel free to share any news you believe are important to discuss</p>
                    <div className="mx-auto">
                    <a href="http://localhost:3000/create-news" className="btn btn-primary">Create News</a>
                </div>
            </div>
        </div>

    )
}

export default RightSidebar
