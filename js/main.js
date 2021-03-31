let gameTitle = document.querySelector('.game-title')
let yourResult = document.querySelector('.you')
let computerResult = document.querySelector('.computer')
let yourGame = document.querySelector('.your-game')
let computerGame = document.querySelector('.computer-game')
let selectOption = document.querySelector('.select-option') 
let restart = document.querySelector('.restart')
let gamePhoto = document.querySelectorAll('.game-photo')
let test = document.querySelector('.test') 
let optArr = ["tosh","qaychi","qog'oz"]
let yourscore = 0
let compscore = 0

test.addEventListener('click',()=>{
    gamePhoto.forEach(value => {
        value.classList.add('animate__shakeY')
    }) 
    let random = Math.floor(Math.random()*3)
    let randomOption = optArr[random]
     
        setTimeout(()=>{
            score(selectOption.value, randomOption);
            yourGame.src = `./images/${selectOption.value}.png`
            computerGame.src = `./images/${randomOption}.png`
            gamePhoto.forEach(value => {
                value.classList.remove('animate__shakeY')
            }) 
        },1000)
        
       
})



restart.addEventListener('click', ()=>{
    yourResult.textContent = 0
    computerResult.textContent = 0
    yourscore = 0
    compscore = 0
    yourGame.src = './images/tosh.png'
    computerGame.src = './images/tosh.png'

}) 


function score(yourOption, computerOption){
    if (yourOption == 'tosh') {
        if(computerOption == 'qaychi'){
            gameTitle.textContent = 'Siz yutdingiz'
            yourscore++
            yourResult.textContent = yourscore
           
            
        }else if(computerOption == 'qog\'oz'){
            gameTitle.textContent = 'Siz yutqazdingiz'
            compscore++
            computerResult.textContent = compscore
            
        }else{
            gameTitle.textContent = 'Durrang natija'
            
        }
        }else if(yourOption == 'qog\'oz'){
            if(computerOption == 'qaychi'){
                gameTitle.textContent = 'Siz yutqazdingiz'
                compscore++
                computerResult.textContent = compscore
               
            }else if(computerOption == 'tosh'){
                gameTitle.textContent = 'Siz yutdingiz'
                yourscore++
                yourResult.textContent = yourscore
            }else{
                gameTitle.textContent = 'Durrang natija'
            } 
        }else{
            if(computerOption == 'tosh'){
                gameTitle.textContent = 'Siz yutqazdingiz'
                compscore++
                computerResult.textContent = compscore
               
            }else if(computerOption == 'qog\'oz'){
                gameTitle.textContent = 'Siz yutdingiz'
                yourscore++
                yourResult.textContent = yourscore
            }else{
                gameTitle.textContent = 'Durrang natija'
            } 
        } 
}





