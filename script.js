alert("Bem vindo ao Mentalista. Tente advinhar o número secreto")
const button = document.querySelector("header button")
button.addEventListener("click", add)

function add() {
  var numeroSecreto = parseInt(Math.random() * 1001) + 1
  var x = 0
  var tentativas = 10

  while (chute != numeroSecreto) {
    tentativas = tentativas - 1
    var chute = prompt("Digite um número entre 1 e 1000 ou -1 para cancelar")

    if (chute == numeroSecreto) {
      alert("Acertou ✅")
    } else if (chute == -1) {
      break
    } else if (tentativas == x) {
      alert(
        "Que pena... você alcançou o número máximo de tentativas. Boa sorte na próxima!"
      )
      break
    } else if (chute == x) {
      alert("Erro. Por favor, insira um número maior do que 0.")
    } else if (chute > numeroSecreto) {
      alert("Errou... o número secreto é menor que " + chute)
      alert("Você tem " + tentativas + " tentativas")
    } else if (chute < numeroSecreto) {
      alert("Errou... o número secreto é maior que " + chute)
      alert("Você tem " + tentativas + " tentativas")
    }
  }
}
