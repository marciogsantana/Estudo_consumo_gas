 /*
  set the test file to deploy
  avascript function:
  1- iterate over the array and return the length of the largest index (done)
  2- for all indices smaller than the largest index (length) padding with zeros on the left (goal has same size of indices) done
  3- convert points to integers
  4- return the modified array
 
  contract testing functions

 1- pass as a parameter the array returned by the javascript function
*/
 
 function getLargestSize(array_image) {
    let biggerSize = 0;
    for (let i = 0; i < array_image.length; i++) {
      let size = array_image[i].toString().length;
      if (size > biggerSize) {
        biggerSize = size;
      }
    }
    return biggerSize;
  }  


let array_image = [0.02334529347717762, 4555]
let biggerSize = getLargestSize(array_image);
console.log("The largest index size of the array and" + " " + biggerSize); // print larger size
   
  
 // printing the largest value by index

 function getPrintLargeSize(array_image) {
    let largestSize_prints = 0;
    for (let i = 0; i < array_image.length; i++) {
      let size = array_image[i].toString().length;
      if (size > largestSize_prints) {
        largestSize_prints = i;
      }
    }
    return array_image[largestSize_prints];
  }  

  let print_value = getPrintLargeSize(array_image)
  console.log("the highest value per index is " + " " + print_value); // prints the largest number for simple checking

  
  function adjustSizeStrings(array_image) {
    // Identifies the largest size
    let biggerSize = getLargestSize(array_image);
    
    // Loops through the array and adds leading zeros
    // Pad with leading zeros
  for (let i = 0; i < array_image.length; i++) {
    let value = array_image[i].toString();
    let dotIndex = value.indexOf('.');
    let size = value.length;
    
    if (size < biggerSize) {
      let zeros = '0'.repeat(biggerSize - size);
      value = value.substring(0, dotIndex + 1) + zeros + value.substring(dotIndex + 1);
      array_image[i] = value;
    }
  }
  
   return array_image;
  
    
  }

  let array_zeros_adjusted = adjustSizeStrings(array_image);
  console.log("adjusted array")
  console.log(array_zeros_adjusted);

  // verifying the function, I will use the first 10 positions of the original array and compare

  // original array position           position after adding leading zeros   

  // 0.02334529347717762              0.000002334529347717762                  
  // 0.01080632209777832              0.000001080632209777832
  // 0.00035488465800881386           0.000035488465800881386
  // 0.03478061780333519              0.000003478061780333519
  // 0.01682504266500473              0.000001682504266500473
  // 0.041610922664403915             0.000041610922664403915
  // -0.01717483438551426             -0.00001717483438551426
  // -0.023928895592689514            -0.00023928895592689514
  // -0.03305535763502121             -0.00003305535763502121
  // -0.0022988934069871902           -0.00022988934069871902
  

 // function to convert taking into account 18 each decimal

function convertToIntegers(array) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
      let value = array[i] * 10 ** 18;
      value = Math.round(value);
      newArray.push(value);
    }
    return newArray;
  }

 let array_decimal_integers = convertToIntegers(array_zeros_adjusted)
 console.log("array using conversion with 18 decimal places")
 console.log(array_decimal_integers)

 // function to generate a csv from array of integers

 const fs = require("fs");

function generateCSVFile(array) {
  const csvContent = array.join(",") + "\n";
  fs.writeFile("myData.csv", csvContent, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("CSV file has been saved.");
  });
}

generateCSVFile(array_decimal_integers);
