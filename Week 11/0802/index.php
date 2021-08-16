<?php

require_once 'Book.php';

$book_1 = new Book('This as Thieves', 'Sandra Brown', 2021, 'thrillers');

$book_2 = new Book('My Dark Vanessa','Kate Elizabeth', 2021, 'thrillers');

$b_3 = new Book('x', 'y', 1900, 'z');

var_dump($book_1, $book_2, $b_3);