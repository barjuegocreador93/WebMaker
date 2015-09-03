<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        <?php
        $edades = $_GET['edades'];
        $estas = $_GET['esta'];
        $pesos = $_GET['pesos'];
        $aEdades = explode(",", $edades);
        $aEstas = explode(",", $estas);
        $aPesos = explode(",", $pesos);

        $i = 0;
        $malto=$aEstas[0];
        $maltoid=0;
        $aceptados = 0;
        $noaceptados = 0;
        foreach ($aEdades as $a) {
            $idAceptado[$i] = 0;
            if ($a < 18 && $aEstas[$i] >= 180 && $aPesos[$i] <= 80) {
                $idAceptado[$i] = 1;
                $aceptados++;
            } else {
                $noaceptados++;
            }
            if($malto<$aEstas[$i])
            {
                $malto=$aEstas[$i];
                $maltoid=$i;
            }
            
            $i++;
            
        }
        echo "Aceptados: " . $aceptados;
        echo "<br>No aceptados: " . $noaceptados . "<br><br>";
        $t = 0;
        $i = 0;
        $sumEs=0;
        
        echo "La personarsona(s) ";
        foreach ($idAceptado as $b) {
            if ($b) {
                $x = $i + 1;
                if($t==$aceptados - 1)echo " y ";
                echo $x;
                if ($t < $aceptados - 2) {
                    echo", ";
                }                
                $sumEs=$sumEs+ $aEstas[$i];                
                $t++;    
                
            }
            $i++;
        }
        echo " fue(ron) aceptada(s)!<br>";
        
        $prm=$sumEs/$aceptados;
        echo "<br>El promedio de las estaturas de los aceptados es de: ". $prm."cm<br><br>";
        $alto=$maltoid+1;
        echo "La persona mas alta fue la " . $alto.": <br>";
        echo "Con edad ".$aEdades[$maltoid]." años.<br>";
        echo "Con estatura ". $malto."cm.<br>";
        echo "Con peso ". $aPesos[$maltoid]."kg.<br>";
        
        ?>
    </body>
</html>
