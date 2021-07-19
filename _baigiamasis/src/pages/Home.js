import React from 'react'
import Post from '../components/FeedPost'

function Home() {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-3  d-none d-xl-flex bg-primary">left sidebar</div>
                    <div className="col-md-8 col-xl-6 bg-danger" ><Post /></div>

                    <div className="col-md-4 col-xl-3 bg-success d-none d-md-flex">Right sidebar</div>
                </div>
            
            </div>
        </div>
    )
}

export default Home

