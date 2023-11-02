// 1 - Crie a função ligarDesligar, que ligue e desligue um motor de um carro.

const ligarDesligar = (status) => {
  let result = status === 'ligado' ? (status = 'desligado') : (status = 'ligado');
  console.log(`O motor está ${status}`);
  return result;
};

// 2 - Crie a função circleArea, que calcule a área de um círculo.

const circleArea = (raio) => (typeof raio !== 'number'
  ? 'O parâmetro radius deve ser um número' : `Essa é a área do círculo: ${3.14 * (raio * raio)}`);

// 3 - Crie a função longestWord, que receba uma frase como parâmetro e retorne a maior palavra da frase.

function longestWord(frase) {
  const palavras = frase.split(' ');
  let maiorPalavra = '';
  for (let index = 0; index < palavras.length; index += 1) {
    if (palavras[index].length > maiorPalavra.length) {
      maiorPalavra = palavras[index];
    }
  }

  return maiorPalavra;
}

// Não modifique as linhas abaixo

module.exports = {
  ligarDesligar: typeof ligarDesligar === 'function' ? ligarDesligar : () => {},
  circleArea: typeof circleArea === 'function' ? circleArea : () => {},
  longestWord: typeof longestWord === 'function' ? longestWord : () => {},
};
