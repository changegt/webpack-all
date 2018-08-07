import './css/test.css'

alert(0)
if(document.addEventListener){
	document.addEventListener('DOMContentLoaded', function(){
		alert(1);
	},false)
}