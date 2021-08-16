import React, { useState, useEffect } from 'react'
import PostActions from '../components/PostActions';




function FeedPost() {

    const[data, setData]=useState([])
    useEffect (() =>{
        async function fetchPost(){
        let res = await fetch('http://localhost:8000/api/timeline')
        .then (res => res.json())
        setData(res)
    }
    fetchPost()

    },[])
    

    return (
        <div>
        {
            data.slice(0).reverse().map((item)=>
                <div className="container-fluid py-3 my-2">
                    <div className="row">
                        <div className="col-lg-12 bg-light">
                                <div>
                                    <h3 >{item.title}</h3>
                                    <img src={'http://localhost:8000/'+item.file_path} className="cardImg" alt="..." ></img>
                                    
                                  
                                    <p className="pt-2" >{item.postBody}</p>


                                </div>
                        <div className="col-lg-12 bg-white mb-2"><PostActions /></div>
                        
        
                        </div>
                    </div>
                </div>
            )

        }
        </div>
    )
}

export default FeedPost
