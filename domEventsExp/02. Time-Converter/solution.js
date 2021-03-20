function attachEventsListeners() {
    const days = document.getElementById('days');
    const hours = document.getElementById('hours');
    const minutes = document.getElementById('minutes')
    const seconds = document.getElementById('seconds')
    
    const daysBtn = document.getElementById('daysBtn');
    const hourBtn = document.getElementById('hoursBtn');
    const minutesBtn = document.getElementById('minutesBtn');
    const secondBtn = document.getElementById('secondsBtn');


    daysBtn.addEventListener('click', ()=> {
        let day = days.value;
        hours.value = day * 24;
        minutes.value = day * 1440;
        seconds.value = day * 86400;
    });

    hourBtn.addEventListener('click', () => {
        let hour = hours.value;
        days.value = hour / 24;
        minutes.value = hour * 60;
        seconds.value = hour * 60 * 60;
    });

    minutesBtn.addEventListener('click', () => {
        let min = minutes.value;
        days.value = min / 60 / 24;
        hours.value = min / 60;
        seconds.value = min * 60;
    });

    secondBtn.addEventListener('click', () => {
        let sec = seconds.value;
        days.value = sec / 60 / 60 / 24;
        hours.value = sec / 60 / 60;
        minutes.value = sec / 60;
    });

}