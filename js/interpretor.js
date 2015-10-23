



var proyectfile = [];//JSON
var htmlfiles = [];//JSON



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
       $("input[name='proyectName']").val("");
    });
    
    
    $(".crearfile").click(function()
    {
        var aux=-1;
        if(cajavacia.length !== 0)
        {
            aux=archivos;
            archivos=cajavacia[cajavacia.length-1];
        }
        $("#SaveProyect").attr("disabled","disabled");
        if($("input[name='proyectName']").val()!==""&&$("input[name='proyectName']").val()!==" ")
        {
        var date=new Date();
        var cont=" <div class='fnl"+(archivos+1)+"'><br><br>Acrhivo "+(archivos+1)+"</div>"+
                "<div class='addar"+archivos+" fscl"+(archivos+1)+"'><br><div >"+
                      "Nombre: <input type='text' name='arch"+archivos+"name' >"+
                 "<div>"+
                      "<input type='text' name='arch"+archivos+"url' value='"+$("input[name='proyectName']").val()+"/"+$("input[name='arch"+archivos+"name']").val()+archivos+".json"+"' style='display:none;'> "+   
                 "</div>"+
                 "<div>"+
                      "<input type='radio' id='css"+archivos+"' name='arch"+archivos+"type' value='CSS'> CSS<br>"+
                      "<input type='radio' id='html"+archivos+"' name='arch"+archivos+"type' value='HTML' checked> HTML<br>"+
                      "<input type='radio' id='js"+archivos+"' name='arch"+archivos+"type' value='JS'>  JS<br>"+
                 "</div>"+
                 "<div>"+ 
                      "<input type='day' name='arch"+archivos+"dateMade' value='"+date.getDay()+date.getMonth()+date.getFullYear()+"' style='display:none;' >"+    
                 "</div>"+
                  "<div class='delear"+archivos+"'>"+ 
                      "Borrar"+    
                 "</div>"+
                 "<div class='createfile"+archivos+" '>"+ 
                      "Guardar"+    
                 "</div><br><br>"+
                "</div>";
            if(aux===-1||archivos===0)$(".pfiles").append(cont);
            else $(cont).insertAfter(".fscl"+archivos+"");
                var files=new fast_appi(".fnl",".fscl");
                files.run();
                $(".fnl"+(archivos+1)+"").click();
                $(".fnl"+(archivos+1)+"").css("cursor","pointer");            
            eraseFiles(archivos);
            saveFile(archivos);
            if(aux!==-1)
            {
                archivos=aux;
                cajavacia.pop();
            }else
            archivos++;
        
        
        
        
    }else
             alert("Debe colocarle nombre al proyecto!");
    });
    saveNewProject();
    
}
var cajavacia=[];
function eraseFiles(actual)
{
    fileToSave[actual]=false;
    $(".delear"+archivos+"").hover(function()
        {
            $(this).css({"background-color":"red","width":"50px","text-align":"center"});
            $(this).animate({"width":"200px"});
            if(looking(".delear"+archivos+"[style='width:200px']"))
            {
                
            }
             
        });
        $(".delear"+archivos+"").css("cursor","pointer");
        $(".delear"+archivos+"").mouseleave(function()
        {
            $(this).css({"background-color":"transparent","width":"50px","text-align":"left"});
        });
        
        $(".delear"+archivos+"").click(function()
        {
              $(".addar"+actual+"").remove();
              $(".fnl"+(actual+1)+"").remove();
              cajavacia.push(actual);
              cajavacia.sort(function(a, b){return b-a});
              
        });
}
var fileToSave=[];

function saveFile(actual)
{
    $(".createfile"+actual+"").hover(function()
        {
            $(this).css({"background-color":"green","width":"50px","text-align":"center"});
            $(this).animate({"width":"200px"});
                        
        });
        
        $(".createfile"+actual+"").mouseleave(function()
        {
            $(this).css({"background-color":"transparent","width":"50px","text-align":"left"});
        });
    $(".createfile"+actual+"").css("cursor","pointer");
    $(".createfile"+actual+"").click(
    function()
    {
        var val=$("input[name='proyectName']").val()+"/"+$("input[name='arch"+actual+"name']").val()+".json";
        $("input[name='arch"+actual+"url']").val(val);      
        
         if($("input[name='arch"+actual+"name']").val()!==""&&$("input[name='arch"+actual+"name']").val()!==" "&&fileBool($("input[name='arch"+actual+"name']").val(),actual))
         {
                $(".fscl"+(actual+1)+"").hide();
                $(".fnl"+(actual+1)+"").fadeIn();
                fileToSave[actual]=true;
                for(var i=0;i<fileToSave.length;i++)
                {
                    if(!fileToSave[i])
                        return;
                }
                $("#SaveProyect").removeAttr("disabled");
         }else
             alert("Debe colocarle nombre al archivo!");
         
         
         
        
    }
            );
}



function fileBool(name,actual)
{
    for(var i=0;i<archivos;i++)
    {
        if(name===$("input[name='arch'"+i+"name']").val()&&i!==actual)
            return false;
    }
    return true;
}


function saveNewProject()
{
    $("#SaveProyect").click(function()
    {
        var proyecto={"name":"","autor":"","comentario":"","files":[]};
        var file={"name":"","url":"","type":"","dateMade":""};
        proyecto.name=$("input[name='proyectName']").val();
        proyecto.autor=$("input[name='proyectAutor']").val();
        proyecto.comentario=$("input[name='proyectComm']").val();
        
        for(var i=0;i<archivos;i++)
        {
            file.name=$("input[name='arch"+i+"name']").val();
            file.url=$("input[name='arch"+i+"url']").val();
            if(document.getElementById("css"+i+"").checked)
            {
                file.type="css";
            }else if(document.getElementById("html"+i+"").checked)
            {
                file.type="html";
            }else if(document.getElementById("js"+i+"").checked)
            {
                file.type="js";
            }
            file.dateMade=$("input[name='arch"+i+"dateMade']").val();
            proyecto.files.push(file);
        }
        proyectfile.Proyects.push(proyecto);   
        var json=JSON.stringify(proyectfile);
        $.post("../php/GuardarProyecto.php","proyects="+json,{},"json");
        
    });
}