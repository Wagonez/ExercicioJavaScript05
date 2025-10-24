function verificador(){
    var ano = new Date()
    var agora= ano.getFullYear()
    var dnaci = document.getElementById("inac").value;
    var idade =(agora-dnaci)
    document.getElementById("result").innerHTML=idade
    if(dnaci>agora || dnaci==0){
        window.alert('Data invalida tente novamente')
        document.getElementById("result").innerHTML=`<span style='color:red;background:black;'>Data ivalida: Tente Novamente</span>`;
    }
}