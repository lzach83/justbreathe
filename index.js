const container = document.getElementById('container');
const text = document.getElementById('text');
const h1 = document.querySelector('h1');

const totalTime = 7500;
const breatheTime = (totalTime /5) *2;
const holdTime = totalTime/5;


breathAnimation();

function breathAnimation() {
    text.innerText = 'Breathe In';
    container.className = 'container grow'
    h1.innerText = 'Relax'

    setTimeout(() => {
        text.innerText = 'Hold';

        setTimeout(()=> {
            h1.innerText = 'You got this!';
            text.innerText = 'Breathe out';
            container.className = 'container shrink'
        }, holdTime)
    }, breatheTime)


};

setInterval(breathAnimation, totalTime);



