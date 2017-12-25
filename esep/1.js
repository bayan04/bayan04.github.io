function esep1() {
var a=0;
var b=0;
var y=document.getElementById('yy').value;
var x=0;
if (y>0) 
	{
		for (i=5;i<=16;i++) 
		{a=a+i;}
	}
if (y<=0)
	{
		for (i=2;i<=50;i++) 
		{b=i-1;}
	}
if (y>0) 
	{
		x=a;//126
		
	}else{ x=b; }//49
document.write(x); 
}
function esep2() {
var a=0;
for (i=1;i<=100;i++) 
		{a=i+2;}
	document.write( a);
}