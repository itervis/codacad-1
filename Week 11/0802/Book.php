<?php

class Book
{
    public $title ;
    public $author;
    public $year  ;
    public $genre ;

    function __construct ($bookTitle, $bookAuthor, $publishingYear, $bookGenre)
    {
        $this->title = $bookTitle;
        $this->author = $bookAuthor;
        $this->year = $publishingYear;
        $this->genre = $bookGenre;
    }

    public function uniqueReference(){
       return md5(sprintf('%s-%s-%s', $this->title, $this->author, $this->year));
    }
    

}