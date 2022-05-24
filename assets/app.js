//modal

var closeBtn = document.querySelector('.modal-container__content--close');
var modal =  document.querySelector('.modal');
var modalContainer = document.querySelector('.modal-container');
var modalContainerText = document.querySelector('.modal-container__text');

closeBtn.addEventListener('click',function(){
    modal.classList.remove('open');
})

modal.addEventListener('click',function(){
    modal.classList.remove('open');
})

modalContainer.addEventListener('click',function(event){
    event.stopImmediatePropagation();
})


// count 
var countNumber1 = 0 ;
var countNumber2 = 0 ;
var resetBtnall = document.querySelector('.resetAll-btn');

var count1 = document.querySelector('.wrapper__body');
var subtractBtn1 = document.querySelector('.wrapper__footer--subtract');
var resetBtn1 = document.querySelector('.wrapper__footer--reset');
var addBtn1 = document.querySelector('.wrapper__footer--add');

resetBtnall.addEventListener('click',function(){
    countNumber1 = 0;
    count1.innerText = countNumber1;
    countNumber2 = 0;
    count2.innerText = countNumber2;
})


subtractBtn1.addEventListener('click',function(){
     countNumber1--;
     count1.innerText = countNumber1;
})

resetBtn1.addEventListener('click',function(){
    countNumber1 = 0;
    count1.innerText = countNumber1;
})

addBtn1.addEventListener('click',function(){
    countNumber1++;
    if(countNumber1 == 20) {
        modal.classList.add('open');
    }
    count1.innerText = countNumber1;
})

var count2 = document.querySelector('.wrapper__body.player2');
var subtractBtn2 = document.querySelector('.wrapper__footer--subtract.player2');
var resetBtn2 = document.querySelector('.wrapper__footer--reset.player2');
var addBtn2 = document.querySelector('.wrapper__footer--add.player2');

subtractBtn2.addEventListener('click',function(){
     countNumber2--;
     count2.innerText = countNumber2;
})

resetBtn2.addEventListener('click',function(){
    countNumber2 = 0;
    count2.innerText = countNumber2;
})

addBtn2.addEventListener('click',function(){
    countNumber2++;
    if(countNumber2 == 20) {
        modalContainerText.innerText = 'PLAYER 2 IS WINNER' ;
        modal.classList.add('open');
    }
    count2.innerText = countNumber2;
})





