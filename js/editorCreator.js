/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var objets=0;
var select="";
var objArray=[];
var body={classes:[]};

function objetosMK(html,etiquetas)
{
    $('#'+html).click(function()
    {
         if(select!=="")
        {
        if(etiquetas===null)$(select).append("<"+html+" class='wmob"+objets+"'></"+html+">");
        else $(select).append("<"+html+" class='wmob"+objets+" '>");
        var a=new wmob();
        var obj={class:'.wmob'+objets+'',html:html,childof:select,classes:[]};
        objArray.push(obj);
        objets++;
    }
    });
}

function indiceObjeto(obj)
{
    for(var i=0;i<objets;i++)
     {
              if(".wmob"+i+""===obj)
              {
                  return i;
              }
     }
}

function selectObj(elem,name,num)
{
    $(elem).click(function()
        {
            no=0;
            $('#tablero').css("border-color","black");
            for(var i=0;looking(name+i+"");i++)
            {
                
                if(isJQ(name+i+"",":hover")&&!isJQ(elem,name+i+"")&&!isJQ(name+i+" "+elem,":hover"))
                {
                    no++;
                    
                }
                else
                {
                    $(name+i+"").css("border-color","transparent");
                    $(name+i+":empty").css("border-color","grey");
                    $(name+i+"").css("border-color","blue");      
                    
                }
            }
            if(!no)
            {
               select=elem;
               $(this).css("border-color","red");
            }
            
            $('#html_name').text(objArray[num].html);
            $('#html_class').text(objArray[num].classes);
            $("#html_class").next().fadeIn();
            
            
            
        });
        
}


function wmob()
{
    
    for(var i=0;looking(".wmob"+i+"");i++)
    {
        selectObj(".wmob"+i+"",".wmob",i);
        
    }
}


$(document).keydown(function(tecla){
    //tecla Supr:Borrar elemento
    if (tecla.keyCode === 46 &&(select!=="")) {
       var s;
       var x=1;
       if(select!=="#tablero")
       {
           $(select).addClass("descartado");
           $(select+" *").addClass("descartado");
           select=""; 
       }      
    }
    
    //tecla s:Guardar
    if (tecla.keyCode === 83 &&select!=='#tablero') {
       descartados=0;
       for(var i=0;looking(".wmob"+i+"")&&x;i++)
       {
           if(isJQ(".wmob"+i+"",".descartado"))
           {
               descartados++;
           }
       }
       if(descartados===objets)
       {
           $("#tablero").empty();
           objets=0;
       }       
    }
});


$(document).ready(function(){
    
    
    $('#tablero').click(function()
    {
        no=0;
        for(var i=0;looking(".wmob"+i+"");i++)
        {
            if(isJQ(".wmob"+i+"",":hover"))
            {
                no++;
            }
            else
            {
                $(".wmob"+i+"").css("border-color","transparent");
                $(".wmob"+i+":empty").css("border-color","grey");
                $(".wmob"+i+":hover").css("border-color","blue");
            }
        }
        if(!no){
            select='#tablero';
            $(this).css("border-color","red");
            $('#html_name').text("body");
            $('#html_class').text("");
            $("#html_class").next().fadeIn();
        }
        $(this).css({
            'heigth':'20px'
        });
        
        
    });   
    //Objetos html a crear:
    objetosMK("header");  
    objetosMK("article");   
    objetosMK("section");    
    
    for(var i=1;i<=6;i++)
    objetosMK("h"+i+"");
    
    

    
    
    
    
    
    $("#html_class").next().hide();
    
    $("#html_finish").click(function()
    {
      var classes =$("input[name='html_class']").val();
      if(classes!==""){
      if(isJQ(select,"."+classes)&&classes!=select)
      {
          var is=indiceObjeto(select);
          
          for(var i=0;i<objArray[is].classes.length;i++)
          if(objArray[is].classes[i]===classes)
            {
               delete     objArray[is].classes[i]; 
            }
          $(select).remove(classes);
      }
      else{
          var is=indiceObjeto(select);
          
          objArray[is].classes.push(classes);
          $(select).addClass(classes);
      }
       }
      var a=$("input[name='html_text']").val();
      $(select).append(a);
      
      
    });
    
    $("input[name='html_texter").click(function(){
        $(select).empty();
    });
    
    
});

