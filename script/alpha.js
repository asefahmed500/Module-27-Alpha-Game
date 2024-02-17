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

    if(playerPressed === 'Escape'){
        gameOver();
    }

    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expextedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed , expextedAlphabet);

    // check 

    if(playerPressed === expextedAlphabet){
        console.log('you get a point ');
        // console.log('you have correctly pressed ', expextedAlphabet)
        
        
        const currentScore = getTextElementValueByID('current-score');
        const updatedScore = currentScore + 1 ;
        setTextElementValueByID('current-score' , updatedScore);

        // .................................................
        // update the score 
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoretext = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoretext)
        // console.log(currentScore);


        // // new score 

        // const newScore = currentScore + 1 ;

        // // show the updated score 

        // currentScoreElement.innerText = newScore;

        // start a new game 
        removeBackroundColorByID(expextedAlphabet);
        continuegame();

    }

    else {
        console.log('ypu missed . you lost a life')

        const currentLife = getTextElementValueByID('current-life');
        const updatedLife = currentLife - 1 ;
        setTextElementValueByID('current-life' , updatedLife);

        if(updatedLife === 0){
            gameOver();
        }


        // ......................................................
        // // step  1 : get the current life number 
        // const CurrentLifeElement = document.getElementById('current-life');
        // const CurrentLifeText = CurrentLifeElement.innerText;
        // const currentLife = parseInt(CurrentLifeText);
        // // step 2 : Reduce the life event 

        // const newLife = currentLife - 1;


        // // step 3 : display the updated life event 
        // CurrentLifeElement.innerText = newLife;
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
    // hide everything show only the playground 
    hiddenElementByID('home');
    showElementByID('Playground');
    hiddenElementByID('final-score');

    // reset score and life
    setTextElementValueByID('current-life' , 5);
    setTextElementValueByID('current-score' , 0);
    continuegame();
}


function gameOver(){
    hiddenElementByID('Playground');
    showElementByID('final-score');

    // update final score 
    // 1.get the final score 

    const lastScore = getTextElementValueByID('current-score');
    console.log(lastScore);

    setTextElementValueByID('last-score' , lastScore);

    // clear the selected Alphabet 
    
    const CurrentAlphabet = getElementTextByID('current-alphabet');
    removeBackroundColorByID(CurrentAlphabet);



}





