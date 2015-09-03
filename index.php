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
                     
        </nav>
        <section class="sc1 h_2">            
        </section>
        <section class="sc2 h_2">            
        </section >
        <section class="sc3 h_2">            
        </section>
        <section class="sc4 h_2">
            <button class="addP">Agregar persona al formulario</button>
            <div class="persons"></div>
            <div class="personsDelete"></div>
            <button class='SaveP' >Guardar</button>
            <a class="msj" style="display: none;">Faltan datos por llenar</a>
            
        </section>
           
        <?php
        include("ejercicio/funPHPs.php");
        $a=new functionsPhp();
        
        
        $activ=$_POST['activ'];
        $persons=$_POST['cont'];
        
        if($activ==null)
        {
            $a->mkjsPHP("",$a->mkjqueryPHP(".act1", "click"));
        }
        else
        {
           $a->mkjsPHP("",$a->mkjqueryPHP($activ, "click")); 
        }
                
        
        
        
        $a->createForm("ejercicio/ejercicio1.php", ".sc1", [
            ["html"=>"input", "type"=>"text", "name"=>"num1", "placeholder"=>"Numero1"],
            ["html"=>"input", "type"=>"text", "name"=>"num2", "placeholder"=>"Numero2"],            
            ["html"=>"input", "type"=>"submit"]
            ], "post");
        
        $a->createForm("ejercicio/ejercicio2.php", ".sc2", [
            ["html"=>"input", "type"=>"text", "name"=>"num1", "placeholder"=>"Numero1"],
            ["html"=>"input", "type"=>"text", "name"=>"num2", "placeholder"=>"Numero2"],
            ["html"=>"input", "type"=>"text", "name"=>"num3", "placeholder"=>"Numero3"],
            ["html"=>"input", "type"=>"submit"]
            ], "post");
        
        $a->createForm("ejercicio/ejercicio3.php", ".sc3", [
            ["html"=>"input", "type"=>"text", "name"=>"name", "placeholder"=>"Nombre"],
            ["html"=>"input", "type"=>"text", "name"=>"age", "placeholder"=>"Edad"],
            ["html"=>"input", "type"=>"text", "name"=>"cont","style"=>"display:none;", "value"=>$persons],
            ["html"=>"input", "type"=>"submit"]
            ], "post");
        
       $a->createForm("ejercicio/ejercicio3.php", ".sc4", [
                        ["html"=>"div","class"=>"forms4"]                    
           
            ], "post"); 
      
        ?>
    </body>
    <script>
        var persona=0;
        var edades=[];
        var esta=[];
        var pesos=[];
        $(".sc4 .SaveP").hide();
        $(document).ready(function(){
            $(".addP").click(function()
            {
                if(persona<10){
                persona++;
                $(".forms4").append("<div class='div"+persona+"'></div>")
                $(".div"+persona+"").append("<h3>Persona: "+persona+"</h3><input type='text' id='age"+persona+"' placeholder='Edad'>");
                $(".div"+persona+"").append("<input type='text' id='estura"+persona+"' placeholder='Estatura'>");
                $(".div"+persona+"").append("<input type='text' id='peso"+persona+"' placeholder='Peso'>");
                $(".persons").append("<button class='man"+persona+"'>Persona: "+persona+"</button>");
                $(".personsDelete").append("<button class='div"+persona+"'>Eliminar Persona: "+persona+"</button>");
                var m=new doc("man","div");
                m.main();
                $(".man"+persona+"").click();
                if(persona==1)
                {
                    $(".SaveP").fadeIn();
                }   
                
                
            }
            });
            
            $(".SaveP").click(function(){
                
                
                for(var i=1;i<=persona;i++)
                {
                    if($("#age"+i+"").val()!=""&&$("#estura"+i+"").val()&&$("#peso"+i+"").val()){
                    edades.push($("#age"+i+"").val());
                    esta.push($("#estura"+i+"").val());
                    pesos.push($("#peso"+i+"").val());}
                else
                {
                    edades.pop();
                    esta.pop();
                    pesos.pop();
                    $(".sc4 .msj").fadeIn();
                    return;
                }
                }
                $(".sc4").empty();
                $(".sc4").append("<form action='ejercicio/ejercico4.php' method='get'></form>");
                $(".sc4 form").append("<input type='text' name='edades' value='"+edades+"'>");
                $(".sc4 form").append("<input type='text' name='esta' value='"+esta+"'>");
                $(".sc4 form").append("<input type='text' name='pesos' value='"+pesos+"'>");
                $(".sc4 form").append("<input type='submit' class='submit'> ");
                $(".sc4 form .submit").click();
                
            });        
            
            
            
        });
       
    </script>
    
    
    
    <script>
        var a=new doc("act","sc");
        a.main();
    </script>
</html>
