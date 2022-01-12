// permet de classer deux sous tableaux déjà triés dans un plus grand
function merge(leftParam, rightParam, counter) {
  const array = [];

  while (leftParam.length && rightParam.length) {
    counter.nbOp++;

    if (leftParam[0] < rightParam[0]) {
      min = leftParam.shift();
      //retire le 1er él du tableau et renvoie cet él
      array.push(min);
      //met dans array l'él min
    } else {
      min = rightParam.shift();
      array.push(min);
    }
  }

  // Récupère tous les él de array + les él restants de left et right pour en fair eun unique tableau
  return [...array, ...leftParam, ...rightParam];

  // if(left.length){
  //   left.map( (el) => {
  //     array.push(el);
  //   })
  // } else if(right.length){
  //   right.map( (el) => {
  //     array.push(el);
  //   })
  // }

  // return array;
}

//prend comme argument un tableau désordonné pour le trier
function mergeSort(array, counter) {
  //si le tableau est trop petit et condition de sortie (fct récursive)
  if (array.length < 2) {
    return array;
  }

  const half = array.length / 2;

  // coupe le array initial en 2 tableaux
  // modifie le contenu d'un tableau et renvoie un nouveau tableau
  // .splice(idx de début, nb d'él à supprimer)
  // si array initial est impair, left prendra moins d'él car half sera arrondi à l'inf
  const left = array.splice(0, half);

  //appel à la fonction merge pour rassembler tous les sous-tableaux une fois qu'ils seront triés triés
  return merge(mergeSort(left, counter), mergeSort(array, counter), counter);
}

// PERFORM
const fs = require("fs");
const fileName = process.argv[2];

try {
  const numberList = fs.readFileSync(fileName, "utf8").split(",").map(Number);
  const counter = { nbOp: 0 };
  const r = mergeSort(numberList, counter);

  console.log(counter);

  console.log(r);
} catch (error) {
  console.error(error.message);
}
