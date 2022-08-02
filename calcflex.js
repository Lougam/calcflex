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
document.getElementById("status").src="etanol.png"
 }

 else{
/*falso*/ document.getElementById("status").src="gasolina.png"
comb ='GASOLINA'
 }

msg.style.textAlign = 'center'
msg.style.fontFamily = 'arial'
msg.style.fontStyle = 'bold'
msg.innerHTML= `É MAIS VANTAJOSO USAR: <strong><u>${comb}</u></strong>.`
}
function resetar() {
    document.getElementById("status").src="neutro.png"
}

