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
comb ='ETANOl'
document.getElementById("status").src="imagens/etanol.png"
 }

 else{
/*falso*/ document.getElementById("status").src="imagens/gasolina.png"
comb ='GASOLINA'
 }

msg.innerHTML= `É MAIS VANTAJOSO USAR: <strong><u>${comb}</u></strong>.`
}
function resetar() {
    document.getElementById("status").src="imagens/neutro.png"
    msg.innerHTML=``
}
