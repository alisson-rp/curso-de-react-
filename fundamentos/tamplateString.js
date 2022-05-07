const nome = 'Rebeca';
const concatenacao = 'Olá ' + nome + '!';
const template = `
    Olá
    ${nome}!`;
console.log(concatenacao, template);

// expressões...
console.log(`1 + 1 = ${1 + 1}`);

// CONVERTE PARA LETRA MAIUSCULA
const up = texto => texto.toUpperCase();
console.log(`Ei... ${up('cuidado')}!`);