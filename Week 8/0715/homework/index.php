<?php
// Sukurkite 3 kintamuosius: skaičių, raidinės vertės bei tuščią kintamąjį ir juos išveskite į ekraną.
	$nbr = 1;
    $str = "a";
    $tmp = NULL;
    var_dump($nbr, $str, $tmp);
// Parašykite skriptą, kuris išspausdintų paskutiniąsias 3 stringo raides.
    $newStr = 'fjklaszbnzvisdf';
    $newStr2 = substr($newStr, -3);
    var_dump($newStr2);

	
// Sukurkite funkciją negative, kuri priimtų vieną argumentą "$skaicius" ir išvestų į ekraną atitinkamą neigiamą skaičių. (Įvedame 3, išveda -3)
    function negative($skaicius){
        if (is_string($skaicius)){
            echo 'enter number';
            
        } else {
            return $skaicius * -1;
        }

    }
    echo(negative(5));
	
// Sukurkite funkciją kauliukas, kuri imituotų kauliuko metimą. (Į ekraną atspaudintų atsitiktinį skaičių nuo 1 iki 6); Užuomina: rand();
	echo rand(1, 6);
// Parašykite funkciją pusePloto, kuri priimtų 2 argumentus ir išvestų į ekraną pusę abiejų skaičių sandaugą.

function pusePloto($krastineA, $krastineB){
        return $krastineA * $krastineB / 2; 
    }
    var_dump(pusePloto(2, 8));
// Sukurkite funkciją 'arEsiDarJaunas', kuri priimtų vieną argumentą amžius ir į ekraną išvestų pranešimą, kiek metų trūksta iki 100. (Pvž.: "Iki šimto jūms trūksta 70 metų! Dar gyventi liko daug!")
	function arEsiDarJaunas($amzius){
        $skirtumas = 100 - $amzius;
        if ($amzius <= 50){
            echo("Iki šimto jūms trūksta $skirtumas metų! Dar gyventi liko daug!" );
        } else if ($amzius > 50 && $amzius < 95){
            echo("Iki šimto jūms trūksta $skirtumas metų! Dar pagyvensite" );

        } else if ( $amzius <= 95 && $amzius < 100){
            echo("Iki šimto jūms trūksta $skirtumas metų! Užjaučiame!" );
        } else { echo("Jokių garantijų");}
    }
    arEsiDarJaunas(100);

// Sukurkite funkciją, kuri priimtų argumentą farenheitas ir laipsnius iš farenheito konvertuotų į celsijų.