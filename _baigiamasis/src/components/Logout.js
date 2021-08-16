import React from 'react'
// import axios from 'axios'


function Logout() {

    const logout = async () => {
        await fetch('http://localhost:8000/api/logout', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
        })}
      

    return (
        <div>
            

            <form onSubmit={logout}>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Logout
