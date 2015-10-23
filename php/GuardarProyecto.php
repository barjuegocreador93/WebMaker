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
        $proyectos =json_decode($_POST["proyects"], true);
        $proyectos=json_encode($proyectos);
        file_put_contents("../json/proyects.json",$proyectos);
        
        
        ?>
    </body>
</html>
