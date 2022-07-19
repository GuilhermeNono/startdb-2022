class Forca {

  constructor(palavraForca) {
    this.palavraForca = palavraForca.split("");
    this.vidas = 6;
    this.letrasChutadas = [];
    this.acertos = new Array(palavraForca.length).fill("_");
  }

  chutar(letra) {

    if(letra.length > 1 || letra.length <= 0) return

    let isLetterExistInArray = this.palavraForca.includes(letra);

    if(this.letrasChutadas.includes(letra)) return

    this.letrasChutadas.push(letra)

    if(!isLetterExistInArray) return this.perderVida();

    for(let i = 0; i < this.palavraForca.length;i++){
      if(this.palavraForca[i].includes(letra)){
        this.acertos[i] = letra;
      }
    }

   }

  buscarEstado() { 
    if(this.vidas === 0) return "perdeu"
    if(this.vidas > 0 && this.validarVitoria()) return "ganhou"
    return "aguardando chute";
   } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
      return {
          letrasChutadas: this.letrasChutadas, // Deve conter todas as letras chutadas
          vidas: this.vidas, // Quantidade de vidas restantes
          palavra: this.acertos, // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
      }
  }

  validarVitoria() {
    const palavraObjetivo = JSON.stringify(this.palavraForca)
    const palavraAcertos = JSON.stringify(this.acertos)

    return palavraObjetivo === palavraAcertos
  }

  perderVida(){
    this.vidas--
  }
}

module.exports = Forca;
