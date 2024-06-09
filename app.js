let firstUser = `<div class="border-[4px] border-cyan-400 rounded-[100px] h-[120px] w-[120px] "></div>`
let secondUser = `<div class="border-[4px] border-cyan-400 h-[120px] w-[120px] "></div>`
let value = true;
let firstUserText = document.querySelector('.firstUserText');
firstUserText.classList.add('!text-sky-400');
let popupMain = document.querySelector('.winnerPopup');


function userClick(e) {
    let userBox = e.closest('.userBox');
    let firstUserText = document.querySelector('.firstUserText');
    let secondUserText = document.querySelector('.secondUserText');
    let firstUserCount = document.querySelector('.firstUserCount');
    let secondUserCount = document.querySelector('.secondUserCount');
    let popupMain = document.querySelector('.winnerPopup');
    let winnerPopupDiv = document.querySelector('.winnerPopupDiv');
    let winnerPopupText = document.querySelector('.winnerPopupText');


    let l1 = document.querySelector('.l1');
    let l2 = document.querySelector('.l2');
    let l3 = document.querySelector('.l3');
    let l4 = document.querySelector('.l4');
    let l5 = document.querySelector('.l5');
    let l6 = document.querySelector('.l6');
    let l7 = document.querySelector('.l7');
    let l8 = document.querySelector('.l8');
    let l9 = document.querySelector('.l9');


    if (value == true) {
        userBox.innerHTML = firstUser;
        secondUserText.classList.add('!text-sky-400');
        firstUserText.classList.remove('!text-sky-400');
        value = false;



        if (l1.innerHTML == firstUser && l2.innerHTML == firstUser && l3.innerHTML == firstUser) {
            winnerPopupDiv.innerHTML = firstUser;
            winnerPopupText.innerHTML = 'User 1 is winner!'
            popupMain.classList.add('!top-[50%]');
        }else if (l1.innerHTML == firstUser && l4.innerHTML == firstUser && l7.innerHTML == firstUser) {
            winnerPopupDiv.innerHTML = firstUser;
            winnerPopupText.innerHTML = 'User 1 is winner!'
            popupMain.classList.add('!top-[50%]');
        }else if (l7.innerHTML == firstUser && l8.innerHTML == firstUser && l9.innerHTML == firstUser) {
            winnerPopupDiv.innerHTML = firstUser;
            winnerPopupText.innerHTML = 'User 1 is winner!'
            popupMain.classList.add('!top-[50%]');
        }else if (l3.innerHTML == firstUser && l6.innerHTML == firstUser && l9.innerHTML == firstUser) {
            winnerPopupDiv.innerHTML = firstUser;
            winnerPopupText.innerHTML = 'User 1 is winner!'
            popupMain.classList.add('!top-[50%]');
        }else if (l1.innerHTML == firstUser && l5.innerHTML == firstUser && l9.innerHTML == firstUser) {
            winnerPopupDiv.innerHTML = firstUser;
            winnerPopupText.innerHTML = 'User 1 is winner!'
            popupMain.classList.add('!top-[50%]');
        }else if (l3.innerHTML == firstUser && l5.innerHTML == firstUser && l7.innerHTML == firstUser) {
            winnerPopupDiv.innerHTML = firstUser;
            winnerPopupText.innerHTML = 'User 1 is winner!'
            popupMain.classList.add('!top-[50%]');
        }else if (l2.innerHTML == firstUser && l5.innerHTML == firstUser && l8.innerHTML == firstUser) {
            winnerPopupDiv.innerHTML = firstUser;
            winnerPopupText.innerHTML = 'User 1 is winner!'
            popupMain.classList.add('!top-[50%]');
        }else if (l4.innerHTML == firstUser && l5.innerHTML == firstUser && l6.innerHTML == firstUser) {
            winnerPopupDiv.innerHTML = firstUser;
            winnerPopupText.innerHTML = 'User 1 is winner!'
            popupMain.classList.add('!top-[50%]');
        }



    }else{
        userBox.innerHTML = secondUser;
        secondUserText.classList.remove('!text-sky-400');
        firstUserText.classList.add('!text-sky-400');
        value = true;



        if (l1.innerHTML == secondUser && l2.innerHTML == secondUser && l3.innerHTML == secondUser) {
            winnerPopupDiv.innerHTML = secondUser;
            winnerPopupText.innerHTML = 'User 2 is winner!'
            popupMain.classList.add('!top-[50%]');
        }else if (l1.innerHTML == secondUser && l4.innerHTML == secondUser && l7.innerHTML == secondUser) {
            winnerPopupDiv.innerHTML = secondUser;
            winnerPopupText.innerHTML = 'User 2 is winner!'
            popupMain.classList.add('!top-[50%]');
        }else if (l7.innerHTML == secondUser && l8.innerHTML == secondUser && l9.innerHTML == secondUser) {
            winnerPopupDiv.innerHTML = secondUser;
            winnerPopupText.innerHTML = 'User 2 is winner!'
            popupMain.classList.add('!top-[50%]');
        }else if (l3.innerHTML == secondUser && l6.innerHTML == secondUser && l9.innerHTML == secondUser) {
            winnerPopupDiv.innerHTML = secondUser;
            winnerPopupText.innerHTML = 'User 2 is winner!'
            popupMain.classList.add('!top-[50%]');
        }else if (l1.innerHTML == secondUser && l5.innerHTML == secondUser && l9.innerHTML == secondUser) {
            winnerPopupDiv.innerHTML = secondUser;
            winnerPopupText.innerHTML = 'User 2 is winner!'
            popupMain.classList.add('!top-[50%]');
        }else if (l3.innerHTML == secondUser && l5.innerHTML == secondUser && l7.innerHTML == secondUser) {
            winnerPopupDiv.innerHTML = secondUser;
            winnerPopupText.innerHTML = 'User 2 is winner!'
            popupMain.classList.add('!top-[50%]');
        }else if (l2.innerHTML == secondUser && l5.innerHTML == secondUser && l8.innerHTML == secondUser) {
            winnerPopupDiv.innerHTML = secondUser;
            winnerPopupText.innerHTML = 'User 2 is winner!'
            popupMain.classList.add('!top-[50%]');
        }else if (l4.innerHTML == secondUser && l5.innerHTML == secondUser && l6.innerHTML == secondUser) {
            winnerPopupDiv.innerHTML = secondUser;
            winnerPopupText.innerHTML = 'User 2 is winner!'
            popupMain.classList.add('!top-[50%]');
        }
    }
}

function crossBtn() {
    popupMain.classList.add('!-top-[50%]');
    location.reload();
}