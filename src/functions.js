// 1 - Crie a função ligarDesligar, que ligue e desligue um motor de um carro.

const ligarDesligar = (status) => {
  status === 'ligado' ? (status = 'desligado') : (status = 'ligado');
  console.log(`O motor está ${status}`);
  return status;
};

// 2 - Crie a função circleArea, que calcule a área de um círculo.

const circleArea = (raio) => {
  if (typeof raio !== 'number') {
    return `O parâmetro radius deve ser um número`;
  } else {
    return `Essa é a área do círculo: ${3.14 * (raio * raio)}`;
  }
};

// 3 - Crie a função longestWord, que receba uma frase como parâmetro e retorne a maior palavra da frase.

// Não modifique as linhas abaixo
module.exports = {
  ligarDesligar: typeof ligarDesligar === 'function' ? ligarDesligar : () => {},
  circleArea: typeof circleArea === 'function' ? circleArea : () => {},
  longestWord: typeof longestWord === 'function' ? longestWord : () => {},
};
