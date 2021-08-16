import React from 'react'
import FeedPost from '../components/FeedPost'

import Navbar from '../components/Navbar';
import RightSidebar from '../components/RightSidebar';



function Home() {

    return (
        <div>
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-3  d-none d-xl-flex"></div>
                    
                    <div className="col-md-8 col-xl-6" >
                        <FeedPost />
                    </div>

                     <div className="col-md-4 col-xl-3 d-none d-md-flex">
                        <RightSidebar />
                    </div> 

                </div>
            
            </div>
        </div>
    )
}

export default Home

