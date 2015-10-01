



var proyectfile = [];
var htmlfiles = [];



function openProyect(id, i, files)
{
    $(id).click(function ()
    {
        $(".apertura").slideUp();
        $(".WebMaker").append("<header><h1>:WebMaker:</h1><button class='clspr'>Cerrar Proyecto</button></header><section></section>");
        $(".WebMaker").append("<nav></nav>");
        $(".clspr").click(function(){
        
            $(".WebMaker").empty();
            $(".apertura").slideDown();
        });
        
        for (var j = 0; j < files.length; j++)
        {
            var x = j + 1;
            $(".WebMaker nav").append("<button class=' actab" + x + " getText'>" + files[j].name + "." + files[j].type + "</button>");
            $(".WebMaker").append("<div class='tablero tab" + x + "'></div>");
            if (files[j].type === "html")
            {
                interpreteHTML(files[j].url, x);
            }
            if (j === files.length - 1)
            {
                x++;
                $(".WebMaker nav").append("<button class='actab" + x + " getText'>Crear Archivo</button>");
                $(".WebMaker").append("<div class='wminterface tab" + x + " h_1'></div>");
                x++;
                $(".WebMaker nav").append("<button class='actab" + x + " getText'>Guardar Proyecto</button>");
                $(".WebMaker").append("<div class='wminterface tab" + x + " h_1'></div>");

            }
        }
        var tabs = new fast_appi(".actab", ".tab");
        tabs.run();
        $(".actab1").click();

    });


}

function interpreteHTML(url, tab)
{
    $.getJSON(url, function (html)
    {
        htmlfiles.push(html);
        $.each(html.html, function (i, conte)
        {
            $.each(conte.body, function (i, body)
            {
                appendHtml(body.netiq, body.html, "." + body.selector, body.text, body.class);
                $.each(body.attr, function (i, attr)
                {

                    if (attr.name === "style")
                    {
                        $.each(attr.data, function (i, data)
                        {
                            $("." + body.class).css(data.name, data.data);
                        });
                    } else
                    {
                        $("." + body.class).attr(attr.name, attr.data);
                    }
                });
            });
        });
    });
}




$(document).ready(function ()
{

    $.getJSON("json/proyects.json", function (file)
    {
        $(".slmake1_off").empty();
        proyectfile = file;

        $(".slmake1_off").append("<h1>Proyectos: </h1>");
        $(".slmake1_off").append("<p>Selecione un proyecto: </p>");
        for (var i = 0; i < proyectfile.Proyects.length; i++)
        {
            $(".slmake1_off").append("<button id='proy" + i + "'>" + proyectfile.Proyects[i].name + "</button><br>");
            openProyect("#proy" + i + "", i, proyectfile.Proyects[i].files);
        }



    });
    var makepr = new fast_appi(".acmak", ".slmake");
    makepr.run();
    
    createProyect();



});


function appendHtml(netiq, html, selector, text, classes)
{
    if (netiq === "2")
        $(selector).append("<" + html + " class='" + classes + "'>" + text + "</" + html + ">");
    if (netiq === "1")
        $(selector).append("<" + html + " class='" + classes + "'>");
}

var archivos;

function createProyect()
{
    
    $(".acmak1").click(function()
    {
       archivos=0;
       $(".pfiles").empty();
    });
    
    
    $(".crearfile").click(function()
    {
        $(".pfiles").append(
                "<div class='addar"+archivos+"'><br><br> <div>"+
                      "Nombre: <input type='text' name='arch"+archivos+"name' >"+                 "</div>"+
                 "<div>"+
                      "Url: <input type='text' name='arch"+archivos+"url' > "+   
                 "</div>"+
                 "<div>"+
                      "Tipo(css/js/html): <input type='text' name='arch"+archivos+"type' >"+    
                 "</div>"+
                 "<div>"+ 
                      "Creado: <input type='text' name='arch"+archivos+"dateMade' >"+    
                 "</div>"+
                  "<div class='delear"+archivos+"'>"+ 
                      "Borrar"+    
                 "</div>"+
                "</div>"
                       
                
                );
            creatArchivos();
        
        
        archivos++;
    });
    
}

function creatArchivos()
{
    $(".delear"+archivos+"").hover(function()
        {
            $(this).css({"background-color":"red","width":"50px","text-align":"center"});
            $(this).animate({"width":"200px"});
            if(looking(".delear"+archivos+"[style='width:200px']"))
            {
                
            }
             
        });
        $(".delear"+archivos+"").mouseleave(function()
        {
            $(this).css({"background-color":"transparent","width":"50px","text-align":"left"});
        });
        
        $(".delear"+archivos+"").click(function()
        {
              $(".addar"+archivos+"").remove();
               archivos--;
        });
}