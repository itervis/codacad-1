<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\PostNews;



class PostController extends Controller
{
    
    // function addPost(Request $req)
    // {
    //    $this-> validate($req, array(
    //        'title' => 'required|max:255',
    //        'postBody' => 'required|min:15|max:7500',
    //        'file' => 'file|size:50000'

    //    ));

     

    //    $newsPost= new PostNews();
    //    $newsPost->title=$req->input('title');
    //    $newsPost->postBody=$req->input('postBody');
    //    $newsPost->file_path=$req->file('file')->store('news_post');
      
    //    $newsPost->save();

    //    return $newsPost; 

    // }
    
    
    function addPost(Request $req)
    {
        $newsPost= new PostNews;
        $newsPost->title=$req->input('title');
        $newsPost->postBody=$req->input('postBody');
        $newsPost->file_path=$req->file('file')->store('news_post');


        $newsPost->save();

        return $newsPost;  
    }
    function timeline(){
        return PostNews::all();
    }

}
