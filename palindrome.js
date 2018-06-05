//functions

//findPrimeNumbers returns all prime numbers above 10000 to max number
function findPrimeNumbers(max, savenumber) {
  var sieve = [2]
  var primes = []

  for (var number = 3; number < max; number+=2) {
    var isPrimeNumber = true
    for (var sieveNumber = 0; sieveNumber < sieve.length; sieveNumber++) {
      if (number%sieve[sieveNumber]==0){
        isPrimeNumber = false
        break;
      };
    };

    if (isPrimeNumber){
      sieve.push(number)
      if (number >= savenumber){
        primes.push(number)
      };
    };
  };

  return primes;
}

function getSaveNum(max) {
  var savenumber = 1;
  max = max.toString();

  for (var i = 0; i < max.length-1; i++) {
    savenumber = savenumber*10;
  }
  console.log(savenumber);
  return savenumber;
}

//checkingPalindrome checks if the number is a palindrome number
function checkingPalindrome(isPalindrome) {
  var flag = true;
  var front = 0;
  var back = isPalindrome.length-1
  while (front < back) {
    if (isPalindrome.charAt(front) != isPalindrome.charAt(back)) {
      flag = false;
      break;
    }
    front++;
    back--;
  };
  return flag;
}

//isPalindromeNumber checks if two multiplier primes gets palindrome number
//and returns the biggest palindrome number and its multipliers
function isPalindromeNumber(fiveDigitPrimeNumbers) {
  var isPalindrome = "0";
  var highestPalindrome = isPalindrome;
  var solution = "I can't find any palindrome";

  for(var i = 0; i < fiveDigitPrimeNumbers.length; i++) {
    for(var j = 0; j < fiveDigitPrimeNumbers.length; j++) {
      isPalindrome = (fiveDigitPrimeNumbers[i]*fiveDigitPrimeNumbers[j]).toString();

      if (checkingPalindrome(isPalindrome)){
         if(isPalindrome > highestPalindrome){
           highestPalindrome = isPalindrome;
           solution = {'highestPalindrome': Number(highestPalindrome),
                       'firstMultiplier': fiveDigitPrimeNumbers[i],
                       'secondMultiplier':fiveDigitPrimeNumbers[j]
                      }
         };
      };
    };
  }
 return solution;
}

function showResult(solution) {
  $('.result').text(solution['highestPalindrome'])
  $('.multi').text("first multiplier: " + solution['firstMultiplier'] + " | second multiplier: " + solution['secondMultiplier'])
}

//variables
window.onload = function () {
var button = $('.btn');
button.click(function() {
  var maximumNumber = Number($('.number').val());
  console.log(maximumNumber);
  var fiveDigitPrimeNumbers = findPrimeNumbers(maximumNumber, getSaveNum(maximumNumber));
  var solution = isPalindromeNumber(fiveDigitPrimeNumbers);
  showResult(solution);
})
}
