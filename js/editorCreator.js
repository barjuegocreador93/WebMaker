/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var objets=0;
var select="";




function selectObj(elem,name)
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
            
            
            
        });
        
}


function wmob()
{
    
    for(var i=0;looking(".wmob"+i+"");i++)
    {
        selectObj(".wmob"+i+"",".wmob");
        
    }
}


$(document).keydown(function(tecla){
    if (tecla.keyCode === 46 &&(select!=="")) {
       var s;
       var x=1;
       if(select!="#tablero")
       {
           $(select).addClass("descartado");
           $(select+" *").addClass("descartado");
           select=""; 
       }
       
       
       
       
       
    }
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
    $(".bot").click(function()
    {
        alert("La hoja de trabajo slecciona a: "+select);
    });
    
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
        }
        $(this).css({
            'heigth':'20px'
        });
    });    
    
    $('#header').click(function()
    {
        if(select!=="")
        {
            $(select).append("<header class='wmob"+objets+"'></header>");
            var a=new wmob();
            objets++;
        }
        
    });    
    $('#article').click(function()
    {
         if(select!=="")
        {
        $(select).append("<article class='wmob"+objets+"'></article>");
        var a=new wmob();
        objets++;
    }
    });    
    $('#section').click(function()
    {
         if(select!=="")
        {
        $(select).append("<section class='wmob"+objets+"'></section>");
         var a=new wmob();
        objets++;
    }
    });
});