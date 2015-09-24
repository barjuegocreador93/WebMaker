<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <script src="js/libs/jquery/jquery.js" type="text/javascript"></script>
        <title>WebMaker</title>
        <link href="css/editor.css" rel="stylesheet" type="text/css"/>
        <link href="css/objetosUser.css" rel="stylesheet" type="text/css"/>
        <script src="js/FST-APP.js" type="text/javascript"></script>
        <script src="js/editorCreator.js" type="text/javascript"></script>
    </head>
    <body>
        <header>
            <img src="https://pbs.twimg.com/profile_images/459713596402855938/9mPYRXPn.jpeg">
            <nav>
                
            </nav>            
        </header>
        <div class="esp"></div>       
        <article>
            <a class="bot">Seleccionado</a>
            <h2>Objetos</h2>
            <h3>Estrcuturas HTML5:</h3>
            <div class="esp"></div>
            <ul>
                <li id="header">Header</li>
                <li id="article">Article</li>
                <li id="section">Section</li>
                <li id="h1">h1</li>
                <li id="h2">h2</li>
                <li id="h3">h3</li>
                <li id="h4">h4</li>
                <li id="h5">h5</li>
                <li id="h6">h6</li>
                <li id="input">Input</li>
            </ul>
            
            
        </article>
        
        <div id="cont1">
            Hoja de trabajo:
             <div class="esp"></div>    
            <div id="tablero">
            
            </div>
        </div>
        <section>
            <h3>Objeto selecionado: </h3>
            <ul>
                <li>Nombre: <span id="html_name"></span></li>
                <li>Classes: <span id="html_class"></span><div>Add/rm clase: <input type="text" name="html_class"></div></li>
                <li><div>Text: <input type="text" name="html_text"></div><input type="button" name="html_texter" value="Borrar"> </li>
            </ul>
            <button id="html_finish">Mostar Cambios</button>
        </section>
        
        <form action="index.php" method="post">
            <div id="css"></div>
            <div id="html"></div>                            
            <button>Crear Codigo</button>                
        </form>
        
        <?php
        
        ?>
    </body>
</html>
