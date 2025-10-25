function verificador(){
    var ano = new Date()
    var agora= ano.getFullYear()
    var dnaci = document.getElementById("inac").value;
    var idade =(agora-dnaci)
    document.getElementById("result").innerHTML=idade
    
    if(document.getElementById('macul').checked){
        var sexg='Homem'
    }
    if(document.getElementById('macul').checked){
        var gene='Homem'
        if(idade>0 && idade<=3){
            document.getElementById('imagem1').innerHTML=`<img src='imagens/bebe-menino.png' alt='bebe menino'>`
        }else if(idade>3 && idade <= 7){
            document.getElementById('imagem1').innerHTML=`<img src='imagens/criança-menino.png' alt='criança menino'>`
        }else if(idade>7 && idade<=15){
            document.getElementById('imagem1').innerHTML=`<img src='imagens/jovem-homem.png' alt='jovem homem'>`
        }else if(idade>15 && idade<=40){
            document.getElementById('imagem1').innerHTML=`<img src='imagens/homem.png' src='homem'>`   
        }else if(idade>40 && idade<=120){
            document.getElementById('imagem1').innerHTML=`<img src='imagens/homem-idoso.png' alt='homem idoso'>`
        }else if(idade>120 && dnaci!=0){
            document.getElementById('imagem1').innerHTML=`<img src='imagens/caveira.png' alt='caveira'>`
        }
        
    
    }else if(document.getElementById('femin').checked){
        var gene='Mulher'
        if(idade>0 && idade<=3){
            document.getElementById('imagem1').innerHTML=`<img src='imagens/bebe-menina.png' alt='bebe menina'>`
        }else if(idade>3 && idade <= 7){
            document.getElementById('imagem1').innerHTML=`<img src='imagens/criança-menina.png' alt='criança menina'>`
        }else if(idade>7 && idade<=15){
            document.getElementById('imagem1').innerHTML=`<img src='imagens/jovem-mulher.png' alt='jovem mulher'>`
        }else if(idade>15 && idade<=40){
            document.getElementById('imagem1').innerHTML=`<img src='imagens/mulher.png' alt='mulher'>`   
        }else if(idade>40 && idade<=120){
            document.getElementById('imagem1').innerHTML=`<img src='imagens/mulher-idosa.png' alt='mulher idosa'>`
        }else if(idade>120 && dnaci!=0){
            document.getElementById('imagem1').innerHTML=`<img src='imagens/caveira.png' alt=''>`
        }
    }
    if(dnaci>agora || dnaci==0){
        window.alert('Data invalida tente novamente')
        document.getElementById("result").innerHTML=`<span style='color:red;background:black;'>Data ivalida: Tente Novamente</span>`;
    }else{
        document.getElementById('result').innerHTML=`Detectado ${gene} de ${idade} anos`
    }
}