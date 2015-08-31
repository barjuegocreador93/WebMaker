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
        <script src="js/jquery-1.11.3.min.js" type="text/javascript"></script>
        <script src="js/FST-APP.js" type="text/javascript"></script>
    </head>
    <body>
        <header>
            <h1>Actividad Web 2</h1>
        </header>
        <nav>
            <button class="act1 getText">Ejercio 1</button>
            <button class="act2 getText">Ejercio 2</button>
            <button class="act3 getText">Ejercio 3</button>
            <button class="act4 getText">Ejercio 4</button>
            <button class="act5 getText">Ejercio 5</button>
            <button class="act6 getText">Ejercio 6</button>
            <button class="act7 getText">Ejercio 7</button>            
        </nav>
        <section class="sc1 h_2">
            
        </section>
        <section class="sc2 h_2">
            
        </section >
        <section class="sc3 h_2">
            
        </section>
        <section class="sc4 h_2">
            
        </section>
        <section class="sc5 h_2">
            
        </section>
        <section class="sc6 h_2">
            
        </section>
        <section class="sc7 h_2">
            
        </section>
        
        
        <?php
        include("ejercicio/funPHPs.php");
        $a=new functionsPhp();
        $a->createForm("ejercicio/ejercicio1.php", ".sc1", [
            ["html"=>"input", "type"=>"text", "name"=>"num1"],
            ["html"=>"input", "type"=>"text", "name"=>"num2"],
            ["html"=>"input", "type"=>"submit"]
            ], "post");
        $a->createForm("ejercicio/ejercicio2.php", ".sc2", [
            ["html"=>"input", "type"=>"text", "name"=>"num1"],
            ["html"=>"input", "type"=>"text", "name"=>"num2"],
            ["html"=>"input", "type"=>"submit"]
            ], "post");
        
        
        ?>
    </body>
    <script>
        var a=new doc("act","sc");
        a.main();
    </script>
</html>
