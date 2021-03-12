const skin1 = document.querySelector('.card__img1');
const skin2 = document.querySelector('.card__img2'); 
const skin3 = document.querySelector('.card__img3'); 
const skin4 = document.querySelector('.card__img4'); 
const skin5 = document.querySelector('.card__img5'); 
const skin6 = document.querySelector('.card__img6'); 
const skin7 = document.querySelector('.card__img7'); 
const skin8 = document.querySelector('.card__img8'); 
const skin9 = document.querySelector('.card__img9'); 
const skin10 = document.querySelector('.card__img10'); 
const skin11 = document.querySelector('.card__img11'); 
const skin12 = document.querySelector('.card__img12'); 
const skin13 = document.querySelector('.card__img13'); 
const skin14 = document.querySelector('.card__img14'); 
const skin15 = document.querySelector('.card__img15'); 
const btn = document.querySelector('.btn1');
const result = document.querySelector('.result'),
      intro = document.querySelector('.intro'),
      resBtn = document.querySelector('.icon-parent'),
      btn2 = document.querySelector('.btn2'),
      btn3 = document.querySelector('.question'),
      cards = document.querySelector('.cards'),
      answer = document.querySelector('.answer');



var skins = [skin1, skin2, skin3, skin4, skin5, skin6, skin7, skin8, skin9, skin10, skin11, skin12, skin13, skin14, skin15];

function randomSkin(skins) {
    var rand = Math.floor(Math.random() * skins.length);
    return skins[rand];
}

var random = randomSkin(skins);


btn.addEventListener('click', function(){
    var img = document.createElement('img');
    img = random;
    img.style = `transform: translateX(-135px);
    margin-top: 80px;`;
    result.appendChild(img);
    intro.style.display = 'none';
    result.style.display = 'flex';
    resBtn.addEventListener('click', function(){
    location.reload();
    intro.style.display = 'flex';
    result.style.display = 'none';
    })
})

btn2.addEventListener('click', function(){
    var img = document.createElement('img');
    img = random;
    img.style = `transform: translateX(-135px);
    margin-top: 80px;`;
    result.appendChild(img);
    intro.style.display = 'none';
    result.style.display = 'flex';
    resBtn.addEventListener('click', function(){
    location.reload();
    intro.style.display = 'flex';
    result.style.display = 'none';
    })
})

btn3.addEventListener('click', function(){
    cards.style.display = 'none';
    answer.style.display = 'flex';
})

btn3.addEventListener('dblclick', function(){
    cards.style.display = 'flex';
    answer.style.display = 'none';
})