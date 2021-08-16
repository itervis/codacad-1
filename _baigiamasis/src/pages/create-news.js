import React, { useState} from 'react'
import Navbar from '../components/Navbar'
import { useHistory } from 'react-router-dom';

function CreateNews() {
    const [title, setTitle] = useState('')
    const [file, setFile] = useState('')
    const [postBody, setPostBody] = useState('')
    const history=useHistory()
    
    async function uploader(){
        
        const formData = new FormData();

        formData.append('file', file)
        formData.append('title', title)
        formData.append('postBody', postBody)

        await fetch('http://localhost:8000/api/create-news',{
            method:'POST',
            body: formData
        })

        history.push('/')
        
    }
 
    return (
        <div>
            <Navbar />
            <div className="col-sm-6 offset-sm-3">
                <div className="form-group">
                    <input type='text' className="form-control" placeholder="Title" onChange={(e)=>setTitle(e.target.value)} />
                    <input type='textarea' className="form-control" rows="3" placeholder="Share your news" onChange={(e)=>setPostBody(e.target.value)}/>
                    <input type='file' className="form-control" placeholder="file" onChange={(e)=>setFile(e.target.files[0])}/>
                    <button onClick={uploader}>Upload</button>
                </div>
                
            </div>
        </div>
    )
}

export default CreateNews

