// Lista de heróis para testar com um laço de repetição
let herois = [
  { nome: "Carol", xp: 500 },
  { nome: "Mari", xp: 1500 },
  { nome: "Julia", xp: 7200 },
  { nome: "Mia", xp: 10500 }
];

for (let i = 0; i < herois.length; i++) {
  const { nome, xp } = herois[i];
  let nivel = "";

  if (xp < 1000) {
    nivel = "Ferro";
  } else if (xp <= 2000) {
    nivel = "Bronze";
  } else if (xp <= 5000) {
    nivel = "Prata";
  } else if (xp <= 7000) {
    nivel = "Ouro";
  } else if (xp <= 8000) {
    nivel = "Platina";
  } else if (xp <= 9000) {
    nivel = "Ascendente";
  } else if (xp <= 10000) {
    nivel = "Imortal";
  } else {
    nivel = "Radiante";
  }

  console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
}