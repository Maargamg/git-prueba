interface Grupos {
  nombre: string;
  año: number;
  activo: boolean;
  genero: string;
}
const estilonombre = "font-weight: bold; font-size: 16px; background-color: green; color: white";

const grupoA: Grupos = {
  nombre: "The Beatles",
  año: 1960,
  activo: true,
  genero: "Pop Rock",
};

const grupoB: Grupos = {
  nombre: "Queen",
  año: 1970,
  activo: false,
  genero: "Rock",
};

const grupoC: Grupos = {
  nombre: "AC DC",
  año: 1973,
  activo: true,
  genero: "Hard Rock",
};

const grupoD: Grupos = {
  nombre: "Ludwig van Beethoven",
  año: 1770,
  activo: false,
  genero: "Clásica",
};

const grupoE: Grupos = {
  nombre: "The Rolling Stones",
  año: 1962,
  activo: true,
  genero: "Rock",
};
console.log(grupoA, grupoB, grupoC, grupoD, grupoE);
console.log({"%cThe beatels"}, estilonombre);
console.log({"%cQueen"}, estilonombre);
console.log({"%cAC DC"} , estilonombre);
console.log({"%cLudwig van Beethoven"}, estilonombre);
console.log({"%cThe Rolling Stones"} ,estilonombre );

/* Hola solo me sale en verde el grupo the Beatels, no se porque. Tmbien he intentado hacerlo simplificado
poniendolo todo en el mismo console.log ejemplo: console.log({"%cThe beatels"},{"%cQueen"},{"%cAC DC"}, estilonombre); Pero 
tampoco me sale.*/