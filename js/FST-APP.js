/// <reference path="typings/jquery/jquery.d.ts"/>


//creado por Camilo Barbosa
function isJQ(html,html2)
{
	return $(html).is(html2);
}
function isReady(html)
{	
	return isJQ(html,":visible");	
}

function looking(html)
{
    return isReady(html)||isJQ(html,":not(:visible)");
}



//id activ(#) + class scla(#)
function actv(id)
{
	this.name="activ_";
	this.scla="scla_";
	this.txt=0;	
	this.levl=0;	
	this.nsca=0;	
	this.id=id;
	this.pres=0;
	this.run=function(Titulos_bool)	
	{
		var name=this.name;
		var scla=this.scla;
		var id=this.id;						
		$("."+name+id+"").click(function()
		{
								
			for(i=1;isReady("."+scla+i+"")||isJQ("."+scla+i+"",":not(:visible)");i++)
			{
				if(id===i)
				{
					if(isJQ("."+name+id+"",".activ_togg"))
					{
						$("."+scla+id+"").slideToggle();					
					}
					else
					{
						$("."+name+id+"").hide();
						$("."+scla+id+"").slideDown();
					}
					
				}
				else
				{
					$("."+name+i+"").slideDown();			
					$("."+scla+i+"").slideUp();
					for(var j=1;isReady("."+name+i+"_"+j+"")||isJQ("."+name+i+"_"+j+"",":not(:visible)");j++)
					{
						$("."+name+i+"_"+j+"").hide();
						$("."+scla+i+"_"+j+"").hide();
					}	
				}
				
			}
			for(i=1;isReady("."+name+id+"_"+i+"")||isJQ("."+name+id+"_"+i+"",":not(:visible)");i++)	
			{
				$("."+name+id+"_"+i+"").slideDown();
			}
			$("."+scla+id+"_off").slideUp();		
				
		});		
		this.print();
		
		var tit = "."+name+id+".getText";
		var bool=1;
		for(var i=1;i<=6;i++)
			{
				if(isJQ("."+this.scla+this.id+"",".h_"+i+""))
				{					
					$("."+this.scla+this.id+"").filter(".h_"+i+"").prepend("<h"+i+">"+$(tit).text()+"</h"+i+">");
					
				}
				
				$("."+this.scla+this.id+" .h_"+i+"").not("."+this.scla+this.id+"  .h_"+i+" ~ * *").prepend("<h"+i+">"+$(tit).text()+"</h"+i+">");
					
				
				
			}
			
		$("."+name+id+".addText").prepend($(tit).text());
					
			
	};	
	this.print=function()
	{
		$("button").css("cursor","pointer");
		
		if(this.pres)
		{
			var name_1=this.name, id_1=this.id;
			for( var i=1;isReady("."+name_1+id_1+"_"+i+"")||isJQ("."+name_1+id_1+"_"+i+"",":not(:visible)");i++)	
			{
				$("."+name_1+id_1+"_"+i+"").slideDown();				
			}			
			$("."+name_1+id_1+"").hide();	
		}		
		else 
		{
			$("."+this.name+this.id+""&&this.levl===1).slideDown();			
			$("."+this.scla+this.id+"").hide();
			var name=this.name, id=this.id;
			for( var i=1;isReady("."+name+id+"_"+i+"")||isJQ("."+name+id+"_"+i+"",":not(:visible)");i++)	
			{
				$("."+name+id+"_"+i+"").hide();				
			}	
		}
					
	};
}