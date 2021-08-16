<?php
class Person 
{
    private $name;
    private $surname;
    private $age;

    function __construct($name = NULL, $surname = NULL, $age = NULL){
        $this->setName($name);
    }

    public function setName($name){
        $this->name = $name;

    }

    public function getName(){
        return $this->name;
    }
    public function introduction(){}


}