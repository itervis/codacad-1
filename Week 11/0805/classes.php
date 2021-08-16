<?php
// Parašyti PHP klasę, kuri parašytų “Sveiki, mano vardas yra {vardas}”, kur {vardas} būtų metodo argumento vertė klasės viduje.(objektiškai)

class HelloName {

    public $name;
    function __construct($name){
      $this->name = $name;
    }
    public function getName($name){
        return "Sveiki, mano vardas yra ". $name;
}
}
$helloName = new HelloName;

echo $helloName->getName("You");