/*author Andre Lougam*/

var etanol,gasolina;
var comb = ''
var msg = document.getElementById('msg')

function calcular(){

 etanol= parseFloat(frmFlex.txtEtanol.value.replace(",","."));

 gasolina= parseFloat(frmFlex.txtGasolina.value.replace(",","."));
 

 if(etanol < 0.74 * gasolina)
 {
/*verdadeiro*/
comb ='Etanol'
document.getElementById("status").src="imagens/etanol.png"
document.getElementById("msg").style.color = "green";
 }

 else{
/*falso*/ document.getElementById("status").src="imagens/gasolina.png"
comb ='Gasolina'
document.getElementById("msg").style.color = "red";
 }

msg.innerHTML= `É mais vantajoso usar: <strong><u>${comb}</u></strong>.`
document.getElementById("msg").style.textAlign = "center";
document.getElementById("msg").style.fontFamily = "arial black";
document.getElementById("msg").style.fontWeight = "bolder";
}
function resetar() {
    document.getElementById("status").src="imagens/neutro.png"
    msg.innerHTML=``
    
}
