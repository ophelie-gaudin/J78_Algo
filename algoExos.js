// EXO 1
const exo1 = (array, sum) => {
  let complex = 0;
  let found = false;

  for (let cur = 0; cur < array.length; cur++) {
    let next = 0;

    for (next = cur + 1; next <= array.length; next++) {
      let result = array[cur] + array[next];
      complex++;
      if (result === sum) {
        found = true;

        // return true;
      }
    }
  }

  if (found) {
    console.log(`Exo 1:` + true);
    console.log(`Complexité algo: ${complex} passages`);
  } else {
    console.log(`Exo 1:` + false);
    console.log(`Complexité algo: ${complex} passages`);
  }
  return found;
};

// return false;

// EXO 2
const exo2 = (buildings) => {
  if (!buildings.length) return 0;

  let nbBuildingSeeingTheSun = 0;

  for (let i = 0; i < buildings.length; i++) {
    let nbBuildingHidingSunset = 0;

    // SI DERNIER ELEMENT DU TABLEAU, JE VOIS FORCEMENT LE SOLEIL
    if (i === buildings.length - 1) {
      nbBuildingSeeingTheSun++;
    } else {
      // SINON, JE CONTROLE

      // JE PARCOURS LES BATIMENTS A MA DROITE
      for (let j = 0; j < buildings.length - 1; j++) {
        // SI LE BATIMENT QUE JE COMPARE EST A MA DROITE ET PLUS GRAND, JE LE NOTE
        if (j > i && buildings[i] <= buildings[j]) {
          nbBuildingHidingSunset++;
        }
      }

      // SI AUCUN BATIMENT NE ME CACHE LA VUE, JE PEUX VOIR LE SOLEIL
      if (nbBuildingHidingSunset === 0) {
        nbBuildingSeeingTheSun++;
      }
    }
  }

  return nbBuildingSeeingTheSun;
};

// EXO 3
const exo3 = (array, targetSum) => {
  if (!array.length) return false;

  const values = {
    3: true,
  };

  array.forEach((cur) => {
    // On ajoutes à l'objet les clefs correspondant aux valeurs recherchées
    values[targetSum - cur] = true;
  });

  return !!array.find((cur) => values[cur]);
};

// EXO 4
const exo4 = (buildings) => {
  if (!buildings.length) return 0;

  let maxFloor = 0;
  let maxIdx = 0;
  let count = 1;

  buildings.forEach((el, idx) => {
    if (el >= maxFloor) {
      maxFloor = el;
      maxIdx = idx;
    }
  });

  for (let i = maxIdx; i < buildings.length - 1; i++) {
    if (buildings[i] > buildings[i + 1]) {
      count++;
    }
  }

  return count;
};

// EXO 5
const exo5 = (array, targetSum) => {
  if (!array.length) return false;

  const values = {};

  return !!array.find((cur) => {
    // Si mon objet contient une clef correspond à la valeur que je cherche, c'est good
    if (values[cur]) return true;
    // Sinon, je stock la clef ["valeur soustraite que je cherche"] dans mon objet
    else values[targetSum - cur] = true;
  });
};

// EXO 6
const exo6 = (buildings) => {
  if (!buildings.length) return 0;

  let highestUntilNow = 0;

  return buildings.reverse().reduce((acc, cur) => {
    if (cur > highestUntilNow) {
      highestUntilNow = cur;
      return acc + 1;
    }

    return acc;
  }, 0);
};

// PERFORM

// *SUJET 1
const sumToFind = 13;
const inputSum = [10, 15, 3, 7];

// * SUJET 2
const inputBuildings = [3, 7, 8, 3, 6, 1];

console.log(exo1(inputSum, sumToFind));
// console.log(exo2(inputBuildings));
// console.log(exo3(inputSum, sumToFind));
// console.log(exo4(inputBuildings));
// console.log(exo5(inputSum, sumToFind));
// console.log(exo6(inputBuildings));

// const forEach = (array, iteratee) => {
//   for (let i = 0; i < array.length; i++) {
//     iteratee(array[i], i);
//   }
// };

// const find = (array, iteratee) => {
//   for (let i = 0; i < array.length; i++) {
//     if (iteratee(array[i], i)) {
//       return array[i];
//     }
//   }
// };

// const findIndex = (array, iteratee) => {
//   for (let i = 0; i < array.length; i++) {
//     if (iteratee(array[i], i)) {
//       return i;
//     }
//   }
// };

// const filter = (array, iteratee) => {
//   const res = [];

//   for (let i = 0; i < array.length; i++) {
//     if (iteratee(array[i], i)) {
//       res.push(array[i]);
//     }
//   }

//   return res;
// };

// const map = (array, iteratee) => {
//   const res = [];

//   for (let i = 0; i < array.length; i++) {
//     res.push(iteratee(array[i], i));
//   }

//   return res;
// };

// const reduce = (array, iteratee, accumulatorInitialtValue) => {
//   let accumulator = accumulatorInitialtValue;

//   for (let i = 0; i < array.length; i++) {
//     accumulator = iteratee(accumulator, array[i], i);
//   }

//   return accumulator;
// };

// filter([1,2,3], (i) => i % 2)
