function soma (num1, num2){
return num1 + num2

}console.log(soma(10, 29))


function saudar (){
  const name = "Junior"

  console.log(`Ola ${name} como estamos hje?`)
}
saudar();

function primo (numero){
  

    for(let div = numero -1 ; div >= 2 ; div--){
     if(numero % div === 0){
      console.log("Nao e primo")
      return
     }
    }
    console.log("primo")
}
primo(43)