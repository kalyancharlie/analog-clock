const degree = 6;
const hoursHand = document.getElementById('hr-hand');
const minutesHand = document.getElementById('min-hand');
const secondsHand = document.getElementById('sec-hand');

// Update Clock Hands Position
const updateClockHandsPosition = () => {
    const currentDate = new Date();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();

    const hoursAngle = hours * 30;
    const minutesAngle = minutes * degree;
    const secondsAngle = seconds * degree;

    hoursHand.style.transform = `rotateZ(${hoursAngle+(minutesAngle/12)}deg)`;
    minutesHand.style.transform = `rotateZ(${minutesAngle}deg)`;
    secondsHand.style.transform = `rotateZ(${secondsAngle}deg)`;
}

// Initialize Clock
const initializeClock = () => {
    setTimeout(() => {
        secondsHand.style.transition = 'none';
    }, 2000)
    setInterval(() => {
        updateClockHandsPosition()
    }, 1)
}

// Listener
document.addEventListener('DOMContentLoaded', initializeClock);