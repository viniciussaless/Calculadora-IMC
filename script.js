function limpo(){
   document.location.reload()
}
function clicar(){
   var altura =  document.getElementById("altura")
   var peso = document.getElementById("peso")
   var res = document.getElementById("resultado")
   var type = document.getElementsByName("type")
   var ideal = document.getElementById("ideal")

   
   var n1 = Number(peso.value)
   var n2 = Number(altura.value)
   var n3 = n1 / (n2*n2)   
   var total = n3.toFixed(3);

   if(peso.value == "" || altura.value == "" || type[0].checked == false && type[1].checked == false)
   {
      window.alert("ERRO! PREENCHA TODOS OS CAMPOS!")
      document.location.reload()
   }
   else{
      if(type[1].checked && n2 < 1.45)
      {
         ideal.innerHTML = "Como você selecionou o género FEMININO, por favor insira uma altura igual ou superior a 1.45m"
      }
      else if(type[1].checked && n2 == 1.45){
         ideal.innerHTML = "De acordo com a sua altura seu peso ideal é de 37,8Kg a 52,5Kg"
      }
      else if(type[1].checked && n2 > 1.45 && n2 <= 1.47){
         ideal.innerHTML = "De acordo com a sua altura seu peso ideal é de 38,8Kg a 54.0Kg"
      }
      else if(type[1].checked && n2 > 1.47 && n2 <= 1.49){
         ideal.innerHTML = "De acordo com a sua altura seu peso ideal é de 39.9Kg a 55,5Kg"
      }
      else if(type[1].checked && n2 > 1.49 && n2 <= 1.51){
         ideal.innerHTML = "De acordo com a sua altura seu peso ideal é de 41.0Kg a 57.0Kg"
      }
      else if(type[1].checked && n2 > 1.51 && n2 <= 1.53){
         ideal.innerHTML = "De acordo com a sua altura seu peso ideal é de 42.1Kg a 58,5Kg"
      }
      else if(type[1].checked && n2 > 1.53 && n2 <= 1.55){
         ideal.innerHTML = "De acordo com a sua altura seu peso ideal é de 43.3Kg a 60.0Kg"
      }
      else if(type[1].checked && n2 > 1.55 && n2 <= 1.57){
         ideal.innerHTML = "De acordo com a sua altura seu peso ideal é de 44.4Kg a 61.6Kg"
      }
      else if(type[1].checked && n2 > 1.57 && n2 <= 1.59){
         ideal.innerHTML = "De acordo com a sua altura seu peso ideal é de 45.5Kg a 63.2Kg"
      }
      else if(type[1].checked && n2 > 1.59 && n2 <= 1.61){
         ideal.innerHTML = "De acordo com a sua altura seu peso ideal é de 46.7Kg a 64.8Kg"
      }
      else if(type[1].checked && n2 > 1.61 && n2 <= 1.63){
         ideal.innerHTML = "De acordo com a sua altura seu peso ideal é de 47.8Kg a 66.4Kg"
      }
      else if(type[1].checked && n2 > 1.63 && n2 <= 1.65){
         ideal.innerHTML = "De acordo com a sua altura seu peso ideal é de 49.0Kg a 68.0Kg"
      }
      else if(type[1].checked && n2 > 1.65 && n2 <= 1.67){
         ideal.innerHTML = "De acordo com a sua altura seu peso ideal é de 50.2Kg a 69.7Kg"
      }
      else if(type[1].checked && n2 > 1.67 && n2 <= 1.69){
         ideal.innerHTML = "De acordo com a sua altura seu peso ideal é de 51.4Kg a 71.4Kg"
      }
      else if(type[1].checked && n2 > 1.69 && n2 <= 1.71){
         ideal.innerHTML = "De acordo com a sua altura seu peso ideal é de 52.6Kg a 73.1Kg"
      }
      else if(type[1].checked && n2 > 1.71 && n2 <= 1.73){
         ideal.innerHTML = "De acordo com a sua altura seu peso ideal é de 53.9Kg a 74.8Kg"
      }
      else if(type[1].checked && n2 > 1.73 && n2 <= 1.75){
         ideal.innerHTML = "De acordo com a sua altura seu peso ideal é de 55.1Kg a 78.3Kg"
      }
      else if(type[1].checked && n2 > 1.75 && n2 <= 1.77){
         ideal.innerHTML = "De acordo com a sua altura seu peso ideal é de 57.7Kg a 80.1Kg"
      }
      else if(type[1].checked && n2 > 1.77 && n2 <= 1.79){
         ideal.innerHTML = "De acordo com a sua altura seu peso ideal é de 59.0Kg a 80.1Kg"
      }
      else if(type[1].checked && n2 > 1.79 && n2 <= 1.81){
         ideal.innerHTML = "De acordo com a sua altura seu peso ideal é de 60.3Kg a 83.7Kg"
      }
      else if(type[1].checked && n2 > 1.81 && n2 <= 1.83){
         ideal.innerHTML = "De acordo com a sua altura seu peso ideal é de 61.6Kg a 85.5Kg"
      }
      else if(type[1].checked && n2 > 1.83 && n2 <= 1.85){
         ideal.innerHTML = "De acordo com a sua altura seu peso ideal é de 63.0Kg a 87.1Kg"
      }
      else if(type[1].checked && n2 > 1.85 && n2 <= 1.87){
         ideal.innerHTML = "De acordo com a sua altura seu peso ideal é de 64.3Kg a 89.3Kg"
      }
      else if(type[1].checked && n2 > 1.87 && n2 <= 1.91){
         ideal.innerHTML = "De acordo com a sua altura seu peso ideal é de 65.7Kg a 91.2Kg"
      }

      if(type[0].checked && n2 < 1.37)
      {
         ideal.innerHTML = "Como você selecionou o género MASCULINO, por favor insira uma altura igual ou superior a 1.37m"
      }
      if(type[0].checked && n2 == 1.37)
      {
         ideal.innerHTML = "De acordo com a sua altura seu peso ideal é de 29Kg a 35Kg"
      }
      else if(type[0].checked && n2 > 1.37 && n2 <= 1.40)
      {
         ideal.innerHTML = "De acordo com a sua altura seu peso ideal é de 31Kg a 38Kg"
      }
      else if(type[0].checked && n2 > 1.40 && n2 <= 1.42)
      {
         ideal.innerHTML = "De acordo com a sua altura seu peso ideal é de 34Kg a 41Kg"
      }else if(type[0].checked && n2 > 1.42 && n2 <= 1.45)
      {
         ideal.innerHTML = "De acordo com a sua altura seu peso ideal é de 36Kg a 44Kg"
      }else if(type[0].checked && n2 > 1.45 && n2 <= 1.47)
      {
         ideal.innerHTML = "De acordo com a sua altura seu peso ideal é de 39Kg a 47Kg"
      }else if(type[0].checked && n2 > 1.47 && n2 <= 1.50)
      {
         ideal.innerHTML = "De acordo com a sua altura seu peso ideal é de 41Kg a 50Kg"
      }else if(type[0].checked && n2 > 1.50 && n2 <= 1.52)
      {
         ideal.innerHTML = "De acordo com a sua altura seu peso ideal é de 43Kg a 53Kg"
      }else if(type[0].checked && n2 > 1.52 && n2 <= 1.55)
      {
         ideal.innerHTML = "De acordo com a sua altura seu peso ideal é de 46Kg a 56Kg"
      }else if(type[0].checked && n2 > 1.55 && n2 <= 1.57)
      {
         ideal.innerHTML = "De acordo com a sua altura seu peso ideal é de 48Kg a 59Kg"
      }else if(type[0].checked && n2 > 1.57 && n2 <= 1.60)
      {
         ideal.innerHTML = "De acordo com a sua altura seu peso ideal é de 51Kg a 62Kg"
      }else if(type[0].checked && n2 > 1.60 && n2 <= 1.62)
      {
         ideal.innerHTML = "De acordo com a sua altura seu peso ideal é de 53Kg a 65Kg"
      }else if(type[0].checked && n2 > 1.62 && n2 <= 1.65)
      {
         ideal.innerHTML = "De acordo com a sua altura seu peso ideal é de 55Kg a 68Kg"
      }else if(type[0].checked && n2 > 1.65 && n2 <= 1.68)
      {
         ideal.innerHTML = "De acordo com a sua altura seu peso ideal é de 58Kg a 71Kg"
      }else if(type[0].checked && n2 > 1.68 && n2 <= 1.70)
      {
         ideal.innerHTML = "De acordo com a sua altura seu peso ideal é de 60Kg a 74Kg"
      }else if(type[0].checked && n2 > 1.70 && n2 <= 1.73)
      {
         ideal.innerHTML = "De acordo com a sua altura seu peso ideal é de 63Kg a 67Kg"
      }else if(type[0].checked && n2 > 1.73 && n2 <= 1.75)
      {
         ideal.innerHTML = "De acordo com a sua altura seu peso ideal é de 65Kg a 80Kg"
      }else if(type[0].checked && n2 > 1.75 && n2 <= 1.78)
      {
         ideal.innerHTML = "De acordo com a sua altura seu peso ideal é de 68Kg a 83Kg"
      }else if(type[0].checked && n2 > 1.78 && n2 <= 1.80)
      {
         ideal.innerHTML = "De acordo com a sua altura seu peso ideal é de 70Kg a 86Kg"
      }else if(type[0].checked && n2 > 1.80 && n2 <= 1.83)
      {
         ideal.innerHTML = "De acordo com a sua altura seu peso ideal é de 73Kg a 89Kg"
      }else if(type[0].checked && n2 > 1.83 && n2 <= 1.85)
      {
         ideal.innerHTML = "De acordo com a sua altura seu peso ideal é de 75Kg a 92Kg"
      }else if(type[0].checked && n2 > 1.85 && n2 <= 1.88)
      {
         ideal.innerHTML = "De acordo com a sua altura seu peso ideal é de 78Kg a 95Kg"
      }else if(type[0].checked && n2 > 1.88 && n2 <= 1.91)
      {
         ideal.innerHTML = "De acordo com a sua altura seu peso ideal é de 80Kg a 98Kg"
      }else if(type[0].checked && n2 > 1.91 && n2 <= 1.93)
      {
         ideal.innerHTML = "De acordo com a sua altura seu peso ideal é de 83Kg a 101Kg"
      }else if(type[0].checked && n2 > 1.93 && n2 <= 1.96)
      {
         ideal.innerHTML = "De acordo com a sua altura seu peso ideal é de 85Kg a 104Kg"
      }else if(type[0].checked && n2 > 1.96 && n2 <= 1.98)
      {
         ideal.innerHTML = "De acordo com a sua altura seu peso ideal é de 88Kg a 107Kg"
      }else if(type[0].checked && n2 > 1.98 && n2 <= 2.01)
      {
         ideal.innerHTML = "De acordo com a sua altura seu peso ideal é de 90Kg a 110Kg"
      }else if(type[0].checked && n2 > 2.01 && n2 <= 2.03)
      {
         ideal.innerHTML = "De acordo com a sua altura seu peso ideal é de 92Kg a 113Kg"
      }
      

      if(total < 18.5){
         res.innerHTML = `Seu IMC foi ${total} e a sua classificação é MAGREZA!`
      }
      else if(total >= 18.5 && total <= 24.9){
         res.innerHTML = `Seu IMC foi ${total} e a sua classificação é NORMAL!`
      }else if(total >= 25.0 && total <= 29.9){
         res.innerHTML = `Seu IMC foi ${total} e a sua classificação é SOBREPESO!`
      }else if(total >= 30.0 && total <= 39.9){
         res.innerHTML = `Seu IMC foi ${total} e a sua classificação é OBESIDADE!`
      }else if (total > 39.9){
         res.innerHTML = `Seu IMC foi ${total} e a sua classificação é OBESIDADE GRAVE!`
      }
      else{
         window.location.reload()
      }
   }
}