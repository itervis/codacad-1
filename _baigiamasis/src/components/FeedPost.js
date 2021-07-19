import React from 'react'
import newsImg from '../images/News_img_demo.jpg'
// import './feedPost.css'

function Post() {
    return (
        <div>
            <div className="container-fluid my-2">
                <div className="row">
                    <div className="col-lg-10 bg-light">
                        {/* <div class="card shadow"> */}
                            <img src={newsImg} className="cardImg" alt="..."></img>
                            <p className="pt-2">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            
                        {/* </div> */}
                    </div>
                    <div className="col-lg-2 bg-secondary">Actions</div>
                    <div className="col bg-info">Comments</div>
                </div>
            </div>
        </div>
    )
}

export default Post
