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
        <script src="../js/jquery-1.11.3.min.js" type="text/javascript"></script>
        <script src="../js/FST-APP.js" type="text/javascript"></script>
    </head>
    <body>
        
        
        
        <?php
        include("funPHPs.php");
        $a=new functionsPhp();
        $persons=$_POST["cont"];
        $name=$_POST['name'];
        $edad=$_POST['age'];
        if($persons==null)
        {
            $persons=0;
        }
        
        if($edad>=18)
        {
            $persons++;
        }        
        echo "En Cartagena hay ".$persons." Mayores de edad.";
        
        $a->createForm("../index.php", "body", [
            ["html"=>"button", "text"=>"Entrar otra persona..."],
            ["html"=>"input", "type"=>"text", "name"=>"activ","style"=>"display:none;", "value"=>".act3"],            
            ["html"=>"input", "type"=>"text","name"=>"cont","style"=>"display:none;","value"=>"$persons"]
            ], "post");
        
        
        
        ?>
    </body>
</html>
