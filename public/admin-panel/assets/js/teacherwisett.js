var pk = document.querySelector("#pkchecked");
var kk = document.querySelector("#kkchecked");
var ki = document.querySelector("#kichecked");
var js = document.querySelector("#jschecked");
var hk = document.querySelector("#hkchecked");
var sk = document.querySelector("#skchecked");
var nk = document.querySelector("nkchecked");
var fyic = document.querySelector("#fyicchecked");
var tyc= document.querySelector("#tycchecked");
var label = document.querySelector("#show");
function Timetable(){
if(pk.checked == true  || kk.checked == true || ki.checked == true || js.checked == true || hk.checked == true || sk.checked == true||nk.checked == true)
{
	label.style.display="block";
	// tyc.style.display="block";
}
else
{
	label.style.display="none";
	// tyc.style.display="none";
}
}
function checking()
{

}