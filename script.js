function clicar(){
   var altura =  document.getElementById("altura")
   var peso = document.getElementById("peso")
   var res = document.getElementById("resultado")

   var n1 = Number(peso.value)
   var n2 = Number(altura.value)
   var n3 = n1 / (n2*n2)
   var total = n3.toFixed(3);

   if(total < 18.5 ){
      res.innerHTML = `Seu IMC foi ${total} e a sua classificação é MAGREZA!`
   }
   else if(total >= 18.5 && total <= 24.9){
      res.innerHTML = `Seu IMC foi ${total} e a sua classificação é NORMAL!`
   }else if(total >= 25.0 && total <= 29.9){
      res.innerHTML = `Seu IMC foi ${total} e a sua classificação é SOBREPESO!`
   }else if(total >= 30.0 && total <= 39.9){
      res.innerHTML = `Seu IMC foi ${total} e a sua classificação é OBESIDADE!`
   }else{
      res.innerHTML = `Seu IMC foi ${total} e a sua classificação é OBESIDADE GRAVE!`
   }
}