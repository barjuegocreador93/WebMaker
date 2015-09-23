/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

objets=0;
select="";



function selectObj(elem,name)
{
    $(elem).click(function()
        {
            no=0;
            for(var i=0;looking(name+i+"");i++)
            {
                if(isJQ(name+i+"",":hover")&&!isJQ(elem,name+i+"")&&!isJQ(name+i+" "+elem,":hover"))
                {
                    no++;
                }
            }
            if(!no)select=elem;
            
        });
}


function wmob()
{
    
    for(var i=0;looking("#wmob"+i+"");i++)
    {
        selectObj("#wmob"+i+"","#wmob");
        
    }
}





$(document).ready(function(){
    $(".bot").click(function()
    {
        alert("La hoja de trabajo slecciona a: "+select);
    });
    
    $('#tablero').click(function()
    {
        no=0;
        for(var i=0;looking("#wmob"+i+"");i++)
        {
            if(isJQ("#wmob"+i+"",":hover"))
            {
                no++;
            }
        }
        if(!no)select='#tablero';
        $(this).css({
            'heigth':'20px'
        });
    });    
    
    $('#header').click(function()
    {
        $(select).append("<header id='wmob"+objets+"'></header>");
        var a=new wmob();
        objets++;
    });    
    $('#article').click(function()
    {
        $(select).append("<article id='wmob"+objets+"'></article>");
        var a=new wmob();
        objets++;
    });    
    $('#section').click(function()
    {
        $(select).append("<section id='wmob"+objets+"'></section>");
         var a=new wmob();
        objets++;
    });
});