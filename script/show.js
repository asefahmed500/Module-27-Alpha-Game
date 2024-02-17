function hiddenElementByID(elementID) {
    const element = document.getElementById(elementID);
    element.classList.add('hidden')
}

function showElementByID(elementID) {
    const element = document.getElementById(elementID);
    element.classList.remove('hidden')
    
}


function setBackroundcolorbyId(elementID){
    const element = document.getElementById(elementID);
    element.classList.add('bg-orange-400');
}

function removeBackroundColorByID(elementID){
    const element = document.getElementById(elementID);
    element.classList.remove('bg-orange-400')
}

function getTextElementValueByID(elementID){
  const element = document.getElementById(elementID);
  const elementvalueText = element.innerText;
  const value = parseInt(elementvalueText);
  return value;
}

function setTextElementValueByID(elementID , value){
    const element = document.getElementById(elementID);
    element.innerText = value;
}

function getElementTextByID(elementID){
    const element = document.getElementById(elementID);
    const text = element.innerText;
    return text;
}

function getaRandomAlphabet() {
    // get alphabet
    const alphabetstring = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetstring.split('');

    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
    return alphabet;
}


















// function getaRandomAlphabet() {
//     // get alphabet
//     const alphabetstring = 'abcdefghijklmnopqrstuvwxyz';
//     const alphabets = alphabetstring.split('');

//     // get a random index between 0 to 25
//     const index = Math.floor(Math.random() * alphabets.length);

//     // retrieve the random alphabet
//     const alphabet = alphabets[index];
//     console.log(index, alphabet);

//     return alphabet;
// }
