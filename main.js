// array1

// function getLevel2(n)
// {
//     let arrayNatijasi = [];

//     for( let j = 1;  j <= n ; j++)
//     {
//         let level2 = Math.pow(2, j);

//         arrayNatijasi.push(level2);

//     }
//         return arrayNatijasi;

// }
// let n = 5;

// let natija = getLevel2(n);

// console.log(natija);

// ----------------------------------------------------------------------------------------------------------------------------------

// array2

// function arrayToplami (n , A , B)
// {
//     let arrayNatijasi = [A, B];

//     for(let j = 2 ; j < n ; j++)
//     {
//         let keyingiElement = arrayNatijasi[ j - 1] + arrayNatijasi[ j - 2];

//         arrayNatijasi.push(keyingiElement);
//     }
//     console.log(arrayNatijasi);
// }

// let n = 5;
// let A = 2;
// let B = 3;

// arrayToplami(n, A, B);

// ----------------------------------------------------------------------------------------------------------------------------------

// array3

// function arrayniTeskarilash(arr) {

//     let teskariArray = arr.reverse();
  
//     console.log(teskariArray);
//   }
  
//   let qiymatKiritish = [1, 2, 3, 4, 5];

//   arrayniTeskarilash(qiymatKiritish);
  

// ----------------------------------------------------------------------------------------------------------------------------------
  
// array4

// function indexToqElementlar(arr) {

//     let toqIndexlar = [];
//     let toqElementlar = [];
//     let toqSonlarniSanovchi = 0;

//     for (let j = 1; j < arr.length; j += 2)
//      {
//       toqIndexlar.push(j);
//       toqElementlar.push(arr[j]);
//       toqSonlarniSanovchi++;
//     }

//     console.log("Natija: ", toqElementlar.join(" "));
//     console.log("Toq sonlar  soni = ", toqSonlarniSanovchi);
//   }

//   let qiymatKiritish = [4, 5, 7, 8, 6, 9];
//   indexToqElementlar(qiymatKiritish);
  

// ----------------------------------------------------------------------------------------------------------------------------------

// array5

// function indexToqElementlar(arr) {

//     let juftIndexlar = [];
//     let juftelementlar = [];
//     let toqIndexlar = [];
//     let toqElementlar = [];
  
//     for (let j = 0; j < arr.length; j += 2) {
//       juftIndexlar.push(j);
//       juftelementlar.push(arr[j]);
//     }

//     for (let j = arr.length - 1; j >= 1; j -= 2) {
//       toqIndexlar.push(j);
//       toqElementlar.push(arr[j]);
//     }
  
//     console.log("Massiv elementlar: ", arr.join(" "));
//     console.log("Natija: ", juftelementlar.concat(toqElementlar).join(" "));
//   }
  
//   let qiymatKiritish = [4, 5, 8, 7, 6, 9];
//   indexToqElementlar(qiymatKiritish);
  
// ----------------------------------------------------------------------------------------------------------------------------------


// array6

// function indexToqElementlar(arr) {

//     let arrayNatijasi = [];
//     for (let j = 0; j < arr.length; j += 2) {
//       arrayNatijasi.push(arr[j]);
//     }
//     console.log(arrayNatijasi.join("0"));
  
//   }
//   let qiymatKiritish = [1, 2, 4,5,6];
//   indexToqElementlar(qiymatKiritish);
  
// ----------------------------------------------------------------------------------------------------------------------------------

// array7,8,9,10]

// ----------------------------------------------------------------------------------------------------------------------------------

// array11

// function rangeOutSum(arr, K, L) {
//     if (K < 0 || L >= arr.length || K > L) {
//       console.log("Invalid range");
//       return;
//     }
  
//     let som = 0;
  
//     for (let j = 0; j < arr.length; j++) {
//       if (j < K || j > L) {
//         som += arr[j];
//       }
//     }
//     return som;
//   }

//   let qiymatKiritish = [1, 9, 14, 4, 5, 45, 25, 9];
//   let K = 2;
//   let L = 4;
  
//   let natija = rangeOutSum(qiymatKiritish, K, L);
//   console.log(natija);
  
// ----------------------------------------------------------------------------------------------------------------------------------

// array12

// function truFolsgaAjratish(arr) {
//     let togrimassiv = [];
//     let notogrimassiv = [];
  
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j]) {
//         togrimassiv.push(arr[j]);
//       } else {
//         notogrimassiv.push(arr[j]);
//       }
//     }
  
//     console.log("True: ", togrimassiv);
//     console.log("False: ", notogrimassiv);
//   }
  
//   let qiymatKiritish = [10, false, "", "Abdulaziz", null];
//   truFolsgaAjratish(qiymatKiritish);
  
// ----------------------------------------------------------------------------------------------------------------------------------

// array13

// function juftElementlar(arr) {
//     let minjuftelement = Infinity;
  
//     for (let j = 0; j < arr.length; j += 2) {
//       if (arr[j] < minjuftelement) {
//         minjuftelement = arr[j];
//       }
//     }
  
//     return minjuftelement !== Infinity ? minjuftelement : undefined;
//   }
//   let qiymatKiritish = [5, 10, 8, 15, 2];
//   let natija = juftElementlar(qiymatKiritish);
//   console.log(natija);
  
// ----------------------------------------------------------------------------------------------------------------------------------

// array14

// function engKattaJuft(arr) {
//     let engKattaElement = -Infinity;
  
//     for (let j = 1; j < arr.length; j += 2) {
//       if (arr[j] > engKattaElement) {
//         engKattaElement = arr[j];
//       }
//     }
    
//     return engKattaElement !== -Infinity ? engKattaElement : undefined;
//   }
  
//   let qiymatKiritish = [];
//   let natija = engKattaJuft(qiymatKiritish);
//   console.log(natija);
  

// ----------------------------------------------------------------------------------------------------------------------------------

// array 15

// function localmaximun(arr) {

//     if (arr.length < 3) {

//       return "Massivda lokal maksimum yo'q";
//     }
  
//     for (let j = arr.length - 1; j >= 2; j--) {
//       if (arr[j] > arr[j - 1] && arr[j] > arr[j - 2]) {

//         return j;
//       }
//     }
  
//     return "Lokal maksimum topilmadi";
//   }
  
//   let array = [2, 3, 1, 7, 7, 8, 4];
//   let natija = localmaximun(array);
//   console.log(natija); 
 

// ----------------------------------------------------------------------------------------------------------------------------------


// array16

// function engYaqininiTopish(arr, R) {
//     if (arr.length === 0) {
//       return "Massiv bo'sh";
//     }
  
//     let engYaqini = arr[0];
  
//     for (let j = 1; j < arr.length; j++) {
//       if (Math.abs(arr[j] - R) < Math.abs(engYaqini - R)) {
//         engYaqini = arr[j];
//       }
//     }
  
//     return engYaqini;
//   }
  
 
//   let array = [2, 7, 1, 4, 9, 5];
//   let R = 6;
//   let result = engYaqininiTopish(array, R);
//   console.log(result);
  
// ----------------------------------------------------------------------------------------------------------------------------------

// array18

// function ikkitaBirXiliniTopish(arr) {
//     let indexx = [];
  
//     for (let i = 0; i < arr.length - 1; i++) {
//       let xozirgiIndex = arr.indexOf(arr[i], i + 1);
  
//       while (xozirgiIndex !== -1) {
//         indexx.push([i, xozirgiIndex]);
//         xozirgiIndex = arr.indexOf(arr[i], xozirgiIndex + 1);
//       }
//     }
  
//     return indexx;
//   }
  
//   let array = [4,5,6,7,8,9,6,10];
//   let natija = ikkitaBirXiliniTopish(array);
//   console.log(natija);
  
// ----------------------------------------------------------------------------------------------------------------------------------
// array19

// function engKopQaytarilganQiymatniTopish(arr) {
//     if (arr.length === 0) {
//       return "Massiv bo'sh";
//     }
  
//     let engKopQaytarilganQiymat;
//     let maksimalSon = 0;
  
//     for (let i = 0; i < arr.length; i++) {
//       let hozirgiQiymat = arr[i];
//       let hisob = 0;
  
//       for (let j = 0; j < arr.length; j++) {
//         if (arr[j] === hozirgiQiymat) {
//           hisob++;
//         }
//       }
  
//       if (hisob > maksimalSon) {
//         maksimalSon = hisob;
//         engKopQaytarilganQiymat = hozirgiQiymat;
//       }
//     }
  
//     return {
//       qiymat: engKopQaytarilganQiymat,
//       hisob: maksimalSon
//     };
//   }
  

//   let array = [2, 5, 1, 5,47,54,47,74,74,74,54, 8, 4, 1];
//   let natija = engKopQaytarilganQiymatniTopish(array);
//   console.log(natija);

// ----------------------------------------------------------------------------------------------------------------------------------

// array20

// function avabarrayYaratish(arr) {
//     let b = [];
  
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] % 2 === 0) {
//         b.push(arr[i]);
//       }
//     }
  
//     return {
//       length: b.length,
//       elements: b
//     };
//   }
  
//   let arrayA = [1, 26, 7, 8, 9, 10];
//   let Bnatija = avabarrayYaratish(arrayA);
//   console.log("B massivining uzunligi:", Bnatija.length);
//   console.log("B massivi elementlari:", Bnatija.elements);

// ----------------------------------------------------------------------------------------------------------------------------------
// array21

// function ArrayK(arr, k) {
//     for (let i = 0; i < arr.length; i++) {
//       arr[i] += k;
//     }
  
//     return arr;
//   }
  
//   let arrayA = [1, 2, 3, 4, 5];
//   let k = 3;
//   let natija = ArrayK(arrayA, k);
//   console.log("Natija:", natija);
  
// ----------------------------------------------------------------------------------------------------------------------------------
  
// array22

// function yarminiAlmashtirish(arr) {
//     if (arr.length % 2 === 0) {
//       const halfLength = arr.length / 2;
      
//       for (let i = 0; i < halfLength; i++) {
//         let temp = arr[i];
//         arr[i] = arr[i + halfLength];
//         arr[i + halfLength] = temp;
//       }
  
//       return arr;
//     } else {
//       return "Massiv juft sonli emas";
//     }
//   }
  
//   let array = [1, 2, 3, 4, 5, 6];
//   let natija = yarminiAlmashtirish(array);
//   console.log(natija);
  

// ----------------------------------------------------------------------------------------------------------------------------------

// array23


// function arrayniAlmashtirish(arr) {
//     let boshlanish = 0;
//     let tugashi = arr.length - 1;
  
//     while (boshlanish < tugashi) {
//       let temp = arr[boshlanish];
//       arr[boshlanish] = arr[tugashi];
//       arr[tugashi] = temp;
  
//       boshlanish++;
//       tugashi--;
//     }
  
//     return arr;
//   }
  
//   let array = [1, 2, 3, 4, 5];
//   let natija = arrayniAlmashtirish(array);
//   console.log(natija); 

// ----------------------------------------------------------------------------------------------------------------------------------
// array29

// function birXilVaqtdaElementOlish(arr) {
//     let natija = [];
//     let sanash = {};
  
//     for (let i = 0; i < arr.length; i++) {
//       let currentElement = arr[i];
  
//       if (!sanash[currentElement]) {
//         sanash[currentElement] = 1;
//       } else {
//         sanash[currentElement]++;
//       }
//     }
  
//     for (let key in sanash) {
//       if (sanash[key] === 1) {
//         natija.push(parseInt(key)); 
//       }
//     }
  
//     return natija;
//   }
  
//   let array = [1, 5, 6, 1, 5, 7, 2];
//   let natija = birXilVaqtdaElementOlish(array);
//   console.log(natija); 
  
  
// ----------------------------------------------------------------------------------------------------------------------------------
  
// array30

// function barchaElementlarniQidirish(arr, k) {
//     let index = [];
  
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] === k) {
//         index.push(i);
//       }
//     }
  
//     return index;
//   }
  
//   let array = [1, 5, 3, 2, 5, 7, 2, 8, 5];
//   let k = 5;
//   let natija = barchaElementlarniQidirish(array, k);
//   console.log(natija); 