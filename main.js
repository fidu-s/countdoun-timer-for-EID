const day = document.getElementById('day');
const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');

function eidUlAdha() {
    let sec = 1000;
    let min = sec * 60;
    let hr = min * 60;
    let dy = hr * 24; 
    
    let countDown = new Date('march 31, 2025, 00:00:00').getTime();
    let today = new Date().getTime();
    let gap = countDown - today;

    let d = Math.floor(gap / (dy));
    let h = Math.floor(gap % (dy) / (hr));
    let m = Math.floor(gap % (hr) / (min));
    let s = Math.floor(gap % (min) / (sec));

    day.innerHTML = d;
    hour.innerHTML = h;
    minute.innerHTML = m;
    second.innerHTML = s;
}

setInterval(() => {
    eidUlAdha();
}, 1000)