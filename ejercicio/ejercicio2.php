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
        $num[0]=$_POST["num1"];
        $num[1]=$_POST["num2"];
        $num[2]=$_POST["num3"];
        
        $menor=$num[0];
        $mayor=$num[0];
        
        
        for($i=1;$i<3;$i++)
        {
            if($menor>$num[$i])
            {
                $menor=$num[$i];
            }
            if($mayor<$num[$i])
            {
                $mayor=$num[$i];
            }
        }
        echo "el numero mayor es: ".$mayor."<br>";
        echo "el numero menor es: ".$menor;
        
        if($num[0]==$num[1]||$num[1]==$num[2]||$num[0]==$num[2])
        {
            echo "Hay numero iguales";
        }
        
        
        
        
        ?>
    </body>
</html>
