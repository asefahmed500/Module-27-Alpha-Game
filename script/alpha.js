// function play(){

//     // step 1 

//     const homesection = document.getElementById('home');
//     homesection.classList.add('hidden');

//     // show the playground 
//     const playgroundsection = document.getElementById('Playground');
//     playgroundsection.classList.remove('hidden')
  
// }



function handKeyboardButtonPress(event){
    const playerPressed = event.key;
    console.log( 'player pressed',playerPressed)

    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expextedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed , expextedAlphabet);

    // check 

    if(playerPressed === expextedAlphabet){
        console.log('you get a point ');
        console.log('you have correctly pressed ', expextedAlphabet) 
        removeBackroundColorByID(expextedAlphabet);
        continuegame();

    }

    else {
        console.log('ypu missed . you lost a life')
    }
}

document.addEventListener('keyup',handKeyboardButtonPress )




function continuegame(){
    // generate a random alphabate 
    const alphabet = getaRandomAlphabet();
    // console.log('yuor alphabet ' , alphabet);

    // det a randomly generated alphabet 

    const CurentAlphabetElement = document.getElementById('current-alphabet');
    CurentAlphabetElement.innerText = alphabet;

    setBackroundcolorbyId(alphabet);

}

function play(){

    hiddenElementByID('home')
    showElementByID('Playground')
    continuegame()
}



